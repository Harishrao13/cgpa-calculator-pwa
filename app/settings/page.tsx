"use client";

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Bug, Plus, Github, ExternalLink, Palette } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCGPA } from '@/contexts/CGPAContext';
import { useTheme } from '@/contexts/ThemeContext'

const Settings = () => {
  const { state } = useCGPA();
  const { theme, setTheme } = useTheme();

  const bugReportUrl = "https://github.com/Harishrao13/cgpa-calculator-pwa/issues/new?" + 
    new URLSearchParams({
      title: "[BUG] ",
      body: `**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Device Information:**
- Device: [e.g. iPhone 12, Samsung Galaxy S21]
- OS: [e.g. iOS 15.1, Android 12]
- Browser: [e.g. Chrome, Safari]
- App Version: [e.g. 1.0.0]

**Additional context**
Add any other context about the problem here.`,
      labels: "bug"
    });

  const courseRequestUrl = "https://github.com/Harishrao13/cgpa-calculator-pwa/issues/new?" + 
    new URLSearchParams({
      title: "[COURSE REQUEST] ",
      body: `**Course Details**
Please provide the following information:

**Department Code:** [e.g. CS, ECE, ME]
**Course Code:** [e.g. F111, F213]
**Course Title:** [e.g. Computer Programming, Data Structures]
**Credits:** [e.g. 3, 4]

**Course Curriculum Link (if available)**
Provide a link to the official course curriculum or syllabus if available.`,
      labels: "enhancement,course-request"
    });

  return (
    <>
      <div className="mobile-only min-h-screen bg-background">
        <div className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center space-x-3">
            <Link href="/" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </Link>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Settings</h1>
          </div>
        </div>
        
        <div className="p-4 space-y-6">
          {/* App Settings Section */}
          <div className="mb-4">
            <h3 className="text-md font-medium mb-3 text-gray-900 dark:text-gray-100">App Settings</h3>
            <div className="space-y-3">
              {/* Theme Selector */}
              <div className="flex items-center justify-between p-3 bg-card border border-border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Palette className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">Theme</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Choose app appearance</div>
                  </div>
                </div>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="system">System</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className='mb-4'>
            <h3 className="text-md font-medium mb-3 text-gray-900 dark:text-gray-100">Support</h3>
            <div className="space-y-3">
              {/* Report Bugs */}
              <a 
                href={bugReportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-card border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Bug className="w-5 h-5 text-red-500" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">Report Bugs</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Found an issue? Let us know</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>

              {/* Add Course Requests */}
              <a 
                href={courseRequestUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-card border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Plus className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">Add Course Requests</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Request new courses to be added</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-md font-medium mb-3 text-gray-900 dark:text-gray-100">About</h3>
            <div className="space-y-3">
              {/* GitHub Link */}
              <a 
                href="https://github.com/Harishrao13/cgpa-calculator-pwa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-card border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">View on GitHub</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Source code and contributions</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>

              {/* App Info */}
              <div className="p-3 bg-card border border-border rounded-lg">
                <div className="font-medium text-gray-900 dark:text-gray-100 mb-1">CGPA Calculator PWA</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  A Progressive Web App for calculating CGPA and SGPA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="desktop-only flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-center">
          Please use this app on mobile
        </h1>
      </div>
    </>
  )
}

export default Settings
