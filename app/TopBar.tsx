"use client";

import Link from "next/link";
import { Settings } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCGPA } from '@/contexts/CGPAContext';
import InstallButton from "./components/InstallButton"

export default function TopBar() {
  const { state, dispatch } = useCGPA();

  const handleSemesterChange = (value: string) => {
    dispatch({ type: 'SET_CURRENT_SEMESTER', payload: value });
  };

  return (
    <div className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 space-y-3">
      {/* First Row - Combobox and Settings */}
      <div className="flex justify-between items-center">
        <Select value={state.currentSemester} onValueChange={handleSemesterChange}>
          <SelectTrigger className="font-bold">
            <SelectValue placeholder="Select Semester" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sem1" className="font-bold">1 - 1</SelectItem>
            <SelectItem value="sem2" className="font-bold">1 - 2</SelectItem>
            <SelectItem value="sem3" className="font-bold">2 - 1</SelectItem>
            <SelectItem value="sem4" className="font-bold">2 - 2</SelectItem>
            <SelectItem value="sem5" className="font-bold">ST 1</SelectItem>
            <SelectItem value="sem6" className="font-bold">3 - 1</SelectItem>
            <SelectItem value="sem7" className="font-bold">3 - 2</SelectItem>
            <SelectItem value="sem8" className="font-bold">ST 2</SelectItem>
            <SelectItem value="sem9" className="font-bold">4 - 1</SelectItem>
            <SelectItem value="sem10" className="font-bold">4 - 2</SelectItem>
            <SelectItem value="sem11" className="font-bold">5 - 1</SelectItem>
            <SelectItem value="sem12" className="font-bold">5 - 2</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center space-x-2">
          <InstallButton />
          <Link
            href="/settings"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Settings className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </Link>
        </div>
      </div>

      {/* Second Row - SGPA and CGPA */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">
            SGPA
          </span>
          <span className="text-3xl font-bold transition-colors text-black dark:text-white ">
            {state.sgpa.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">
            CGPA
          </span>
          <span className="text-3xl font-bold text-black dark:text-white transition-colors">
            {state.cgpa.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Third Row - Credits */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">
            Credits
          </span>
          <span className={`text-lg font-bold ${state.currentSemesterCredits > 25 ?  "text-red-500" : "text-gray-500 dark:text-gray-500"}`}>
            {state.currentSemesterCredits}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">
            Credits
          </span>
          <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
            {state.totalCredits}
          </span>
        </div>
      </div>
    </div>
  );
}
