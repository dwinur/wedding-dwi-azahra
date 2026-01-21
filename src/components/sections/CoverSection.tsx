'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

interface CoverSectionProps {
  guestName?: string
  onScrollToNext: () => void
}

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
const Butterfly = ({ className = "" }: { className?: string }) => (
  <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className={className}>
    <ellipse cx="10" cy="12" rx="9" ry="11" fill="#A8B6D1" opacity="0.8" />
    <ellipse cx="30" cy="12" rx="9" ry="11" fill="#A8B6D1" opacity="0.8" />
    <ellipse cx="8" cy="24" rx="5" ry="7" fill="#D4BFBF" opacity="0.8" />
    <ellipse cx="32" cy="24" rx="5" ry="7" fill="#D4BFBF" opacity="0.8" />
    <rect x="19" y="6" width="2" height="20" rx="1" fill="#6B6B6B" />
  </svg>
);

// Decorative Flower Component
const Flower = ({ className = "" }: { className?: string }) => (
  <svg width="32" height="40" viewBox="0 0 32 40" fill="none" className={className}>
    <circle cx="16" cy="12" r="5" fill="#D4A84B" />
    <ellipse cx="16" cy="5" rx="4" ry="5" fill="#D4BFBF" />
    <ellipse cx="10" cy="10" rx="4" ry="5" fill="#D4BFBF" transform="rotate(-45 10 10)" />
    <ellipse cx="22" cy="10" rx="4" ry="5" fill="#D4BFBF" transform="rotate(45 22 10)" />
    <ellipse cx="10" cy="14" rx="4" ry="5" fill="#D4BFBF" transform="rotate(-135 10 14)" />
    <ellipse cx="22" cy="14" rx="4" ry="5" fill="#D4BFBF" transform="rotate(135 22 14)" />
    <path d="M16 17 Q14 28 16 38 Q18 28 16 17" stroke="#7BA7A7" strokeWidth="2" fill="none" />
    <path d="M16 25 Q10 22 8 26" stroke="#7BA7A7" strokeWidth="1.5" fill="none" />
  </svg>
);

// Hand-drawn style border flower
const BorderFlower = ({ color = "#C4A5A5" }: { color?: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="3" fill={color} />
    <path d="M10 2 Q12 6 10 7 Q8 6 10 2" fill={color} opacity="0.7" />
    <path d="M18 10 Q14 12 13 10 Q14 8 18 10" fill={color} opacity="0.7" />
    <path d="M10 18 Q8 14 10 13 Q12 14 10 18" fill={color} opacity="0.7" />
    <path d="M2 10 Q6 8 7 10 Q6 12 2 10" fill={color} opacity="0.7" />
  </svg>
);

// Wavy line component
const WavyLine = ({ width = 120, className = "" }: { width?: number; className?: string }) => (
  <svg width={width} height="8" viewBox={`0 0 ${width} 8`} className={className}>
    <path
      d={`M0 4 Q${width * 0.125} 0 ${width * 0.25} 4 T${width * 0.5} 4 T${width * 0.75} 4 T${width} 4`}
      stroke="#C4A5A5"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export function CoverSection({ guestName, onScrollToNext }: CoverSectionProps) {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      {/* Hand-drawn style flower border at top */}
      <div className="absolute top-0 left-0 right-0 flex justify-center gap-3 py-4 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <BorderFlower key={i} color={i % 2 === 0 ? "#C4A5A5" : "#7BA7A7"} />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        <Star className="absolute top-[15%] left-[8%] text-mustard animate-twinkle" size={14} />
        <Star className="absolute top-[20%] right-[12%] text-mustard animate-twinkle" size={18} />
        <Star className="absolute bottom-[35%] left-[15%] text-mustard animate-twinkle" size={12} />
        <Star className="absolute top-[45%] right-[20%] text-mustard animate-twinkle" size={16} />
        <Star className="absolute bottom-[25%] right-[8%] text-mustard animate-twinkle" size={14} />
        <Star className="absolute bottom-[15%] left-[25%] text-mustard animate-twinkle" size={10} />

        {/* Butterflies */}
        <div className="absolute top-[18%] left-[5%] animate-flutter">
          <Butterfly />
        </div>
        <div className="absolute bottom-[20%] right-[5%] animate-flutter" style={{ animationDelay: '0.5s' }}>
          <Butterfly />
        </div>

        {/* Flowers */}
        <div className="absolute bottom-[8%] left-[5%]">
          <Flower />
        </div>
        <div className="absolute bottom-[12%] right-[8%]">
          <Flower />
        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10 pt-10">

        {/* Removed redundant 'The wedding of' and 'Kepada Yth' blocks to reduce repetition */}

        {/* Couple Names - Handwriting font */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl mb-3"
          style={{
            fontFamily: 'var(--font-caveat), cursive',
            color: '#8B5A5A',
            fontWeight: 600
          }}
        >
          Azahra & Dwi
        </h1>

        {/* Date - Handwriting */}
        <p
          className="text-lg md:text-xl mb-10"
          style={{
            fontFamily: 'var(--font-patrick), cursive',
            color: '#6B6B6B'
          }}
        >
          Minggu, 12 April 2026
        </p>

        {/* Couple Photo in organic arch frame */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Hand-drawn style ornament on top */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <WavyLine width={80} />
            </div>

            {/* Organic Arch Frame */}
            <div
              className="p-4 md:p-5 shadow-xl"
              style={{
                background: 'linear-gradient(180deg, #EDE5D8 0%, #FAF8F5 100%)',
                border: '4px solid #D4BFBF',
                borderRadius: '50% 50% 45% 45% / 40% 40% 20% 20%'
              }}
            >
              <div
                className="overflow-hidden w-64 md:w-80 lg:w-96 relative aspect-[3/4]"
                style={{ borderRadius: '50% 50% 40% 40% / 35% 35% 15% 15%' }}
              >
                <Image
                  src="/images/cover-couple.png"
                  alt="Azahra & Dwi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bottom ornament */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <WavyLine width={60} />
            </div>
          </div>
        </div>

        {/* Scroll button - organic shape */}
        <button
          onClick={onScrollToNext}
          className="w-12 h-12 flex items-center justify-center mx-auto transition-all duration-300 group animate-bounce"
          style={{
            border: '2px solid #8B9DC3',
            backgroundColor: 'transparent',
            borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%'
          }}
        >
          <ChevronDown
            className="transition-colors group-hover:text-white"
            style={{ color: '#8B9DC3' }}
            size={24}
          />
        </button>
      </div>
    </div>
  )
}
