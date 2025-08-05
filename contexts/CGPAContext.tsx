"use client";
import React, { useState, createContext, useContext, useReducer, useEffect, Dispatch, ReactNode } from "react";
import {
  calculateSGPA,
  calculateCGPA,
  calculateSemesterCredits,
  calculateTotalCredits,
  saveToStorage,
  loadFromStorage,
} from "@/lib/utils";



interface CourseGrade {
  id: number;
  deptCode: string;
  courseCode: string;
  courseName: string;
  credits: number;
  grade: string;
  gradePoints: number;
  isDuplicate?: boolean;
}


interface SemesterData {
  semesterCode: string;
  courses: CourseGrade[];
}


interface CGPAState {
  semesters: Record<string, SemesterData>;
  currentSemester: string;


  sgpa: number;
  cgpa: number;
  currentSemesterCredits: number;
  totalCredits: number;
}


type CGPAAction =
  | { type: "SET_CURRENT_SEMESTER"; payload: string }
  | {
      type: "ADD_COURSE";
      payload: { semesterCode: string; course: CourseGrade };
    }
  | {
      type: "UPDATE_COURSE";
      payload: { semesterCode: string; course: CourseGrade };
    }
  | {
      type: "DELETE_COURSE";
      payload: { semesterCode: string; courseId: number };
    }
  | { type: "UPDATE_COURSE_GLOBAL"; payload: CourseGrade } // NEW
  | { type: "LOAD_FROM_STORAGE"; payload: Partial<CGPAState> }
  | { type: "RECALCULATE" };

const initialState: CGPAState = {
  semesters: {},
  currentSemester: "sem1",
  sgpa: 0,
  cgpa: 0,
  currentSemesterCredits: 0,
  totalCredits: 0,
};

const recalc = (draft: CGPAState): CGPAState => ({
  ...draft,
  sgpa: calculateSGPA(draft.semesters[draft.currentSemester]?.courses || []),
  cgpa: calculateCGPA(draft.semesters),
  currentSemesterCredits: calculateSemesterCredits(draft.semesters[draft.currentSemester]?.courses || []),
  totalCredits: calculateTotalCredits(draft.semesters),
});

const cgpaReducer = (state: CGPAState, action: CGPAAction): CGPAState => {
  switch (action.type) {
    case "SET_CURRENT_SEMESTER": {
      return recalc({ ...state, currentSemester: action.payload });
    }
    case "ADD_COURSE": {
      const { semesterCode, course } = action.payload;
      const courses = [...(state.semesters[semesterCode]?.courses || []), course];
      const semesters = { ...state.semesters, [semesterCode]: { semesterCode, courses } };
      return recalc({ ...state, semesters });
    }
    case "UPDATE_COURSE": {
      const { semesterCode, course } = action.payload;
      const courses = (state.semesters[semesterCode]?.courses || []).map((c) =>
        c.id === course.id ? course : c
      );
      const semesters = { ...state.semesters, [semesterCode]: { semesterCode, courses } };
      return recalc({ ...state, semesters });
    }
    case "UPDATE_COURSE_GLOBAL": {
      const updated = action.payload;
      const semesters = { ...state.semesters };
      for (const sem of Object.values(semesters)) {
        const idx = sem.courses.findIndex((c) => c.id === updated.id);
        if (idx !== -1) {
          sem.courses[idx] = updated;
          break;
        }
      }
      return recalc({ ...state, semesters });
    }
    case "DELETE_COURSE": {
      const { semesterCode, courseId } = action.payload;
      const courses = (state.semesters[semesterCode]?.courses || []).filter((c) => c.id !== courseId);
      const semesters = { ...state.semesters, [semesterCode]: { semesterCode, courses } };
      return recalc({ ...state, semesters });
    }
    case "LOAD_FROM_STORAGE": {
      // Hard REPLACE with loaded data to avoid stale in-memory state
      const loaded = {
        semesters: action.payload.semesters || {},
        currentSemester: action.payload.currentSemester || "sem1",
        sgpa: 0,
        cgpa: 0,
        currentSemesterCredits: 0,
        totalCredits: 0,
      };
      return recalc(loaded);
    }
    case "RECALCULATE":
      return recalc(state);
    default:
      return state;
  }
};

interface CGPAContextShape {
  state: CGPAState;
  dispatch: Dispatch<CGPAAction>;
  updateCourseGlobal: (course: CourseGrade) => void;
}

const CGPAContext = createContext<CGPAContextShape | null>(null);

export const CGPAProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cgpaReducer, initialState);
  const [ready, setReady] = useState(false);

  // Load from storage on first mount
  useEffect(() => {
    const saved = loadFromStorage("cgpa-data", {});
    if (Object.keys(saved).length) {
      dispatch({ type: "LOAD_FROM_STORAGE", payload: saved });
    }
    setReady(true);
  }, []);

  // Save on state change
  useEffect(() => {
    if (ready) {
      const dataToSave = {
        semesters: state.semesters,
        currentSemester: state.currentSemester,
      };
      saveToStorage("cgpa-data", dataToSave);
    }
  }, [state.semesters, state.currentSemester, ready]);

  const updateCourseGlobal = (course: CourseGrade) => {
    dispatch({ type: "UPDATE_COURSE_GLOBAL", payload: course });
  };

  return (
    <CGPAContext.Provider value={{ state, dispatch, updateCourseGlobal }}>
      {children}
    </CGPAContext.Provider>
  );
};

export const useCGPA = () => {
  const ctx = useContext(CGPAContext);
  if (!ctx) throw new Error("useCGPA must be used within CGPAProvider");
  return ctx;
};
