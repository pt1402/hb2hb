import React from 'react'
import { DISADVANTAGES_DATA } from '../data/proposalData'
import { AlertCircle, HeartCrack } from 'lucide-react'

export const DisadvantagesSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-2xl mx-auto text-center scroll-mt-6">
      {/* Subtle gold glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Heading */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cadbury-900/90 border border-gold-400/30 text-gold-300 text-xs tracking-[0.18em] uppercase mb-4 shadow-sm">
        <AlertCircle className="w-3.5 h-3.5 text-gold-400" />
        <span>Quality & Risk Assessment</span>
      </div>

      <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
        {DISADVANTAGES_DATA.heading}
      </h2>

      {/* Playful Chocolate Packaging Card */}
      <div className="relative rounded-3xl p-5 sm:p-9 bg-gradient-to-b from-[#240b49] via-[#1c0638] to-[#140428] border-2 border-gold-400/40 shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(214,173,85,0.15)] overflow-hidden group">
        
        {/* Subtle decorative gold seal */}
        <div className="absolute top-3 right-4 rotate-3 opacity-40 group-hover:opacity-80 transition-opacity">
          <span className="font-mono text-[10px] tracking-widest uppercase border border-gold-400 px-2 py-0.5 rounded text-gold-300">
            PURITY: 100%
          </span>
        </div>

        {/* Big Bold "None.*" */}
        <div className="py-4">
          <span className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight gold-gradient-text drop-shadow-[0_4px_20px_rgba(214,173,85,0.4)]">
            {DISADVANTAGES_DATA.mainText}
          </span>
        </div>

        {/* Small Disclaimer */}
        <div className="max-w-md mx-auto my-4 p-4 rounded-xl bg-cadbury-950/70 border border-gold-400/25 text-xs sm:text-sm text-ivory-100/90 font-light leading-relaxed">
          <p>{DISADVANTAGES_DATA.disclaimer}</p>
        </div>

        {/* Humorous Warranty Line */}
        <div className="mt-5 pt-3 border-t border-gold-400/20 flex items-center justify-center gap-2 text-xs text-gold-300/80 font-mono">
          <HeartCrack className="w-4 h-4 text-gold-400 shrink-0" />
          <span>{DISADVANTAGES_DATA.warranty}</span>
        </div>
      </div>
    </section>
  )
}
