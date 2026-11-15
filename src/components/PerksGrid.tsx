import React, { useState } from 'react'
import { PERK_TIERS_DATA, PROMISES_DATA } from '../data/proposalData'
import { Sparkles, Check, ShieldCheck, HeartHandshake, Bell } from 'lucide-react'

interface PerksGridProps {
  onOpenBixbyLore: () => void
}

export const PerksGrid: React.FC<PerksGridProps> = ({ onOpenBixbyLore }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  return (
    <section id="perks" className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-6">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 right-5 w-96 h-96 bg-cadbury-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-5 w-96 h-96 bg-gold-600/10 rounded-full blur-[140px]" />
      </div>

      {/* ======================================================== */}
      {/* SECTION A: THE PERKS PACKAGE                              */}
      {/* ======================================================== */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        {/* Top Gold Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cadbury-900/90 border border-gold-400/40 text-gold-300 text-xs tracking-[0.18em] uppercase mb-4 shadow-sm">
          <span>🍫</span>
          <span>Cadbury Curated Assortment</span>
          <span>✦</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          The Perks Package ❤️
        </h2>

        <p className="text-sm sm:text-base text-ivory-100/80 font-light leading-relaxed max-w-lg mx-auto">
          A three-tier assortment of what stays, what levels up, and what is waiting to be explored.
        </p>
      </div>

      {/* ======================================================== */}
      {/* THE 3 CADBURY TIERS                                      */}
      {/* ======================================================== */}
      <div className="space-y-14 sm:space-y-16 mb-24">
        {PERK_TIERS_DATA.map((tier, tierIdx) => {
          const isFoundation = tier.id === 'foundation'

          return (
            <div key={tier.id} className="relative">
              {/* Tier Header with Gold Tag & Decorative Line */}
              <div className="mb-6 text-left sm:text-center">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-gold-400 bg-cadbury-950/80 px-3 py-0.5 rounded-full border border-gold-400/30">
                    {tier.tierBadge}
                  </span>
                  <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-gold-400/50 to-transparent" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-center gap-1 sm:gap-3">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
                    {tier.title}
                  </h3>
                  <span className="font-script text-xl sm:text-2xl text-gold-300/90 font-normal">
                    "{tier.subtitle}"
                  </span>
                </div>
              </div>

              {/* Cards Grid */}
              {/* For Foundation (Tier 1): strictly grid-cols-2 on all screens including mobile */}
              {/* For Upgrade & Indulgence (Tiers 2 & 3): grid-cols-1 sm:grid-cols-2 */}
              <div
                className={`grid gap-3.5 sm:gap-6 ${
                  isFoundation
                    ? 'grid-cols-2'
                    : 'grid-cols-1 sm:grid-cols-2'
                }`}
              >
                {tier.cards.map((card, cardIdx) => {
                  const isSelected = activeCard === card.id

                  return (
                    <div
                      key={card.id}
                      onClick={() => setActiveCard(isSelected ? null : card.id)}
                      className={`relative rounded-2xl transition-all duration-300 cursor-pointer select-none text-left flex flex-col justify-between group ${tier.cardClass} ${
                        isFoundation
                          ? 'p-3.5 sm:p-6'
                          : 'p-5 sm:p-7'
                      } ${
                        isSelected
                          ? 'scale-[1.02] border-gold-400 ring-2 ring-gold-400/40 shadow-[0_12px_35px_rgba(214,173,85,0.25)]'
                          : 'hover:-translate-y-1'
                      }`}
                      style={{
                        animationDelay: `${(tierIdx * 2 + cardIdx) * 80}ms`
                      }}
                    >
                      <div>
                        {/* Gold Medallion Icon */}
                        <div
                          className={`rounded-xl bg-gradient-to-br from-gold-400/25 via-cadbury-800 to-cadbury-950 border border-gold-400/40 flex items-center justify-center transition-transform group-hover:scale-110 shadow-inner ${
                            isFoundation
                              ? 'w-10 h-10 sm:w-12 sm:h-12 text-xl sm:text-2xl mb-3'
                              : 'w-12 h-12 text-2xl mb-4'
                          }`}
                        >
                          {card.emoji}
                        </div>

                        {/* Perk Title */}
                        <h4
                          className={`font-display font-bold text-white tracking-wide group-hover:text-gold-200 transition-colors ${
                            isFoundation
                              ? 'text-sm sm:text-xl mb-1'
                              : 'text-xl sm:text-2xl mb-1'
                          }`}
                        >
                          {card.title}
                        </h4>

                        {/* Subtitle */}
                        <p
                          className={`font-medium ${
                            isFoundation
                              ? 'text-[10px] sm:text-xs text-gold-400/90'
                              : 'text-xs text-gold-400/90 mb-3'
                          }`}
                        >
                          {card.subtitle}
                        </p>

                        {/* Description (Omitted for Tier 1: Foundation as specified) */}
                        {card.description && (
                          <p className="text-xs sm:text-sm text-ivory-100/80 font-light leading-relaxed mt-1">
                            {card.description}
                          </p>
                        )}
                      </div>

                      {/* Bottom Subtle Indicator */}
                      <div className="mt-3 sm:mt-4 pt-2 sm:pt-2.5 border-t border-gold-400/15 flex items-center justify-between text-[9px] sm:text-[11px] text-gold-400/70">
                        <span className="inline-flex items-center gap-1 font-mono truncate">
                          <Check className="w-3 h-3 text-gold-400 shrink-0" />
                          <span className="truncate">{isFoundation ? 'Guaranteed' : 'Included'}</span>
                        </span>
                        <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity text-gold-300 shrink-0" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* ======================================================== */}
      {/* SECTION B: THE BEST-KEPT SECRET 🤫 (Inside Perks Package) */}
      {/* ======================================================== */}
      <div className="relative rounded-3xl p-5 sm:p-10 md:p-12 border-2 border-gold-400/50 bg-gradient-to-b from-[#280c4f] via-[#1f073d] to-[#140428] shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(214,173,85,0.18)] overflow-hidden">
        
        {/* Decorative Gold Foil Corners */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold-400/80 rounded-tl-lg pointer-events-none" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold-400/80 rounded-tr-lg pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold-400/80 rounded-bl-lg pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold-400/80 rounded-br-lg pointer-events-none" />

        {/* Ambient glow accents inside the card */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gold-400/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-purple-500/10 blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cadbury-900/80 border border-gold-400/35 text-gold-300 text-xs sm:text-sm font-medium tracking-wide mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>Guaranteed Core Values</span>
          </div>

          <h2 className="font-display text-2xl sm:text-5xl font-bold text-white tracking-tight mb-3">
            The Best-Kept Secret 🤫
          </h2>

          <p className="font-script text-gold-300 text-xl sm:text-3xl font-normal">
            "Some perks come with a few promises."
          </p>
        </div>

        {/* The 4 Promises List */}
        <div className="space-y-4 sm:space-y-5">
          {PROMISES_DATA.map((promise) => (
            <div
              key={promise.id}
              className="group p-4 sm:p-5 rounded-2xl bg-cadbury-950/60 hover:bg-cadbury-900/70 border border-gold-400/25 hover:border-gold-400/50 transition-all duration-300 flex items-start gap-4 shadow-sm"
            >
              {/* Gold Checkmark */}
              <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-tr from-gold-600 to-gold-400 text-cadbury-950 flex items-center justify-center shadow-[0_0_12px_rgba(214,173,85,0.4)] mt-0.5 group-hover:scale-110 transition-transform font-bold">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>

              {/* Promise Content */}
              <div className="flex-1 min-w-0 text-left">
                <h3 className="text-base sm:text-lg font-bold text-ivory-50 tracking-wide mb-1 flex items-center flex-wrap gap-2">
                  <span>{promise.title}</span>
                  {promise.isJoke && (
                    <button
                      onClick={onOpenBixbyLore}
                      className="max-w-full text-[10px] sm:text-[11px] font-sans font-normal text-gold-300 bg-gold-500/15 hover:bg-gold-500/25 px-2 sm:px-2.5 py-0.5 rounded-full border border-gold-400/30 inline-flex items-center gap-1 transition-colors cursor-pointer"
                      title="View Bixby reminder receipt"
                    >
                      <Bell className="w-2.5 h-2.5 text-gold-400 shrink-0" />
                      <span className="truncate">Click to verify 15-day receipt✨</span>
                    </button>
                  )}
                </h3>

                <p className="text-sm sm:text-base text-ivory-100/85 font-light leading-relaxed">
                  "{promise.description}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Warm closing note */}
        <div className="mt-8 pt-6 border-t border-gold-400/20 text-center flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-gold-300/80">
          <HeartHandshake className="w-4 h-4 text-gold-400 shrink-0" />
          <span>Not legal terms. Just promises of warmth, trust, respect, freedom, comfort and consent.</span>
        </div>
      </div>
    </section>
  )
}
