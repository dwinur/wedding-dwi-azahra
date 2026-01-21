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
    location: "Ballroom Masjid Jami' An-Noor Ciputat, Jl. RE Martadinata No.60, Cipayung, Kec. Ciputat, Kota Tangerang Selatan, Banten 15411",
    startDate: '2026-04-12T09:00:00+07:00',
    endDate: '2026-04-12T16:00:00+07:00',
    mapsUrl: 'https://maps.google.com/?q=Masjid+Jami+An-Noor+Ciputat+Jl.+RE+Martadinata+No.60+Cipayung+Ciputat+Tangerang+Selatan'
  }

  const addToGoogleCalendar = () => {
    const start = new Date(eventDetails.startDate).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    const end = new Date(eventDetails.endDate).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    const descriptionWithMap = `${eventDetails.description}\n\nGoogle Maps: ${eventDetails.mapsUrl}`

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${start}/${end}&details=${encodeURIComponent(descriptionWithMap)}&location=${encodeURIComponent(eventDetails.location)}`

    window.open(url, '_blank')
    setShowCalendarOptions(false)
  }

  const addToOutlook = () => {
    const start = new Date(eventDetails.startDate).toISOString()
    const end = new Date(eventDetails.endDate).toISOString()
    const descriptionWithMap = `${eventDetails.description}\n\nGoogle Maps: ${eventDetails.mapsUrl}`

    const url = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&subject=${encodeURIComponent(eventDetails.title)}&startdt=${start}&enddt=${end}&body=${encodeURIComponent(descriptionWithMap)}&location=${encodeURIComponent(eventDetails.location)}`

    window.open(url, '_blank')
    setShowCalendarOptions(false)
  }

  const generateICS = () => {
    const eventTitle = 'Pernikahan Azahra & Dwi'
    const eventDescription = `Acara Pernikahan Azahra Emiria & Dwi Nurhadiansyah\n\nGoogle Maps: ${eventDetails.mapsUrl}`
    const eventLocation = "Ballroom Masjid Jami' An-Noor Ciputat, Jl. RE Martadinata No.60, Cipayung, Kec. Ciputat, Kota Tangerang Selatan, Banten 15411"
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
      if (!target.closest('.calendar-dropdown')) {
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
    <div
      className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 pb-32"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Arch Container */}
        <div
          className="rounded-t-[200px] rounded-b-3xl p-8 md:p-12 relative overflow-hidden"
          style={{ backgroundColor: '#8B9DC3' }}
        >
          {/* Decorative fountain illustration placeholder */}
          <div className="flex justify-center mb-8">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                {/* Simple fountain icon */}
                <path d="M24 8 L24 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 12 Q24 8 28 12" stroke="white" strokeWidth="2" fill="none" />
                <ellipse cx="24" cy="24" rx="12" ry="4" stroke="white" strokeWidth="2" fill="none" />
                <path d="M12 24 Q12 36 24 36 Q36 36 36 24" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <p
              className="text-xl md:text-2xl text-white mb-2"
              style={{ fontFamily: 'var(--font-patrick), cursive' }}
            >
              Kami akan menikah,
            </p>
            <p
              className="text-base md:text-lg text-white/90"
              style={{ fontFamily: 'var(--font-patrick), cursive' }}
            >
              dan kami ingin anda menjadi bagian dari<br />hari istimewa kami!
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-3 md:gap-6 mb-8">
            {timeBlocks.map((block, index) => (
              <div key={index} className="text-center">
                <div
                  className="rounded-2xl p-3 md:p-4 mb-2 shadow-md"
                  style={{ backgroundColor: '#F5F0E8' }}
                >
                  <span
                    className="text-2xl md:text-4xl lg:text-5xl font-bold"
                    style={{
                      fontFamily: 'var(--font-patrick), cursive',
                      color: '#8B5A5A'
                    }}
                  >
                    {mounted ? String(block.value).padStart(2, '0') : '--'}
                  </span>
                </div>
                <span
                  className="text-sm md:text-base"
                  style={{
                    fontFamily: 'var(--font-patrick), cursive',
                    color: '#8B5A5A'
                  }}
                >
                  {block.label}
                </span>
              </div>
            ))}
          </div>

          {/* Save the Date Button with Dropdown */}
          <div className="text-center calendar-dropdown">
            <div className="relative inline-block">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowCalendarOptions(!showCalendarOptions)
                }}
                className="px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-3"
                style={{
                  backgroundColor: '#F5F0E8',
                  color: '#8B5A5A'
                }}
              >
                <Calendar size={20} />
                <span style={{ fontFamily: 'var(--font-patrick), cursive' }}>
                  Save The date
                </span>
                <ChevronDown size={18} className={`transition-transform ${showCalendarOptions ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {showCalendarOptions && (
                <div
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 rounded-2xl shadow-2xl overflow-hidden w-64 z-50"
                  style={{ backgroundColor: '#F5F0E8' }}
                >
                  <button
                    onClick={addToGoogleCalendar}
                    className="w-full px-6 py-3 text-left transition-colors flex items-center gap-3 border-b"
                    style={{
                      color: '#4A4A4A',
                      borderColor: '#EDE5D8'
                    }}
                  >
                    <Calendar size={18} style={{ color: '#8B5A5A' }} />
                    <span>Google Calendar</span>
                  </button>
                  <button
                    onClick={addToOutlook}
                    className="w-full px-6 py-3 text-left transition-colors flex items-center gap-3 border-b"
                    style={{
                      color: '#4A4A4A',
                      borderColor: '#EDE5D8'
                    }}
                  >
                    <Calendar size={18} style={{ color: '#8B9DC3' }} />
                    <span>Outlook Calendar</span>
                  </button>
                  <button
                    onClick={generateICS}
                    className="w-full px-6 py-3 text-left transition-colors flex items-center gap-3"
                    style={{ color: '#4A4A4A' }}
                  >
                    <Calendar size={18} style={{ color: '#7BA7A7' }} />
                    <span>Apple / Download ICS</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
