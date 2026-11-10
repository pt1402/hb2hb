import React from 'react'
import { Calendar, Bell, ChevronDown, Sparkles } from 'lucide-react'
import { PROPOSAL_METADATA, ASSETS_CONFIG } from '../data/proposalData'

interface HeroSectionProps {
  onExploreClick: () => void
  onOpenBixbyLore: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onOpenBixbyLore
}) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-10 pb-16 px-4 sm:px-6 text-center">
      {/* Decorative ambient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-b from-rose-950/40 via-plum-900/20 to-transparent pointer-events-none -z-10" />

      {/* Top Application Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-200 text-xs sm:text-sm font-medium tracking-widest uppercase shadow-[0_0_15px_rgba(244,63,94,0.15)] mb-6 animate-fade-in">
        <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
        <span>{PROPOSAL_METADATA.badge}</span>
        <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
      </div>

      {/* Date & Inside Joke Callback Tag */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-rose-400/20 text-rose-200 text-xs sm:text-sm backdrop-blur-md">
          <Calendar className="w-3.5 h-3.5 text-rose-400" />
          <span className="font-semibold tracking-wider text-rose-100">{PROPOSAL_METADATA.dateFormatted}</span>
        </div>

        {/* Clickable Bixby Reminder Tag */}
        <button
          onClick={onOpenBixbyLore}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-900/30 hover:bg-rose-900/50 border border-rose-400/30 text-rose-300 text-xs transition-all hover:scale-105 active:scale-95 group cursor-pointer"
          title="Click to view the 15-day callback lore!"
        >
          <Bell className="w-3 h-3 text-rose-400 group-hover:rotate-12 transition-transform" />
          <span>Bixby Reminder Verified</span>
          <span className="text-[10px] bg-rose-500/30 text-rose-200 px-1.5 py-0.2 rounded-full">15 days</span>
        </button>
      </div>

      {/* Main Pre-Heading */}
      <p className="text-base sm:text-xl font-serif italic text-rose-200/90 mb-3 tracking-wide">
        "{PROPOSAL_METADATA.mainPreHeading}"
      </p>

      {/* Central Title */}
      <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white max-w-3xl leading-[1.15] mb-5">
        Can I Be Your <br />
        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-300 to-pink-400 drop-shadow-[0_2px_20px_rgba(244,63,94,0.35)]">
          Half-Boyfriend?
          <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-60"></span>
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-rose-100/80 max-w-xl mx-auto font-light leading-relaxed mb-8">
        {PROPOSAL_METADATA.subtitle}
      </p>

      {/* Cinematic Romantic Visual */}
      <div className="relative w-full max-w-md sm:max-w-lg mb-8 group">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-rose-500/30 via-pink-500/20 to-purple-600/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />
        
        <div className="relative rounded-2xl overflow-hidden border border-rose-400/25 bg-plum-950/70 shadow-2xl aspect-[16/10] sm:aspect-[16/10]">
          <img
            src={ASSETS_CONFIG.heroImage}
            alt={ASSETS_CONFIG.heroImageAlt}
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="eager"
          />
          {/* Subtle gradient overlay to match aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#14040f] via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 bg-rose-950/20 mix-blend-color" />
          
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-rose-200/90 font-serif italic">
            <span>"Chemistry without the pressure."</span>
            <span className="font-sans text-[11px] bg-black/50 backdrop-blur-md px-2 py-0.5 rounded text-rose-300 border border-white/10">
              Nov 21 Callback
            </span>
          </div>
        </div>
      </div>

      {/* Instruction */}
      <p className="text-xs sm:text-sm text-rose-300/80 italic font-serif mb-6 max-w-md">
        {PROPOSAL_METADATA.promptInstruction}
      </p>

      {/* Smooth Scrolling Button */}
      <button
        onClick={onExploreClick}
        className="glass-button text-white font-medium text-sm sm:text-base px-7 py-3 rounded-full flex items-center gap-2 group cursor-pointer"
        aria-label="Scroll to proposal preview"
      >
        <span>{PROPOSAL_METADATA.scrollCta}</span>
        <ChevronDown className="w-4 h-4 text-white group-hover:translate-y-1 transition-transform" />
      </button>
    </section>
  )
}
