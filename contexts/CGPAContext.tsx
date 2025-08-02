"use client";

import React, {
  useState,
  createContext,
  useContext,
  useReducer,
  useEffect,
  Dispatch,
} from "react";

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
  theme: "light" | "dark" | "system";

  sgpa: number;
  cgpa: number;
  currentSemesterCredits: number;
  totalCredits: number;
}

type CGPAAction =
  | { type: "SET_CURRENT_SEMESTER"; payload: string }
  | { type: "SET_THEME"; payload: "light" | "dark" | "system" }
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
  theme: "system",
  sgpa: 0,
  cgpa: 0,
  currentSemesterCredits: 0,
  totalCredits: 0,
};

const applyTheme = (selected: "light" | "dark" | "system") => {
  if (typeof window === "undefined") return;

  const root = document.documentElement;
  if (selected === "dark") root.classList.add("dark");
  else if (selected === "light") root.classList.remove("dark");
  else {
    const preferDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    preferDark ? root.classList.add("dark") : root.classList.remove("dark");
  }
};

const recalc = (draft: CGPAState): CGPAState => ({
  ...draft,
  sgpa: calculateSGPA(draft.semesters[draft.currentSemester]?.courses || []),
  cgpa: calculateCGPA(draft.semesters),
  currentSemesterCredits: calculateSemesterCredits(
    draft.semesters[draft.currentSemester]?.courses || []
  ),
  totalCredits: calculateTotalCredits(draft.semesters),
});

const cgpaReducer = (state: CGPAState, action: CGPAAction): CGPAState => {
  switch (action.type) {
    case "SET_CURRENT_SEMESTER": {
      const next = { ...state, currentSemester: action.payload };
      return recalc(next);
    }

    case "SET_THEME": {
      applyTheme(action.payload);
      return { ...state, theme: action.payload };
    }

    case "ADD_COURSE": {
      const { semesterCode, course } = action.payload;
      const courses = [
        ...(state.semesters[semesterCode]?.courses || []),
        course,
      ];
      const semesters = {
        ...state.semesters,
        [semesterCode]: { semesterCode, courses },
      };
      return recalc({ ...state, semesters });
    }

    case "UPDATE_COURSE": {
      const { semesterCode, course } = action.payload;
      const courses = (state.semesters[semesterCode]?.courses || []).map((c) =>
        c.id === course.id ? course : c
      );
      const semesters = {
        ...state.semesters,
        [semesterCode]: { semesterCode, courses },
      };
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
      const courses = (state.semesters[semesterCode]?.courses || []).filter(
        (c) => c.id !== courseId
      );
      const semesters = {
        ...state.semesters,
        [semesterCode]: { semesterCode, courses },
      };
      return recalc({ ...state, semesters });
    }

    case "LOAD_FROM_STORAGE": {
      // Only merge the essential persisted data, ignore computed values
      const loaded = {
        ...initialState, // Start with clean initial state
        semesters: action.payload.semesters || {},
        currentSemester: action.payload.currentSemester || "sem1",
        theme: action.payload.theme || "system",
      };
      applyTheme(loaded.theme);
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

export const CGPAProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cgpaReducer, initialState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = loadFromStorage("cgpa-data", {});
    if (Object.keys(saved).length) {
      dispatch({ type: "LOAD_FROM_STORAGE", payload: saved });
    } else applyTheme("system");
    setReady(true);
  }, []);

  useEffect(() => {
  if (ready) {
    const dataToSave = {
      semesters: state.semesters,
      currentSemester: state.currentSemester,
      theme: state.theme,
    };
    saveToStorage("cgpa-data", dataToSave);
  }
}, [state.semesters, state.currentSemester, state.theme, ready]); 


  useEffect(() => {
    if (state.theme !== "system" || typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme("system");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [state.theme]);

  const updateCourseGlobal = (course: CourseGrade) =>
    dispatch({ type: "UPDATE_COURSE_GLOBAL", payload: course });

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
