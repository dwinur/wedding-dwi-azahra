'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

interface Guest {
  _id: string
  id: string
  name: string
  phone: string
  group_id: string
  pax: number
  type: string
}

export default function BlastPage() {
  const [guests, setGuests] = useState<Guest[]>([])
  const [loading, setLoading] = useState(true)
  const [template, setTemplate] = useState(
    `Bismillah,\n\nHalo [NAMA],\n\nTanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada acara pernikahan kami.\n\nDetail acara dan lokasi dapat dilihat pada link berikut:\n[LINK]\n\nMerupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir di acara pernikahan kami.\n\nTerima kasih.\n\nWassalamu'alaikum Warahmatullahi Wabarakatuh.`
  )
  const [groupTemplate, setGroupTemplate] = useState(
    `Bismillah,\n\nHalo teman-teman [NAMA],\n\nTanpa mengurangi rasa hormat, perkenankan kami mengundang teman-teman semua untuk hadir dan memberikan doa restu pada acara pernikahan kami.\n\nDetail acara dan lokasi dapat dilihat pada link berikut:\n[LINK]\n\nMerupakan suatu kehormatan dan kebahagiaan bagi kami apabila teman-teman berkenan hadir di acara pernikahan kami.\n\nTerima kasih.\n\nWassalamu'alaikum Warahmatullahi Wabarakatuh.`
  )
  const [activeTab, setActiveTab] = useState<'personal' | 'group'>('personal')

  useEffect(() => {
    fetchGuests()
  }, [])

  const fetchGuests = async () => {
    try {
      const res = await fetch('/api/admin/guests')
      const json = await res.json()
      if (json.data) {
        setGuests(json.data)
      }
    } catch (error) {
      console.error('Error fetching guests:', error)
    } finally {
      setLoading(false)
    }
  }

  const generateMessage = (guest: Guest) => {
    const selectedTemplate = guest.type === 'Grup' ? groupTemplate : template
    // Replace variables in template
    let msg = selectedTemplate.replace(/\[NAMA\]/g, guest.name)
    
    // Generate unique link
    // Assuming frontend URL is current origin
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
    const uniqueLink = `${baseUrl}/?guest=${encodeURIComponent(guest.name)}`
    
    msg = msg.replace(/\[LINK\]/g, uniqueLink)
    
    return msg
  }

  const handleSendWA = (guest: Guest) => {
    const msg = generateMessage(guest)
    const encodedMsg = encodeURIComponent(msg)
    
    let waUrl = `https://wa.me/`
    if (guest.phone) {
      // Ensure phone contains only numbers
      const cleanPhone = guest.phone.replace(/\D/g, '')
      waUrl += `${cleanPhone}?text=${encodedMsg}`
    } else {
      // If no phone, just open WA with text
      waUrl += `?text=${encodedMsg}`
    }

    window.open(waUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header & Nav */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">WhatsApp Blast</h1>
            <p className="text-gray-500 text-sm mt-1">Kirim pesan undangan ke tamu via WhatsApp</p>
          </div>
          <Link href="/admin" className="text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-lg transition-colors">
            &larr; Kembali ke Import CSV
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Template Editor */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-gray-800 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  Template Pesan
                </h2>
                <div className="flex bg-gray-100 p-1 rounded-lg">
                  <button 
                    onClick={() => setActiveTab('personal')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${activeTab === 'personal' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    Personal
                  </button>
                  <button 
                    onClick={() => setActiveTab('group')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${activeTab === 'group' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    Grup
                  </button>
                </div>
              </div>

              <div className="text-sm text-gray-500 bg-blue-50 p-3 rounded-lg mb-4">
                <strong>Variabel yang tersedia:</strong><br />
                <code className="bg-white px-1 py-0.5 rounded text-blue-700 font-mono text-xs">[NAMA]</code> - Nama Tamu / Grup<br />
                <code className="bg-white px-1 py-0.5 rounded text-blue-700 mt-1 inline-block font-mono text-xs">[LINK]</code> - Link Undangan Unik
              </div>
              
              {activeTab === 'personal' ? (
                <textarea
                  value={template}
                  onChange={(e) => setTemplate(e.target.value)}
                  rows={14}
                  className="w-full border border-gray-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                  placeholder="Tulis template pesan personal di sini..."
                />
              ) : (
                <textarea
                  value={groupTemplate}
                  onChange={(e) => setGroupTemplate(e.target.value)}
                  rows={14}
                  className="w-full border border-gray-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none bg-indigo-50/30"
                  placeholder="Tulis template pesan grup di sini..."
                />
              )}
            </div>
          </div>

          {/* Guest List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white">
                <h2 className="font-bold text-gray-800 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  Daftar Tamu ({guests.length})
                </h2>
                <button onClick={fetchGuests} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
                    <tr>
                      <th className="px-6 py-4">Nama Tamu</th>
                      <th className="px-6 py-4">No. WhatsApp</th>
                      <th className="px-6 py-4">Tipe</th>
                      <th className="px-6 py-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {loading ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center text-gray-400">
                          Memuat data...
                        </td>
                      </tr>
                    ) : guests.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center text-gray-400">
                          Belum ada data tamu. 
                          <Link href="/admin" className="text-blue-500 hover:underline ml-1">Import via CSV sekarang</Link>
                        </td>
                      </tr>
                    ) : (
                      guests.map((guest) => (
                        <tr key={guest._id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-800">{guest.name}</td>
                          <td className="px-6 py-4">
                            {guest.phone ? (
                              <span className="inline-flex items-center gap-1 text-gray-600">
                                📞 {guest.phone}
                              </span>
                            ) : (
                              <span className="text-gray-400 italic text-xs">Kosong</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                              {guest.type || 'Umum'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => handleSendWA(guest)}
                              className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer text-xs"
                              title={guest.phone ? `Kirim ke ${guest.phone}` : "Kirim (Nomor belum ada)"}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.096-1.332-.118-.848-.276-2.114-1.153-2.995-2.046-1.025-1.036-1.74-2.459-1.854-2.652-.112-.192-.229-.683.05-1.026.044-.055.22-.256.33-.355.109-.098.314-.144.423-.042.112.105.158.21.314.536.068.14.156.405.021.688-.135.283-.244.434-.403.626-.145.176-.328.375-.15.688.175.313.784 1.309 1.68 2.055.694.577 1.603.957 1.956 1.13.353.173.57.195.8-.022.23-.217.915-1.096 1.144-1.46.23-.365.46-.3.793-.178.333.123 2.1.996 2.46 1.175.361.18.601.272.69.421.089.15.089.873-.053 1.278z"/>
                              </svg>
                              Kirim WA
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
