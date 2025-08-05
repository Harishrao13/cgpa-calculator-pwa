export const minorList = [
  'Aeronautics',
  'Data Science',
  'English Studies',
  'Entrepreneurship',
  'Film and Media',
  'Finance',
  'Materials Science and Engineering',
  'Philosophy, Economics, and Politics',
  'Physics',
  'Public Policy',
  'Robotics and Automation',
  'None',
] as const;

export interface CourseDetails {
  name: string;
  credits: number;
  cdcList: string[];
  delList: string[];
}

export interface CompulsoryCourse {
  courseCode: string;
  courseID: string;
  courseTitle: string;
  courseCredits: string;
  cdcList: string[];
  delList: string[];
}

export interface GradeOption {
  value: string;
  points: number;
}

export type CoursesDatabase = {
  [departmentCode: string]: {
    [courseID: string]: CourseDetails;
  };
};

export const gradeOptions: GradeOption[] = [
  { value: 'A', points: 10 },
  { value: 'A-', points: 9 },
  { value: 'B', points: 8 },
  { value: 'B-', points: 7 },
  { value: 'C', points: 6 },
  { value: 'C-', points: 5 },
  { value: 'D', points: 4 },
  { value: 'E', points: 2 },
  { value: 'NC', points: -1 }, 
  { value: 'NA', points: -1 }, 
  { value: 'GD', points: -1 },
];
