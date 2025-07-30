import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


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

interface CGPAData {
  semesters: { [semesterCode: string]: SemesterData };
  currentSemester: string;
}

export const calculateSGPA = (courses: CourseGrade[]): number => {
  if (courses.length === 0) return 0;
  
  const totalQualityPoints = courses.reduce((sum, course) => {
    return sum + (course.credits * course.gradePoints);
  }, 0);
  
  const totalCredits = courses.reduce((sum, course) => {
    return sum + course.credits;
  }, 0);
  
  return totalCredits > 0 ? Number((totalQualityPoints / totalCredits).toFixed(2)) : 0;
};

export const calculateCGPA = (semesterData: { [key: string]: SemesterData }): number => {
  const allCourses: CourseGrade[] = [];
  
  Object.values(semesterData).forEach(semester => {
    const validCourses = semester.courses.filter(course => !course.isDuplicate);
    allCourses.push(...validCourses);
  });
  
  return calculateSGPA(allCourses);
};

export const calculateSemesterCredits = (courses: CourseGrade[]): number => {
  return courses.reduce((sum, course) => sum + course.credits, 0);
};

export const calculateTotalCredits = (semesterData: { [key: string]: SemesterData }): number => {
  let totalCredits = 0;
  
  Object.values(semesterData).forEach(semester => {
    const validCourses = semester.courses.filter(course => !course.isDuplicate);
    totalCredits += calculateSemesterCredits(validCourses);
  });
  
  return totalCredits;
};

export const saveToStorage = (key: string, data: any): void => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(data));
    }
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const loadFromStorage = <T>(key: string, defaultValue: T): T => {
  try {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    }
    return defaultValue;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return defaultValue;
  }
};

export const getSemesterCode = (displayName: string): string => {
  const mapping: { [key: string]: string } = {
    '1-1': 'sem1',
    '1-2': 'sem2',
    'ST 1': 'sem3',
    '2-1': 'sem4',
    '2-2': 'sem5',
    '3-1' : 'sem6',
    '3-2': 'sem7',
    'ST 2': 'sem8',
    '4-1': 'sem9',
    '4-2': 'sem10',
    '5-1': 'sem11',
    '5-2': 'sem12'
  };
  return mapping[displayName] || displayName.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
};
