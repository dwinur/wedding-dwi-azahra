'use client'

import React from 'react'
import { Calendar, Clock, MapPin, Heart } from 'lucide-react'

export function EventDetailsSection() {
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
            Waktu & Tempat
          </h2>
          <p className="text-slate-300 max-w-lg mx-auto">
            Kami akan sangat berbahagia bila Anda berkenan hadir untuk merayakan hari istimewa kami
          </p>
        </div>

        {/* Event Cards */}
        <div className="space-y-6">
          {/* Akad Nikah */}
          <div className="rounded-3xl p-8 md:p-10 border border-white/20">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex flex-col items-center text-center md:w-1/3">
                <div className="w-16 h-16 rounded-full bg-rose-500/20 flex items-center justify-center mb-4">
                  <Heart className="text-rose-400" size={32} strokeWidth={2} />
                </div>
                <h3 className="text-3xl text-white">Akad Nikah</h3>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4 text-slate-200">
                  <Calendar className="text-rose-400 flex-shrink-0" size={24} strokeWidth={2} />
                  <span className="text-lg">Minggu, 12 April 2026</span>
                </div>
                
                <div className="flex items-center gap-4 text-slate-200">
                  <Clock className="text-rose-400 flex-shrink-0" size={24} strokeWidth={2} />
                  <span className="text-lg">09:00 - 10:00 WIB</span>
                </div>
                
                <div className="flex items-start gap-4 text-slate-200">
                  <MapPin className="text-rose-400 flex-shrink-0 mt-1" size={24} strokeWidth={2} />
                  <span className="text-lg">Ballroom Masjid Jami&apos; An-Noor Ciputat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Resepsi */}
          <div className="rounded-3xl p-8 md:p-10 border border-white/20">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex flex-col items-center text-center md:w-1/3">
                <div className="w-16 h-16 rounded-full bg-rose-500/20 flex items-center justify-center mb-4">
                  <Heart className="text-rose-400" size={32} strokeWidth={2} />
                </div>
                <h3 className="text-3xl text-white">Resepsi</h3>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4 text-slate-200">
                  <Calendar className="text-rose-400 flex-shrink-0" size={24} strokeWidth={2} />
                  <span className="text-lg">Minggu, 12 April 2026</span>
                </div>
                
                <div className="flex items-center gap-4 text-slate-200">
                  <Clock className="text-rose-400 flex-shrink-0" size={24} strokeWidth={2} />
                  <span className="text-lg">11:00 - 13:00 WIB</span>
                </div>
                
                <div className="flex items-start gap-4 text-slate-200">
                  <MapPin className="text-rose-400 flex-shrink-0 mt-1" size={24} strokeWidth={2} />
                  <span className="text-lg">Ballroom Masjid Jami&apos; An-Noor Ciputat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
