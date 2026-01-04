'use client'

import React from 'react'
import { MapPin, Navigation } from 'lucide-react'

export function LocationSection() {
  // Direct link to the exact location
  const locationUrl = "https://www.google.com/maps/place/Jami'+An-Noor+Ciputat+Mosque/@-6.3275943,106.7475552,17z/data=!4m6!3m5!1s0x2e69efb1eb34cae7:0x1e571996819f743c!8m2!3d-6.3275943!4d106.7475552!16s%2Fg%2F11k4x15wm4"
  
  // Embed URL for iframe
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6889!2d106.7453665!3d-6.3275943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efb1eb34cae7%3A0x1e571996819f743c!2sJami'%20An-Noor%20Ciputat%20Mosque!5e0!3m2!1sen!2sid!4v1704326400000!5m2!1sen!2sid"

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Alamat berhasil disalin!')
    }).catch(() => {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      try {
        document.execCommand('copy')
        alert('Alamat berhasil disalin!')
      } catch (err) {
        console.error('Failed to copy:', err)
      }
      document.body.removeChild(textarea)
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 pb-32">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Lokasi Acara
          </h2>
        </div>

        {/* Location Card */}
        <div className="rounded-3xl overflow-hidden border border-white/20">
          {/* Map Embed */}
          <div className="w-full h-80 md:h-96 relative">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

          {/* Location Details */}
          <div className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-rose-400" size={24} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl text-white mb-2">
                  Lokasi Akad & Resepsi
                </h3>
                <p className="text-slate-200 text-lg leading-relaxed">
                  Ballroom Masjid Jami&apos; An-Noor Ciputat
                </p>
                <p className="text-slate-400 mt-2">
                  Jl. Ir. H. Juanda No.1, Ciputat, Tangerang Selatan, Banten
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-rose-500 text-white text-center rounded-full hover:bg-rose-600 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Navigation size={20} />
                Buka di Google Maps
              </a>
              
              <button
                onClick={() => {
                  copyToClipboard("Ballroom Masjid Jami' An-Noor Ciputat, Jl. Ir. H. Juanda No.1, Ciputat, Tangerang Selatan")
                }}
                className="flex-1 px-6 py-3 bg-white/10 text-slate-200 text-center rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Salin Alamat
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-slate-300">
            Parkir tersedia di area masjid • Dress code: Formal & Sopan
          </p>
        </div>
      </div>
    </div>
  )
}
