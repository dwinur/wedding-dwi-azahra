'use client'

import React, { useState } from 'react'
import { Gift, X, Copy, Check, CreditCard, Home } from 'lucide-react'

export function WeddingGiftSection() {
  const [showModal, setShowModal] = useState(false)
  const [copiedBank, setCopiedBank] = useState(false)
  const [copiedAddress, setCopiedAddress] = useState(false)

  const bankAccount = "1234567890"
  const accountName = "Azahra Emiria"
  const address = "Jl. Contoh Alamat No. 123, Jakarta Selatan, DKI Jakarta 12345"

  const copyToClipboard = (text: string, type: 'bank' | 'address') => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'bank') {
        setCopiedBank(true)
        setTimeout(() => setCopiedBank(false), 2000)
      } else {
        setCopiedAddress(true)
        setTimeout(() => setCopiedAddress(false), 2000)
      }
    }).catch(() => {
      alert('Gagal menyalin. Silakan copy manual.')
    })
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 pb-32">
        <div className="max-w-4xl mx-auto w-full">
          {/* Gift Card */}
          <div className="rounded-3xl p-10 text-center border border-white/20">
            <div className="w-20 h-20 rounded-full bg-rose-500/20 flex items-center justify-center mx-auto mb-6">
              <Gift className="text-rose-400" size={40} />
            </div>

            <p className="tracking-widest text-slate-400 text-sm mb-4 uppercase">
              Send Gift
            </p>
            
            <h3 
              className="text-4xl md:text-5xl text-white mb-4"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Hadiah Pernikahan
            </h3>
            
            <p className="text-slate-300 mb-8 max-w-md mx-auto leading-relaxed">
              Bagi yang ingin memberikan tanda kasih bisa mengirimkan melalui fitur dibawah ini
            </p>

            <button
              onClick={() => setShowModal(true)}
              className="px-10 py-4 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-3"
            >
              <Gift size={24} />
              Kirim Hadiah
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10">
            {/* Modal Header */}
            <div className="sticky top-0 bg-slate-800 border-b border-white/10 px-6 py-4 flex items-center justify-between rounded-t-3xl">
              <h3 className="text-2xl text-white">Informasi Pengiriman</h3>
              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X className="text-slate-300" size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Bank Account */}
              <div className="bg-gradient-to-br from-rose-500/20 to-blue-500/20 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur">
                    <CreditCard className="text-rose-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Transfer Bank</p>
                    <h4 className="text-white">BCA</h4>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-4 mb-3 border border-white/10">
                  <p className="text-xs text-slate-400 mb-1">Nomor Rekening</p>
                  <p className="text-2xl text-white tracking-wide mb-1">{bankAccount}</p>
                  <p className="text-sm text-slate-300">a.n. {accountName}</p>
                </div>

                <button
                  onClick={() => copyToClipboard(bankAccount, 'bank')}
                  className="w-full px-4 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors inline-flex items-center justify-center gap-2"
                >
                  {copiedBank ? (
                    <>
                      <Check size={18} />
                      Tersalin!
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      Salin Nomor Rekening
                    </>
                  )}
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-white/10"></div>
                <span className="text-slate-400 text-sm">atau</span>
                <div className="flex-1 h-px bg-white/10"></div>
              </div>

              {/* Address */}
              <div className="bg-gradient-to-br from-blue-500/20 to-rose-500/20 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur">
                    <Home className="text-rose-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Kirim ke</p>
                    <h4 className="text-white">Alamat Rumah</h4>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-4 mb-3 border border-white/10">
                  <p className="text-slate-200 leading-relaxed">
                    {address}
                  </p>
                  <p className="text-sm text-slate-300 mt-2">a.n. {accountName}</p>
                </div>

                <button
                  onClick={() => copyToClipboard(address, 'address')}
                  className="w-full px-4 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2 border border-white/20"
                >
                  {copiedAddress ? (
                    <>
                      <Check size={18} />
                      Tersalin!
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      Salin Alamat
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
