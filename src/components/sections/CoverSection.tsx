'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

interface CoverSectionProps {
  guestName?: string
  onScrollToNext: () => void
}

export function CoverSection({ guestName, onScrollToNext }: CoverSectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(/images/background-2.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70" />
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        
        {/* Text Header */}
        <p className="tracking-[0.3em] text-white/90 text-xs md:text-sm mb-4 uppercase">
          The wedding of
        </p>
        
        {/* Couple Names */}
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl mb-3 text-white"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          Upi & Dwi
        </h1>
        
        {/* Date */}
        <p className="text-white/80 text-base md:text-lg mb-6">
          Minggu, 12 April 2026
        </p>

        {/* Guest Name */}
        {guestName && (
          <div className="mb-6">
            <p className="text-white/60 text-sm mb-1">Kepada Yth.</p>
            <p className="text-white text-xl font-medium">{guestName}</p>
          </div>
        )}
        
        {/* Couple Photo in Arch Frame */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* White Arch Frame */}
            <div className="bg-white rounded-t-full rounded-b-3xl p-4 md:p-5 shadow-2xl">
              <div className="rounded-t-full rounded-b-3xl overflow-hidden w-64 md:w-80 lg:w-96 relative aspect-[3/4]">
                <Image 
                  src="/images/cover-couple.png" 
                  alt="Upi & Dwi" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={onScrollToNext}
          className="w-12 h-12 rounded-full border-2 border-rose-400 flex items-center justify-center mx-auto hover:bg-rose-500 hover:border-rose-500 transition-all duration-300 group animate-bounce"
        >
          <ChevronDown className="text-rose-400 group-hover:text-white transition-colors" size={24} />
        </button>
      </div>
    </div>
  )
}
