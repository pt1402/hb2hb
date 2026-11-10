import React from 'react'
import { FOOTER_DATA } from '../data/proposalData'
import { Heart } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 px-4 text-center border-t border-rose-900/30 bg-[#0e020a]">
      {/* Subtle ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-rose-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto space-y-4">
        {/* Animated Heart */}
        <div className="inline-flex items-center justify-center">
          <Heart className="w-6 h-6 text-rose-500 fill-current animate-pulse drop-shadow-[0_0_10px_rgba(244,63,94,0.6)]" />
        </div>

        {/* Footer Line 1 */}
        <p className="text-sm sm:text-base text-rose-200/90 font-serif italic max-w-md mx-auto leading-relaxed">
          "{FOOTER_DATA.line1}"
        </p>

        {/* Footer Line 2 */}
        <p className="text-xs sm:text-sm text-rose-300/80 font-medium tracking-wide uppercase">
          {FOOTER_DATA.line2}
        </p>

        {/* Application Stamp */}
        <div className="pt-4 text-[11px] font-mono text-rose-400/40">
          Ref: {FOOTER_DATA.applicationId} • November 21, 2026
        </div>
      </div>
    </footer>
  )
}
