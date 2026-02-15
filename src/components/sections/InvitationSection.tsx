'use client'

import React from 'react'
import Image from 'next/image'

export function InvitationSection() {
  return (
    <div
      className="flex items-center justify-center relative overflow-hidden section"
      style={{
        backgroundImage: 'url(/images/bg-home-2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >


      {/* Top Right Decoration */}
      <div className="absolute top-0 right-0 z-10 w-48 md:w-64 animate-flutter origin-top-right">
        <Image
          src="/images/bg-top-right-homepage.png"
          alt="Decoration"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-md mx-auto text-center px-6 pt-[16rem] pb-[24rem] flex flex-col items-center justify-center h-full gap-6"
        style={{
          backgroundImage: 'url(/images/bg-footer-home-2.png)',
          backgroundSize: '100% auto',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat'
        }}
      >

        {/* Bismillah */}
        <p
          className="text-3xl md:text-4xl"
          style={{
            fontFamily: "var(--font-amiri)",
            color: '#16407F',
            fontWeight: 'bold'
          }}
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </p>

        {/* Intro Text */}
        <p
          className="text-sm md:text-base max-w-xs mx-auto leading-relaxed"
          style={{
            fontFamily: 'var(--font-patrick), cursive',
            color: '#E0115F'
          }}
        >
          Doa Rasulullah SAW kepada seseorang ketika menikah
        </p>

        {/* Arabic Quote */}
        <div>
          <p
            className="text-lg md:text-xl leading-relaxed uppercase"
            style={{
              fontFamily: 'var(--font-patrick), cursive',
              color: '#E0115F'
            }}
          >
            "BAARAKALLAHU LAKA WA BAARAKA ’ALAIKA WA JAMA’A BAINAKUMAA FII KHAIRIN"
          </p>
        </div>

        {/* Translation */}
        <div>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              fontFamily: 'var(--font-patrick), cursive',
              color: '#E0115F'
            }}
          >
            Semoga Allah memberkahimu dan senantiasa memberkahimu; dan mengumpulkan kalian berdua dalam kebaikan.
          </p>
        </div>

        {/* Source */}
        <p
          className="text-sm md:text-base italic"
          style={{
            fontFamily: 'var(--font-patrick), cursive',
            color: '#16407F'
          }}
        >
          -HR Ahmad Abu Dawud, At Tirmidzi
        </p>
      </div>
    </div >
  )
}
