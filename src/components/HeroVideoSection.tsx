import React, { useEffect, useRef } from 'react'
import { HERO_VIDEO_DATA } from '../data/proposalData'
import { ChevronDown, Sparkles } from 'lucide-react'

interface HeroVideoSectionProps {
  isActive: boolean
}

export const HeroVideoSection: React.FC<HeroVideoSectionProps> = ({ isActive }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Video autoplay prevented or interrupted:', err)
      })
    }
  }, [isActive])

  const scrollToPerks = () => {
    const el = document.getElementById('perks')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full h-[100svh] min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#140428]">
      {/* Ambient background glow for desktop display */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#140428] via-[#240b49]/40 to-[#140428] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cadbury-700/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Vertical Video Container */}
      <div className="relative w-full h-full sm:h-[92vh] sm:max-h-[860px] sm:max-w-[430px] sm:rounded-3xl sm:border sm:border-gold-400/40 sm:shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(214,173,85,0.2)] overflow-hidden flex items-center justify-center bg-black">
        
        {/* Video element */}
        <video
          ref={videoRef}
          src={HERO_VIDEO_DATA.videoSrc}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-95"
        />

        {/* Cinematic Gradient Overlays to preserve text legibility */}
        {/* Top Vignette */}
        <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-[#140428]/90 via-[#140428]/45 to-transparent pointer-events-none" />
        
        {/* Bottom Vignette */}
        <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#140428] via-[#140428]/75 to-transparent pointer-events-none" />

        {/* Content Hierarchy Over Video */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7 z-10 text-center pointer-events-none">
          
          {/* 1. First Staggered Item: Small Heading at Top */}
          <div className="pt-6 sm:pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex max-w-full items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#1b0638]/85 border border-gold-400/40 text-gold-300 text-[10px] sm:text-xs font-medium tracking-wider sm:tracking-widest uppercase shadow-md backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-gold-400 shrink-0" />
              <span className="truncate">{HERO_VIDEO_DATA.tagline}</span>
              <Sparkles className="w-3 h-3 text-gold-400 shrink-0" />
            </div>
          </div>

          {/* 2 & 3. Main Annotation & Secondary Caption in Lower Portion */}
          <div className="pb-10 sm:pb-6 space-y-3">
            {/* Main Annotation: "Could Be Us." */}
            <h2 
              className="font-display text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] animate-fade-in"
              style={{ animationDelay: '1.1s' }}
            >
              <span className="gold-gradient-text drop-shadow-[0_2px_15px_rgba(214,173,85,0.4)]">
                {HERO_VIDEO_DATA.mainAnnotation}
              </span>
            </h2>

            {/* Secondary Caption: "This over 'Just Friends' >>>>>" */}
            <p 
              className="text-xs sm:text-sm text-ivory-100 font-medium tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] animate-fade-in bg-black/45 backdrop-blur-sm py-1.5 px-4 rounded-full inline-block border border-gold-400/25"
              style={{ animationDelay: '1.8s' }}
            >
              {HERO_VIDEO_DATA.secondaryCaption}
            </p>

            {/* Smooth Scroll Button */}
            <div className="pt-4 pointer-events-auto">
              <button
                onClick={scrollToPerks}
                className="inline-flex items-center gap-1.5 text-xs text-gold-300/80 hover:text-gold-200 transition-colors cursor-pointer group"
                aria-label="Scroll to Perks package"
              >
                <span>Unwrap the perks package</span>
                <ChevronDown className="w-4 h-4 text-gold-400 group-hover:translate-y-1 transition-transform animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

