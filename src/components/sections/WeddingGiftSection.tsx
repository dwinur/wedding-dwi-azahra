'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Gift, X, Copy, Check, CreditCard, Home } from 'lucide-react'

// Envelope Icon Component
const EnvelopeIcon = () => (
  <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
    {/* Envelope body */}
    <rect x="5" y="10" width="70" height="45" rx="4" fill="#F5F0E8" stroke="#8B9DC3" strokeWidth="2" />
    {/* Envelope flap */}
    <path d="M5 14 L40 35 L75 14" fill="none" stroke="#8B9DC3" strokeWidth="2" />
    {/* Letter inside */}
    <rect x="15" y="5" width="50" height="35" rx="2" fill="white" stroke="#8B9DC3" strokeWidth="1" />
    {/* Decorative waves on letter */}
    <path d="M22 15 Q30 12 38 15 Q46 18 54 15" stroke="#8B9DC3" strokeWidth="1" fill="none" />
    <path d="M22 22 Q30 19 38 22 Q46 25 54 22" stroke="#8B9DC3" strokeWidth="1" fill="none" />
    {/* Hearts */}
    <circle cx="60" cy="8" r="3" fill="#C4A5A5" />
    <circle cx="65" cy="5" r="2" fill="#D4BFBF" />
    {/* Small flower/plant */}
    <path d="M12 8 L12 0" stroke="#7BA7A7" strokeWidth="1" />
    <circle cx="12" cy="-2" r="2" fill="#8B9DC3" />
  </svg>
);

export function WeddingGiftSection() {
  const [showModal, setShowModal] = useState(false)
  const [copiedBank, setCopiedBank] = useState(false)
  const [copiedAddress, setCopiedAddress] = useState(false)
  const [mounted, setMounted] = useState(false)

  const bankAccount = "5271581883"
  const accountName = "Azahra Emiria"
  const address = "jl. Merak Blok 92 No. 3, Meruya Ilir Jakarta Barat 11620"

  // For portal
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showModal])

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
      <div
        className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 pb-32"
        style={{ backgroundColor: '#F5F0E8' }}
      >
        <div className="max-w-lg mx-auto w-full">
          {/* Gift Card - Pink Theme like reference */}
          <div className="flex rounded-3xl overflow-hidden shadow-lg">
            {/* Left sidebar with vertical text */}
            <div
              className="w-16 flex items-center justify-center"
              style={{ backgroundColor: '#9B7A7A' }}
            >
              <span
                className="text-white text-lg tracking-widest whitespace-nowrap"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  transform: 'rotate(180deg)',
                  fontFamily: 'var(--font-caveat), cursive'
                }}
              >
                WEDDING GIFT
              </span>
            </div>

            {/* Main content */}
            <div
              className="flex-1 p-8 text-center"
              style={{ backgroundColor: '#D4BFBF' }}
            >
              {/* Envelope illustration */}
              <div className="flex justify-center mb-6">
                <EnvelopeIcon />
              </div>

              <p
                className="mb-6 leading-relaxed"
                style={{
                  fontFamily: 'var(--font-patrick), cursive',
                  color: '#4A4A4A'
                }}
              >
                Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih anda, anda dapat memberi kado secara cashless.
              </p>

              <button
                onClick={() => setShowModal(true)}
                className="px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md inline-flex items-center gap-3"
                style={{
                  backgroundColor: '#8B9DC3',
                  color: 'white'
                }}
              >
                <Gift size={20} />
                <span style={{ fontFamily: 'var(--font-patrick), cursive' }}>
                  Amplop Digital
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal using Portal */}
      {mounted && showModal && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
        >
          <div
            className="rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            style={{ backgroundColor: '#F5F0E8' }}
          >
            {/* Modal Header */}
            <div
              className="px-6 py-4 flex items-center justify-between rounded-t-3xl"
              style={{
                backgroundColor: '#EDE5D8',
                borderBottom: '1px solid #D4BFBF'
              }}
            >
              <h3
                className="text-xl"
                style={{
                  fontFamily: 'var(--font-patrick), cursive',
                  color: '#4A4A4A'
                }}
              >
                Informasi Pengiriman
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: '#D4BFBF' }}
              >
                <X style={{ color: '#4A4A4A' }} size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Bank Account */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'linear-gradient(135deg, #D4BFBF 0%, #C4A5A5 100%)'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
                  >
                    <CreditCard style={{ color: '#8B5A5A' }} size={24} />
                  </div>
                  <div>
                    <p
                      className="text-sm"
                      style={{ color: '#6B5A5A', fontFamily: 'var(--font-patrick), cursive' }}
                    >
                      Transfer Bank
                    </p>
                    <h4
                      style={{
                        fontFamily: 'var(--font-patrick), cursive',
                        color: '#4A4A4A',
                        fontWeight: 600
                      }}
                    >
                      BCA
                    </h4>
                  </div>
                </div>

                <div
                  className="rounded-xl p-4 mb-3"
                  style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
                >
                  <p className="text-xs" style={{ color: '#6B5A5A', fontFamily: 'var(--font-patrick), cursive' }}>Nomor Rekening</p>
                  <p
                    className="text-2xl tracking-wide mb-1"
                    style={{
                      fontFamily: 'var(--font-patrick), cursive',
                      color: '#4A4A4A'
                    }}
                  >
                    {bankAccount}
                  </p>
                  <p className="text-sm" style={{ color: '#6B5A5A', fontFamily: 'var(--font-patrick), cursive' }}>a.n. {accountName}</p>
                </div>

                <button
                  onClick={() => copyToClipboard(bankAccount, 'bank')}
                  className="w-full px-4 py-2 rounded-full transition-colors inline-flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: '#8B9DC3',
                    color: 'white',
                    fontFamily: 'var(--font-patrick), cursive'
                  }}
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
                <div className="flex-1 h-px" style={{ backgroundColor: '#D4BFBF' }}></div>
                <span
                  className="text-sm"
                  style={{
                    fontFamily: 'var(--font-patrick), cursive',
                    color: '#8B8B8B'
                  }}
                >
                  atau
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: '#D4BFBF' }}></div>
              </div>

              {/* Address */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'linear-gradient(135deg, #A8B6D1 0%, #8B9DC3 100%)'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
                  >
                    <Home style={{ color: '#5A6A8B' }} size={24} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: '#D4E0F0', fontFamily: 'var(--font-patrick), cursive' }}>Kirim ke</p>
                    <h4
                      style={{
                        fontFamily: 'var(--font-patrick), cursive',
                        color: 'white',
                        fontWeight: 600
                      }}
                    >
                      Alamat Rumah
                    </h4>
                  </div>
                </div>

                <div
                  className="rounded-xl p-4 mb-3"
                  style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                >
                  <p
                    className="leading-relaxed"
                    style={{ color: 'white', fontFamily: 'var(--font-patrick), cursive' }}
                  >
                    {address}
                  </p>
                  <p className="text-sm mt-2" style={{ color: '#D4E0F0', fontFamily: 'var(--font-patrick), cursive' }}>a.n. {accountName}</p>
                </div>

                <button
                  onClick={() => copyToClipboard(address, 'address')}
                  className="w-full px-4 py-2 rounded-full transition-colors inline-flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.4)',
                    fontFamily: 'var(--font-patrick), cursive'
                  }}
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
        </div>,
        document.body
      )}
    </>
  )
}
