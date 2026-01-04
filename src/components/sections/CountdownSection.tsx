'use client'

import React, { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [mounted, setMounted] = useState(false)

  // Wedding date: 12 April 2026, 09:00 WIB
  const weddingDate = new Date('2026-04-12T09:00:00+07:00').getTime()

  useEffect(() => {
    setMounted(true)
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [weddingDate])

  const timeBlocks = [
    { value: timeLeft.days, label: 'Hari' },
    { value: timeLeft.hours, label: 'Jam' },
    { value: timeLeft.minutes, label: 'Menit' },
    { value: timeLeft.seconds, label: 'Detik' }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 pb-32">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="tracking-widest text-slate-400 text-sm mb-4 uppercase">
            Save the Date
          </p>
          <h2 
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Menghitung Hari
          </h2>
          <p className="text-slate-300 max-w-lg mx-auto">
            Menuju hari bahagia kami
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {timeBlocks.map((block, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 rounded-2xl p-4 md:p-6 mb-3 border border-white/10">
                  <span 
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                  >
                    {mounted ? String(block.value).padStart(2, '0') : '--'}
                  </span>
                </div>
                <span className="text-slate-300 text-sm md:text-base">{block.label}</span>
              </div>
            ))}
          </div>

          {/* Wedding Date */}
          <div className="text-center mt-10 pt-8 border-t border-white/10">
            <p className="text-rose-400 text-lg md:text-xl mb-2">
              Minggu, 12 April 2026
            </p>
            <p className="text-slate-400">
              Insya Allah pukul 09:00 WIB
            </p>
          </div>
        </div>

        {/* Add to Calendar hint */}
        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm">
            Jangan sampai terlewat, tandai kalender Anda! 📅
          </p>
        </div>
      </div>
    </div>
  )
}
