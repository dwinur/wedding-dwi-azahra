'use client'

import React from 'react'
import Image from 'next/image'

export function ClosingSection() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden section"
      style={{
        backgroundImage: 'url(/images/bg-pengantin.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content with bg-footer-home-2 */}
      <div
        className="relative z-10 w-full max-w-md mx-auto text-center px-6 pt-[10rem] pb-[24rem] flex flex-col items-center justify-center h-full gap-4"
        style={{
          backgroundImage: 'url(/images/bg-footer-home-2.png)',
          backgroundSize: '100% auto',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Main Message */}
        <p
          className="leading-relaxed"
          style={{
            fontFamily: 'var(--font-patrick), cursive',
            color: '#16407A',
            fontSize: '16px'
          }}
        >
          Atas kehadiran dan do&apos;a restu<br />
          Bapak/Ibu/Saudara/i sekalian,<br />
          kami mengucapkan Terima kasih.
        </p>

        {/* Salam */}
        <p
          style={{
            fontFamily: 'var(--font-caveat-brush), cursive',
            color: '#E0115F',
            fontSize: '24px',
          }}
        >
          Wassalamu&apos;alaikum Wr. Wb
        </p>

        {/* Kami yang berbahagia */}
        <p
          style={{
            fontFamily: 'var(--font-patrick), cursive',
            color: '#16407A',
            fontSize: '16px'
          }}
        >
          Kami yang berbahagia
        </p>

        {/* Logo Nama A&D */}
        <div className="relative w-48 h-48 my-2">
          <Image
            src="/images/logo-nama.png"
            alt="A&D"
            fill
            className="object-contain"
          />
        </div>

        {/* Signature */}
        <h2
          style={{
            fontFamily: 'var(--font-caveat-brush), cursive',
            color: '#16407F',
            fontSize: '36px'
          }}
        >
          Azahra &amp; Dwi
        </h2>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 md:bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center transition-all duration-300 group hover:scale-110"
        style={{
          border: '2px solid #ffffff',
          backgroundColor: 'transparent',
          borderRadius: '40% 60% 60% 40% / 60% 40%'
        }}
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-colors group-hover:text-white" style={{ color: '#ffffff' }}>
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </div>
  )
}
