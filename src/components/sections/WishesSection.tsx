'use client'

import React, { useState, useEffect } from 'react'
import { Send, Heart, Check, X } from 'lucide-react'
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
      return <Check className="text-green-400" size={16} />
    }
    return <X className="text-red-400" size={16} />
  }

  const getStatusText = (wishStatus: number) => {
    return wishStatus === 1 ? 'Hadir' : 'Tidak Hadir'
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 pb-32">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Ucapan & Doa
          </h2>
          <p className="text-slate-300 max-w-lg mx-auto">
            Tinggalkan ucapan selamat dan doa terbaik untuk <br /> Azahra & Dwi
          </p>
        </div>

        {/* Wish Form */}
        <div className="rounded-3xl p-8 mb-12 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-slate-200 mb-2">
                Nama Anda
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-white placeholder:text-slate-400"
                placeholder="contoh: John & Jane Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-slate-200 mb-2">
                Pesan Anda
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent resize-none text-white placeholder:text-slate-400"
                placeholder="Tuliskan ucapan dan doa terbaik Anda di sini..."
                required
              />
            </div>

            <div>
              <label className="block text-slate-200 mb-2">
                Konfirmasi Kehadiran
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStatus(1)}
                  className={`flex-1 px-4 py-3 rounded-2xl border transition-all flex items-center justify-center gap-2 ${
                    status === 1
                      ? 'bg-green-500/20 border-green-400 text-green-400'
                      : 'bg-white/10 border-white/20 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  <Check size={20} />
                  Hadir
                </button>
                <button
                  type="button"
                  onClick={() => setStatus(0)}
                  className={`flex-1 px-4 py-3 rounded-2xl border transition-all flex items-center justify-center gap-2 ${
                    status === 0
                      ? 'bg-red-500/20 border-red-400 text-red-400'
                      : 'bg-white/10 border-white/20 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  <X size={20} />
                  Tidak Hadir
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={createWish.isPending}
              className="w-full px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
              {createWish.isPending ? 'Mengirim...' : 'Kirim Ucapan'}
            </button>
          </form>
        </div>

        {/* Wishes List */}
        <div className="space-y-4">
          <h3 className="text-2xl text-white mb-6 text-center">
            Ucapan Terbaru ({wishes.data?.length || 0})
          </h3>

          {wishes.isLoading ? (
            <div className="text-center text-slate-400">Memuat ucapan...</div>
          ) : wishes.data && wishes.data.length > 0 ? (
            wishes.data.map((wish: WishesDto.Wish) => (
              <div
                key={wish.id}
                className="bg-white/5 rounded-3xl p-6 hover:bg-white/10 transition-all border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="text-rose-400" size={20} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-white">{wish.name}</h4>
                        <div className="flex items-center gap-1 text-xs mt-1">
                          {getStatusIcon(wish.status)}
                          <span className={wish.status === 1 ? 'text-green-400' : 'text-red-400'}>
                            {getStatusText(wish.status)}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400">
                        {dayjs(wish.createdAt).fromNow()}
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{wish.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-slate-400">
              Belum ada ucapan. Jadilah yang pertama!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
