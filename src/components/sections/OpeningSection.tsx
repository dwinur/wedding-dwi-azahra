'use client';

import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import Image from 'next/image';

interface OpeningSectionProps {
  guestName?: string;
  onOpenInvitation: () => void;
}

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
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-center mobile-full-height transition-all duration-[800ms] ease-out ${isClosing ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
        }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-home.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center w-full max-w-lg mx-auto px-6 h-full flex flex-col justify-center items-center gap-2 transition-all duration-[600ms] ${isClosing ? 'opacity-0 translate-y-[-20px]' : 'opacity-100 translate-y-0'
        }`}>

        {/* Header Text */}
        <div className="space-y-1 mt-2">
          <p
            className="tracking-[0.2em] text-sm uppercase font-bold"
            style={{
              fontFamily: 'var(--font-patrick), cursive',
              color: '#E0115F'
            }}
          >
            UNDANGAN PERNIKAHAN
          </p>

          {/* Couple Names */}
          <h1
            className="text-5xl md:text-6xl"
            style={{
              fontFamily: 'var(--font-caveat-brush), cursive',
              color: '#16407F'
            }}
          >
            Azahra & Dwi
          </h1>
        </div>

        {/* Center Photo */}
        <div className="relative w-48 h-auto md:w-64 flex-shrink-0 my-1">
          <Image
            src="/images/cover-dwi 2.png"
            alt="Azahra & Dwi"
            width={500}
            height={700}
            className="w-full h-auto object-contain drop-shadow-xl"
            priority
          />
        </div>

        {/* Date Section */}
        <div className="space-y-1">
          <p
            className="tracking-[0.2em] text-sm uppercase font-bold"
            style={{
              fontFamily: 'var(--font-patrick), cursive',
              color: '#E0115F'
            }}
          >
            HARI & TANGGAL
          </p>
          <p
            className="text-2xl md:text-3xl"
            style={{
              fontFamily: 'var(--font-patrick), cursive',
              color: '#16407F'
            }}
          >
            Minggu, 12 April 2026
          </p>
        </div>

        {/* Kepada Yth */}
        {guestName && (
          <div className="mt-1">
            <p
              style={{
                fontFamily: 'var(--font-patrick), cursive',
                color: '#16407F',
                fontSize: '14px'
              }}
            >
              Kepada Yth.
            </p>
            <p
              className="text-xl"
              style={{
                fontFamily: 'var(--font-caveat-brush), cursive',
                color: '#16407F',
              }}
            >
              {guestName}
            </p>
          </div>
        )}

        {/* Open Invitation Button */}
        <button
          onClick={handleClick}
          disabled={isClosing}
          className="px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2 disabled:opacity-70 mt-2 text-white font-medium"
          style={{
            backgroundColor: '#E0115F',
            fontFamily: 'var(--font-patrick), cursive',
            fontSize: '1.1rem'
          }}
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
