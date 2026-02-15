'use client'

import React from 'react'
import { Flower2, Users, Calendar, MapPin, Gift, MessageCircle } from 'lucide-react'

interface FooterMenuProps {
  activeSection: number
  onNavigate: (index: number) => void
}

export function FooterMenu({ activeSection, onNavigate }: FooterMenuProps) {
  const menuItems = [
    { icon: Flower2, label: 'Home', sections: [0, 1], target: 0 },
    { icon: Users, label: 'Pengantin', sections: [2], target: 2 },
    { icon: Calendar, label: 'Acara', sections: [3, 4], target: 3 },
    { icon: MapPin, label: 'Lokasi', sections: [5], target: 5 },
    { icon: Gift, label: 'Gift', sections: [6], target: 6 },
    { icon: MessageCircle, label: 'RSVP', sections: [7, 8], target: 7 },
  ]

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-md">
      <div
        className="bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/20 p-2 flex items-center justify-between"
        style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
      >
        {menuItems.map((item) => {
          const isActive = item.sections.includes(activeSection)
          const Icon = item.icon

          return (
            <button
              key={item.label}
              onClick={() => onNavigate(item.target)}
              className={`flex flex-col items-center justify-center p-2 rounded-full transition-all duration-300 w-14 h-14 ${isActive
                ? 'bg-pink-50 text-[#E0115F] transform -translate-y-2 shadow-sm'
                : 'text-gray-400 hover:text-[#E0115F] hover:bg-pink-50/50'
                }`}
            >
              <Icon
                size={20}
                className={`transition-all duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-[10px] font-medium mt-1 transition-all duration-300 ${isActive ? 'opacity-100 font-bold' : 'opacity-0 h-0 w-0 overflow-hidden'
                }`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
