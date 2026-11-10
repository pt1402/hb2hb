import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import { PROPOSAL_OPTIONS, PROPOSAL_RESPONSES } from '../data/proposalData'
import { ProposalResponse } from '../types'
import { Heart, MessageCircle, RotateCcw, Send, CheckCircle2 } from 'lucide-react'

export const ProposalSection: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState<ProposalResponse>(null)
  const [copied, setCopied] = useState(false)

  const triggerCelebration = () => {
    // Elegant pink and rose hearts celebration
    try {
      const end = Date.now() + 2.5 * 1000
      const colors = ['#f43f5e', '#fb7185', '#fda4af', '#f472b6', '#ffffff']

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        })
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        })

        if (Date.now() < end) {
          requestAnimationFrame(frame)
        }
      }
      frame()
    } catch (e) {
      console.log('Confetti effect failed gracefully', e)
    }
  }

  const handleSelect = (choice: 'yes' | 'discuss' | 'friends') => {
    setSelectedChoice(choice)
    setCopied(false)
    if (choice === 'yes') {
      triggerCelebration()
    }
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    })
  }

  const currentResponse = selectedChoice ? PROPOSAL_RESPONSES[selectedChoice] : null

  return (
    <section id="proposal" className="relative py-24 px-4 sm:px-6 max-w-4xl mx-auto scroll-mt-10">
      {/* Intense Romantic Burgundy/Dark-Plum Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c0615] via-[#2a081e] to-[#160411] rounded-3xl -z-10 shadow-2xl border border-rose-500/20" />
      
      {/* Soft Glowing Pink Accents */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-80 h-80 bg-rose-500/20 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-pink-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="relative text-center max-w-2xl mx-auto p-4 sm:p-8">
        
        {/* Main Heading */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-500/15 border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-medium tracking-wide mb-5">
          <Heart className="w-3.5 h-3.5 fill-current text-rose-400" />
          <span>The Moment of Truth</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight mb-4">
          So, what do you say? 🥹
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-rose-200/90 font-serif italic max-w-lg mx-auto mb-10">
          "No pressure. I'd rather have an honest answer than an obligatory yes."
        </p>

        {/* The 3 Interactive Choices */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mb-8">
          {PROPOSAL_OPTIONS.map((option) => {
            const isSelected = selectedChoice === option.id

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={`w-full py-4 px-4 rounded-2xl text-center transition-all duration-300 cursor-pointer font-medium flex flex-col items-center justify-center gap-1 border ${
                  isSelected
                    ? 'bg-rose-500 text-white border-rose-300 shadow-[0_0_30px_rgba(244,63,94,0.6)] scale-[1.03] ring-2 ring-rose-300/50'
                    : 'bg-plum-950/70 hover:bg-rose-950/60 text-rose-100 border-rose-500/25 hover:border-rose-400/50 hover:scale-[1.02] active:scale-[0.98]'
                }`}
              >
                <span className="text-base sm:text-lg font-semibold tracking-wide">
                  {option.label}
                </span>
                <span className={`text-[11px] font-light ${isSelected ? 'text-rose-100' : 'text-rose-300/70'}`}>
                  {option.subLabel}
                </span>
              </button>
            )
          })}
        </div>

        {/* Response Feedback Card */}
        {currentResponse && (
          <div className="relative mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#340c26]/90 to-[#220719]/95 border-2 border-rose-400/40 text-left shadow-[0_15px_40px_rgba(244,63,94,0.25)] animate-fade-in backdrop-blur-xl">
            
            {/* Top response badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-200 text-xs font-semibold border border-rose-400/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
                {currentResponse.badge}
              </span>

              {/* Reset/Change Choice Button */}
              <button
                onClick={() => setSelectedChoice(null)}
                className="inline-flex items-center gap-1 text-xs text-rose-300/70 hover:text-rose-200 transition-colors cursor-pointer"
                title="Change or reset response"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Change answer</span>
              </button>
            </div>

            {/* Response Title & Exact Message */}
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              {currentResponse.title}
            </h3>

            <p className="text-base sm:text-lg text-rose-100 font-serif italic whitespace-pre-line leading-relaxed mb-4">
              {currentResponse.message}
            </p>

            <p className="text-xs sm:text-sm text-rose-200/80 font-light leading-relaxed mb-6 pt-3 border-t border-rose-500/15">
              {currentResponse.followUp}
            </p>

            {/* Quick Action to reply over WhatsApp or Copy */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(currentResponse.whatsappDraft)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-medium transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send via WhatsApp</span>
              </a>

              <button
                onClick={() => handleCopy(currentResponse.whatsappDraft)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-rose-950/60 hover:bg-rose-900/70 border border-rose-400/30 text-rose-200 text-xs sm:text-sm font-medium transition-all hover:scale-105 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-rose-400" />
                <span>{copied ? "Copied message! ✓" : "Copy text reply"}</span>
              </button>
            </div>
          </div>
        )}

        {/* Privacy & Safety Note */}
        <div className="mt-8 text-center text-xs text-rose-400/60">
          🔒 Your answer stays completely private in your browser. Nothing is logged or tracked.
        </div>
      </div>
    </section>
  )
}
