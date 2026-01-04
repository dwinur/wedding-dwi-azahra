'use client'

import React from 'react'

interface NavigationDotsProps {
  totalSections: number
  activeSection: number
  onNavigate: (index: number) => void
}

export function NavigationDots({ totalSections, activeSection, onNavigate }: NavigationDotsProps) {
  const sectionNames = ['Home', 'Family', 'Event', 'Location', 'Gallery', 'Gift', 'Wishes', 'Close']
  
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 md:flex flex-col gap-4 hidden">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className="group relative transition-all duration-300"
          aria-label={`Navigate to ${sectionNames[index]}`}
        >
          <div
            className={`rounded-full transition-all duration-300 ${
              activeSection === index
                ? 'w-3 h-3 bg-rose-500'
                : 'w-2 h-2 bg-slate-400 hover:bg-slate-300'
            }`}
          />
          {/* Tooltip */}
          <span className="absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {sectionNames[index]}
          </span>
        </button>
      ))}
    </div>
  )
}
