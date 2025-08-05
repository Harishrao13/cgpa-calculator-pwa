"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, X } from "lucide-react";

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

import coursesData from "@/lib/courseData";
import { gradeOptions } from "@/lib/courseMetaData";
import { useCGPA } from "@/contexts/CGPAContext";
import SearchCourse from "./SearchCourse";

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

interface AddCourseModalProps {
  onAddCourse: (course: Course) => void;
  onUpdateCourse: (course: Course) => void;
  onDeleteCourse: (courseId: number) => void;
  editingCourse: Course | null;
  onCancelEdit: () => void;
}

interface DuplicateCandidate {
  course: Course;
  semesterCode: string;
}

export default function AddCourseModal({
  onAddCourse,
  onUpdateCourse,
  onDeleteCourse,
  editingCourse,
  onCancelEdit,
}: AddCourseModalProps) {
  const { state } = useCGPA();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseData | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<string>("");

  const findDuplicateCourse = (
    deptCode: string,
    courseCode: string
  ): { course: Course; semesterCode: string } | null => {
    for (const [semesterCode, semesterData] of Object.entries(
      state.semesters
    )) {
      const duplicate = semesterData.courses.find(
        (c) => c.deptCode === deptCode && c.courseCode === courseCode
      );
      if (duplicate) return { course: duplicate, semesterCode };
    }
    return null;
  };

  const getSemesterPriority = (semesterCode: string): number => {
    const priorities: Record<string, number> = {
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
    return priorities[semesterCode] ?? 999;
  };

  useEffect(() => {
    if (!editingCourse) return;

    const course = coursesData.find(
      (c) =>
        c.deptCode === editingCourse.deptCode &&
        c.courseCode === editingCourse.courseCode
    );

    setSelectedCourse(course ?? null);
    setSelectedGrade(editingCourse.grade);
    setIsOpen(true);
  }, [editingCourse]);

  const handleSubmit = (): void => {
    if (!selectedCourse || !selectedGrade) return;

    const { deptCode, courseCode, courseTitle, courseCredits } =
      selectedCourse;

    const duplicate = findDuplicateCourse(deptCode, courseCode);
    const base = {
      deptCode,
      courseCode,
      courseName: courseTitle,
      credits: courseCredits,
      grade: selectedGrade,
      gradePoints:
        gradeOptions.find((g) => g.value === selectedGrade)?.points ?? 0,
    };

    if (duplicate) {
      if (editingCourse) {
        if (duplicate.course.id === editingCourse.id) {
          onUpdateCourse({ ...editingCourse, ...base });
        } else {
          handleDuplicatePriority(duplicate, true, base);
        }
      } else {
        handleDuplicatePriority(duplicate, false, base);
      }
    } else {
      if (editingCourse) {
        onUpdateCourse({ ...editingCourse, ...base });
      } else {
        onAddCourse({
          id: Date.now(),
          ...base,
          isDuplicate: false,
        });
      }
    }

    setIsOpen(false);
  };

const { updateCourseGlobal } = useCGPA();

const handleDuplicatePriority = (
  duplicate: { course: Course; semesterCode: string },
  isEditing: boolean,
  base: Omit<Course, "id" | "isDuplicate">
) => {
  const currentPriority   = getSemesterPriority(state.currentSemester);
  const duplicatePriority = getSemesterPriority(duplicate.semesterCode);

  const currentIsLater = currentPriority > duplicatePriority; // true → current semester wins

  const updatedOldCopy: Course = {
    ...duplicate.course,
    isDuplicate: currentIsLater,           
  };
  updateCourseGlobal(updatedOldCopy);      

  const newCourse: Course = {
    id: isEditing ? editingCourse!.id : Date.now(),
    ...base,
    isDuplicate: !currentIsLater,          
  };

  isEditing ? onUpdateCourse(newCourse) : onAddCourse(newCourse);
};
  const resetForm = () => {
    setSelectedCourse(null);
    setSelectedGrade("");
    onCancelEdit();
  };

  const handleOpenChange = (open: boolean) => {
  setIsOpen(open);
  if (!open) {
    resetForm();
  } else if (!editingCourse) {
    // Reset form when opening for new course
    setSelectedCourse(null);
    setSelectedGrade("");
  }
};


  const handleDelete = () => {
  if (!editingCourse) return;

  if (!editingCourse.isDuplicate) {
    let candidates : DuplicateCandidate[] = [] ;
    Object.values(state.semesters).forEach(sem => {
      sem.courses.forEach(course => {
        if (
          course.deptCode === editingCourse.deptCode &&
          course.courseCode === editingCourse.courseCode &&
          course.isDuplicate
        ) {
          candidates.push({ course, semesterCode: sem.semesterCode });
        }
      });
    });
    if (candidates.length > 0) {
      candidates.sort((a, b) =>
        getSemesterPriority(b.semesterCode) - getSemesterPriority(a.semesterCode)
      );
      const { course: toPromote } = candidates[0];
      updateCourseGlobal({ ...toPromote, isDuplicate: false });
    }
  }

  onDeleteCourse(editingCourse.id);
  resetForm();
  setIsOpen(false);
};

  const handleCourseSelect = (course: CourseData) => {
    setSelectedCourse(course);
  };

  const courseDetails = selectedCourse
    ? {
        courseTitle: selectedCourse.courseTitle,
        courseCredits: selectedCourse.courseCredits,
      }
    : null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          className="mb-4 w-full bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => setIsOpen(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New Course
        </Button>
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-md"
        onOpenAutoFocus={
          editingCourse ? (e) => e.preventDefault() : undefined
        }
      >
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            {editingCourse ? "Edit Course" : "Add New Course"}
          </DialogTitle>
        </DialogHeader>

        <div className="py-4 space-y-4">
          {/* Course search */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Course</label>
            <SearchCourse
              onCourseSelect={handleCourseSelect}
              selectedCourse={selectedCourse}
              editing={Boolean(editingCourse)}
            />
          </div>

          {/* Grade */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Grade</label>
            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger>
                <SelectValue placeholder="Select grade" />
              </SelectTrigger>
              <SelectContent>
                {gradeOptions.map((g) => (
                  <SelectItem key={g.value} value={g.value}>
                    {g.value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Details */}
          {courseDetails && (
            <div className="space-y-1 rounded-md bg-muted p-3">
              <div className="text-sm font-medium">
                {courseDetails.courseTitle}
              </div>
              <div className="text-sm text-muted-foreground">
                {selectedCourse!.deptCode} {selectedCourse!.courseCode}
              </div>
              <div className="text-sm font-medium">
                Credits: {courseDetails.courseCredits}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex space-x-2 pt-4">
            {editingCourse && (
              <Button
                variant="destructive"
                onClick={handleDelete}
                className="flex-1"
              >
                <Trash2 className="mr-2 h-4 w-4" />
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
