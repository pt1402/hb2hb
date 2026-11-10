import React from 'react'
import { X, Bell, CheckCircle, Calendar, Sparkles } from 'lucide-react'

interface BixbyModalProps {
  isOpen: boolean
  onClose: () => void
}

export const BixbyModal: React.FC<BixbyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-md rounded-3xl p-6 sm:p-7 bg-[#210719] border-2 border-rose-400/40 shadow-[0_25px_60px_rgba(244,63,94,0.35)] text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-rose-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-400/40 text-blue-300 flex items-center justify-center">
            <Bell className="w-4 h-4 text-blue-400 animate-bounce" />
          </div>
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-rose-300/80">
              Samsung Bixby • Archive Entry
            </span>
            <h3 className="text-sm font-semibold text-white">
              The Legendary 15-Day Reminder 📱
            </h3>
          </div>
        </div>

        {/* Mock Reminder Screenshot Interface */}
        <div className="rounded-2xl p-4 bg-black/60 border border-rose-500/20 space-y-3.5 mb-5 font-sans">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] text-rose-400 font-mono">Reminder Title</span>
              <p className="text-sm sm:text-base font-semibold text-rose-100">
                "Ask her to be your Half-Girlfriend 💗"
              </p>
            </div>
            <span className="text-[10px] bg-green-500/20 text-green-300 border border-green-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Fired
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-plum-950/60 border border-rose-500/15">
              <span className="text-[10px] text-rose-300/70 block flex items-center gap-1">
                <Calendar className="w-3 h-3 text-rose-400" /> Target Date
              </span>
              <span className="font-semibold text-white">Nov 21, 2026</span>
            </div>

            <div className="p-2.5 rounded-xl bg-plum-950/60 border border-rose-500/15">
              <span className="text-[10px] text-rose-300/70 block flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-rose-400" /> Cycle Calibration
              </span>
              <span className="font-semibold text-rose-200">Optimal Phase 🎯</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-400/20 text-xs text-rose-200/90 leading-relaxed font-serif italic">
            "Proof of patience: You said wait 15 days before asking, and I didn't rush a single day. Receipt preserved as promised! 😂"
          </div>
        </div>

        {/* Explanation text */}
        <p className="text-xs text-rose-200/80 leading-relaxed mb-5 font-light">
          This entire application was crafted during the 15-day waiting period. No artificial pressure, just honest affection and good timing.
        </p>

        {/* Dismiss Button */}
        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-medium text-xs sm:text-sm shadow-md hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
        >
          Close & Continue Reviewing Perks ✨
        </button>
      </div>
    </div>
  )
}
