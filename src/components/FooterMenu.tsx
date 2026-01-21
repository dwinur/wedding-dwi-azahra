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
    { icon: Users, label: 'Pengantin', section: 2 },
    { icon: Calendar, label: 'Acara', section: 3 },
    { icon: MapPin, label: 'Lokasi', section: 5 },
    { icon: MessageCircle, label: 'Ucapan', section: 7 },
  ]

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 backdrop-blur-lg z-40 shadow-lg"
      style={{
        backgroundColor: 'rgba(245, 240, 232, 0.95)',
        borderTop: '1px solid #EDE5D8'
      }}
    >
      <nav className="max-w-7xl mx-auto px-4">
        <ul className="flex justify-around items-center h-16">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.section

            return (
              <li key={item.label}>
                <button
                  onClick={() => onNavigate(item.section)}
                  className="flex flex-col items-center gap-1 px-4 py-2 transition-all duration-300"
                  style={{
                    color: isActive ? '#8B5A5A' : '#8B8B8B'
                  }}
                >
                  <Icon
                    size={20}
                    strokeWidth={2}
                    className={`transition-transform duration-300 ${isActive ? 'scale-110' : ''
                      }`}
                  />
                  <span
                    className="text-xs"
                    style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                  >
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
