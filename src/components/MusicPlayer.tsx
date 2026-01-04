'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Music, Pause, Play } from 'lucide-react'

interface MusicPlayerProps {
  src?: string
}

export function MusicPlayer({ src = '/audios/backsound-2.mp3' }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Add click listener to start playing on first user interaction
    const handleFirstInteraction = async () => {
      if (audioRef.current && !isPlaying) {
        try {
          await audioRef.current.play()
          setIsPlaying(true)
        } catch (error) {
          console.log('Could not start playing:', error)
        }
      }
    }

    document.addEventListener('click', handleFirstInteraction, { once: true })
    
    return () => {
      document.removeEventListener('click', handleFirstInteraction)
    }
  }, [isPlaying])

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
