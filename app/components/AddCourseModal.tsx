"use client";

import { useState, useEffect } from "react";
import { Plus, X, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { courseCodeList, gradeOptions } from "@/lib/courseMetaData";
import coursesData from "@/lib/courseData";
import { useCGPA } from "@/contexts/CGPAContext";
import SearchCourse from './SearchCourse'; 

interface CourseData {
  deptCode: string;
  courseCode: string;
  courseTitle: string;
  courseCredits: number;
  cdcList: string[];
  delList: string[];
}

interface Course {
  id: number;
  deptCode: string;
  courseCode: string;
  courseName: string;
  credits: number;
  grade: string;
  gradePoints: number;
  isDuplicate?: boolean;
}

interface CourseDetails {
  courseTitle: string;
  courseCredits: number;
  cdcList: string[];
  delList: string[];
}

interface AddCourseModalProps {
  onAddCourse: (course: Course) => void;
  onUpdateCourse: (course: Course) => void;
  onDeleteCourse: (courseId: number) => void;
  editingCourse: Course | null;
  onCancelEdit: () => void;
}

export default function AddCourseModal({
  onAddCourse,
  onUpdateCourse,
  onDeleteCourse,
  editingCourse,
  onCancelEdit,
}: AddCourseModalProps) {
  const { state } = useCGPA();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDept, setSelectedDept] = useState<string>("AN");
  const [selectedCourseCode, setSelectedCourseCode] = useState<string>("F311");
  const [selectedGrade, setSelectedGrade] = useState<string>("");
  const [courseDetails, setCourseDetails] = useState<CourseDetails | null>(
    null
  );
  const [selectedCourse, setSelectedCourse] = useState<CourseData | null>(null);


  const availableCourseCodes: string[] = selectedDept
    ? coursesData
        .filter((course: CourseData) => course.deptCode === selectedDept)
        .map((course: CourseData) => course.courseCode)
    : [];

  const findDuplicateCourse = (
    deptCode: string,
    courseCode: string
  ): { course: Course; semesterCode: string } | null => {
    for (const [semesterCode, semesterData] of Object.entries(
      state.semesters
    )) {
      const duplicateCourse = semesterData.courses.find(
        (course) =>
          course.deptCode === deptCode && course.courseCode === courseCode
      );
      if (duplicateCourse) {
        return { course: duplicateCourse, semesterCode };
      }
    }
    return null;
  };

  const getSemesterPriority = (semesterCode: string): number => {
    const priorities: { [key: string]: number } = {
      sem1: 1,
      sem2: 2,
      sem3: 3,
      sem4: 4,
      sem5: 5,
      sem6: 6,
      sem7: 7,
      sem8: 8,
      sem9: 9,
      sem10: 10,
      sem11: 11,
      sem12: 12,
    };
    return priorities[semesterCode] || 999;
  };

  // Populate form when editing
  useEffect(() => {
  if (editingCourse) {
    setSelectedDept(editingCourse.deptCode);
    setSelectedCourseCode(editingCourse.courseCode);
    setSelectedGrade(editingCourse.grade);
    
    // Find and set the selected course for the search component
    const course = coursesData.find(
      (c: CourseData) => c.deptCode === editingCourse.deptCode && c.courseCode === editingCourse.courseCode
    );
    setSelectedCourse(course || null);
    
    setIsOpen(true);
  }
}, [editingCourse]);


  // Update course details when department and course code are selected
  useEffect(() => {
    if (selectedDept && selectedCourseCode) {
      const course = coursesData.find(
        (c: CourseData) =>
          c.deptCode === selectedDept && c.courseCode === selectedCourseCode
      );
      if (course) {
        setCourseDetails({
          courseTitle: course.courseTitle,
          courseCredits: course.courseCredits,
          cdcList: course.cdcList,
          delList: course.delList,
        });
      } else {
        setCourseDetails(null);
      }
    } else {
      setCourseDetails(null);
    }
  }, [selectedDept, selectedCourseCode]);

  const handleSubmit = (): void => {
  if (selectedDept && selectedCourseCode && selectedGrade && courseDetails) {
    
    const duplicate = findDuplicateCourse(selectedDept, selectedCourseCode);
    
    if (duplicate) {
      if (editingCourse) {
        if (duplicate.course.id === editingCourse.id) {
          const updatedCourse: Course = {
            ...editingCourse,
            deptCode: selectedDept,
            courseCode: selectedCourseCode,
            courseName: courseDetails.courseTitle,
            credits: courseDetails.courseCredits,
            grade: selectedGrade,
            gradePoints: gradeOptions.find((g) => g.value === selectedGrade)?.points || 0,
          };
          onUpdateCourse(updatedCourse);
        } else {
          handleDuplicatePriority(duplicate, true);
        }
      } else {
        handleDuplicatePriority(duplicate, false);
      }
    } else {
      if (editingCourse) {
        const updatedCourse: Course = {
          ...editingCourse,
          deptCode: selectedDept,
          courseCode: selectedCourseCode,
          courseName: courseDetails.courseTitle,
          credits: courseDetails.courseCredits,
          grade: selectedGrade,
          gradePoints: gradeOptions.find((g) => g.value === selectedGrade)?.points || 0,
        };
        onUpdateCourse(updatedCourse);
      } else {
        const newCourse: Course = {
          id: Date.now(),
          deptCode: selectedDept,
          courseCode: selectedCourseCode,
          courseName: courseDetails.courseTitle,
          credits: courseDetails.courseCredits,
          grade: selectedGrade,
          gradePoints: gradeOptions.find((g) => g.value === selectedGrade)?.points || 0,
          isDuplicate: false,
        };
        onAddCourse(newCourse);
      }
    }

    setIsOpen(false);
  }
};

const handleDuplicatePriority = (duplicate: { course: Course; semesterCode: string }, isEditing: boolean) => {
  const currentSemPriority = getSemesterPriority(state.currentSemester);
  const duplicateSemPriority = getSemesterPriority(duplicate.semesterCode);

  if (currentSemPriority > duplicateSemPriority) {
    const updatedDuplicateCourse: Course = {
      ...duplicate.course,
      isDuplicate: true,
    };
    onUpdateCourse(updatedDuplicateCourse);

    const courseData: Course = {
      id: isEditing ? editingCourse!.id : Date.now(),
      deptCode: selectedDept,
      courseCode: selectedCourseCode,
      courseName: courseDetails!.courseTitle,
      credits: courseDetails!.courseCredits,
      grade: selectedGrade,
      gradePoints: gradeOptions.find((g) => g.value === selectedGrade)?.points || 0,
      isDuplicate: false,
    };

    if (isEditing) {
      onUpdateCourse(courseData);
    } else {
      onAddCourse(courseData);
    }
  } else {
    const courseData: Course = {
      id: isEditing ? editingCourse!.id : Date.now(),
      deptCode: selectedDept,
      courseCode: selectedCourseCode,
      courseName: courseDetails!.courseTitle,
      credits: courseDetails!.courseCredits,
      grade: selectedGrade,
      gradePoints: gradeOptions.find((g) => g.value === selectedGrade)?.points || 0,
      isDuplicate: true,
    };

    if (isEditing) {
      onUpdateCourse(courseData);
    } else {
      onAddCourse(courseData);
    }
  }
};

  const handleDelete = (): void => {
    if (editingCourse) {
      onDeleteCourse(editingCourse.id);
      resetForm();
      setIsOpen(false);
    }
  };

  const resetForm = (): void => {
    setSelectedDept("AN");
    setSelectedCourseCode("F311");
    setSelectedCourse(null);
    setSelectedGrade("");
    setCourseDetails(null);
    onCancelEdit();
  };

  const handleOpenChange = (open: boolean): void => {
    setIsOpen(open);

    if (!open) {
      resetForm();
      onCancelEdit();
    }
  };

  const handleCourseSelect = (course: CourseData) => {
  setSelectedCourse(course);
  setSelectedDept(course.deptCode);
  setSelectedCourseCode(course.courseCode);
  setCourseDetails({
    courseTitle: course.courseTitle,
    courseCredits: course.courseCredits,
    cdcList: course.cdcList,
    delList: course.delList,
  });
};


  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          className="w-full mb-4 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => setIsOpen(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Course
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md" onOpenAutoFocus={editingCourse ? (e) => e.preventDefault() : undefined}>
  <DialogHeader>
    <DialogTitle className="flex justify-between items-center">
      {editingCourse ? "Edit Course" : "Add New Course"}
    </DialogTitle>
  </DialogHeader>

  <div className="space-y-4 py-4">
    {/* Searchable Course Selection */}
    <div className="space-y-2">
      <label className="text-sm font-medium">Select Course</label>
      <SearchCourse 
        onCourseSelect={handleCourseSelect}
        selectedCourse={selectedCourse}
        editing={editingCourse !== null}
      />
    </div>

    {/* Grade Selection */}
    <div className="space-y-2">
      <label className="text-sm font-medium">Grade</label>
      <Select value={selectedGrade} onValueChange={setSelectedGrade}>
        <SelectTrigger>
          <SelectValue placeholder="Select grade" />
        </SelectTrigger>
        <SelectContent>
          {gradeOptions.map((grade) => (
            <SelectItem key={grade.value} value={grade.value}>
              {grade.value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>

    {/* Course Details Display */}
    {courseDetails && (
      <div className="bg-muted p-3 rounded-md space-y-1">
        <div className="font-medium text-sm">
          {courseDetails.courseTitle}
        </div>
        <div className="text-sm text-muted-foreground">
          {selectedDept} {selectedCourseCode}
        </div>
        <div className="text-sm font-medium">
          Credits: {courseDetails.courseCredits}
        </div>
      </div>
    )}

    {/* Action Buttons */}
    <div className="flex space-x-2 pt-4">
      {editingCourse && (
        <Button
          variant="destructive"
          onClick={handleDelete}
          className="flex-1"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Delete
        </Button>
      )}
      <Button
        onClick={handleSubmit}
        disabled={!selectedCourse || !selectedGrade}
        className="flex-1"
      >
        {editingCourse ? "Update Course" : "Add Course"}
      </Button>
    </div>
  </div>
</DialogContent>

    </Dialog>
  );
}
