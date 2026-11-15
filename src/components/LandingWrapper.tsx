import React, { useState } from 'react'
import { Sparkles, Heart } from 'lucide-react'
import { PROPOSAL_METADATA } from '../data/proposalData'

interface LandingWrapperProps {
  onReveal: () => void
}

export const LandingWrapper: React.FC<LandingWrapperProps> = ({ onReveal }) => {
  const [isOpening, setIsOpening] = useState(false)

  const handleTap = () => {
    if (isOpening) return
    setIsOpening(true)
    // Trigger audio and main state change right away, then finish the wrapper transition
    onReveal()
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#16042d] transition-all duration-1000 ease-out select-none overflow-hidden ${
        isOpening ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(106, 43, 168, 0.45) 0%, rgba(27, 6, 56, 0.95) 70%, #120324 100%),
          repeating-linear-gradient(45deg, rgba(214, 173, 85, 0.02) 0px, rgba(214, 173, 85, 0.02) 2px, transparent 2px, transparent 12px)
        `
      }}
    >
      {/* Ambient golden glow behind the box */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] max-w-full max-h-full bg-[#d6ad55]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating subtle gold sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-[15%] left-[20%] text-gold-400/40 text-lg animate-pulse">✦</span>
        <span className="absolute top-[25%] right-[22%] text-gold-300/50 text-sm animate-pulse" style={{ animationDelay: '1s' }}>✧</span>
        <span className="absolute bottom-[20%] left-[25%] text-gold-400/35 text-xs animate-pulse" style={{ animationDelay: '1.5s' }}>✦</span>
        <span className="absolute bottom-[28%] right-[18%] text-gold-300/40 text-base animate-pulse" style={{ animationDelay: '0.5s' }}>✧</span>
      </div>

      {/* The Chocolate Gift Box Wrapper Card */}
      <div className="relative w-full max-w-lg min-w-0 rounded-3xl p-5 sm:p-11 text-center bg-gradient-to-b from-[#2b0c54] via-[#220743] to-[#170430] border-2 border-gold-500/50 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.85),0_0_35px_rgba(214,173,85,0.25)] overflow-hidden">
        
        {/* Decorative Gold Foil Corner Accents */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold-400/80 rounded-tl-lg pointer-events-none" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold-400/80 rounded-tr-lg pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold-400/80 rounded-bl-lg pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold-400/80 rounded-br-lg pointer-events-none" />

        {/* Diagonal Gold Ribbon / Wrapper Sheen Accent */}
        <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-bl from-gold-400/25 via-gold-500/10 to-transparent rotate-12 blur-lg pointer-events-none" />
        
        {/* Top Decorative Label */}
        <div className="inline-flex max-w-full items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 rounded-full bg-[#1b0638]/90 border border-gold-400/40 text-gold-300 text-[10px] sm:text-xs font-medium tracking-[0.1em] sm:tracking-[0.2em] uppercase shadow-inner mb-6">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-400 shrink-0 animate-spin" style={{ animationDuration: '8s' }} />
          <span className="truncate">{PROPOSAL_METADATA.landingBadge}</span>
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-400 shrink-0 animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        {/* Script flourish */}
        <p className="font-script text-2xl sm:text-3xl text-gold-300/80 mb-2 font-normal">
          A treat for someone special
        </p>

        {/* Central Title */}
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-5">
          Can I Be Your <br />
          <span className="relative inline-block gold-gradient-text drop-shadow-[0_2px_15px_rgba(214,173,85,0.4)]">
            Half-Boyfriend?
            <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-ivory-100/85 max-w-md mx-auto font-light leading-relaxed mb-8">
          {PROPOSAL_METADATA.subtitle}
        </p>

        {/* Chocolate Bar Medallion Motif */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 max-w-full">
          <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-gold-400/60" />
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-cadbury-900/80 border border-gold-400/30 text-[11px] sm:text-xs text-gold-300 font-mono shrink-0">
            <span>🍫</span>
            <span>Cadbury-Edition</span>
            <span>•</span>
            <span>Nov 21</span>
          </div>
          <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-gold-400/60" />
        </div>

        {/* Primary CTA Button */}
        <div className="relative group max-w-sm mx-auto w-full">
          {/* Subtle button ambient glow */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-gold-400/40 via-purple-500/30 to-gold-400/40 blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />

          <button
            onClick={handleTap}
            disabled={isOpening}
            className="relative w-full py-4 px-6 rounded-full bg-gradient-to-r from-cadbury-800 via-cadbury-700 to-cadbury-800 hover:from-cadbury-700 hover:to-cadbury-600 border-2 border-gold-400 text-gold-200 hover:text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.5),0_0_15px_rgba(214,173,85,0.35)] flex items-center justify-center gap-3 cursor-pointer group-hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4 text-gold-400 group-hover:rotate-180 transition-transform duration-700" />
            <span className="font-sans font-bold tracking-[0.12em] text-white">
              {PROPOSAL_METADATA.landingCta}
            </span>
            <Heart className="w-4 h-4 text-gold-400 fill-current animate-pulse" />
          </button>
        </div>

        {/* Small wrapper instruction */}
        <p className="mt-5 text-[11px] text-gold-300/60 font-sans tracking-wide">
          Tap to unwrap & start the background music ✨
        </p>
      </div>
    </div>
  )
}

