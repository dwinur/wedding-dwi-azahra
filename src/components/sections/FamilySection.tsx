'use client'

import React from 'react'
import { Instagram } from 'lucide-react'
import Image from 'next/image'

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

// Decorative Butterfly Component
const Butterfly = ({ className = "", size = 1 }: { className?: string; size?: number }) => (
  <svg width={40 * size} height={32 * size} viewBox="0 0 40 32" fill="none" className={className}>
    <ellipse cx="10" cy="12" rx="9" ry="11" fill="#A8B6D1" opacity="0.8" />
    <ellipse cx="30" cy="12" rx="9" ry="11" fill="#A8B6D1" opacity="0.8" />
    <ellipse cx="8" cy="24" rx="5" ry="7" fill="#D4BFBF" opacity="0.8" />
    <ellipse cx="32" cy="24" rx="5" ry="7" fill="#D4BFBF" opacity="0.8" />
    <rect x="19" y="6" width="2" height="20" rx="1" fill="#6B6B6B" />
  </svg>
);

// Decorative Flower Component
const Flower = ({ className = "" }: { className?: string }) => (
  <svg width="24" height="32" viewBox="0 0 32 40" fill="none" className={className}>
    <circle cx="16" cy="12" r="5" fill="#D4A84B" />
    <ellipse cx="16" cy="5" rx="4" ry="5" fill="#D4BFBF" />
    <ellipse cx="10" cy="10" rx="4" ry="5" fill="#D4BFBF" transform="rotate(-45 10 10)" />
    <ellipse cx="22" cy="10" rx="4" ry="5" fill="#D4BFBF" transform="rotate(45 22 10)" />
    <ellipse cx="10" cy="14" rx="4" ry="5" fill="#D4BFBF" transform="rotate(-135 10 14)" />
    <ellipse cx="22" cy="14" rx="4" ry="5" fill="#D4BFBF" transform="rotate(135 22 14)" />
    <path d="M16 17 L16 38" stroke="#7BA7A7" strokeWidth="2" />
    <ellipse cx="12" cy="28" rx="4" ry="2" fill="#7BA7A7" transform="rotate(-30 12 28)" />
    <ellipse cx="20" cy="32" rx="4" ry="2" fill="#7BA7A7" transform="rotate(30 20 32)" />
  </svg>
);

