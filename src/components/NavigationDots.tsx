'use client'

import React from 'react'

interface NavigationDotsProps {
  totalSections: number
  activeSection: number
  onNavigate: (index: number) => void
}

export function NavigationDots({ totalSections, activeSection, onNavigate }: NavigationDotsProps) {
  const sectionNames = ['Cover', 'Invitation', 'Family', 'Event', 'Countdown', 'Location', 'Gift', 'Wishes', 'Close']

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
            className="rounded-full transition-all duration-300"
            style={{
              width: activeSection === index ? '12px' : '8px',
              height: activeSection === index ? '12px' : '8px',
              backgroundColor: activeSection === index ? '#8B5A5A' : '#C4A5A5'
            }}
          />
          {/* Tooltip */}
          <span
            className="absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
            style={{
              backgroundColor: '#F5F0E8',
              color: '#4A4A4A',
              border: '1px solid #EDE5D8',
              fontFamily: 'var(--font-cormorant), Georgia, serif'
            }}
          >
            {sectionNames[index]}
          </span>
        </button>
      ))}
    </div>
  )
}
