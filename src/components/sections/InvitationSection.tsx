'use client'

import React from 'react'
import Image from 'next/image'

export function InvitationSection() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden section"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      {/* PNG Frame Overlay */}
      <div className="absolute inset-[-20%] z-0 pointer-events-none">
        <Image
          src="/images/bg-bacaan-undangan.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content - Transparent (Centered) */}
      <div className="relative z-10 w-full max-w-md mx-auto text-center px-6 py-16">

        {/* Bismillah */}
        <p
          className="text-2xl md:text-3xl mb-6"
          style={{
            fontFamily: "var(--font-amiri), 'Amiri', serif",
            color: '#5B8A8A'
          }}
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </p>

        {/* Salam */}
        <p
          className="text-xl md:text-2xl mb-8"
          style={{
            fontFamily: 'var(--font-patrick), cursive',
            color: '#8B5A5A',
            fontWeight: 500
          }}
        >
          Assalamu&apos;alaikum Wr. Wb.
        </p>

        {/* Surat Ar-Rum Ayat 21 */}
        <div className="mb-8">
          <p
            className="text-base md:text-lg italic leading-relaxed"
            style={{
              fontFamily: 'var(--font-patrick), cursive',
              color: '#5B8A8A'
            }}
          >
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri..."
          </p>
          <p
            className="text-lg md:text-xl mt-3"
            style={{
              fontFamily: 'var(--font-caveat), cursive',
              color: '#5B8A8A'
            }}
          >
            QS Ar-Rum ayat 21
          </p>
        </div>

        {/* Invitation Text */}
        <div
          className="space-y-2 text-base md:text-lg leading-relaxed"
          style={{
            fontFamily: 'var(--font-patrick), cursive',
            color: '#6B6B6B'
          }}
        >
          <p>Dengan memohon rahmat dan ridho Allah SWT,</p>
          <p>kami mengundang Bapak/Ibu/Saudara/i</p>
          <p>untuk hadir dalam pernikahan kami.</p>
        </div>

      </div>
    </div>
  )
}