// Small decorative flower
const SmallFlower = ({ color = "#8B9DC3" }: { color?: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="3" fill={color} />
    <ellipse cx="10" cy="4" rx="2.5" ry="3" fill={color} opacity="0.6" />
    <ellipse cx="5" cy="8" rx="2.5" ry="3" fill={color} opacity="0.6" transform="rotate(-45 5 8)" />
    <ellipse cx="15" cy="8" rx="2.5" ry="3" fill={color} opacity="0.6" transform="rotate(45 15 8)" />
    <ellipse cx="5" cy="13" rx="2.5" ry="3" fill={color} opacity="0.6" transform="rotate(-135 5 13)" />
    <ellipse cx="15" cy="13" rx="2.5" ry="3" fill={color} opacity="0.6" transform="rotate(135 15 13)" />
  </svg>
);

// Heart Component
const Heart = ({ className = "" }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#C4A5A5" className={className}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

// Arch Frame Component
const ArchFrame = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative ${className}`}>
    {/* Decorative vine/ornament on top */}
    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-1">
      <div className="w-12 h-px" style={{ backgroundColor: '#7BA7A7' }} />
      <SmallFlower color="#7BA7A7" />
      <div className="w-12 h-px" style={{ backgroundColor: '#7BA7A7' }} />
    </div>

    {/* Frame */}
    <div
      className="rounded-t-full rounded-b-lg p-3 shadow-lg"
      style={{
        background: 'linear-gradient(180deg, #5B8A8A 0%, #4A7A7A 100%)',
        border: '4px solid #EDE5D8'
      }}
    >
      <div className="rounded-t-full rounded-b-lg overflow-hidden">
        {children}
      </div>
    </div>

    {/* Decorative base */}
    <div
      className="mx-auto -mt-1 h-4 rounded-b-lg"
      style={{
        width: '90%',
        background: 'linear-gradient(180deg, #7BA7A7 0%, #5B8A8A 100%)',
        border: '2px solid #EDE5D8',
        borderTop: 'none'
      }}
    />
  </div>
);

export function FamilySection() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-24 pb-32 relative"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Star className="absolute top-[10%] left-[10%] text-mustard animate-twinkle" size={14} />
        <Star className="absolute top-[15%] right-[15%] text-mustard animate-twinkle" size={12} />
        <Star className="absolute top-[50%] left-[5%] text-mustard animate-twinkle" size={10} />
        <Star className="absolute bottom-[30%] right-[8%] text-mustard animate-twinkle" size={16} />

        <div className="absolute top-[20%] left-[3%] animate-flutter">
          <Butterfly size={0.8} />
        </div>
        <div className="absolute bottom-[15%] right-[5%] animate-flutter" style={{ animationDelay: '0.7s' }}>
          <Butterfly size={0.8} />
        </div>

        <div className="absolute bottom-[10%] left-[8%]">
          <Flower />
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full space-y-20 md:space-y-28 relative z-10">

        {/* Removed duplicate Assalamu'alaikum header */}

        {/* GROOM SECTION */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Photo */}
          <div className="w-48 md:w-56">
            <ArchFrame>
              <div className="w-full aspect-[3/4] relative">
                <Image
                  src="/images/masa-kecil-cpp.jpg"
                  alt="Foto Pengantin Pria"
                  fill
                  className="object-cover"
                />
              </div>
            </ArchFrame>
          </div>

          {/* Info */}
          <div className="text-center md:text-left flex-1">
            <Star className="text-mustard mb-2 mx-auto md:mx-0" size={12} />
            <h3
              className="text-3xl md:text-4xl lg:text-5xl mb-4"
              style={{
                fontFamily: 'var(--font-caveat), cursive',
                color: '#8B5A5A'
              }}
            >
              Dwi Nurhadiansyah
            </h3>
            <p
              className="text-sm md:text-base mb-2"
              style={{
                fontFamily: 'var(--font-patrick), cursive',
                color: '#5B8A8A'
              }}
            >
              Putra dari
            </p>
            <p
              className="text-sm md:text-base"
              style={{
                fontFamily: 'var(--font-patrick), cursive',
                color: '#6B6B6B'
              }}
            >
              Bapak Muhadi &amp; Ibu Neneng Arsa
            </p>

            <a
              href="https://instagram.com/dwi_nhd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 transition-colors"
              style={{ color: '#8B9DC3' }}
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Heart Divider */}
        <div className="flex justify-center">
          <Heart className="animate-pulse" />
        </div>

        {/* BRIDE SECTION */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          {/* Info */}
          <div className="text-center md:text-right flex-1">
            <Star className="text-mustard mb-2 mx-auto md:ml-auto md:mr-0" size={12} />
            <h3
              className="text-3xl md:text-4xl lg:text-5xl mb-4"
              style={{
                fontFamily: 'var(--font-caveat), cursive',
                color: '#8B5A5A'
              }}
            >
              Azahra Emiria Putri Lima
            </h3>
            <p
              className="text-sm md:text-base mb-2"
              style={{
                fontFamily: 'var(--font-patrick), cursive',
                color: '#5B8A8A'
              }}
            >
              Putri dari
            </p>
            <p
              className="text-sm md:text-base"
              style={{
                fontFamily: 'var(--font-patrick), cursive',
                color: '#6B6B6B'
              }}
            >
              Bapak Irwan Sadewa &amp; Ibu Esther Maria Tuffah
            </p>

            <a
              href="https://instagram.com/azahraepl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 transition-colors"
              style={{ color: '#8B9DC3' }}
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Photo */}
          <div className="w-48 md:w-56">
            <ArchFrame>
              <div className="w-full aspect-[3/4] relative">
                <Image
                  src="/images/masa-kecil-cpw.jpg"
                  alt="Foto Pengantin Wanita"
                  fill
                  className="object-cover"
                />
              </div>
            </ArchFrame>
          </div>
        </div>

      </div>
    </div>
  )
}
