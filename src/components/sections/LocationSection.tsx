'use client'

import React from 'react'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

export function LocationSection() {
  const locationUrl = "https://www.google.com/maps/place/Jami'+An-Noor+Ciputat+Mosque/@-6.3275943,106.7475552,17z/data=!4m6!3m5!1s0x2e69efb1eb34cae7:0x1e571996819f743c!8m2!3d-6.3275943!4d106.7475552!16s%2Fg%2F11k4x15wm4"

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden section"
      style={{
        minHeight: '100vh',
        backgroundImage: 'url(/images/bg-pengantin.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>

      {/* Top Section: Title + Address + Subtitle */}
      <div className="relative z-10 w-full flex flex-col items-start text-left px-8 pt-24 pb-4">

        {/* Title: Ballroom Masjid Jami' An-Noor */}
        <h2
          className="leading-tight w-full max-w-[320px]"
          style={{
            fontFamily: 'var(--font-patrick), cursive',
            color: '#16407F',
            fontSize: '32px',
            fontWeight: 'bold',
          }}
        >
          Ballroom Masjid{'\n'}Jami&apos; An-Noor
        </h2>

        {/* Address */}
        <p
          className="mt-4 w-full max-w-[340px] leading-relaxed"
          style={{
            fontFamily: 'var(--font-caveat-brush), cursive',
            color: '#E0115F',
            fontSize: '18px',
          }}
        >
          Jl. RE Martadinata No.60, Cipayung, Kec. Ciputat, Kota Tangerang Selatan, Banten 15411
        </p>
      </div>

      {/* Mosque Illustration with Flower Decoration */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center px-6">

        {/* Flower Top-Right Decoration */}
        <div className="absolute top-0 right-0 z-20 w-[35%] md:w-[25%] animate-gentle-breeze origin-top-right">
          <Image
            src="/images/flower-mosque-right-top.png"
            alt=""
            width={300}
            height={300}
            className="object-contain w-full h-auto"
          />
        </div>

        {/* Mosque Image */}
        <div className="relative w-full max-w-[360px]">
          <Image
            src="/images/mosque.png"
            alt="Masjid Jami' An-Noor"
            width={600}
            height={500}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>

      {/* Google Maps Button */}
      <div className="relative z-10 w-full flex justify-center px-6 pb-16 mt-4">
        <div className="flex flex-col items-center gap-4">
          <p
            style={{
              fontFamily: 'var(--font-caveat-brush), cursive',
              color: '#16407F',
              fontSize: '23px',
            }}
          >
            Lokasi Akad &amp; Resepsi
          </p>
          <a
            href={locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            style={{
              backgroundColor: '#E0115F',
              color: 'white',
            }}
          >
            <MapPin size={20} className="text-white" />
            <span
              className="text-lg font-bold"
              style={{ fontFamily: 'var(--font-patrick), cursive' }}
            >
              Google Maps
            </span>
          </a>
        </div>
      </div>

    </div>
  )
}
