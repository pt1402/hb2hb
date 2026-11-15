export interface PerkCardItem {
  id: string
  title: string
  subtitle: string
  emoji: string
  description?: string
}

export interface PerkTier {
  id: string
  tierBadge: string
  title: string
  subtitle: string
  cardClass: string
  cards: PerkCardItem[]
}

export interface PromiseItem {
  id: number
  title: string
  description: string
  isJoke?: boolean
}

export type ProposalResponse = 'yes' | 'discuss' | 'friends' | null
