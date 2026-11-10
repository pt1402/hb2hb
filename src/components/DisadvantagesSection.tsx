import React from 'react'
import { DISADVANTAGES_DATA } from '../data/proposalData'
import { AlertCircle, HeartCrack } from 'lucide-react'

export const DisadvantagesSection: React.FC = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 max-w-2xl mx-auto text-center">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-rose-600/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Heading */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/40 border border-rose-400/20 text-rose-300 text-xs tracking-wider uppercase mb-3">
        <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
        <span>Transparency Clause</span>
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-8">
        {DISADVANTAGES_DATA.heading}
      </h2>

      {/* Playful Card */}
      <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-plum-950/80 to-[#1e0717]/90 border border-rose-500/25 backdrop-blur-md shadow-xl overflow-hidden group">
        
        {/* Subtle decorative stamp */}
        <div className="absolute top-3 right-4 rotate-6 opacity-30 group-hover:opacity-60 transition-opacity">
          <span className="font-mono text-[10px] tracking-widest uppercase border border-rose-400 px-2 py-0.5 rounded text-rose-300">
            RISK ASSESSMENT: 0%
          </span>
        </div>

        {/* Big Bold "None.*" */}
        <div className="py-4">
          <span className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-300 to-pink-400 drop-shadow-[0_4px_15px_rgba(244,63,94,0.3)]">
            {DISADVANTAGES_DATA.mainText}
          </span>
        </div>

        {/* Small Disclaimer */}
        <div className="max-w-md mx-auto my-4 p-3.5 rounded-xl bg-black/40 border border-rose-500/20 text-xs sm:text-sm text-rose-200/90 font-light leading-relaxed">
          <p>{DISADVANTAGES_DATA.disclaimer}</p>
        </div>

        {/* Humorous Footer Warranty */}
        <div className="mt-4 pt-3 border-t border-rose-500/15 flex items-center justify-center gap-2 text-xs text-rose-400/80 font-mono">
          <HeartCrack className="w-3.5 h-3.5 text-rose-400 shrink-0" />
          <span>{DISADVANTAGES_DATA.warranty}</span>
        </div>
      </div>
    </section>
  )
}
