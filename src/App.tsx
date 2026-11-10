import { useState } from 'react'
import { FloatingParticles } from './components/FloatingParticles'
import { HeroSection } from './components/HeroSection'
import { VideoSection } from './components/VideoSection'
import { PerksGrid } from './components/PerksGrid'
import { BestKeptSecret } from './components/BestKeptSecret'
import { DisadvantagesSection } from './components/DisadvantagesSection'
import { ProposalSection } from './components/ProposalSection'
import { Footer } from './components/Footer'
import { BixbyModal } from './components/BixbyModal'
import { AudioPlayer } from './components/AudioPlayer'
import { Sparkles, Heart } from 'lucide-react'

export function App() {
  const [bixbyModalOpen, setBixbyModalOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen bg-[#12030d] text-[#fce7f3] selection:bg-rose-500 selection:text-white">
      {/* Gentle Floating Hearts & Ambient Glows */}
      <FloatingParticles />

      {/* Top Floating Controls: Ambient Soundtrack */}
      <AudioPlayer />

      {/* Subtle Top Navigation / Status Header */}
      <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-[#12030d]/70 border-b border-rose-500/10 px-4 py-3 flex items-center justify-between transition-all">
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-rose-500 fill-current animate-pulse" />
          <span className="font-serif font-bold text-sm tracking-wide text-white">
            The Proposal
          </span>
          <span className="text-[10px] font-mono text-rose-300/70 bg-rose-950/60 px-2 py-0.5 rounded-full border border-rose-500/20">
            v1.0 • Nov 21
          </span>
        </div>

        {/* Quick Nav Anchors */}
        <nav className="flex items-center gap-1 sm:gap-2 text-xs text-rose-200/80">
          <button
            onClick={() => scrollToSection('preview')}
            className="px-2.5 py-1 rounded-lg hover:bg-rose-950/50 hover:text-white transition-colors cursor-pointer"
          >
            Preview
          </button>
          <button
            onClick={() => scrollToSection('perks')}
            className="px-2.5 py-1 rounded-lg hover:bg-rose-950/50 hover:text-white transition-colors cursor-pointer"
          >
            Perks
          </button>
          <button
            onClick={() => scrollToSection('proposal')}
            className="px-3 py-1 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-medium hover:brightness-110 transition-all shadow-sm cursor-pointer flex items-center gap-1"
          >
            <span>Decide</span>
            <Sparkles className="w-3 h-3" />
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* Section 1: The Landing Page */}
        <HeroSection
          onExploreClick={() => scrollToSection('preview')}
          onOpenBixbyLore={() => setBixbyModalOpen(true)}
        />

        {/* Section 2: A Little Preview of the Perks */}
        <VideoSection />

        {/* Section 3: The Perks Package ❤️ */}
        <PerksGrid />

        {/* Section 4: The Best-Kept Secret 🤫 */}
        <BestKeptSecret />

        {/* Section 5: Potential Disadvantages */}
        <DisadvantagesSection />

        {/* Section 6: The Actual Proposal */}
        <ProposalSection />
      </main>

      {/* Section 7: Footer */}
      <Footer />

      {/* Easter Egg / Bixby Lore Modal */}
      <BixbyModal
        isOpen={bixbyModalOpen}
        onClose={() => setBixbyModalOpen(false)}
      />
    </div>
  )
}

export default App
