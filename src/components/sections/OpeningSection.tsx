'use client';

import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import Image from 'next/image';

interface OpeningSectionProps {
  guestName?: string;
  onOpenInvitation: () => void;
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
const Flower = ({ className = "", color = "#D4A84B" }: { className?: string; color?: string }) => (
  <svg width="32" height="40" viewBox="0 0 32 40" fill="none" className={className}>
    <circle cx="16" cy="12" r="5" fill={color} />
    <ellipse cx="16" cy="5" rx="4" ry="5" fill="#D4BFBF" />
    <ellipse cx="10" cy="10" rx="4" ry="5" fill="#D4BFBF" transform="rotate(-45 10 10)" />
    <ellipse cx="22" cy="10" rx="4" ry="5" fill="#D4BFBF" transform="rotate(45 22 10)" />
    <ellipse cx="10" cy="14" rx="4" ry="5" fill="#D4BFBF" transform="rotate(-135 10 14)" />
    <ellipse cx="22" cy="14" rx="4" ry="5" fill="#D4BFBF" transform="rotate(135 22 14)" />
    <path d="M16 17 Q14 28 16 38 Q18 28 16 17" stroke="#7BA7A7" strokeWidth="2" fill="none" />
    <path d="M16 25 Q10 22 8 26" stroke="#7BA7A7" strokeWidth="1.5" fill="none" />
    <path d="M16 30 Q22 27 24 31" stroke="#7BA7A7" strokeWidth="1.5" fill="none" />
  </svg>
);

// Wavy line component for organic borders
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

export function OpeningSection({ guestName, onOpenInvitation }: OpeningSectionProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      onOpenInvitation();
    }, 800);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-[800ms] ease-out ${isClosing ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
        }`}
      style={{ backgroundColor: '#F5F0E8' }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        <Star className="absolute top-[15%] left-[10%] text-mustard animate-twinkle" size={12} />
        <Star className="absolute top-[25%] right-[15%] text-mustard animate-twinkle" size={16} />
        <Star className="absolute bottom-[30%] left-[20%] text-mustard animate-twinkle" size={10} />
        <Star className="absolute top-[40%] right-[25%] text-mustard animate-twinkle" size={14} />
        <Star className="absolute bottom-[20%] right-[10%] text-mustard animate-twinkle" size={12} />

        {/* Butterflies */}
        <div className="absolute top-[20%] left-[5%] animate-flutter">
          <Butterfly />
        </div>
        <div className="absolute bottom-[25%] right-[8%] animate-flutter" style={{ animationDelay: '0.5s' }}>
          <Butterfly />
        </div>

        {/* Flowers */}
        <div className="absolute bottom-[10%] left-[8%]">
          <Flower color="#D4A84B" />
        </div>
        <div className="absolute bottom-[15%] right-[12%]">
          <Flower color="#D4A84B" />
        </div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center max-w-lg mx-auto px-6 transition-all duration-[600ms] ${isClosing ? 'opacity-0 translate-y-[-20px]' : 'opacity-100 translate-y-0'
        }`}>
        {/* Header Text */}
        <p
          className="tracking-widest text-xs md:text-sm mb-4 uppercase"
          style={{
            fontFamily: 'var(--font-patrick), cursive',
            color: '#5B8A8A'
          }}
        >
          Undangan Pernikahan
        </p>

        {/* Couple Names - Handwritten style */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl mb-6"
          style={{
            fontFamily: 'var(--font-caveat), cursive',
            color: '#8B5A5A',
            fontWeight: 600
          }}
        >
          Azahra & Dwi
        </h1>

        {/* Wavy Divider */}
        <div className="flex justify-center mb-8">
          <WavyLine />
        </div>

        {/* Guest Name */}
        {guestName && (
          <div className="mb-8">
            <p
              className="text-sm mb-2"
              style={{
                fontFamily: 'var(--font-patrick), cursive',
                color: '#5B8A8A'
              }}
            >
              Kepada Yth.
            </p>
            <p
              className="text-xl md:text-2xl"
              style={{
                fontFamily: 'var(--font-caveat), cursive',
                color: '#4A4A4A'
              }}
            >
              {guestName}
            </p>
          </div>
        )}

        {/* Couple Photo in ARCH FRAME (same as CoverSection) */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            {/* Hand-drawn style ornament on top */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <WavyLine width={80} />
            </div>

            {/* Organic Arch Frame - SAME as CoverSection */}
            <div
              className="p-3 md:p-4 shadow-xl"
              style={{
                background: 'linear-gradient(180deg, #EDE5D8 0%, #FAF8F5 100%)',
                border: '4px solid #D4BFBF',
                borderRadius: '50% 50% 45% 45% / 40% 40% 20% 20%'
              }}
            >
              <div
                className="overflow-hidden w-48 md:w-64 relative aspect-[3/4]"
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

        {/* Open Invitation Button */}
        <button
          onClick={handleClick}
          disabled={isClosing}
          className="px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-3 disabled:opacity-70"
          style={{
            backgroundColor: '#8B9DC3',
            color: 'white',
            fontFamily: 'var(--font-patrick), cursive',
            fontSize: '1.2rem'
          }}
        >
          <Mail size={24} />
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
