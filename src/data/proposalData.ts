import { PerkItem, PromiseItem } from '../types'

export const PROPOSAL_METADATA = {
  badge: "✦ OFFICIAL APPLICATION ✦",
  dateFormatted: "21 NOVEMBER 2026",
  subDateNotice: "As promised, exactly on schedule. 🗓️",
  bixbyReference: "Triggered from the legendary Bixby reminder set 15 days ago",
  mainPreHeading: "A little question for you...",
  titleMain: "Can I Be Your",
  titleHighlight: "Half-Boyfriend?",
  subtitle: "An unconventional proposal for an unconventional connection. ❤️",
  promptInstruction: "Please review the perks package before making your decision.",
  scrollCta: "Explore the Proposal ↓",
}

export const ASSETS_CONFIG = {
  // Hero section image: can be a web URL or local path in public/ e.g. "/hero-photo.jpg"
  heroImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
  heroImageAlt: "Two people sharing a tender cinematic moment",
  // Video preview: can be a web URL or local video in public/ e.g. "/preview-video.mp4"
  previewVideo: "https://assets.mixkit.co/videos/4887/4887-720.mp4",
  // Video poster thumbnail
  videoPoster: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop",
}

export const PERKS_DATA: PerkItem[] = [
  {
    id: "friendship",
    title: "Friendship",
    emoji: "🤝",
    tagline: "The Unshakeable Core",
    description: "The rock-solid foundation that started it all. Every laugh, inside joke, and reliable presence stays 100% intact.",
    highlight: "Non-negotiable basis"
  },
  {
    id: "affection",
    title: "Affection",
    emoji: "❤️",
    tagline: "Genuine & Unfiltered",
    description: "Warmth without the hidden agenda. Random wholesome check-ins, genuine compliments, and being prioritized.",
    highlight: "Guaranteed hype person"
  },
  {
    id: "flirting",
    title: "Flirting",
    emoji: "🌝",
    tagline: "Playful Chemistry",
    description: "Uncensored teasing, bantering, eyebrow-raises, and that delicious tension we both know is already there.",
    highlight: "10/10 banter rating"
  },
  {
    id: "intimacy",
    title: "Intimacy",
    emoji: "🫣",
    tagline: "Safe & Electrifying",
    description: "Exploring that physical spark at our own pace, built on absolute comfort, consent, and mutual enthusiasm.",
    highlight: "Mutual excitement"
  },
  {
    id: "cuddles",
    title: "Hugs & Cuddles",
    emoji: "🫂",
    tagline: "Endless Warmth",
    description: "Unlimited lingering embraces, shoulder leans, and soul-recharging cuddles whenever either of us needs one.",
    highlight: "Anti-stress therapy"
  },
  {
    id: "quality-time",
    title: "Quality Time",
    emoji: "✨",
    tagline: "Zero Pretense",
    description: "Late night drives, coffee runs, parallel lounging, or just quiet moments together without feeling forced to perform.",
    highlight: "Effortless vibe"
  },
  {
    id: "conversations",
    title: "Unfiltered Conversations",
    emoji: "💬",
    tagline: "100% Raw Honesty",
    description: "Zero masks. Talk about everything from existential midnight musings to unhinged gossip without judgment.",
    highlight: "No filter zone"
  },
  {
    id: "mutual-attraction",
    title: "Mutual Attraction",
    emoji: "🔥",
    tagline: "Acknowledged Chemistry",
    description: "Not pretending we don't notice each other. Celebrating mutual attraction openly and enjoying every second of it.",
    highlight: "Undeniable spark"
  }
]

export const PROMISES_DATA: PromiseItem[] = [
  {
    id: 1,
    title: "You set the boundaries. You set the pace.",
    description: "I respect both. After all, you said to wait 15 days before asking, and look, I actually did. 😂",
    isJoke: true
  },
  {
    id: 2,
    title: "Nothing is obligatory.",
    description: "You can change your mind at any point. We can always go back to how we are now, without awkwardness or hard feelings.",
    isJoke: false
  },
  {
    id: 3,
    title: "No assumptions, no mind-reading.",
    description: "Just honest communication. Always.",
    isJoke: false
  },
  {
    id: 4,
    title: "No conventional relationship subscription required.",
    description: "No conventional labels, commitments or expectations that neither of us signed up for. 😂",
    isJoke: true
  }
]

export const DISADVANTAGES_DATA = {
  heading: "Potential Disadvantages",
  mainText: "None.*",
  disclaimer: "*Except the possibility of catching feelings, occasional jealousy, and the occasional argument over who is more adorable. 😭",
  warranty: "Emotional complications are not covered under warranty."
}

export const PROPOSAL_OPTIONS = [
  {
    id: 'yes' as const,
    label: "I'd love to! ❤️",
    subLabel: "Let's explore this chapter",
    accent: "rose"
  },
  {
    id: 'discuss' as const,
    label: "Let's discuss this! 💬",
    subLabel: "Let's talk in person / call",
    accent: "amber"
  },
  {
    id: 'friends' as const,
    label: "I'd rather stay friends. 🤝",
    subLabel: "Keep our awesome friendship",
    accent: "purple"
  }
]

export const PROPOSAL_RESPONSES = {
  yes: {
    badge: "Best Decision Ever 🎉",
    title: "Well, this just made my day. ❤️",
    message: "Now let's figure out what this means for both of us, together.",
    followUp: "No expectations, just mutual excitement. Drop me a text whenever you're ready to celebrate or chat about boundaries over dessert/coffee! ☕✨",
    whatsappDraft: "Hey! I reviewed your official Half-Boyfriend proposal... and I said YES! ❤️ Let's discuss our perks package over coffee ☕"
  },
  discuss: {
    badge: "Thoughtful & Fair 💭",
    title: "Of course! ❤️",
    message: "Some things deserve a proper conversation rather than a quick yes or no.",
    followUp: "I appreciate you taking this seriously. Let's grab coffee or hop on a call whenever you're free—no rush, no awkwardness, just us.",
    whatsappDraft: "Hey! I read through the Half-Boyfriend application. Let's have a proper chat about it! 💬☕"
  },
  friends: {
    badge: "Friendship Above All 🫂",
    title: "That's absolutely okay. ❤️",
    message: "Nothing changes. I still value what we have, and I'm glad you were honest with me.",
    followUp: "Your comfort and our friendship mean more to me than any proposal. Thank you for your honesty, and looking forward to our next inside joke and hangout! 🌟",
    whatsappDraft: "Hey! I saw your cute proposal. I think we're best as friends, and I love our bond just the way it is! 🤝❤️"
  }
}

export const FOOTER_DATA = {
  line1: "Made with affection, a questionable amount of tharak, and entirely too much free time. 😂",
  line2: "A proposal by yours truly.",
  applicationId: "HB-2026-1121-APPROVED-IN-SPIRIT"
}
