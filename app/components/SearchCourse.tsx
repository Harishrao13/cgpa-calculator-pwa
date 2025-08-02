"use client";

import { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import coursesData from '@/lib/courseData';

interface CourseData {
  deptCode: string;
  courseCode: string;
  courseTitle: string;
  courseCredits: number;
  cdcList: string[];      
  delList: string[];      
}

interface Props {
  onCourseSelect: (course: CourseData) => void;
  selectedCourse: CourseData | null;
  editing?: boolean;
}

export default function SearchCourse({ onCourseSelect, selectedCourse, editing = false }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState<CourseData[]>(coursesData);
  const inputRef = useRef<HTMLInputElement>(null);

  // Set initial value when editing
  useEffect(() => {
    if (editing && selectedCourse && !isSearching) {
      setSearchTerm(`${selectedCourse.deptCode} ${selectedCourse.courseCode} - ${selectedCourse.courseTitle}`);
    }
  }, [selectedCourse, editing]);

  // Handle click to select all text in edit mode
  const handleInputClick = () => {
    if (editing && inputRef.current && !isSearching) {
      inputRef.current.select();
      setIsSearching(true);
    }
  };

  const searchCourses = (term: string) => {
    if (!term.trim()) {
      setFilteredCourses(coursesData);
      return;
    }
    
    const searchLower = term.toLowerCase();
    const filtered = coursesData.filter(course => {
      const matchesTitle = course.courseTitle.toLowerCase().includes(searchLower);
      const combinedCode = `${course.deptCode} ${course.courseCode}`.toLowerCase();
      const combinedCodeNoSpace = `${course.deptCode}${course.courseCode}`.toLowerCase();
      const matchesCombinedCode = combinedCode.includes(searchLower) || combinedCodeNoSpace.includes(searchLower);
      
      return matchesTitle || matchesCombinedCode;
    });
    
    setFilteredCourses(filtered);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsSearching(true);
    searchCourses(value);
  };

  const handleCourseSelect = (course: CourseData) => {
    onCourseSelect(course);
    console.log(`Selected course: ${course.deptCode} ${course.courseCode} - ${course.courseTitle}`);
    setSearchTerm(`${course.deptCode} ${course.courseCode} - ${course.courseTitle}`);
    setIsSearching(false);
  };

  // Reset to course name if search is cleared in edit mode
  const handleInputBlur = () => {
    if (editing && selectedCourse && !searchTerm.trim() && isSearching) {
      setSearchTerm(`${selectedCourse.deptCode} ${selectedCourse.courseCode} - ${selectedCourse.courseTitle}`);
      setIsSearching(false);
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400 dark:text-gray-500" />
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onClick={handleInputClick}
          onBlur={handleInputBlur}
          autoFocus={!editing}
          placeholder={selectedCourse && !isSearching ? "" : "Search courses..."}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
        />
      </div>

      {isSearching && searchTerm && (
        <div className="absolute top-full left-0 right-0 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50 z-50 mt-1">
          <div className="max-h-60 overflow-y-auto">
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <div
                  key={`${course.deptCode}-${course.courseCode}`}
                  onClick={() => handleCourseSelect(course)}
                  className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-200 dark:border-gray-600 last:border-b-0 transition-colors"
                >
                  <div className="font-medium text-black dark:text-white">
                    {course.deptCode} {course.courseCode}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 truncate">
                    {course.courseTitle}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {course.courseCredits} credits
                  </div>
                </div>
              ))
            ) : (
              <div className="p-3 text-gray-500 dark:text-gray-400 text-center">
                No courses found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
