'use client'

import React, { useState, useEffect } from 'react'
import { Calendar, ChevronDown } from 'lucide-react'

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
  const [showCalendarOptions, setShowCalendarOptions] = useState(false)

  // Wedding date: 12 April 2026, 09:00 WIB
  const weddingDate = new Date('2026-04-12T09:00:00+07:00').getTime()

  const eventDetails = {
    title: 'Pernikahan Azahra & Dwi',
    description: 'Acara Pernikahan Azahra Emiria & Dwi Nurhadiansyah',
    location: 'jl. Merak Blok 92 No. 3, Meruya Ilir Jakarta Barat 11620',
    startDate: '2026-04-12T09:00:00+07:00',
    endDate: '2026-04-12T16:00:00+07:00'
  }

  const addToGoogleCalendar = () => {
    const start = new Date(eventDetails.startDate).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    const end = new Date(eventDetails.endDate).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${start}/${end}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`
    
    window.open(url, '_blank')
    setShowCalendarOptions(false)
  }

  const addToOutlook = () => {
    const start = new Date(eventDetails.startDate).toISOString()
    const end = new Date(eventDetails.endDate).toISOString()
    
    const url = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&subject=${encodeURIComponent(eventDetails.title)}&startdt=${start}&enddt=${end}&body=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`
    
    window.open(url, '_blank')
    setShowCalendarOptions(false)
  }

  const generateICS = () => {
    const eventTitle = 'Pernikahan Azahra & Dwi'
    const eventDescription = 'Acara Pernikahan Azahra Emiria & Dwi Nurhadiansyah'
    const eventLocation = 'jl. Merak Blok 92 No. 3, Meruya Ilir Jakarta Barat 11620'
    const startDate = '20260412T020000Z' // 09:00 WIB = 02:00 UTC
    const endDate = '20260412T090000Z' // 16:00 WIB = 09:00 UTC

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Wedding Invitation//Azahra & Dwi//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'X-WR-CALNAME:Pernikahan Azahra & Dwi',
      'X-WR-TIMEZONE:Asia/Jakarta',
      'BEGIN:VEVENT',
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `SUMMARY:${eventTitle}`,
      `DESCRIPTION:${eventDescription}`,
      `LOCATION:${eventLocation}`,
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'BEGIN:VALARM',
      'TRIGGER:-PT24H',
      'ACTION:DISPLAY',
      'DESCRIPTION:Reminder: Pernikahan Azahra & Dwi besok!',
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n')

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'pernikahan-azahra-dwi.ics'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(link.href)
    setShowCalendarOptions(false)
  }

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

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.relative')) {
        setShowCalendarOptions(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      clearInterval(timer)
      document.removeEventListener('click', handleClickOutside)
    }
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

        </div>

        {/* Save the Date Button with Dropdown */}
        <div className="text-center mt-8 space-y-4">
          <div className="relative inline-block">
            <button
              onClick={() => setShowCalendarOptions(!showCalendarOptions)}
              className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-3"
            >
              <Calendar size={20} />
              Save the Date
              <ChevronDown size={18} className={`transition-transform ${showCalendarOptions ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {showCalendarOptions && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-slate-800 rounded-2xl shadow-2xl border border-white/10 overflow-hidden w-64 z-50">
                <button
                  onClick={addToGoogleCalendar}
                  className="w-full px-6 py-3 text-left text-white hover:bg-white/10 transition-colors flex items-center gap-3 border-b border-white/5"
                >
                  <Calendar size={18} className="text-rose-400" />
                  <span>Google Calendar</span>
                </button>
                <button
                  onClick={addToOutlook}
                  className="w-full px-6 py-3 text-left text-white hover:bg-white/10 transition-colors flex items-center gap-3 border-b border-white/5"
                >
                  <Calendar size={18} className="text-blue-400" />
                  <span>Outlook Calendar</span>
                </button>
                <button
                  onClick={generateICS}
                  className="w-full px-6 py-3 text-left text-white hover:bg-white/10 transition-colors flex items-center gap-3"
                >
                  <Calendar size={18} className="text-green-400" />
                  <span>Apple / Download ICS</span>
                </button>
              </div>
            )}
          </div>

          <p className="text-slate-400 text-sm">
            Simpan tanggal ke kalender Anda 📅
          </p>
        </div>
      </div>
    </div>
  )
}
