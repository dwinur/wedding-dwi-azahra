'use client'

import React from 'react'
import { Instagram } from 'lucide-react'
import Image from 'next/image'

export function FamilySection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24 pb-32">
      <div className="max-w-7xl mx-auto w-full space-y-16 md:space-y-24">
        
        {/* BRIDE SECTION */}
        <div className="rounded-3xl border border-white/20 overflow-hidden p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Name at Top */}
            <h3 
              className="text-4xl md:text-5xl lg:text-6xl text-white text-center mb-12 md:mb-16 leading-tight"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Azahra Emiria<br/>Putri Lima
            </h3>

            {/* Photos - Side by Side */}
            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-16">
              {/* Photo Orang Tua (Left) */}
              <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-slate-600 to-slate-700 overflow-hidden relative">
                <Image
                  src="/images/orangtua-cpw-4.jpg"
                  alt="Foto Orang Tua Pengantin Wanita"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Photo Masa Kecil (Right) */}
              <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-slate-600 to-slate-700 overflow-hidden relative">
                <Image
                  src="/images/masa-kecil-cpw.jpg"
                  alt="Foto Masa Kecil Pengantin Wanita"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Parents Info at Bottom */}
            <div className="text-center space-y-2">
              <p className="text-white text-lg md:text-xl" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Anak dari
              </p>
              <p className="text-white text-lg md:text-xl" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Bapak Irwan Sadewa &
              </p>
              <p className="text-white text-lg md:text-xl mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Ibu Esther Maria Tuffah
              </p>
              
              <a 
                href="https://instagram.com/azahraepl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors mt-4"
              >
                <Instagram size={20} />
                {/* <span>@azahraemiria</span> */}
              </a>
            </div>
            
          </div>
        </div>

        {/* GROOM SECTION */}
        <div className="rounded-3xl border border-white/20 overflow-hidden p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Name at Top */}
            <h3 
              className="text-4xl md:text-5xl lg:text-6xl text-white text-center mb-12 md:mb-16 leading-tight"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Dwi<br/>Nurhadiansyah
            </h3>

            {/* Photos - Side by Side */}
            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-16">
              {/* Photo Orang Tua (Left) */}
              <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-slate-600 to-slate-700 overflow-hidden relative">
                <Image
                  src="/images/orangtua-cpp.jpg"
                  alt="Foto Orang Tua Pengantin Pria"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Photo Masa Kecil (Right) */}
              <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-slate-600 to-slate-700 overflow-hidden relative">
                <Image
                  src="/images/masa-kecil-cpp.jpg"
                  alt="Foto Masa Kecil Pengantin Pria"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Parents Info at Bottom */}
            <div className="text-center space-y-2">
              <p className="text-white text-lg md:text-xl" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Anak dari
              </p>
              <p className="text-white text-lg md:text-xl" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Bapak Muhadi &
              </p>
              <p className="text-white text-lg md:text-xl mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Ibu Neneng
              </p>
              
              <a 
                href="https://instagram.com/dwi_nurhadiansyah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors mt-4"
              >
                <Instagram size={20} />
                <span>@dwi_nurhadiansyah</span>
              </a>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  )
}
