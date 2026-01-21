'use client'

import React, { useState, useEffect } from 'react'
import { Heart, Check, X } from 'lucide-react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/id'
import WishesService from '@/lib/services/wishes/wishes.service'
import type WishesDto from '@/lib/services/wishes/wishes.dto'

dayjs.extend(relativeTime)
dayjs.locale('id')

interface WishesSectionProps {
  guestId?: string
  groupId?: string
  guestName?: string
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
  <svg width="32" height="26" viewBox="0 0 40 32" fill="none" className={className}>
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
    <path d="M16 17 L16 38" stroke="#7BA7A7" strokeWidth="2" />
    <ellipse cx="12" cy="28" rx="4" ry="2" fill="#7BA7A7" transform="rotate(-30 12 28)" />
    <ellipse cx="20" cy="32" rx="4" ry="2" fill="#7BA7A7" transform="rotate(30 20 32)" />
  </svg>
);

// Small Flower for decoration border
const SmallFlower = ({ color = "#C4A5A5" }: { color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="2" fill={color} />
    <ellipse cx="8" cy="4" rx="2" ry="2.5" fill={color} opacity="0.6" />
    <ellipse cx="5" cy="7" rx="2" ry="2.5" fill={color} opacity="0.6" transform="rotate(-45 5 7)" />
    <ellipse cx="11" cy="7" rx="2" ry="2.5" fill={color} opacity="0.6" transform="rotate(45 11 7)" />
    <ellipse cx="5" cy="10" rx="2" ry="2.5" fill={color} opacity="0.6" transform="rotate(-135 5 10)" />
    <ellipse cx="11" cy="10" rx="2" ry="2.5" fill={color} opacity="0.6" transform="rotate(135 11 10)" />
  </svg>
);

export function WishesSection({ guestId, groupId, guestName }: WishesSectionProps) {
  const [name, setName] = useState(guestName || '')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<number>(1) // 1 = Hadir, 0 = Tidak Hadir

  const wishes = WishesService.GetWishes.useQuery()
  const createWish = WishesService.CreateWish.useMutation()

  useEffect(() => {
    if (guestName) {
      setName(guestName)
    }
  }, [guestName])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !message.trim()) {
      alert('Mohon isi nama dan pesan')
      return
    }

    if (!guestId || !groupId) {
      // Fallback: create wish without guest/group reference
      alert('Terima kasih atas ucapannya!')
      setMessage('')
      return
    }

    try {
      await createWish.mutateAsync([{
        guest_id: guestId,
        group_id: groupId,
        name: name.trim(),
        description: message.trim(),
        status: status,
      }])

      setMessage('')
      wishes.refetch()
    } catch (error) {
      console.error('Error creating wish:', error)
      alert('Gagal mengirim ucapan. Silakan coba lagi.')
    }
  }

  const getStatusIcon = (wishStatus: number) => {
    if (wishStatus === 1) {
      return <Check style={{ color: '#7BA7A7' }} size={16} />
    }
    return <X style={{ color: '#C4A5A5' }} size={16} />
  }

  const getStatusText = (wishStatus: number) => {
    return wishStatus === 1 ? 'Hadir' : 'Tidak Hadir'
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 pb-32 relative overflow-hidden"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      {/* Decorative flower border at top */}
      <div className="absolute top-0 left-0 right-0 flex justify-center gap-2 py-2 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <SmallFlower key={i} color={i % 2 === 0 ? "#C4A5A5" : "#8B9DC3"} />
        ))}
      </div>

      {/* Decorative Elements */}
      <Star className="absolute top-[10%] left-[8%] text-mustard animate-twinkle" size={14} />
      <Star className="absolute top-[15%] right-[10%] text-mustard animate-twinkle" size={12} />
      <Star className="absolute bottom-[20%] left-[15%] text-mustard animate-twinkle" size={10} />

      <div className="absolute top-[12%] left-[3%] animate-flutter">
        <Butterfly />
      </div>

      <div className="absolute bottom-[10%] left-[5%]">
        <Flower />
      </div>
      <div className="absolute bottom-[15%] right-[8%]">
        <Flower />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{
              fontFamily: 'var(--font-caveat), cursive',
              color: '#5B8A8A'
            }}
          >
            Ucapan & RSVP
          </h2>
          <p
            className="max-w-lg mx-auto"
            style={{
              fontFamily: 'var(--font-patrick), cursive',
              color: '#6B6B6B'
            }}
          >
            Berikan ucapan terbaik untuk kedua mempelai<br />& Konfirmasi kehadiran
          </p>
        </div>

        {/* Wish Form */}
        <div className="mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 text-white"
                style={{
                  backgroundColor: '#8B9DC3',
                  fontFamily: 'var(--font-patrick), cursive'
                }}
                placeholder="Nama Kamu"
                required
              />
            </div>

            <div>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 resize-none text-white"
                style={{
                  backgroundColor: '#8B9DC3',
                  fontFamily: 'var(--font-patrick), cursive'
                }}
                placeholder="Berikan ucapan & Do'a"
                required
              />
            </div>

            <div>
              <p
                className="mb-3 text-center"
                style={{
                  fontFamily: 'var(--font-patrick), cursive',
                  color: '#4A4A4A'
                }}
              >
                Konfirmasi kehadiran
              </p>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStatus(1)}
                  className={`flex-1 px-4 py-3 rounded-2xl transition-all flex items-center justify-center gap-2`}
                  style={{
                    backgroundColor: status === 1 ? '#8B9DC3' : '#D4BFBF',
                    color: 'white',
                    fontFamily: 'var(--font-patrick), cursive'
                  }}
                >
                  Hadir
                </button>
                <button
                  type="button"
                  onClick={() => setStatus(0)}
                  className={`flex-1 px-4 py-3 rounded-2xl transition-all flex items-center justify-center gap-2`}
                  style={{
                    backgroundColor: status === 0 ? '#8B9DC3' : '#D4BFBF',
                    color: 'white',
                    fontFamily: 'var(--font-patrick), cursive'
                  }}
                >
                  Tidak Hadir
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={createWish.isPending}
              className="w-full px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-md inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: '#8B9DC3',
                color: 'white',
                fontFamily: 'var(--font-patrick), cursive',
                fontSize: '1.1rem'
              }}
            >
              {createWish.isPending ? 'Mengirim...' : 'KIRIM'}
            </button>
          </form>
        </div>

        {/* Wishes List */}
        <div className="space-y-4">
          <h3
            className="text-xl mb-6 text-center"
            style={{
              fontFamily: 'var(--font-caveat), cursive',
              color: '#5B8A8A',
              fontSize: '1.5rem'
            }}
          >
            Ucapan Terbaru ({wishes.data?.length || 0})
          </h3>

          {wishes.isLoading ? (
            <div
              className="text-center"
              style={{
                fontFamily: 'var(--font-patrick), cursive',
                color: '#8B8B8B'
              }}
            >
              Memuat ucapan...
            </div>
          ) : wishes.data && wishes.data.length > 0 ? (
            wishes.data.map((wish: WishesDto.Wish) => (
              <div
                key={wish.id}
                className="rounded-2xl p-5 transition-all shadow-sm"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  border: '1px solid #EDE5D8'
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#D4BFBF' }}
                  >
                    <Heart style={{ color: '#8B5A5A' }} size={18} />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4
                          style={{
                            fontFamily: 'var(--font-caveat), cursive',
                            color: '#4A4A4A',
                            fontWeight: 600,
                            fontSize: '1.2rem'
                          }}
                        >
                          {wish.name}
                        </h4>
                        <div className="flex items-center gap-1 text-xs mt-1">
                          {getStatusIcon(wish.status)}
                          <span style={{ color: wish.status === 1 ? '#7BA7A7' : '#C4A5A5', fontFamily: 'var(--font-patrick), cursive' }}>
                            {getStatusText(wish.status)}
                          </span>
                        </div>
                      </div>
                      <span
                        className="text-xs"
                        style={{ color: '#8B8B8B', fontFamily: 'var(--font-patrick), cursive' }}
                      >
                        {dayjs(wish.createdAt).fromNow()}
                      </span>
                    </div>
                    <p
                      className="leading-relaxed"
                      style={{
                        fontFamily: 'var(--font-patrick), cursive',
                        color: '#6B6B6B'
                      }}
                    >
                      {wish.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              className="text-center"
              style={{
                fontFamily: 'var(--font-patrick), cursive',
                color: '#8B8B8B'
              }}
            >
              Belum ada ucapan. Jadilah yang pertama!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
