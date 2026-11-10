export interface PerkItem {
  id: string
  title: string
  emoji: string
  tagline: string
  description: string
  highlight?: string
}

export interface PromiseItem {
  id: number
  title: string
  description: string
  isJoke?: boolean
}

export type ProposalResponse = 'yes' | 'discuss' | 'friends' | null
