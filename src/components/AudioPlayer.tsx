import React, { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

interface AudioPlayerProps {
  shouldPlay: boolean
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ shouldPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [playbackError, setPlaybackError] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize single persistent audio instance with event listeners
  useEffect(() => {
    const audio = new Audio('/audio.mp3')
    audio.loop = true
    audio.volume = 0.5 // 50% volume (specified: 45-55%)
    audio.preload = 'auto'

    const handlePlay = () => {
      setIsPlaying(true)
      setPlaybackError(false)
    }

    const handlePause = () => {
      setIsPlaying(false)
    }

    const handleEnded = () => {
      setIsPlaying(false)
    }

    const handleError = () => {
      setIsPlaying(false)
      setPlaybackError(true)
    }

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    audioRef.current = audio

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
      audio.pause()
      audio.src = ''
      audioRef.current = null
    }
  }, [])

  // Start playback when landing CTA is clicked (preserve landing interaction)
  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
            setPlaybackError(false)
          })
          .catch((err) => {
            console.warn('Audio play request blocked or postponed:', err)
            setIsPlaying(false)
            setPlaybackError(true)
          })
      }
    }
  }, [shouldPlay])

  const togglePlayback = () => {
    if (!audioRef.current) return

    if (audioRef.current.paused || audioRef.current.ended) {
      // Resume existing instance
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
            setPlaybackError(false)
          })
          .catch((err) => {
            console.warn('Playback toggle error:', err)
            setIsPlaying(false)
            setPlaybackError(true)
          })
      }
    } else {
      // Pause existing instance
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  // Only show after initial reveal has started
  if (!shouldPlay) return null

  // Sound is actively playing only if isPlaying is true and not in error state
  const isSoundActive = isPlaying && !playbackError
  const accessibleLabel = isSoundActive ? 'Pause background music' : 'Play background music'

  return (
    <div
      className="fixed z-40 pointer-events-none select-none"
      style={{
        right: 'max(1rem, env(safe-area-inset-right, 1rem))',
        bottom: 'max(1rem, env(safe-area-inset-bottom, 1rem))',
      }}
    >
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={accessibleLabel}
        title={accessibleLabel}
        className={`pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 cursor-pointer backdrop-blur-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#140428] ${
          isSoundActive
            ? 'bg-cadbury-900/90 hover:bg-cadbury-800/95 border-gold-400/60 text-gold-300 shadow-[0_4px_16px_rgba(214,173,85,0.25)] hover:border-gold-300 hover:text-gold-200'
            : 'bg-black/75 hover:bg-black/90 border-gold-500/30 text-gold-400/70 hover:border-gold-400/50 hover:text-gold-300 shadow-[0_4px_16px_rgba(0,0,0,0.5)]'
        }`}
      >
        {isSoundActive ? (
          <Volume2 className="w-5 h-5 text-gold-300" />
        ) : (
          <VolumeX className="w-5 h-5 text-gold-400/70" />
        )}
      </button>
    </div>
  )
}
