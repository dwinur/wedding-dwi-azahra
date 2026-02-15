'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Gift, X, Copy, Check, CreditCard, Home } from 'lucide-react'

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
        className="flex flex-col items-center justify-center relative section"
        style={{
          backgroundImage: 'url(/images/bg-pengantin.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Content with bg-footer-home-2 */}
        <div
          className="relative z-10 w-full max-w-md mx-auto text-center px-6 pt-[16rem] pb-[24rem] flex flex-col items-center justify-center h-full gap-6"
          style={{
            backgroundImage: 'url(/images/bg-footer-home-2.png)',
            backgroundSize: '100% auto',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Title */}
          <h2
            className="text-4xl md:text-5xl text-center"
            style={{
              fontFamily: 'var(--font-caveat-brush), cursive',
              color: '#16407F',
            }}
          >
            Hadiah Pernikahan
          </h2>

          {/* Description */}
          <p
            className="text-left max-w-[340px] leading-relaxed"
            style={{
              fontFamily: 'var(--font-patrick), cursive',
              color: '#E0115F',
              fontSize: '18px',
            }}
          >
            Kehadiran Anda merupakan sebuah doa serta rasa syukur bagi kami, namun apabila Bapak/Ibu/Saudara/i berkeinginan memberikan tanda kasih, dapat menyampaikannya melalui tautan berikut:
          </p>

          {/* Digital Gift Button */}
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            style={{
              backgroundColor: '#E0115F',
              color: 'white',
            }}
          >
            <Gift size={20} />
            <span
              className="text-lg font-bold"
              style={{ fontFamily: 'var(--font-patrick), cursive' }}
            >
              Beri Kado
            </span>
          </button>
        </div>
      </div>

      {/* Modal using Portal - LOGIC UNCHANGED */}
      {mounted && showModal && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
        >
          <div
            className="rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            style={{
              backgroundImage: 'url(/images/bg-pengantin.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Modal Header */}
            <div
              className="px-6 py-4 flex items-center justify-between rounded-t-3xl"
              style={{
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderBottom: '1px solid rgba(22,64,127,0.15)'
              }}
            >
              <h3
                className="text-xl"
                style={{
                  fontFamily: 'var(--font-caveat-brush), cursive',
                  color: '#16407F'
                }}
              >
                Informasi Pengiriman
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: 'rgba(224,17,95,0.15)' }}
              >
                <X style={{ color: '#E0115F' }} size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Bank Account */}
              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.4)',
                  border: '1px solid rgba(22,64,127,0.1)'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(224,17,95,0.1)' }}
                  >
                    <CreditCard style={{ color: '#E0115F' }} size={24} />
                  </div>
                  <div>
                    <p
                      className="text-sm"
                      style={{ color: '#E0115F', fontFamily: 'var(--font-patrick), cursive' }}
                    >
                      Transfer Bank
                    </p>
                    <h4
                      style={{
                        fontFamily: 'var(--font-caveat-brush), cursive',
                        color: '#16407F',
                        fontWeight: 600,
                        fontSize: '1.25rem'
                      }}
                    >
                      BCA
                    </h4>
                  </div>
                </div>

                <div
                  className="rounded-xl p-4 mb-3"
                  style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
                >
                  <p className="text-xs" style={{ color: '#E0115F', fontFamily: 'var(--font-patrick), cursive' }}>Nomor Rekening</p>
                  <p
                    className="text-2xl tracking-wide mb-1"
                    style={{
                      fontFamily: 'var(--font-caveat-brush), cursive',
                      color: '#16407F'
                    }}
                  >
                    {bankAccount}
                  </p>
                  <p className="text-sm" style={{ color: '#E0115F', fontFamily: 'var(--font-patrick), cursive' }}>a.n. {accountName}</p>
                </div>

                <button
                  onClick={() => copyToClipboard(bankAccount, 'bank')}
                  className="w-full px-4 py-2 rounded-full transition-colors inline-flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: '#E0115F',
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
                <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(22,64,127,0.2)' }}></div>
                <span
                  className="text-sm"
                  style={{
                    fontFamily: 'var(--font-patrick), cursive',
                    color: '#16407F'
                  }}
                >
                  {/* atau */}
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(22,64,127,0.2)' }}></div>
              </div>

              {/* Address */}
              {/* <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.4)',
                  border: '1px solid rgba(22,64,127,0.1)'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(224,17,95,0.1)' }}
                  >
                    <Home style={{ color: '#E0115F' }} size={24} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: '#E0115F', fontFamily: 'var(--font-patrick), cursive' }}>Kirim ke</p>
                    <h4
                      style={{
                        fontFamily: 'var(--font-caveat-brush), cursive',
                        color: '#16407F',
                        fontWeight: 600,
                        fontSize: '1.25rem'
                      }}
                    >
                      Alamat Rumah
                    </h4>
                  </div>
                </div>

                <div
                  className="rounded-xl p-4 mb-3"
                  style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
                >
                  <p
                    className="leading-relaxed"
                    style={{ color: '#16407F', fontFamily: 'var(--font-patrick), cursive' }}
                  >
                    {address}
                  </p>
                  <p className="text-sm mt-2" style={{ color: '#E0115F', fontFamily: 'var(--font-patrick), cursive' }}>a.n. {accountName}</p>
                </div>

                <button
                  onClick={() => copyToClipboard(address, 'address')}
                  className="w-full px-4 py-2 rounded-full transition-colors inline-flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: '#E0115F',
                    color: 'white',
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
              </div> */}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
