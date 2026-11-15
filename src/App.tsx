import { useState, useEffect } from 'react'
import { LandingWrapper } from './components/LandingWrapper'
import { HeroVideoSection } from './components/HeroVideoSection'
import { PerksGrid } from './components/PerksGrid'
import { DisadvantagesSection } from './components/DisadvantagesSection'
import { ProposalSection } from './components/ProposalSection'
import { Footer } from './components/Footer'
import { AudioPlayer } from './components/AudioPlayer'
import { FloatingParticles } from './components/FloatingParticles'
import { BixbyModal } from './components/BixbyModal'

export function App() {
  const [isRevealed, setIsRevealed] = useState(false)
  const [bixbyModalOpen, setBixbyModalOpen] = useState(false)

  // Prevent background scrolling while on the landing screen
  useEffect(() => {
    if (!isRevealed) {
      document.body.style.overflow = 'hidden'
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflow = ''
    }
  }, [isRevealed])

  const handleReveal = () => {
    setIsRevealed(true)
  }

  return (
    <div className="relative min-h-screen w-full max-w-full bg-[#140428] text-[#FFF5E5] selection:bg-[#D6AD55] selection:text-[#1B0638]">
      {/* 1. INITIAL CLICK-TO-REVEAL LANDING PAGE (Occupies full viewport, locks website until clicked) */}
      {!isRevealed && (
        <LandingWrapper onReveal={handleReveal} />
      )}

      {/* Floating Golden Sparks and Particles (Active after reveal) */}
      <FloatingParticles />

      {/* Persistent Audio Player (Plays Dairy Milk "Kiss Me" from /audio.mp3 on loop) */}
      <AudioPlayer shouldPlay={isRevealed} />

      {/* MAIN PROPOSAL WEBSITE (Revealed after landing CTA click, NO HEADER / NO NAV BAR) */}
      {isRevealed && (
        <main className="relative z-10 w-full max-w-full animate-fade-in transition-opacity duration-700">
          {/* Section 1: Cinematic Vertical Video Hero Experience */}
          <HeroVideoSection isActive={isRevealed} />

          {/* Section 2: The Perks Package ❤️ (Includes The Best-Kept Secret 🤫 inside) */}
          <PerksGrid onOpenBixbyLore={() => setBixbyModalOpen(true)} />

          {/* Section 3: Potential Disadvantages */}
          <DisadvantagesSection />

          {/* Section 4: The Actual Proposal 🥹 */}
          <ProposalSection />

          {/* Section 5: Footer */}
          <Footer />
        </main>
      )}

      {/* Easter Egg / Bixby Lore Modal */}
      <BixbyModal
        isOpen={bixbyModalOpen}
        onClose={() => setBixbyModalOpen(false)}
      />
    </div>
  )
}

export default App
