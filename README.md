# Can I Be Your Half-Boyfriend? 💗
### *An Unconventional Proposal Website for an Unconventional Connection*

A personal, playful, and beautifully designed romantic proposal web application crafted for November 21, 2026. Built with a rich palette of deep plum, burgundy, dusty rose, and blush pink, featuring smooth glassmorphism, floating ambient particles, responsive layout, and an interactive proposal flow.

---

## 🌟 Key Features

1. **✦ Official Application Landing Page**:
   - Official Application badge with date stamp (*21 NOVEMBER 2026*).
   - "A little question for you..." pre-heading with grand serif typography.
   - Interactive callback pill linking to the **15-Day Waiting Period & Bixby Reminder lore**.
   - Cinematic romantic visual showcasing tender intimacy.
   - Smooth-scrolling CTA button (*"Explore the Proposal ↓"*).

2. **A Little Preview of the Perks 🌝**:
   - Cinematic 21:9 aspect ratio video player with custom ambient controls.
   - Play/pause overlay, mute toggle, and fullscreen support.
   - Designed to never autoplay audio unexpectedly (comfort first).
   - Playful caption: *"Just a little demonstration of the chemistry we're talking about. 🤌"*

3. **The Perks Package ❤️**:
   - 8 responsive membership cards with custom icons & playful taglines:
     - 🤝 **Friendship** (The Unshakeable Core)
     - ❤️ **Affection** (Genuine & Unfiltered)
     - 🌝 **Flirting** (Playful Chemistry)
     - 🫣 **Intimacy** (Safe & Electrifying)
     - 🫂 **Hugs & Cuddles** (Endless Warmth)
     - ✨ **Quality Time** (Zero Pretense)
     - 💬 **Unfiltered Conversations** (100% Raw Honesty)
     - 🔥 **Mutual Attraction** (Acknowledged Chemistry)

4. **The Best-Kept Secret 🤫**:
   - Distinctive blush-pink glassmorphic card with the **Four Non-Negotiable Promises**:
     - ✓ **You set the boundaries. You set the pace.** (*"I respect both. After all, you said to wait 15 days before asking, and look, I actually did. 😂"*)
     - ✓ **Nothing is obligatory.** (*"You can change your mind at any point. We can always go back to how we are now, without awkwardness or hard feelings."*)
     - ✓ **No assumptions, no mind-reading.** (*"Just honest communication. Always."*)
     - ✓ **No conventional relationship subscription required.** (*"No conventional labels, commitments or expectations that neither of us signed up for. 😂"*)

5. **Potential Disadvantages**:
   - Humorous transparent card with **"None.*"**
   - Asterisk disclaimer: `*Except the possibility of catching feelings, occasional jealousy, and the occasional argument over who is more adorable. 😭`
   - Warranty note: `Emotional complications are not covered under warranty.`

6. **The Actual Proposal 🥹**:
   - Deep burgundy/plum emotional highlight section with glowing pink accents.
   - Three honest, non-manipulative options:
     - `I'd love to! ❤️` → Triggers celebratory confetti with floating hearts + warm message + instant WhatsApp reply button.
     - `Let's discuss this! 💬` → Thoughtful conversation prompt with coffee invite draft.
     - `I'd rather stay friends. 🤝` → Gracious, guilt-free validation reaffirming the friendship.
   - Switchable answers anytime with zero database tracking (complete privacy).

7. **Soundtrack & Ambient Extras**:
   - Generative Web Audio API romantic chord progression (starts muted, tap to toggle dreamy ambient background).
   - Mobile-first responsive optimization tailored for opening from WhatsApp or mobile browsers.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```
The compiled, optimized production files will be in `dist/`.

---

## 🎨 How to Customize Media Assets

All media URLs and captions are cleanly centralized in `src/data/proposalData.ts`:

```typescript
export const ASSETS_CONFIG = {
  // Hero section image (URL or local path in public/)
  heroImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
  heroImageAlt: "Two people sharing a tender cinematic moment",
  
  // Video preview (URL or local path in public/)
  previewVideo: "https://assets.mixkit.co/videos/4887/4887-720.mp4",
  
  // Video thumbnail poster
  videoPoster: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop",
}
```

To use your own local video or images:
1. Copy your file to the `public/` directory (e.g. `public/my-clip.mp4`).
2. Update the path in `src/data/proposalData.ts` to `previewVideo: "/my-clip.mp4"`.

---

## 📦 Deploying Online (Free & Instant)

You can deploy this site in under 1 minute using any of the following:

### Option A: Vercel
```bash
npx vercel
```
Or import this repository directly into [vercel.com](https://vercel.com).

### Option B: Netlify
Drag and drop the `dist/` folder into [app.netlify.com/drop](https://app.netlify.com/drop).

### Option C: GitHub Pages
Push to a repository and enable GitHub Actions with standard Vite deployment.

---

## 📜 Footer Notice
*"Made with affection, a questionable amount of tharak, and entirely too much free time. 😂"*
— A proposal by yours truly.
