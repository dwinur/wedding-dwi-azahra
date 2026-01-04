'use client';

import React, { useState } from 'react';
import { Mail } from 'lucide-react';

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
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-[800ms] ease-out ${
        isClosing ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/cinematic.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className={`absolute inset-0 bg-black/60 transition-opacity duration-[800ms] ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`} />
      
      {/* Content */}
      <div className={`relative z-10 text-center max-w-lg mx-auto px-6 transition-all duration-[600ms] ${
        isClosing ? 'opacity-0 translate-y-[-20px]' : 'opacity-100 translate-y-0'
      }`}>
        {/* Header Text */}
        <p className="tracking-[0.3em] text-white/90 text-xs md:text-sm mb-4 uppercase">
          The Wedding of
        </p>
        
        {/* Couple Names */}
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl mb-6 text-white"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          Azahra & Dwi
        </h1>
        
        {/* Divider */}
        <div className="w-24 h-px bg-rose-400 mx-auto mb-8" />
        
        {/* Guest Name */}
        {guestName && (
          <div className="mb-8">
            <p className="text-white/70 text-sm mb-2">Kepada Yth.</p>
            <p className="text-white text-xl md:text-2xl" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              {guestName}
            </p>
          </div>
        )}
        
        {/* Couple Photo in Arch Frame */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            <div className="bg-white rounded-t-full rounded-b-3xl p-3 md:p-4 shadow-2xl">
              <div className="rounded-t-full rounded-b-3xl overflow-hidden w-48 md:w-64">
                <img 
                  src="/images/cover-couple.png" 
                  alt="Azahra & Dwi" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Open Invitation Button */}
        <button
          onClick={handleClick}
          disabled={isClosing}
          className="px-10 py-4 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-3 disabled:opacity-70"
        >
          <Mail size={24} />
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
