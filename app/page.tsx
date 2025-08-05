"use client";

import { useState } from "react";
import TopBar from "./TopBar";
import CoursesSection from "./components/CoursesSection";
import { CGPAProvider } from '@/contexts/CGPAContext';
import { ThemeProvider } from '@/contexts/ThemeContext'

export default function Home() {
  return (
    <>
      <div className="block lg:hidden min-h-screen bg-background">
        <ThemeProvider>
          <CGPAProvider>
            <TopBar />
            <CoursesSection />
          </CGPAProvider>
        </ThemeProvider>
      </div>

      <div className="hidden lg:flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-center">
          Please use this app on mobile
        </h1>
      </div>
    </>
  );
}
