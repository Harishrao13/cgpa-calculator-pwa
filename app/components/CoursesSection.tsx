"use client";

import { useState } from "react";
import AddCourseModal from './AddCourseModal';
import { useCGPA } from '@/contexts/CGPAContext';

interface Course {
  id: number;
  deptCode: string;
  courseCode: string;
  courseName: string;
  credits: number;
  grade: string;
  gradePoints: number;
}

interface CourseCardProps {
  course: Course;
  onEdit: (course: Course) => void;
}

export default function CoursesSection() {
  const { state, dispatch } = useCGPA();
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  
  // Get courses for current semester
  const currentSemesterCourses = state.semesters[state.currentSemester]?.courses || [];

  const handleAddCourse = (newCourse: Course) => {
    dispatch({ 
      type: 'ADD_COURSE', 
      payload: { semesterCode: state.currentSemester, course: newCourse } 
    });
  };

  const handleUpdateCourse = (updatedCourse: Course) => {
    dispatch({ 
      type: 'UPDATE_COURSE', 
      payload: { semesterCode: state.currentSemester, course: updatedCourse } 
    });
    setEditingCourse(null);
  };

  const handleDeleteCourse = (courseId: number) => {
    dispatch({ 
      type: 'DELETE_COURSE', 
      payload: { semesterCode: state.currentSemester, courseId } 
    });
    setEditingCourse(null);
  };

  const handleEditCourse = (course: Course) => {
    setEditingCourse(course);
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <AddCourseModal 
          onAddCourse={handleAddCourse}
          onUpdateCourse={handleUpdateCourse}
          onDeleteCourse={handleDeleteCourse}
          editingCourse={editingCourse}
          onCancelEdit={() => setEditingCourse(null)}
        />
      </div>

      {currentSemesterCourses.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <p>No courses added yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {currentSemesterCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEdit={handleEditCourse}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CourseCard({ course, onEdit }: CourseCardProps) {
  return (
    <div 
      className="bg-card border border-border rounded-lg p-4 space-y-2 cursor-pointer hover:bg-muted/50 transition-colors"
      onClick={() => onEdit(course)}
    >
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div className="font-medium">
            {course.courseName}
          </div>
          <div className="text-sm text-muted-foreground">
            {course.deptCode} {course.courseCode}
          </div>
          <div className="text-sm font-medium mt-1">
            Credits: {course.credits}
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="font-semibold text-lg">
            {course.grade}
          </div>
        </div>
      </div>
    </div>
  );
}
