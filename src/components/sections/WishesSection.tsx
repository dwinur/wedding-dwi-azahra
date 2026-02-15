'use client'

import React, { useState, useEffect } from 'react'
import { Heart, Check, X, Send } from 'lucide-react'
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
      return <Check style={{ color: '#16407F' }} size={16} />
    }
    return <X style={{ color: '#E0115F' }} size={16} />
  }

  const getStatusText = (wishStatus: number) => {
    return wishStatus === 1 ? 'Hadir' : 'Tidak Hadir'
  }

  return (
    <div
      className="flex items-center justify-center px-6 md:px-12 py-24 pb-32 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/bg-pengantin.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-md mx-auto w-full relative z-10">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2
            style={{
              fontFamily: 'var(--font-patrick), cursive',
              color: '#16407F',
              fontSize: '38px',
            }}
          >
            Ucapan &amp; RSVP
          </h2>
          <p
            className="mt-2"
            style={{
              fontFamily: 'var(--font-caveat-brush), cursive',
              color: '#E0115F',
              fontSize: '16px',
            }}
          >
            Berikan ucapan terbaik untuk kedua mempelai<br />&amp; Konfirmasi kehadiran
          </p>
        </div>

        {/* Wish Form */}
        <div className="mb-12">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nama Lengkap */}
            <div>
              <label
                className="block mb-2"
                style={{
                  fontFamily: 'var(--font-patrick), cursive',
                  color: '#16407F',
                  fontSize: '16px'
                }}
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0115F]/30"
                style={{
                  backgroundColor: 'white',
                  fontFamily: 'var(--font-patrick), cursive',
                  color: '#16407F',
                  border: '1px solid #e5e5e5'
                }}
                placeholder="Nama Lengkap"
                required
              />
            </div>

            {/* Ucapan */}
            <div>
              <label
                className="block mb-2"
                style={{
                  fontFamily: 'var(--font-patrick), cursive',
                  color: '#16407F',
                  fontSize: '16px'
                }}
              >
                Ucapan
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0115F]/30 resize-none"
                style={{
                  backgroundColor: 'white',
                  fontFamily: 'var(--font-patrick), cursive',
                  color: '#16407F',
                  border: '1px solid #e5e5e5'
                }}
                placeholder="Text here..."
                required
              />
            </div>

            {/* Kehadiran */}
            <div>
              <label
                className="block mb-3"
                style={{
                  fontFamily: 'var(--font-patrick), cursive',
                  color: '#16407F',
                  fontSize: '16px'
                }}
              >
                Kehadiran
              </label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setStatus(1)}
                  className="px-8 py-2.5 rounded-full transition-all"
                  style={{
                    backgroundColor: status === 1 ? '#E0115F' : 'transparent',
                    color: status === 1 ? 'white' : '#999',
                    fontFamily: 'var(--font-patrick), cursive',
                    fontSize: '16px',
                    border: status === 1 ? 'none' : '1px solid #ddd'
                  }}
                >
                  Hadir
                </button>
                <button
                  type="button"
                  onClick={() => setStatus(0)}
                  className="px-8 py-2.5 rounded-full transition-all"
                  style={{
                    backgroundColor: status === 0 ? '#E0115F' : 'transparent',
                    color: status === 0 ? 'white' : '#999',
                    fontFamily: 'var(--font-patrick), cursive',
                    fontSize: '16px',
                    fontStyle: 'italic',
                    border: status === 0 ? 'none' : 'none'
                  }}
                >
                  Tidak Hadir
                </button>
              </div>
            </div>

            {/* Send Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={createWish.isPending}
                className="px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: '#E0115F',
                  color: 'white',
                  fontFamily: 'var(--font-patrick), cursive',
                  fontSize: '16px'
                }}
              >
                <Send size={18} />
                {createWish.isPending ? 'Mengirim...' : 'Kirim'}
              </button>
            </div>
          </form>
        </div>

        {/* Wishes List */}
        <div className="space-y-4">
          <h3
            className="text-center mb-6"
            style={{
              fontFamily: 'var(--font-patrick), cursive',
              color: '#16407F',
              fontSize: '20px'
            }}
          >
            Ucapan Terbaru ({wishes.data?.length || 0})
          </h3>

          {wishes.isLoading ? (
            <div
              className="text-center"
              style={{
                fontFamily: 'var(--font-patrick), cursive',
                color: '#999'
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
                  border: '1px solid #f0f0f0'
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(224, 17, 95, 0.12)' }}
                  >
                    <Heart style={{ color: '#E0115F' }} size={18} />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4
                          style={{
                            fontFamily: 'var(--font-patrick), cursive',
                            color: '#16407F',
                            fontWeight: 600,
                            fontSize: '1.1rem'
                          }}
                        >
                          {wish.name}
                        </h4>
                        <div className="flex items-center gap-1 text-xs mt-1">
                          {getStatusIcon(wish.status)}
                          <span style={{
                            color: wish.status === 1 ? '#16407F' : '#E0115F',
                            fontFamily: 'var(--font-patrick), cursive'
                          }}>
                            {getStatusText(wish.status)}
                          </span>
                        </div>
                      </div>
                      <span
                        className="text-xs"
                        style={{ color: '#999', fontFamily: 'var(--font-patrick), cursive' }}
                      >
                        {dayjs(wish.createdAt).fromNow()}
                      </span>
                    </div>
                    <p
                      className="leading-relaxed"
                      style={{
                        fontFamily: 'var(--font-patrick), cursive',
                        color: '#555'
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
                color: '#999'
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
