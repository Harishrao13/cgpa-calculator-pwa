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
  isDuplicate?: boolean; 
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
    case 'SET_CURRENT_SEMESTER': {
      const newState = { ...state, currentSemester: action.payload };
      // Recalculate SGPA for the new current semester
      return {
        ...newState,
        sgpa: calculateSGPA(newState.semesters[action.payload]?.courses || []),
        currentSemesterCredits: calculateSemesterCredits(newState.semesters[action.payload]?.courses || []),
      };
    }
      
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
    
    case 'LOAD_FROM_STORAGE': {
      // Ensure we use the loaded currentSemester or fallback to initialState
      const loadedState = { 
        ...initialState,  // Start with initial state
        ...action.payload,  // Override with loaded data
        // Ensure currentSemester is properly loaded
        currentSemester: action.payload.currentSemester || initialState.currentSemester
      };
      
      // Recalculate values after loading from storage
      return {
        ...loadedState,
        sgpa: calculateSGPA(loadedState.semesters[loadedState.currentSemester]?.courses || []),
        cgpa: calculateCGPA(loadedState.semesters),
        currentSemesterCredits: calculateSemesterCredits(loadedState.semesters[loadedState.currentSemester]?.courses || []),
        totalCredits: calculateTotalCredits(loadedState.semesters),
      };
    }
      
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
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = loadFromStorage('cgpa-data', {});
    console.log('Loading from storage:', savedData); // Debug log
    
    if (Object.keys(savedData).length > 0) {
      dispatch({ type: 'LOAD_FROM_STORAGE', payload: savedData });
    }
    setIsLoaded(true);
  }, []);
  
  // Save to localStorage whenever state changes (but only after initial load)
  useEffect(() => {
    if (isLoaded) {
      console.log('Saving to storage:', state); // Debug log
      saveToStorage('cgpa-data', state);
    }
  }, [state, isLoaded]);
  
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
