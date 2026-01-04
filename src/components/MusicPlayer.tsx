'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Music, Pause, Play } from 'lucide-react'

interface MusicPlayerProps {
  src?: string
  autoPlay?: boolean
}

export function MusicPlayer({ src = '/audios/backsound-2.mp3', autoPlay = true }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Try to autoplay when component mounts
    if (autoPlay && audioRef.current) {
      const playAudio = async () => {
        try {
          await audioRef.current?.play()
          setIsPlaying(true)
        } catch (error) {
          console.log('Autoplay blocked, waiting for user interaction')
        }
      }
      playAudio()
    }
  }, [autoPlay])

  // Listen for audio play/pause events
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
    }
  }, [])

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        try {
          await audioRef.current.play()
          setIsPlaying(true)
        } catch (error) {
          console.log('Could not play:', error)
        }
      }
    }
  }

  return (
    <>
      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
      >
        <source src={src} type="audio/mpeg" />
      </audio>

      {/* Floating Music Player */}
      <div className="fixed left-6 bottom-24 md:bottom-6 z-50 bg-white/95 backdrop-blur-lg rounded-xl shadow-lg p-3 border border-slate-200 flex flex-col items-center gap-2">
        {/* Music Icon */}
        <Music className={`text-rose-500 ${isPlaying ? 'animate-pulse' : ''}`} size={20} />
        
        {/* Control Button */}
        <button
          onClick={togglePlay}
          className="w-8 h-8 rounded-full bg-rose-500 hover:bg-rose-600 flex items-center justify-center transition-colors"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="text-white" size={16} />
          ) : (
            <Play className="text-white ml-0.5" size={16} />
          )}
        </button>
      </div>
    </>
  )
}
