import React, { useState, useRef, useEffect } from 'react'
import { Music, VolumeX, Sparkles } from 'lucide-react'

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const timerRef = useRef<number | null>(null)

  // Soft romantic lofi chord progression using Web Audio API
  // Chords: Dbm7 -> Abm7 -> Amaj7 -> B
  const chords = [
    [277.18, 329.63, 415.30, 493.88], // Dbm7
    [207.65, 246.94, 311.13, 369.99], // Abm7
    [220.00, 277.18, 329.63, 415.30], // Amaj7
    [246.94, 311.13, 369.99, 440.00]  // B(add9)
  ]

  const playNote = (ctx: AudioContext, freq: number, startTime: number, duration: number) => {
    try {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      const filter = ctx.createBiquadFilter()

      // Warm sine/triangle blend
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(freq, startTime)

      // Warm lowpass filter for dreamy romantic acoustic vibe
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(550, startTime)
      filter.Q.setValueAtTime(1.5, startTime)

      // Soft envelope
      gain.gain.setValueAtTime(0, startTime)
      gain.gain.linearRampToValueAtTime(0.025, startTime + 0.8) // very gentle volume
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(ctx.destination)

      osc.start(startTime)
      osc.stop(startTime + duration)
    } catch (e) {
      console.log('Audio note error:', e)
    }
  }

  const startAmbientLoop = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      audioCtxRef.current = new AudioCtx()
    }

    const ctx = audioCtxRef.current
    if (ctx.state === 'suspended') {
      ctx.resume()
    }

    let chordIndex = 0

    const scheduleNext = () => {
      if (!ctx || ctx.state === 'closed') return

      const now = ctx.currentTime
      const chord = chords[chordIndex % chords.length]

      // Stagger notes like a gentle harp strum
      chord.forEach((freq, idx) => {
        playNote(ctx, freq, now + (idx * 0.12), 4.2)
      })

      chordIndex++
      timerRef.current = window.setTimeout(scheduleNext, 3800)
    }

    scheduleNext()
  }

  const stopAmbient = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.suspend()
    }
  }

  const toggleMusic = () => {
    if (isPlaying) {
      stopAmbient()
      setIsPlaying(false)
    } else {
      startAmbientLoop()
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    return () => {
      stopAmbient()
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {})
      }
    }
  }, [])

  return (
    <div className="fixed top-4 right-4 z-40">
      <button
        onClick={toggleMusic}
        className={`px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium transition-all shadow-lg backdrop-blur-md cursor-pointer border ${
          isPlaying
            ? 'bg-rose-950/80 text-rose-200 border-rose-400/50 shadow-[0_0_15px_rgba(244,63,94,0.3)] animate-pulse'
            : 'bg-black/50 text-rose-300/80 border-rose-500/20 hover:bg-black/70 hover:text-rose-200'
        }`}
        title={isPlaying ? "Mute romantic soundtrack" : "Play romantic soundtrack"}
        aria-label="Toggle romantic ambient soundtrack"
      >
        {isPlaying ? (
          <>
            <Music className="w-3.5 h-3.5 text-rose-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="hidden sm:inline">Ambience On</span>
            <Sparkles className="w-3 h-3 text-rose-300" />
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Soundtrack</span>
          </>
        )}
      </button>
    </div>
  )
}
