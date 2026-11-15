import React from 'react'
import { FOOTER_DATA } from '../data/proposalData'
import { Sparkles } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 px-4 text-center border-t border-gold-400/20 bg-[#120324] overflow-hidden">
      {/* Golden ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 max-w-full bg-gold-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto space-y-4">
        {/* Golden Decorative Separator Flourish */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-gold-400/60 to-gold-400" />
          <div className="relative">
            <span className="text-xl inline-block animate-pulse">🍫</span>
            <Sparkles className="w-3.5 h-3.5 text-gold-400 absolute -top-1 -right-2 animate-spin" style={{ animationDuration: '6s' }} />
          </div>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent via-gold-400/60 to-gold-400" />
        </div>

        {/* Footer Line 1 */}
        <p className="text-sm sm:text-base text-ivory-100/90 font-serif italic max-w-md mx-auto leading-relaxed">
          "{FOOTER_DATA.line1}"
        </p>

        {/* Footer Line 2 */}
        <p className="text-xs sm:text-sm text-gold-300 font-medium tracking-[0.15em] uppercase">
          {FOOTER_DATA.line2}
        </p>

        {/* Application Stamp */}
        <div className="pt-3 text-[11px] font-mono text-gold-400/40">
          {FOOTER_DATA.edition}
        </div>
      </div>
    </footer>
  )
}
