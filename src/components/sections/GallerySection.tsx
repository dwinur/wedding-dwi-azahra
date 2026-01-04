'use client'

import React from 'react'
import Image from 'next/image'

const galleryImages = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
  '/images/gallery-7.jpg',
  '/images/gallery-8.jpg',
  '/images/gallery-9.jpg',
]

export function GallerySection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 pb-32">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="tracking-widest text-slate-400 text-sm mb-4 uppercase">
            Our Gallery
          </p>
          <h2 
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Moments to Remember
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <div 
              key={index}
              className="aspect-square rounded-3xl bg-gradient-to-br from-slate-600 to-slate-700 overflow-hidden hover:scale-105 transition-all duration-300 border border-white/10 relative"
            >
              <Image
                src={src}
                alt={`Gallery photo ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
