'use client'

import React from 'react'
import Image from 'next/image'

interface CoverSectionProps {
  onScrollToNext: () => void
  guestName?: string
}

export function CoverSection({ onScrollToNext, guestName }: CoverSectionProps) {
  return (
    <div
      className="mobile-full-height w-full relative overflow-hidden flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url(/images/bg-home.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >


      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-lg mx-auto px-6 h-full flex flex-col justify-center items-center gap-2">

        {/* Header Text */}
        <div className="space-y-1 mt-2">
          <p
            className="tracking-[0.2em] text-sm uppercase font-bold"
            style={{
              fontFamily: 'var(--font-patrick), cursive',
              color: '#E0115F'
            }}
          >
            UNDANGAN PERNIKAHAN
          </p>

          {/* Couple Names */}
          <h1
            className="text-5xl md:text-6xl"
            style={{
              fontFamily: 'var(--font-caveat-brush), cursive',
              color: '#16407F'
            }}
          >
            Azahra & Dwi
          </h1>
        </div>

        {/* Center Photo */}
        <div className="relative w-48 h-auto md:w-64 flex-shrink-0 my-1">
          <Image
            src="/images/cover-dwi 2.png"
            alt="Azahra & Dwi"
            width={500}
            height={700}
            className="w-full h-auto object-contain drop-shadow-xl"
            priority
          />
        </div>

        {/* Date Section */}
        <div className="space-y-1">
          <p
            className="tracking-[0.2em] text-sm uppercase font-bold"
            style={{
              fontFamily: 'var(--font-patrick), cursive',
              color: '#E0115F'
            }}
          >
            HARI & TANGGAL
          </p>
          <p
            className="text-2xl md:text-3xl"
            style={{
              fontFamily: 'var(--font-patrick), cursive',
              color: '#16407F'
            }}
          >
            Minggu, 12 April 2026
          </p>
        </div>

        {/* Scroll Down Button */}
        <button
          className="w-12 h-12 flex items-center justify-center mx-auto transition-all duration-300 group animate-bounce mt-2"
          style={{
            border: '2px solid #E0115F',
            backgroundColor: 'transparent',
            borderRadius: '40% 60% 60% 40% / 60% 40%'
          }}
          onClick={onScrollToNext}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-colors group-hover:text-white" style={{ color: '#E0115F' }}>
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

      </div>
    </div>
  )
}
