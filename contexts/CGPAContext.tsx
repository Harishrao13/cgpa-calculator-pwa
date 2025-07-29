"use client";

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { calculateSGPA, calculateCGPA, calculateSemesterCredits, calculateTotalCredits, saveToStorage, loadFromStorage } from '@/lib/utils';

interface CourseGrade {
  id: number;
  deptCode: string;
  courseCode: string;
  courseName: string;
  credits: number;
  grade: string;
  gradePoints: number;
}

interface SemesterData {
  semesterCode: string;
  courses: CourseGrade[];
}

interface CGPAState {
  semesters: { [semesterCode: string]: SemesterData };
  currentSemester: string;
  sgpa: number;
  cgpa: number;
  currentSemesterCredits: number;
  totalCredits: number;
}

type CGPAAction = 
  | { type: 'SET_CURRENT_SEMESTER'; payload: string }
  | { type: 'ADD_COURSE'; payload: { semesterCode: string; course: CourseGrade } }
  | { type: 'UPDATE_COURSE'; payload: { semesterCode: string; course: CourseGrade } }
  | { type: 'DELETE_COURSE'; payload: { semesterCode: string; courseId: number } }
  | { type: 'LOAD_FROM_STORAGE'; payload: Partial<CGPAState> }
  | { type: 'RECALCULATE' };

const initialState: CGPAState = {
  semesters: {},
  currentSemester: 'sem1',
  sgpa: 0,
  cgpa: 0,
  currentSemesterCredits: 0,
  totalCredits: 0,
};

const cgpaReducer = (state: CGPAState, action: CGPAAction): CGPAState => {
  switch (action.type) {
    case 'SET_CURRENT_SEMESTER':
      return { ...state, currentSemester: action.payload };
      
    case 'ADD_COURSE': {
      const { semesterCode, course } = action.payload;
      const updatedSemesters = {
        ...state.semesters,
        [semesterCode]: {
          semesterCode,
          courses: [...(state.semesters[semesterCode]?.courses || []), course]
        }
      };
      
      return {
        ...state,
        semesters: updatedSemesters,
        sgpa: calculateSGPA(updatedSemesters[state.currentSemester]?.courses || []),
        cgpa: calculateCGPA(updatedSemesters),
        currentSemesterCredits: calculateSemesterCredits(updatedSemesters[state.currentSemester]?.courses || []),
        totalCredits: calculateTotalCredits(updatedSemesters),
      };
    }
    
    case 'UPDATE_COURSE': {
      const { semesterCode, course } = action.payload;
      const semesterCourses = state.semesters[semesterCode]?.courses || [];
      const updatedCourses = semesterCourses.map(c => c.id === course.id ? course : c);
      
      const updatedSemesters = {
        ...state.semesters,
        [semesterCode]: {
          semesterCode,
          courses: updatedCourses
        }
      };
      
      return {
        ...state,
        semesters: updatedSemesters,
        sgpa: calculateSGPA(updatedSemesters[state.currentSemester]?.courses || []),
        cgpa: calculateCGPA(updatedSemesters),
        currentSemesterCredits: calculateSemesterCredits(updatedSemesters[state.currentSemester]?.courses || []),
        totalCredits: calculateTotalCredits(updatedSemesters),
      };
    }
    
    case 'DELETE_COURSE': {
      const { semesterCode, courseId } = action.payload;
      const semesterCourses = state.semesters[semesterCode]?.courses || [];
      const updatedCourses = semesterCourses.filter(c => c.id !== courseId);
      
      const updatedSemesters = {
        ...state.semesters,
        [semesterCode]: {
          semesterCode,
          courses: updatedCourses
        }
      };
      
      return {
        ...state,
        semesters: updatedSemesters,
        sgpa: calculateSGPA(updatedSemesters[state.currentSemester]?.courses || []),
        cgpa: calculateCGPA(updatedSemesters),
        currentSemesterCredits: calculateSemesterCredits(updatedSemesters[state.currentSemester]?.courses || []),
        totalCredits: calculateTotalCredits(updatedSemesters),
      };
    }
    
    case 'LOAD_FROM_STORAGE':
      return { ...state, ...action.payload };
      
    case 'RECALCULATE':
      return {
        ...state,
        sgpa: calculateSGPA(state.semesters[state.currentSemester]?.courses || []),
        cgpa: calculateCGPA(state.semesters),
        currentSemesterCredits: calculateSemesterCredits(state.semesters[state.currentSemester]?.courses || []),
        totalCredits: calculateTotalCredits(state.semesters),
      };
      
    default:
      return state;
  }
};

const CGPAContext = createContext<{
  state: CGPAState;
  dispatch: React.Dispatch<CGPAAction>;
} | null>(null);

export const CGPAProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cgpaReducer, initialState);
  
  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = loadFromStorage('cgpa-data', {});
    if (Object.keys(savedData).length > 0) {
      dispatch({ type: 'LOAD_FROM_STORAGE', payload: savedData });
    }
  }, []);
  
  // Save to localStorage whenever state changes
  useEffect(() => {
    saveToStorage('cgpa-data', state);
  }, [state]);
  
  return (
    <CGPAContext.Provider value={{ state, dispatch }}>
      {children}
    </CGPAContext.Provider>
  );
};

export const useCGPA = () => {
  const context = useContext(CGPAContext);
  if (!context) {
    throw new Error('useCGPA must be used within CGPAProvider');
  }
  return context;
};
