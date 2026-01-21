'use client'

import React from 'react'
import Image from 'next/image'
import { ChevronUp } from 'lucide-react'

export function ClosingSection() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden section"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      {/* PNG Frame Overlay */}
      <div className="absolute inset-[-20%] z-0 pointer-events-none">
        <Image
          src="/images/bg-closing.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Content - Transparent with negative margin */}
      <div className="relative z-10 w-full max-w-md mx-auto text-center px-6 py-16" style={{ marginTop: '-15vh' }}>

        {/* Main Message */}
        <p
          className="mb-8 leading-relaxed text-base md:text-lg"
          style={{
            fontFamily: 'var(--font-patrick), cursive',
            color: '#6B6B6B'
          }}
        >
          Atas kehadiran dan do&apos;a restu<br />
          Bapak/Ibu/Saudara/i sekalian,<br />
          kami mengucapkan Terima kasih.
        </p>

        {/* Salam */}
        <p
          className="text-2xl md:text-3xl mb-8"
          style={{
            fontFamily: 'var(--font-caveat), cursive',
            color: '#4A4A4A',
            fontWeight: 600
          }}
        >
          Wassalamu&apos;alaikum Wr. Wb
        </p>

        {/* Kami yang berbahagia */}
        <p
          className="mb-4 text-base md:text-lg"
          style={{
            fontFamily: 'var(--font-patrick), cursive',
            color: '#8B5A5A',
            fontStyle: 'italic'
          }}
        >
          Kami yang berbahagia
        </p>

        {/* Signature */}
        <h2
          className="text-5xl md:text-6xl"
          style={{
            fontFamily: 'var(--font-caveat), cursive',
            color: '#8B5A5A'
          }}
        >
          Azahra & Dwi
        </h2>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-20 z-50 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: '#8B9DC3',
          color: 'white'
        }}
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  )
}
