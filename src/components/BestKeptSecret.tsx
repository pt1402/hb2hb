import React from 'react'
import { PROMISES_DATA } from '../data/proposalData'
import { ShieldCheck, HeartHandshake, Check } from 'lucide-react'

export const BestKeptSecret: React.FC = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Visual Distinction: Soft Blush-Pink Radiant Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/15 via-pink-400/20 to-rose-600/15 rounded-3xl blur-2xl -z-10" />

      {/* Main Blush-Pink Distinguished Card */}
      <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-rose-300/40 bg-gradient-to-b from-[#2e0e24]/90 via-[#270b1e]/95 to-[#1c0716]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(244,63,94,0.2)] overflow-hidden">
        
        {/* Subtle decorative watermark/accent */}
        <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-rose-400/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-pink-500/10 blur-2xl pointer-events-none" />

        {/* Header inside the blush card */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-300/20 border border-rose-300/35 text-rose-100 text-xs sm:text-sm font-medium tracking-wide mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-rose-300" />
            <span>Guaranteed Core Values</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-white tracking-tight mb-3">
            The Best-Kept Secret 🤫
          </h2>

          <p className="text-base sm:text-lg font-serif italic text-rose-200/90 font-normal">
            "Some perks come with a few promises."
          </p>
        </div>

        {/* The 4 Promises List */}
        <div className="space-y-5 sm:space-y-6">
          {PROMISES_DATA.map((promise) => (
            <div
              key={promise.id}
              className="group p-4 sm:p-5 rounded-2xl bg-rose-950/40 hover:bg-rose-900/40 border border-rose-300/20 hover:border-rose-300/40 transition-all duration-300 flex items-start gap-4 shadow-sm"
            >
              {/* Pink Checkmark Icon */}
              <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 text-white flex items-center justify-center shadow-[0_0_12px_rgba(244,63,94,0.4)] mt-0.5 group-hover:scale-110 transition-transform">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>

              {/* Promise Content */}
              <div className="flex-1 text-left">
                <h3 className="text-base sm:text-lg font-semibold text-rose-50 tracking-wide mb-1 flex items-center flex-wrap gap-2">
                  <span>{promise.title}</span>
                  {promise.isJoke && (
                    <span className="text-[11px] font-sans font-normal text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded-full border border-rose-400/20">
                      Inside joke honored ✨
                    </span>
                  )}
                </h3>

                <p className="text-sm sm:text-base text-rose-100/85 font-light leading-relaxed">
                  "{promise.description}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Heartfelt Note at base of the card */}
        <div className="mt-8 pt-6 border-t border-rose-400/20 text-center flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-rose-200/80">
          <HeartHandshake className="w-4 h-4 text-rose-300 shrink-0" />
          <span>Not legal terms. Just genuine promises of comfort, respect, and zero awkwardness.</span>
        </div>
      </div>
    </section>
  )
}
