'use client'

import React from 'react'
import { Home, Users, Calendar, MapPin, MessageCircle } from 'lucide-react'

interface FooterMenuProps {
  activeSection: number
  onNavigate: (index: number) => void
}

export function FooterMenu({ activeSection, onNavigate }: FooterMenuProps) {
  const menuItems = [
    { icon: Home, label: 'Home', section: 0 },
    { icon: Users, label: 'Pengantin', section: 1 },
    { icon: Calendar, label: 'Acara', section: 2 },
    { icon: MapPin, label: 'Lokasi', section: 3 },
    { icon: MessageCircle, label: 'Ucapan', section: 6 },
  ]

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-white/10 z-40 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4">
        <ul className="flex justify-around items-center h-16">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.section
            
            return (
              <li key={item.label}>
                <button
                  onClick={() => onNavigate(item.section)}
                  className={`flex flex-col items-center gap-1 px-4 py-2 transition-all duration-300 ${
                    isActive ? 'text-rose-400' : 'text-slate-400 hover:text-rose-300'
                  }`}
                >
                  <Icon 
                    size={20} 
                    strokeWidth={2}
                    className={`transition-transform duration-300 ${
                      isActive ? 'scale-110' : ''
                    }`}
                  />
                  <span className="text-xs">
                    {item.label}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </footer>
  )
}
