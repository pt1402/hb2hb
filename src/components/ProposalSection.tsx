import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import { PROPOSAL_OPTIONS, PROPOSAL_RESPONSES } from '../data/proposalData'
import { ProposalResponse } from '../types'
import { Heart, RotateCcw, Copy, Check, CheckCircle2 } from 'lucide-react'

export const ProposalSection: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState<ProposalResponse>(null)
  const [copied, setCopied] = useState(false)

  const triggerCelebration = () => {
    try {
      const end = Date.now() + 2.5 * 1000
      // Warm golden shimmer + sweet red/pink hearts confetti
      const colors = ['#D6AD55', '#E8C170', '#F5DE9C', '#FFF5E5', '#F43F5E', '#9356CC']

      const frame = () => {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 60,
          origin: { x: 0 },
          colors: colors
        })
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 60,
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

  const fallbackCopy = (text: string) => {
    try {
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      document.execCommand('copy')
      textArea.remove()
      setCopied(true)
      setTimeout(() => setCopied(false), 3500)
    } catch (err) {
      console.error('Fallback copy failed', err)
    }
  }

  const handleCopy = (text: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopied(true)
          setTimeout(() => setCopied(false), 3500)
        })
        .catch(() => fallbackCopy(text))
    } else {
      fallbackCopy(text)
    }
  }

  const currentResponse = selectedChoice ? PROPOSAL_RESPONSES[selectedChoice] : null

  return (
    <section id="proposal" className="relative py-28 px-4 sm:px-6 max-w-4xl mx-auto scroll-mt-6">
      {/* Rich Dark Cadbury Purple Background Box with Gold Accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1b0638] via-[#240b49] to-[#140428] rounded-3xl -z-10 shadow-2xl border-2 border-gold-400/40 overflow-hidden">
        {/* Soft Glowing Gold and Purple Radial Accents safely clipped inside */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-16 left-1/3 w-80 h-80 bg-cadbury-500/20 rounded-full blur-[110px] pointer-events-none" />
      </div>

      {/* Decorative Gold Foil Corners */}
      <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-gold-400/80 rounded-tl-lg pointer-events-none" />
      <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-gold-400/80 rounded-tr-lg pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-gold-400/80 rounded-bl-lg pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-gold-400/80 rounded-br-lg pointer-events-none" />

      <div className="relative text-center max-w-2xl mx-auto p-2 sm:p-8">
        
        {/* Top Label */}
        <div className="inline-flex max-w-full items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-cadbury-900/90 border border-gold-400/40 text-gold-300 text-[11px] sm:text-xs font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-5 shadow-sm">
          <Heart className="w-3.5 h-3.5 fill-current text-gold-400 shrink-0" />
          <span className="truncate">The Climax of the Proposal</span>
          <Heart className="w-3.5 h-3.5 fill-current text-gold-400 shrink-0" />
        </div>

        {/* Main Heading */}
        <h2 className="font-display text-3xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-4">
          So, what do you say? 🥹
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-ivory-100/90 font-serif italic max-w-lg mx-auto mb-10 leading-relaxed">
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
                className={`w-full py-3.5 sm:py-4 px-3 sm:px-4 rounded-2xl text-center transition-all duration-300 cursor-pointer font-medium flex flex-col items-center justify-center gap-1 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-cadbury-950 border-gold-200 shadow-[0_0_30px_rgba(214,173,85,0.65)] scale-[1.03] ring-2 ring-gold-200/70 font-bold'
                    : 'bg-cadbury-950/70 hover:bg-cadbury-900/80 text-ivory-100 border-gold-400/30 hover:border-gold-400/60 hover:scale-[1.02] active:scale-[0.98]'
                }`}
              >
                <span className="text-base sm:text-lg font-bold tracking-wide">
                  {option.label}
                </span>
                <span className={`text-[11px] font-light ${isSelected ? 'text-cadbury-950 font-semibold' : 'text-gold-300/80'}`}>
                  {option.subLabel}
                </span>
              </button>
            )
          })}
        </div>

        {/* Response Feedback Card */}
        {currentResponse && (
          <div className="relative mt-8 p-5 sm:p-8 rounded-3xl bg-gradient-to-b from-[#2e0e56]/95 to-[#1a0533]/98 border-2 border-gold-400/50 text-left shadow-[0_15px_45px_rgba(0,0,0,0.8),0_0_25px_rgba(214,173,85,0.2)] animate-fade-in backdrop-blur-xl">
            
            {/* Top response badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/15 text-gold-200 text-xs font-semibold border border-gold-400/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                {currentResponse.badge}
              </span>

              {/* Reset/Change Choice Button */}
              <button
                onClick={() => setSelectedChoice(null)}
                className="inline-flex items-center gap-1 text-xs text-gold-300/70 hover:text-gold-200 transition-colors cursor-pointer"
                title="Change or reset response"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Change answer</span>
              </button>
            </div>

            {/* Response Title & Exact Message */}
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              {currentResponse.title}
            </h3>

            <p className="text-base sm:text-lg text-ivory-100 font-serif italic whitespace-pre-line leading-relaxed mb-4">
              {currentResponse.message}
            </p>

            <p className="text-xs sm:text-sm text-gold-300/80 font-light leading-relaxed mb-6 pt-3 border-t border-gold-400/20">
              {currentResponse.followUp}
            </p>

            {/* Single Primary Action: "Copy & Send Me" */}
            <div className="pt-2">
              <button
                onClick={() => handleCopy(currentResponse.replyDraft)}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer ${
                  copied
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-2 border-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.5)] scale-[1.02]'
                    : 'gold-button'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Copied! Send it to me 💜</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy & Send Me</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Privacy & Safety Note */}
        <div className="mt-8 text-center text-xs text-gold-400/60 font-mono">
          🔒 I can't see what you select. You'll have to text me.
        </div>
      </div>
    </section>
  )
}
