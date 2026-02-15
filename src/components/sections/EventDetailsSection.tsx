'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Calendar } from 'lucide-react'

export function EventDetailsSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2026-04-12T09:00:00').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="flex flex-col items-center relative overflow-hidden section"
      style={{
        backgroundImage: 'url(/images/bg-pengantin.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      {/* ============================================ */}
      {/* TOP HEADER: bg-flower-green-top + 3 flowers  */}
      {/* ============================================ */}
      <div className="relative w-full z-10">

        {/* Background: bg-flower-green-top (full width, auto height) */}
        <div className="w-full">
          <Image
            src="/images/bg-flower-green-top.png"
            alt=""
            width={800}
            height={300}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* 3 Flowers positioned on top of the green bg */}
        {/* Flower Top-Left */}
        <div className="absolute top-0 left-0 z-10 w-[40%] md:w-[30%] animate-gentle-breeze origin-top-left" style={{ top: '5.5rem', left: '-3.5rem' }}>
          <Image
            src="/images/flower-big-top-left.png"
            alt="Flower Left"
            width={300}
            height={300}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        {/* Flower Top-Center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[40%] md:w-[32%] origin-top" style={{ top: '1rem' }}>
          <Image
            src="/images/flower-big-top.png"
            alt="Flower Center"
            width={300}
            height={300}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        {/* Flower Top-Right */}
        <div className="absolute top-0 right-0 z-10 w-[40%] md:w-[30%] animate-gentle-breeze origin-top-right" style={{ top: '6.5rem', right: '-1.5rem' }}>
          <Image
            src="/images/flower-big-top-right.png"
            alt="Flower Right"
            width={300}
            height={300}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

      </div>

      {/* ============================================ */}
      {/* MAIN CONTENT                                 */}
      {/* ============================================ */}
      <div className="relative z-20 flex flex-col items-center text-center gap-5 px-6 w-full max-w-md mt-4 pb-32" style={{ paddingTop: '12rem' }}>

        <h2
          className="text-3xl md:text-4xl text-[#16407F]"
          style={{ fontFamily: 'var(--font-caveat-brush), cursive' }}
        >
          Acara Pernikahan
        </h2>

        {/* Date Display */}
        <h2
          className="text-3xl md:text-4xl font-bold text-[#16407F]"
          style={{ fontFamily: 'var(--font-caveat-brush), cursive' }}
        >
          Minggu, 12 April 2026
        </h2>

        {/* Time Details - 2 rows */}
        <div className="w-full flex flex-col gap-2">
          {/* Akad Row */}
          <div className="flex items-center justify-between px-6">
            <span
              className="text-3xl md:text-4xl font-bold text-[#16407F]"
              style={{ fontFamily: 'var(--font-caveat-brush), cursive' }}
            >
              Akad
            </span>
            <span
              className="text-2xl md:text-3xl text-[#16407F] font-bold"
              style={{ fontFamily: 'var(--font-caveat-brush), sans-serif' }}
            >
              09.00 AM
            </span>
          </div>

          {/* Reception Row */}
          <div className="flex items-center justify-between px-6">
            <span
              className="text-3xl md:text-4xl font-bold text-[#16407F]"
              style={{ fontFamily: 'var(--font-caveat-brush), cursive' }}
            >
              Reception
            </span>
            <span
              className="text-2xl md:text-3xl text-[#16407F] font-bold"
              style={{ fontFamily: 'var(--font-caveat-brush), sans-serif' }}
            >
              11.00 AM
            </span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="flex gap-3 md:gap-4 justify-center mt-4">
          {[
            { label: 'Hari', value: timeLeft.days },
            { label: 'Jam', value: timeLeft.hours },
            { label: 'Menit', value: timeLeft.minutes },
            { label: 'Detik', value: timeLeft.seconds },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#16407F] text-white flex items-center justify-center text-2xl md:text-3xl shadow-lg border-2 border-[#16407F]"
                style={{ fontFamily: 'var(--font-caveat-brush), sans-serif' }}
              >
                {item.value}
              </div>
              <span className="text-xs text-[#16407F] font-semibold uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-caveat-brush), sans-serif' }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Save The Date Button */}
        <button
          className="mt-4 px-8 py-3 bg-[#E0115F] text-white rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition-all duration-300"
          onClick={() => {
            const text = encodeURIComponent('Pernikahan Dwi & Azahra')
            const dates = '20260412T090000/20260412T130000'
            const details = encodeURIComponent('Resepsi Pernikahan Dwi & Azahra')
            const location = encodeURIComponent('Gedung Serbaguna')
            window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`, '_blank')
          }}
        >
          <Calendar size={20} className="text-white" />
          <span
            className="text-lg font-bold"
            style={{ fontFamily: 'var(--font-patrick), cursive' }}
          >
            Simpan Tanggal
          </span>
        </button>
      </div>


      {/* ============================================ */}
      {/* BOTTOM: Green Botanical Decorations           */}
      {/* ============================================ */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none animate-gentle-breeze origin-bottom">
        <Image
          src="/images/flower-footer-date.png"
          alt=""
          width={800}
          height={300}
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  )
}
