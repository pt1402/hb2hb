import React from 'react'
import { X, Bell, CheckCircle, Calendar, Sparkles } from 'lucide-react'

interface BixbyModalProps {
  isOpen: boolean
  onClose: () => void
}

export const BixbyModal: React.FC<BixbyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-md my-auto rounded-3xl p-5 sm:p-7 bg-gradient-to-b from-[#240b49] via-[#1b0638] to-[#140428] border-2 border-gold-400/50 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(214,173,85,0.25)] text-left overflow-hidden min-w-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gold-400/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-gold-300 hover:text-white transition-colors cursor-pointer border border-gold-400/20"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 flex items-center justify-center shrink-0">
            <Bell className="w-4 h-4 text-gold-400 animate-bounce" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-mono tracking-widest uppercase text-gold-400/80 block truncate">
              Samsung Bixby • Archive Entry
            </span>
            <h3 className="text-sm font-semibold text-white truncate">
              The Legendary 15-Day Reminder 📱
            </h3>
          </div>
        </div>

        {/* Mock Reminder Screenshot Interface */}
        <div className="rounded-2xl p-4 bg-black/60 border border-gold-500/20 space-y-3.5 mb-5 font-sans">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <span className="text-[11px] text-gold-400 font-mono">Reminder Title</span>
              <p className="text-sm sm:text-base font-semibold text-ivory-100">
                "Ask her to be your Half-Girlfriend 🍫💜"
              </p>
            </div>
            <span className="text-[10px] bg-green-500/20 text-green-300 border border-green-500/30 px-2 py-0.5 rounded-full flex items-center gap-1 font-mono shrink-0">
              <CheckCircle className="w-3 h-3" /> Fired
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-cadbury-950/70 border border-gold-400/20 min-w-0">
              <span className="text-[10px] text-gold-300/70 block flex items-center gap-1">
                <Calendar className="w-3 h-3 text-gold-400 shrink-0" /> Target Date
              </span>
              <span className="font-semibold text-white block">Nov 21, 2026</span>
            </div>

            <div className="p-2.5 rounded-xl bg-cadbury-950/70 border border-gold-400/20 min-w-0">
              <span className="text-[10px] text-gold-300/70 block flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-gold-400 shrink-0" /> Cycle Calibration
              </span>
              <span className="font-semibold text-gold-300 block">Optimal Phase 🎯</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-cadbury-900/60 border border-gold-400/25 text-xs text-ivory-100/90 leading-relaxed font-serif italic">
            "Proof of patience: You said wait 15 days before asking, and I didn't rush a single day. Receipt preserved as promised! 😂"
          </div>
        </div>

        {/* Explanation text */}
        <p className="text-xs text-ivory-100/80 leading-relaxed mb-5 font-light">
          This entire Cadbury-inspired proposal was crafted during the 15-day waiting period. No artificial pressure, just honest affection and good timing.
        </p>

        {/* Dismiss Button */}
        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl gold-button font-semibold text-xs sm:text-sm cursor-pointer shadow-md"
        >
          Close & Continue Exploring ✨
        </button>
      </div>
    </div>
  )
}
