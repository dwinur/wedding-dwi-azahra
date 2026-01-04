'use client'

import React from 'react'

export function InvitationSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 pb-32">
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center">
          {/* Bismillah */}
          <p 
            className="text-3xl md:text-4xl text-white mb-8"
            style={{ fontFamily: "'Amiri', 'Traditional Arabic', serif" }}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          
          {/* Salam */}
          <p 
            className="text-2xl md:text-3xl text-white mb-12"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Assalamu&apos;alaikum Wr. Wb.
          </p>
          
          {/* Divider */}
          <div className="w-24 h-px bg-rose-400 mx-auto mb-12" />
          
          {/* Surat Ar-Rum Ayat 21 */}
          <div className="mb-12">
            <p 
              className="text-2xl md:text-3xl text-white mb-6 leading-loose"
              style={{ fontFamily: "'Amiri', 'Traditional Arabic', serif" }}
            >
              وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
            </p>
            <p className="text-slate-300 text-sm md:text-base italic">
              "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
            </p>
            <p className="text-slate-400 text-xs md:text-sm mt-2">
              (QS. Ar-Rum: 21)
            </p>
          </div>
          
          {/* Divider */}
          <div className="w-24 h-px bg-rose-400 mx-auto mb-12" />
          
          {/* Invitation Text */}
          <div className="space-y-4 text-slate-200 text-lg md:text-xl leading-relaxed">
            <p>Dengan memohon rahmat dan ridho Allah SWT,</p>
            <p>kami mengundang Bapak/Ibu/Saudara/i</p>
            <p>untuk hadir dan memberikan doa restu</p>
            <p>dalam acara pernikahan kami.</p>
          </div>
          
          {/* Divider */}
          <div className="w-24 h-px bg-rose-400 mx-auto my-12" />
          
          {/* Additional Message */}
          <p className="text-slate-300 text-base md:text-lg italic max-w-xl mx-auto">
            Kehadiran serta doa dari Anda akan menjadi anugerah yang begitu berharga 
            bagi kami dalam memulai perjalanan baru sebagai keluarga.
          </p>
        </div>
      </div>
    </div>
  )
}
