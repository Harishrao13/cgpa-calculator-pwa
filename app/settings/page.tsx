"use client";

import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const Settings = () => {
  return (
    <>
      <div className="mobile-only min-h-screen bg-background">
        {/* Header with back button */}
        <div className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center space-x-3">
            <Link href="/" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </Link>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Settings</h1>
          </div>
        </div>
        
        {/* Settings content */}
        <div className="p-4">
          <h2 className="text-lg font-medium mb-4">App Settings</h2>
          <p className="text-gray-600 dark:text-gray-400">Nothing here as of now</p>
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
