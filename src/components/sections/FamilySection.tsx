'use client'

import React from 'react'
import Image from 'next/image'

export function FamilySection() {
  return (
    // Single container for the section
    <div
      className="w-full max-w-5xl mx-auto py-16 px-4 flex flex-col items-center gap-8 text-[#16407F]"
      style={{
        backgroundImage: 'url(/images/bg-pengantin.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      {/* 1. Header Text */}
      <div className="text-center mb-4">
        <p
          className="text-base md:text-xl leading-relaxed"
          style={{ fontFamily: 'var(--font-patrick), cursive' }}
        >
          Dengan memohon rahmat dan ridho Allah SWT.
          <br />
          kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam pernikahan kami.
        </p>
      </div>

      {/* 2. Groom Row (CPP) - Left Aligned */}
      {/* Row Layout: [Photo] [Details] - Horizontal on ALL screens */}
      {/* Increased gap from gap-4 to gap-6 (mobile) and gap-8 to gap-12 (desktop) */}
      <div className="w-full flex flex-row items-center justify-center md:justify-start gap-6 md:gap-12">

        {/* Photo Container - Clean, No Frame */}
        {/* Increased size from w-32 to w-44 (mobile) and w-48 to w-64 (desktop) */}
        <div className="w-44 md:w-64 relative flex-shrink-0">
          <div className="absolute -top-4 -left-4 text-pink-300 text-2xl md:text-4xl transform -rotate-12">♥</div>
          <div className="w-full aspect-[3/4] relative">
            <Image
              src="/images/dwi-wed 1.png"
              alt="Dwi Nurhadiansyah"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
          <div className="absolute -bottom-2 -left-4 text-[#16407F] text-xl opacity-50">✦</div>
        </div>

        {/* Details Container - Left Aligned */}
        <div className="text-left">
          <h3
            className="text-3xl md:text-5xl mb-2"
            style={{ fontFamily: 'var(--font-caveat-brush), cursive' }}
          >
            Dwi
            <br />
            Nurhadiansyah
          </h3>
          <div className="space-y-0.5">
            <p className="text-sm md:text-lg text-[#E0115F]" style={{ fontFamily: 'var(--font-madimi), sans-serif' }}>
              Putra dari
            </p>
            <p className="text-base md:text-2xl font-bold text-[#E0115F]" style={{ fontFamily: 'var(--font-caveat), cursive' }}>
              Bapak Muhadi &
              <br />
              Ibu Neneng Arsa
            </p>
          </div>
        </div>
      </div>

      {/* 3. Separator */}
      <div className="relative w-16 h-16 md:w-24 md:h-24 my-2">
        <Image
          src="/images/&.png"
          alt="&"
          fill
          className="object-contain"
        />
      </div>

      {/* 4. Bride Row (CPW) - Right Aligned */}
      {/* Row Layout: [Details] [Photo] - Horizontal on ALL screens */}
      {/* Increased gap from gap-4 to gap-6 and gap-8 to gap-12 */}
      <div className="w-full flex flex-row items-center justify-center md:justify-end gap-6 md:gap-12">

        {/* Details Container - Right Aligned */}
        <div className="text-right">
          <h3
            className="text-3xl md:text-5xl mb-2"
            style={{ fontFamily: 'var(--font-caveat-brush), cursive' }}
          >
            Azahra Emiria
            <br />
            Putri Lima
          </h3>
          <div className="space-y-0.5">
            <p className="text-sm md:text-lg text-[#E0115F]" style={{ fontFamily: 'var(--font-madimi), sans-serif' }}>
              Putri dari
            </p>
            <p className="text-base md:text-2xl font-bold  text-[#E0115F]" style={{ fontFamily: 'var(--font-caveat), cursive' }}>
              Bapak Irwan Sadewa &
              <br />
              Ibu Esther Maria Tuffah
            </p>
          </div>
        </div>

        {/* Photo Container - Clean, No Frame */}
        {/* Increased size from w-32 to w-44 and w-48 to w-64 */}
        <div className="w-44 md:w-64 relative flex-shrink-0">
          <div className="absolute top-2 -right-4 text-pink-300 transform rotate-12">❀</div>
          <div className="w-full aspect-[3/4] relative">
            <Image
              src="/images/azahra-wed 1.png"
              alt="Azahra Emiria Putri Lima"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 text-[#16407F] text-xl opacity-50">♥</div>
        </div>

      </div>

    </div>
  )
}
