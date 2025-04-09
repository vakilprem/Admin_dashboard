import React from "react";
import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} isCollapsed={isCollapsed} />

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col z-0">
        {/* Header */}
        <Header
          toggleSidebar={() => setIsSidebarOpen(prev => !prev)}
          toggleCollapse={() => setIsCollapsed(prev => !prev)}
        />

        {/* Page content */}
        <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
