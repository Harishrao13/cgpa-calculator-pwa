// lib/courseData.ts

export const courseCodeList = [
  'AN',
  'BIO',
  'BIOT',
  'BITS',
  'CE',
  'CHE',
  'CHEM',
  'CS',
  'ECE',
  'ECON',
  'EEE',
  'FIN',
  'GS',
  'HSS',
  'INSTR',
  'IS',
  'MATH',
  'ME',
  'MF',
  'MGTS',
  'MSE',
  'MST',
  'PHA',
  'PHY',
] as const;

export const semesterList = [
  '1 - 1',
  '1 - 2',
  'ST 1',
  '2 - 1',
  '2 - 2',
  'PS 1',
  '3 - 1',
  '3 - 2',
  'ST 2',
  '4 - 1',
  '4 - 2',
  'ST 3',
  '5 - 1',
  '5 - 2',
] as const;

export const primaryDisciplineList = [
  'A1',
  'A2',
  'A3',
  'A4',
  'A5',
  'AA',
  'A7',
  'A8',
  'None',
] as const;

export const gradesList = [
  "A",
  "A-",
  "B",
  "B-",
  "C",
  "C-",
  "D",
  "E",
  "NC",
  "NA",
  "GD",
] as const;

export const secondaryDisciplineList = [
  'B1',
  'B2',
  'B3',
  'B4',
  'B5',
  'None',
] as const;

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

