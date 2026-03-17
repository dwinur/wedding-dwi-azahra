'use client'

import React, { useState } from 'react'

export default function AdminPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [result, setResult] = useState<{ message: string; count?: number; error?: string } | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
      setResult(null)
    }
  }

  const parseCSV = async (file: File): Promise<{name: string, phone: string}[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        try {
          const text = event.target?.result as string
          if (!text) return resolve([])
          
          const lines = text.split('\n')
          const guests: {name: string, phone: string}[] = []
          
          for (const line of lines) {
            const cleanLine = line.replace(/\r/g, '').replace(/"/g, '').trim()
            if (cleanLine && cleanLine.toLowerCase() !== 'name' && !cleanLine.toLowerCase().startsWith('name,')) {
              
              const cols = cleanLine.split(',')
              const name = cols[0]?.trim()
              const phone = cols[1]?.trim() || ''

              if (name) {
                // Ensure phone number has country code (assumes Indonesia for now if starting with 0 or 8)
                let formattedPhone = phone
                if (formattedPhone.startsWith('0')) {
                   formattedPhone = '62' + formattedPhone.substring(1)
                } else if (formattedPhone.startsWith('8')) {
                   formattedPhone = '62' + formattedPhone
                }

                guests.push({ name, phone: formattedPhone })
              }
            }
          }
          resolve(guests)
        } catch (error) {
          reject(error)
        }
      }
      reader.onerror = (error) => reject(error)
      reader.readAsText(file)
    })
  }

  const handleUpload = async () => {
    if (!file) {
      setResult({ message: '', error: 'Pilih file CSV terlebih dahulu' })
      return
    }

    if (!file.name.endsWith('.csv')) {
      setResult({ message: '', error: 'File harus berformat .csv' })
      return
    }

    setIsUploading(true)
    setResult(null)

    try {
      const guests = await parseCSV(file)
      
      if (guests.length === 0) {
        throw new Error('Tidak ada data valid ditemukan di dalam file')
      }

      // Send to API
      const response = await fetch('/api/guests/bulk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ guests }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Gagal mengupload data')
      }

      setResult({ 
        message: 'Berhasil mengupload tamu!', 
        count: data.insertedCount || guests.length 
      })
      setFile(null)
      
      // Reset input file
      const fileInput = document.getElementById('csv-upload') as HTMLInputElement
      if (fileInput) fileInput.value = ''

    } catch (error: any) {
      setResult({ message: '', error: error.message || 'Terjadi kesalahan' })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin - Import Tamu CSV</h1>
          <a href="/admin/blast" className="text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
            Ke WA Blast &rarr;
          </a>
        </div>
        
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors">
            <input
              type="file"
              id="csv-upload"
              accept=".csv"
              onChange={handleFileChange}
              className="hidden"
            />
            <label htmlFor="csv-upload" className="cursor-pointer flex flex-col items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span className="text-sm text-gray-600">
                {file ? file.name : 'Klik untuk memilih file CSV'}
              </span>
            </label>
          </div>

          <div className="text-sm text-gray-500 bg-blue-50 p-4 rounded-lg">
            <p className="font-semibold mb-1">Format CSV yang didukung:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Kolom 1: Nama Tamu (Wajib)</li>
              <li>Kolom 2: Nomor WhatsApp (Opsional, cth: 08123456789 atau 628123456789)</li>
              <li>Contoh baris: <code>Budi, 08123456789</code></li>
              <li>Baris judul (seperti "Nama, No WA") akan otomatis diabaikan</li>
              <li>Satu tamu per baris</li>
            </ul>
          </div>

          {result?.error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-100">
              {result.error}
            </div>
          )}

          {result?.message && !result.error && (
            <div className="bg-green-50 text-green-700 p-4 rounded-lg text-sm border border-green-100 font-medium text-center">
              🎉 {result.message} ({result.count} nama diproses)
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={isUploading || !file}
            className="w-full bg-[#16407F] hover:bg-[#113263] text-white font-bold py-3 px-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {isUploading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Memproses...
              </>
            ) : (
              'Upload & Import'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
