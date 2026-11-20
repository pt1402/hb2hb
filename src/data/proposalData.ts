import { PerkTier, PromiseItem } from '../types'

export const PROPOSAL_METADATA = {
  landingBadge: "✦ A LITTLE SOMETHING FOR YOU ✦",
  landingSubtitleTag: "Special Selection • 100% Personal",
  titleMain: "Can I Be Your",
  titleHighlight: "Half-Boyfriend?",
  subtitle: "An Unconventional Proposal for an Unconventional Connection",
  landingCta: "TAP TO EXPLORE THE PROPOSAL",
  dateFormatted: "21 NOVEMBER 2026",
  subDateNotice: "As promised, exactly on schedule. 🗓️",
  bixbyReference: "Triggered from the legendary Bixby reminder set 15 days ago",
  scrollPrompt: "Unwrap the full proposal ↓",
}

export const HERO_VIDEO_DATA = {
  videoSrc: "/video.mp4",
  tagline: "A LITTLE PREVIEW OF THE PERKS 🌝",
  mainAnnotation: "Could Be Us.",
  secondaryCaption: "This over 'Just Friends' >>>>>",
}

export const PERK_TIERS_DATA: PerkTier[] = [
  {
    id: "foundation",
    tierBadge: "TIER 01 • THE ESSENTIALS",
    title: "The Foundation: Classic Dairy Milk",
    subtitle: "What Stays",
    cardClass: "tier-classic-card",
    cards: [
      {
        id: "friendship",
        emoji: "🤝",
        title: "Friendship",
        subtitle: "The Unshakeable Core"
      },
      {
        id: "affection",
        emoji: "❤️",
        title: "Affection",
        subtitle: "Genuine & Unfiltered"
      }
    ]
  },
  {
    id: "upgrade",
    tierBadge: "TIER 02 • THE SPARK",
    title: "The Upgrade: Dairy Milk Crackle",
    subtitle: "What Levels Up",
    cardClass: "tier-crackle-card",
    cards: [
      {
        id: "mutual-attraction",
        emoji: "🔥",
        title: "Mutual Attraction",
        subtitle: "Acknowledged Chemistry",
        description: "Celebrate mutual attraction openly and enjoy every second of it."
      },
      {
        id: "flirting-conversations",
        emoji: "😏",
        title: "Flirting & Conversations",
        subtitle: "Uncensored",
        description: "Zero masks. Talk about wants, needs, fantasies, and unhinged gossip—without judgment."
      }
    ]
  },
  {
    id: "indulgence",
    tierBadge: "TIER 03 • THE LUXURY",
    title: "The Indulgence: Dairy Milk Silk",
    subtitle: "What Adds",
    cardClass: "tier-silk-card",
    cards: [
      {
        id: "hugs-cuddles",
        emoji: "🫂",
        title: "Hugs & Cuddles",
        subtitle: "No Tag Needed",
        description: "Come find peace and endless warmth in my arms."
      },
      {
        id: "intimacy",
        emoji: "🫣",
        title: "Intimacy",
        subtitle: "Safe & Electrifying",
        description: "Explore the physical spark at your own pace—built on comfort, consent, and mutual enthusiasm."
      }
    ]
  }
]

export const PROMISES_DATA: PromiseItem[] = [
  {
    id: 1,
    title: "You set the boundaries. You set the pace.",
    description: "I respect both. After all, you said to wait for your ovulation, and look, I actually did 😭😂",
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
    title: "No conventional labels, commitments or expectations.",
    description: "Just two people enjoying each other's company to the fullest while they can. 💞",
    isJoke: false
  }
]

export const DISADVANTAGES_DATA = {
  heading: "Potential Disadvantages",
  mainText: "None.*",
  disclaimer: "*Except the possibility of catching feelings 😭",
  warranty: "Emotional complications are not covered under warranty."
}

export const PROPOSAL_OPTIONS = [
  {
    id: 'yes' as const,
    label: "I'd love to! ❤️",
    subLabel: "Unwrap the sweet chapter",
    accent: "gold"
  },
  {
    id: 'discuss' as const,
    label: "Let's discuss this! 💬",
    subLabel: "Let's talk over text",
    accent: "purple"
  },
  {
    id: 'friends' as const,
    label: "I'd rather stay friends. 🤝",
    subLabel: "Keep our awesome friendship",
    accent: "lavender"
  }
]

export const PROPOSAL_RESPONSES = {
  yes: {
    badge: "The Golden Selection 🍫✨",
    title: "Well, this just made my day. ❤️",
    message: "Now let's figure out what this means for both of us, together.",
    followUp: "It's a YES from me, daddy! 💋",
    replyDraft: "It's a YES from me, daddy! 💋"
  },
  discuss: {
    badge: "Thoughtful & Sweet 💭",
    title: "Of course! ❤️",
    message: "Some things deserve a proper conversation 😉",
    followUp: "We need to talk! 💬",
    replyDraft: "We need to talk! 💬"
  },
  friends: {
    badge: "Friendship Above All 🫂",
    title: "That's absolutely okay. ❤️",
    message: "Nothing changes. I still value what we have, and I'm glad you were honest with me.",
    followUp: "I love you........... as a friend!🤝💜",
    replyDraft: "I love you........... as a friend!🤝💜"
  }
}

export const FOOTER_DATA = {
  line1: "Made with love, a questionable amount of tharak, and entirely too much free time. 😂",
  line2: "A proposal by yours truly.",
  edition: "Prathamesh Tandale • 21 November 2026"
}
