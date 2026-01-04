'use client'

import React from 'react'
import { Heart } from 'lucide-react'

export function ClosingSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24">
      <div className="max-w-2xl mx-auto text-center">
        {/* Decorative Line */}
        <div className="w-16 h-px bg-rose-400 mx-auto mb-8"></div>
        
        {/* Heart Icon */}
        <Heart className="text-rose-400 mx-auto mb-8" size={48} strokeWidth={1.5} />
        
        {/* Main Message */}
        <h2 
          className="text-4xl md:text-5xl text-white mb-8"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          Terima Kasih
        </h2>
        
        <p className="text-slate-300 text-lg mb-12 leading-relaxed">
          Kehadiran dan doa Anda pada hari istimewa kami sangat berarti bagi kami. 
          Kami tidak sabar untuk merayakan momen berbahagia ini bersama Anda.
        </p>
        
        {/* Quote */}
        <blockquote className="border-l-4 border-rose-400 pl-6 italic text-slate-200 mb-12 text-left">
          &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, 
          agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.&rdquo;
          <footer className="text-sm text-slate-400 mt-2 not-italic">
            - QS. Ar-Rum: 21
          </footer>
        </blockquote>
        
        {/* Decorative Line */}
        <div className="w-16 h-px bg-rose-400 mx-auto mb-8"></div>
        
        {/* Signature */}
        <p 
          className="text-3xl text-rose-400 mb-4"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          Azahra & Dwi
        </p>
        
        {/* RSVP Button */}
        <div className="mt-12">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Kembali ke Atas
          </button>
        </div>
      </div>
    </div>
  )
}