export const courseIDList = [
  'F110', 'F111', 'F112', 'F113', 'F114', 'F201', 'F211', 'F212', 'F213', 'F214',
  'F215', 'F216', 'F217', 'F218', 'F219', 'F220', 'F221', 'F222', 'F223', 'F224',
  'F225', 'F226', 'F227', 'F228', 'F229', 'F230', 'F231', 'F232', 'F233', 'F234',
  'F235', 'F236', 'F237', 'F238', 'F241', 'F242', 'F243', 'F244', 'F245', 'F246',
  'F248', 'F266', 'F301', 'F303', 'F311', 'F312', 'F313', 'F314', 'F315', 'F316',
  'F317', 'F318', 'F319', 'F320', 'F321', 'F322', 'F323', 'F324', 'F325', 'F326',
  'F327', 'F328', 'F329', 'F330', 'F331', 'F332', 'F333', 'F334', 'F335', 'F336',
  'F337', 'F338', 'F339', 'F340', 'F341', 'F342', 'F343', 'F344', 'F345', 'F346',
  'F347', 'F348', 'F349', 'F350', 'F351', 'F352', 'F353', 'F354', 'F355', 'F356',
  'F357', 'F358', 'F361', 'F362', 'F363', 'F364', 'F365', 'F366', 'F367', 'F368',
  'F369', 'F371', 'F372', 'F373', 'F374', 'F375', 'F376', 'F377', 'F378', 'F379',
  'F381', 'F382', 'F383', 'F385', 'F386', 'F398', 'F399', 'F401', 'F402', 'F404',
  'F406', 'F407', 'F411', 'F412', 'F413', 'F414', 'F415', 'F416', 'F417', 'F418',
  'F419', 'F420', 'F421', 'F422', 'F423', 'F424', 'F425', 'F426', 'F427', 'F428',
  'F429', 'F430', 'F431', 'F432', 'F433', 'F434', 'F435', 'F437', 'F441', 'F442',
  'F443', 'F444', 'F445', 'F446', 'F447', 'F448', 'F449', 'F451', 'F452', 'F453',
  'F456', 'F460', 'F461', 'F462', 'F463', 'F464', 'F465', 'F466', 'F467', 'F468',
  'F469', 'F470', 'F471', 'F472', 'F473', 'F474', 'F475', 'F476', 'F477', 'F478',
  'F479', 'F480', 'F481', 'F482', 'F483', 'F484', 'F485', 'F486', 'F487', 'F488',
  'F489', 'F490', 'F491', 'F492', 'F493', 'F494', 'F495', 'F496', 'F497', 'F498',
  'F499',
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

// Define the type for courses database
export type CoursesDatabase = {
  [departmentCode: string]: {
    [courseID: string]: CourseDetails;
  };
};

export const compulsoryCoursesList: CompulsoryCourse[] = [
  {
    courseCode: 'BIO',
    courseID: 'F110',
    courseTitle: 'Biology laboratory',
    courseCredits: '1',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'BIO',
    courseID: 'F111',
    courseTitle: 'General Biology',
    courseCredits: '3',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'BITS',
    courseID: 'F110',
    courseTitle: 'Engineering Graphics',
    courseCredits: '2',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'BITS',
    courseID: 'F111',
    courseTitle: 'Thermodynamics',
    courseCredits: '3',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'BITS',
    courseID: 'F112',
    courseTitle: 'Technical Report Writing',
    courseCredits: '2',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'BITS',
    courseID: 'F221',
    courseTitle: 'Practice School I',
    courseCredits: '5',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'BITS',
    courseID: 'F231',
    courseTitle: 'Practice School I',
    courseCredits: '5',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'BITS',
    courseID: 'F241',
    courseTitle: 'Practice School I',
    courseCredits: '5',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'BITS',
    courseID: 'F412',
    courseTitle: 'Practice School II',
    courseCredits: '20',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'BITS',
    courseID: 'F413',
    courseTitle: 'Practice School II',
    courseCredits: '20',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'BITS',
    courseID: 'F225',
    courseTitle: 'Environmental Studies',
    courseCredits: '3',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'CHEM',
    courseID: 'F110',
    courseTitle: 'Chemistry Laboratory',
    courseCredits: '1',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'CHEM',
    courseID: 'F111',
    courseTitle: 'General Chemistry',
    courseCredits: '3',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'CS',
    courseID: 'F111',
    courseTitle: 'Computer Programming',
    courseCredits: '4',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'ECON',
    courseID: 'F211',
    courseTitle: 'Principles of Economics',
    courseCredits: '3',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'EEE',
    courseID: 'F111',
    courseTitle: 'Electrical Sciences',
    courseCredits: '3',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'MATH',
    courseID: 'F111',
    courseTitle: 'Mathematics I',
    courseCredits: '3',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'MATH',
    courseID: 'F112',
    courseTitle: 'Mathematics II',
    courseCredits: '3',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'MATH',
    courseID: 'F113',
    courseTitle: 'Probability & Statistics',
    courseCredits: '3',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'MATH',
    courseID: 'F211',
    courseTitle: 'Mathematics III',
    courseCredits: '3',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'ME',
    courseID: 'F110',
    courseTitle: 'Workshop Practice',
    courseCredits: '2',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'ME',
    courseID: 'F112',
    courseTitle: 'Workshop Practice',
    courseCredits: '2',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'MGTS',
    courseID: 'F211',
    courseTitle: 'Principles of Management',
    courseCredits: '3',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'PHY',
    courseID: 'F110',
    courseTitle: 'Physics Laboratory',
    courseCredits: '1',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'PHY',
    courseID: 'F111',
    courseTitle: 'Mechanics, Oscillations and Waves',
    courseCredits: '3',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'MATH',
    courseID: 'F101',
    courseTitle: 'Multivariable Calculus',
    courseCredits: '3',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'MATH',
    courseID: 'F102',
    courseTitle: 'Linear Algebra and Complex Variables',
    courseCredits: '3',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'BITS',
    courseID: 'K101',
    courseTitle: 'Physical Fitness, Health Well-being and Creativity',
    courseCredits: '1',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'BIO',
    courseID: 'F101',
    courseTitle: 'Introduction to Biological Sciences',
    courseCredits: '3',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'PHY',
    courseID: 'F101',
    courseTitle: 'Oscillations and Waves ',
    courseCredits: '3',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'CHEM',
    courseID: 'F101',
    courseTitle: 'Fundamentals of Chemistry',
    courseCredits: '3',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'BITS',
    courseID: 'F101',
    courseTitle: 'Navigating Campus Life and Living Well',
    courseCredits: '1',
    cdcList: [],
    delList: [],
  },
  {
    courseCode: 'BITS',
    courseID: 'F102',
    courseTitle: 'Innovation and Design Thinking',
    courseCredits: '1',
    cdcList: [],
    delList: [],
  },

];

export const coursesDatabase: CoursesDatabase = compulsoryCoursesList.reduce((acc, course) => {
  if (!acc[course.courseCode]) {
    acc[course.courseCode] = {};
  }
  acc[course.courseCode][course.courseID] = {
    name: course.courseTitle,
    credits: parseInt(course.courseCredits),
    cdcList: course.cdcList,
    delList: course.delList,
  };
  return acc;
}, {} as CoursesDatabase);

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

export const getCoursesByDepartment = (deptCode: string): { [courseID: string]: CourseDetails } => {
  return coursesDatabase[deptCode] || {};
};

export const findCourse = (courseCode: string, courseID: string): CourseDetails | null => {
  return coursesDatabase[courseCode]?.[courseID] || null;
};

export const getAvailableCourseIDs = (deptCode: string): string[] => {
  const deptCourses = coursesDatabase[deptCode];
  return deptCourses ? Object.keys(deptCourses) : [];
};
