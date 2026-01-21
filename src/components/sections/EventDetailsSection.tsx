'use client'

import React from 'react'
import { MapPin } from 'lucide-react'
import Image from 'next/image'

// Rings Icon Component
const RingsIcon = () => (
  <svg width="48" height="32" viewBox="0 0 48 32" fill="none">
    <circle cx="16" cy="16" r="10" stroke="#8B9DC3" strokeWidth="2" fill="none" />
    <circle cx="32" cy="16" r="10" stroke="#8B9DC3" strokeWidth="2" fill="none" />
  </svg>
);

export function EventDetailsSection() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden section"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      {/* PNG Frame Overlay */}
      <div className="absolute inset-[-20%] z-0 pointer-events-none">
        <Image
          src="/images/bg-save-date.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Content - Transparent with negative margin */}
      <div className="relative z-10 w-full max-w-sm mx-auto text-center px-4" style={{ marginTop: '-18vh' }}>

        {/* Section Title */}
        <div className="text-center mb-6">
          <p
            className="text-4xl md:text-5xl mb-2"
            style={{
              fontFamily: 'var(--font-caveat), cursive',
              color: '#8B9DC3'
            }}
          >
            Save The Date
          </p>
          <p
            className="text-3xl md:text-4xl mb-3"
            style={{
              fontFamily: 'var(--font-patrick), cursive',
              color: '#8B5A5A'
            }}
          >
            April 2026
          </p>
          <div className="w-16 h-1 mx-auto rounded" style={{ backgroundColor: '#D4A84B' }} />
        </div>

        {/* Calendar Week Display */}
        <div className="text-center mb-6">
          <div className="flex justify-center gap-2 mb-2">
            {['S', 'S', 'R', 'K', 'J', 'S'].map((day, i) => (
              <span
                key={i}
                className="text-sm md:text-base w-6 md:w-8"
                style={{
                  fontFamily: 'var(--font-patrick), cursive',
                  color: '#8B9DC3'
                }}
              >
                {day}
              </span>
            ))}
            <span
              className="text-sm md:text-base font-bold w-6 md:w-8"
              style={{
                fontFamily: 'var(--font-patrick), cursive',
                color: '#8B5A5A'
              }}
            >
              M
            </span>
          </div>
          <div className="flex justify-center gap-2 items-center">
            {[5, 6, 7, 8, 9, 10].map((date) => (
              <span
                key={date}
                className="text-lg md:text-xl w-6 md:w-8"
                style={{
                  fontFamily: 'var(--font-patrick), cursive',
                  color: '#8B9DC3'
                }}
              >
                {date}
              </span>
            ))}
            <div
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold"
              style={{ backgroundColor: '#8B5A5A' }}
            >
              12
            </div>
          </div>
        </div>

        {/* Akad & Reception */}
        <div className="flex justify-center items-center gap-6 md:gap-8 mb-6">
          <div className="text-center">
            <p
              className="text-xl md:text-2xl mb-1"
              style={{
                fontFamily: 'var(--font-caveat), cursive',
                color: '#4A4A4A'
              }}
            >
              Akad
            </p>
            <p
              className="text-base md:text-lg"
              style={{
                fontFamily: 'var(--font-patrick), cursive',
                color: '#8B9DC3'
              }}
            >
              09.00
            </p>
          </div>

          <RingsIcon />

          <div className="text-center">
            <p
              className="text-xl md:text-2xl mb-1"
              style={{
                fontFamily: 'var(--font-caveat), cursive',
                color: '#4A4A4A'
              }}
            >
              Reception
            </p>
            <p
              className="text-base md:text-lg"
              style={{
                fontFamily: 'var(--font-patrick), cursive',
                color: '#8B9DC3'
              }}
            >
              11.00
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="text-center mb-6">
          <p
            className="text-lg md:text-xl"
            style={{
              fontFamily: 'var(--font-patrick), cursive',
              color: '#4A4A4A'
            }}
          >
            Ballroom Masjid Jami&apos; An-Noor
          </p>
        </div>

        {/* Google Maps Button */}
        {/* <div className="text-center">
          <a
            href="https://maps.google.com/?q=Masjid+Jami+An-Noor+Ciputat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md text-base md:text-lg"
            style={{
              backgroundColor: '#8B9DC3',
              color: 'white'
            }}
          >
            <MapPin size={20} />
            <span style={{ fontFamily: 'var(--font-patrick), cursive' }}>
              Google Maps
            </span>
          </a>
        </div> */}
      </div>
    </div>
  )
}
