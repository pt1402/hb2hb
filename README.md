# Can I Be Your Half-Boyfriend? 💜🍫
### *Cadbury Dairy Milk-Themed Romantic Proposal Website*

A complete redesign of the **"Can I Be Your Half-Boyfriend?"** proposal website, reimagined as a luxurious, playful, and romantic Cadbury Dairy Milk chocolate gift box.

---

## 🌟 The Experience Journey

### 1. The Chocolate Box Unwrapping (Click-to-Reveal Landing Page)
- **Zero distraction**: Initially, the visitor sees **ONLY** the landing screen. No header, no navbar, no section previews, no scrolling.
- Styled like the front of a luxury Dairy Milk chocolate gift box:
  - Rich Cadbury purple texture (`#3B146B` / `#240B49`) with golden radial illumination.
  - Embossed gold foil corners and framing.
  - Decorative label: `"✦ A LITTLE SOMETHING FOR YOU ✦"`.
  - Script flourish: *"A treat for someone special"*.
  - Main heading:
    ```
    Can I Be Your
    Half-Boyfriend?
    ```
  - Subtitle: *"An Unconventional Proposal Website for an Unconventional Connection"*.
  - Medallion: `🍫 Cadbury-Edition • Nov 21`
  - Primary CTA: **`"TAP TO EXPLORE THE PROPOSAL"`** with gold border and glowing sparkles.
- **The Click Interaction**:
  - Tapping the button unwraps the box with an elegant fade & scale transition.
  - Autoplays the vertical video (`/video.mp4`) muted on loop.
  - Starts playing Dairy Milk's iconic **"Kiss Me" soundtrack** (`/audio.mp3`) on loop at ~50% volume.
  - Unlocks smooth scrolling into the main website.

### 2. Hero Experience — The Cinematic Video Section
- Full-screen vertical video experience (`100svh` on mobile, framed portrait on desktop).
- Source: `/video.mp4` (local asset).
- Clean, uninterrupted playback (no play/pause overlays, no video controls).
- Staggered golden typography annotations:
  1. `"A LITTLE PREVIEW OF THE PERKS 🌝"`
  2. `"Could Be Us."`
  3. `"This over 'Just Friends' >>>>>"`
- Smooth scroll prompt: *"Unwrap the perks package ↓"*.

### 3. Background Music — Dairy Milk's "Kiss Me"
- Source: `/audio.mp3` (local asset).
- Persistent single audio instance that continues smoothly across scroll.
- Floating purple & gold audio toggle with soundwave animation (`"Kiss Me" ♪`) allowing mute/unmute and pause/resume.

### 4. Section A — The Perks Package ❤️ (3 Cadbury Product Tiers)
Organized into three clearly labeled product tiers styled like artisanal chocolate selections:

#### **Tier 1: The Foundation: Classic Dairy Milk**
- Subtitle: *“What Stays”*
- Texture: Smooth, glossy, classic milk-chocolate surface.
- Mobile layout: Displayed side-by-side in a single row (`grid-cols-2`), compact typography, no body descriptions.
  - 🤝 **Friendship** — *The Unshakeable Core*
  - ❤️ **Affection** — *Genuine & Unfiltered*

#### **Tier 2: The Upgrade: Dairy Milk Crackle**
- Subtitle: *“What Levels Up”*
- Texture: Subtle crisp, crunchy, lightly fractured chocolate texture.
  - 🔥 **Mutual Attraction** — *Acknowledged Chemistry*
    > *“Celebrate mutual attraction openly and enjoy every second of it.”*
  - 😏 **Flirting & Conversations** — *Uncensored*
    > *“Zero masks. Talk about wants, needs, fantasies, and unhinged gossip—without judgment.”*

#### **Tier 3: The Indulgence: Dairy Milk Silk**
- Subtitle: *“What Adds”*
- Texture: Soft, velvety, gently bubbly/silky texture.
  - 🫂 **Hugs & Cuddles** — *No Tag Needed*
    > *“Come find peace and endless warmth in my arms.”*
  - 🫣 **Intimacy** — *Safe & Electrifying*
    > *“Explore the physical spark at your own pace—built on comfort, consent, and mutual enthusiasm.”*

---

### 5. Section B — The Best-Kept Secret 🤫
- Prominently situated **INSIDE** the Perks Package.
- Visual distinction: Royal purple card with gold foil border and ornamental corners.
- Subtitle: *"Some perks come with a few promises."*
- The Four Non-Negotiable Promises with gold checkmarks:
  - ✓ **You set the boundaries. You set the pace.** — *"I respect both. After all, you said to wait 15 days before asking, and look, I actually did. 😂"* *(Includes interactive Bixby Reminder 15-day receipt modal)*
  - ✓ **Nothing is obligatory.** — *"You can change your mind at any point. We can always go back to how we are now, without awkwardness or hard feelings."*
  - ✓ **No assumptions, no mind-reading.** — *"Just honest communication. Always."*
  - ✓ **No conventional relationship subscription required.** — *"No conventional labels, commitments or expectations that neither of us signed up for. 😂"*

### 6. Section C — Potential Disadvantages
- Styled like a Cadbury Nutritional / Quality Guarantee seal.
- Main text: **"None.*"**
- Asterisk disclaimer: `*Except the possibility of catching feelings, occasional jealousy, and the occasional argument over who is more adorable. 😭`
- Warranty line: `"Emotional complications are not covered under warranty."`

### 7. Section D — The Actual Proposal 🥹
- The emotional climax of the experience.
- Heading: **"So, what do you say? 🥹"**
- Supporting text: *"No pressure. I'd rather have an honest answer than an obligatory yes."*
- Three interactive options:
  1. **"I'd love to! ❤️"** → Triggers celebration with floating golden sparkles and hearts + heartfelt acceptance text.
  2. **"Let's discuss this! 💬"** → Warm coffee / chat conversation prompt.
  3. **"I'd rather stay friends. 🤝"** → Reassuring, zero-guilt response reaffirming the friendship.
- **Single Primary Action**: **`"Copy & Send Me"`**
  - Copies the pre-written reply text to clipboard.
  - Displays instant confirmation: **`"Copied! Send it to me 💜"`**.
  - No external redirects, share sheets, or WhatsApp deep links.
  - 100% local privacy: no server logging or tracking.

### 8. Footer
- Minimal footer with gold decorative separator flourish.
- Text:
  `"Made with affection, a questionable amount of tharak, and entirely too much free time. 😂"`
  `"A proposal by yours truly."`
- Animated chocolate heart and sparkle.

---

## 🛠️ Technology Stack

- **React 19** + **TypeScript**
- **Tailwind CSS v4** + `@tailwindcss/vite`
- **Framer Motion** + **Canvas Confetti**
- **Lucide Icons**
- **Vite 6**
- **Zero external audio/video CDNs**: uses local `/public/video.mp4` and `/public/audio.mp3`.

---

## 🚀 Running Locally

```bash
# Install dependencies (if not already installed)
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

---

## 📦 Deploying Online

- **Vercel**: Run `npx vercel` or connect repository to [vercel.com](https://vercel.com).
- **Netlify**: Drag and drop the `dist/` directory onto [app.netlify.com/drop](https://app.netlify.com/drop).
- **GitHub Pages**: Deploy the `dist/` output with standard static hosting.
