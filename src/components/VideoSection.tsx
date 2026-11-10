import React, { useState, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film } from 'lucide-react'
import { ASSETS_CONFIG } from '../data/proposalData'

interface VideoSectionProps {
  customVideoUrl?: string
  customPosterUrl?: string
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  customVideoUrl,
  customPosterUrl
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showConfigHint, setShowConfigHint] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Default romantic cinematic video placeholder
  const videoSource = customVideoUrl || ASSETS_CONFIG.previewVideo
  const posterSource = customPosterUrl || ASSETS_CONFIG.videoPoster

  const togglePlay = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Playback interrupted or prevented:', err))
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen()
    }
  }

  return (
    <section id="preview" className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center scroll-mt-10">
      {/* Subtle section glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-72 bg-rose-500/10 blur-[100px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/40 border border-rose-400/20 text-rose-300 text-xs tracking-wider uppercase mb-4">
        <Film className="w-3.5 h-3.5 text-rose-400" />
        <span>Exhibit A</span>
      </div>

      <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-white tracking-tight mb-4">
        A little preview of the perks 🌝
      </h2>

      <p className="text-sm sm:text-base text-rose-200/80 font-light max-w-md mx-auto mb-8">
        Click to play. No sudden noises, just pure cinematic ambiance.
      </p>

      {/* Cinematic Video Card */}
      <div className="relative max-w-2xl mx-auto rounded-3xl overflow-hidden glass-panel border border-rose-400/30 shadow-[0_15px_40px_-10px_rgba(244,63,94,0.25)] group">
        <div 
          className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-black/80 flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={videoSource}
            poster={posterSource}
            playsInline
            muted={isMuted}
            loop
            onEnded={() => setIsPlaying(false)}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            className="w-full h-full object-cover filter contrast-105 transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

          {/* Big Center Play Button when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 backdrop-blur-[2px] transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-[0_0_25px_rgba(244,63,94,0.6)] group-hover:scale-110 active:scale-95 transition-all">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5 text-rose-50" />
              </div>
              <span className="mt-3 text-xs sm:text-sm font-medium tracking-wide text-rose-100 bg-black/60 px-3 py-1 rounded-full border border-rose-400/20 backdrop-blur-md">
                Tap to watch preview
              </span>
            </div>
          )}

          {/* Video Controls Bar */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white pointer-events-auto">
            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 text-rose-200 transition-all hover:scale-105"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 text-rose-200 transition-all hover:scale-105"
                aria-label={isMuted ? "Unmute" : "Mute"}
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-rose-400" />}
              </button>

              <button
                onClick={handleFullscreen}
                className="p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 text-rose-200 transition-all hover:scale-105 hidden sm:block"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Card Footer Info */}
        <div className="p-4 bg-gradient-to-b from-plum-950/90 to-[#1b0615] border-t border-rose-500/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2 text-rose-200/90 text-xs">
            <Sparkles className="w-4 h-4 text-rose-400 shrink-0" />
            <span>Cinematic 21:9 Aspect • Zero Sound Surprise • Reversible at will</span>
          </div>

          <button
            onClick={() => setShowConfigHint(!showConfigHint)}
            className="text-[11px] text-rose-400/70 hover:text-rose-300 underline underline-offset-2 transition-colors cursor-pointer self-end sm:self-auto"
          >
            {showConfigHint ? "Hide Video Note" : "Replace Video Info"}
          </button>
        </div>

        {/* Note on how to replace video */}
        {showConfigHint && (
          <div className="p-4 bg-rose-950/40 border-t border-rose-400/20 text-xs text-rose-200/80 text-left font-mono leading-relaxed">
            💡 <strong>Custom Video Note:</strong> You can drop your preferred video file into <code className="text-rose-300 bg-black/40 px-1 py-0.5 rounded">public/video.mp4</code> or pass a custom URL to the <code className="text-rose-300 bg-black/40 px-1 py-0.5 rounded">&lt;VideoSection /&gt;</code> component props.
          </div>
        )}
      </div>

      {/* Playful Caption */}
      <p className="mt-5 text-base sm:text-lg font-serif italic text-rose-200/90 max-w-lg mx-auto">
        "Just a little demonstration of the chemistry we're talking about. 🤌"
      </p>
    </section>
  )
}
