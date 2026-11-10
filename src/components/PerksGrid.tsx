import React, { useState } from 'react'
import { PERKS_DATA } from '../data/proposalData'
import { Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react'

export const PerksGrid: React.FC = () => {
  const [activePerk, setActivePerk] = useState<string | null>(null)

  return (
    <section id="perks" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-plum-700/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/60 border border-rose-400/25 text-rose-300 text-xs tracking-wider uppercase mb-3">
          <HeartHandshake className="w-3.5 h-3.5 text-rose-400" />
          <span>Membership Privileges</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-white tracking-tight mb-4">
          The Perks Package ❤️
        </h2>

        <p className="text-sm sm:text-base text-rose-100/80 font-light leading-relaxed">
          Everything you love about an extraordinary friendship, elevated with mutual attraction and zero unnecessary complications.
        </p>
      </div>

      {/* Responsive Card Grid: 1 col on mobile, 2 on tablet, 4 on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {PERKS_DATA.map((perk, index) => {
          const isSelected = activePerk === perk.id

          return (
            <div
              key={perk.id}
              onClick={() => setActivePerk(isSelected ? null : perk.id)}
              className={`relative rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer select-none border text-left flex flex-col justify-between group ${
                isSelected
                  ? 'bg-rose-950/80 border-rose-400/50 shadow-[0_10px_30px_-5px_rgba(244,63,94,0.35)] scale-[1.02]'
                  : 'bg-plum-950/50 hover:bg-plum-900/60 border-rose-500/20 hover:border-rose-400/40 hover:-translate-y-1 shadow-lg shadow-black/40'
              } backdrop-blur-md`}
              style={{
                animationDelay: `${index * 80}ms`
              }}
            >
              {/* Highlight Tag */}
              {perk.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/20">
                    {perk.highlight}
                  </span>
                </div>
              )}

              <div>
                {/* Emoji Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-900/40 to-plum-800/40 border border-rose-400/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-inner">
                  {perk.emoji}
                </div>

                {/* Perk Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white tracking-wide mb-1 group-hover:text-rose-200 transition-colors">
                  {perk.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs text-rose-300/80 font-medium mb-3">
                  {perk.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-rose-100/70 font-light leading-relaxed">
                  {perk.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-5 pt-3 border-t border-rose-500/10 flex items-center justify-between text-[11px] text-rose-400/70">
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-rose-400" />
                  Included in package
                </span>
                <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-rose-300" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Subtle reassurance note below grid */}
      <div className="mt-8 text-center text-xs text-rose-300/60 font-serif italic">
        * All perks are customizable by mutual agreement at any time.
      </div>
    </section>
  )
}
