'use client'

import React from 'react'
import { MapPin, Navigation } from 'lucide-react'

// Decorative Star Component
const Star = ({ className = "", size = 16 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

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
    <div
      className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 pb-32 relative"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      {/* Decorative Stars */}
      <Star className="absolute top-[15%] left-[10%] text-mustard animate-twinkle" size={14} />
      <Star className="absolute top-[20%] right-[12%] text-mustard animate-twinkle" size={12} />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{
              fontFamily: 'var(--font-caveat), cursive',
              color: '#5B8A8A'
            }}
          >
            Lokasi Acara
          </h2>
        </div>

        {/* Location Card */}
        <div
          className="rounded-3xl overflow-hidden shadow-lg"
          style={{
            backgroundColor: 'white',
            border: '2px solid #EDE5D8'
          }}
        >
          {/* Map Embed */}
          <div className="w-full h-64 md:h-80 relative">
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
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#D4BFBF' }}
              >
                <MapPin style={{ color: '#8B5A5A' }} size={24} />
              </div>

              <div className="flex-1">
                <h3
                  className="text-xl mb-2"
                  style={{
                    fontFamily: 'var(--font-caveat), cursive',
                    color: '#4A4A4A',
                    fontWeight: 600,
                    fontSize: '1.5rem'
                  }}
                >
                  Lokasi Akad & Resepsi
                </h3>
                <p
                  className="text-lg leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-patrick), cursive',
                    color: '#5B8A8A'
                  }}
                >
                  Ballroom Masjid Jami&apos; An-Noor Ciputat
                </p>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: 'var(--font-patrick), cursive',
                    color: '#8B8B8B'
                  }}
                >
                  Jl. RE Martadinata No.60, Cipayung, Kec. Ciputat, Kota Tangerang Selatan, Banten 15411
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 text-center rounded-full transition-all duration-300 hover:scale-105 shadow-md inline-flex items-center justify-center gap-2"
                style={{
                  backgroundColor: '#8B9DC3',
                  color: 'white',
                  fontFamily: 'var(--font-patrick), cursive'
                }}
              >
                <Navigation size={20} />
                Buka di Google Maps
              </a>

              <button
                onClick={() => {
                  copyToClipboard("Ballroom Masjid Jami' An-Noor Ciputat, Jl. Ir. H. Juanda No.1, Ciputat, Tangerang Selatan")
                }}
                className="flex-1 px-6 py-3 text-center rounded-full transition-all duration-300"
                style={{
                  backgroundColor: '#EDE5D8',
                  color: '#6B6B6B',
                  fontFamily: 'var(--font-patrick), cursive'
                }}
              >
                Salin Alamat
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p
            style={{
              fontFamily: 'var(--font-patrick), cursive',
              color: '#8B8B8B'
            }}
          >
            Parkir tersedia di area masjid <br />
            Dress code: Formal & Sopan
          </p>
        </div>
      </div>
    </div>
  )
}
