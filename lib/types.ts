export type GameCategory = 'LandPVP' | 'BedWars' | 'SkyWars' | 'CrystalPVP' | 'HolePVP' | 'CartPVP' | 'BowPVP'

export type PlayerTier = 'HT1' | 'HT2' | 'HT3' | 'HT4' | 'HT5' | 'LT1' | 'LT2' | 'LT3' | 'LT4' | 'LT5'

export type AdminRole = 'owner' | 'admin'

export interface Admin {
  id: string
  username: string
  role: AdminRole
  created_at: string
  created_by: string | null
}

export interface AdminInviteCode {
  id: string
  code: string
  created_by: string
  expires_at: string
  used_at: string | null
  used_by: string | null
  created_at: string
}

export interface Player {
  id: string
  username: string
  avatar_url: string | null
  country: string | null
  created_at: string
  updated_at: string
  created_by: string | null
}

export interface PlayerRanking {
  id: string
  player_id: string
  category: GameCategory
  tier: PlayerTier
  peak_tier: PlayerTier | null
  notes: string | null
  created_at: string
  updated_at: string
  updated_by: string | null
  player?: Player
}

export const GAME_CATEGORIES: GameCategory[] = [
  'LandPVP',
  'BedWars',
  'SkyWars',
  'CrystalPVP',
  'HolePVP',
  'CartPVP',
  'BowPVP',
]

export const TIERS: PlayerTier[] = [
  'HT1', 'HT2', 'HT3', 'HT4', 'HT5',
  'LT1', 'LT2', 'LT3', 'LT4', 'LT5',
]

export const TIER_COLORS: Record<PlayerTier, string> = {
  HT1: 'tier-ht1',
  HT2: 'tier-ht2',
  HT3: 'tier-ht3',
  HT4: 'tier-ht4',
  HT5: 'tier-ht5',
  LT1: 'tier-lt1',
  LT2: 'tier-lt2',
  LT3: 'tier-lt3',
  LT4: 'tier-lt4',
  LT5: 'tier-lt5',
}

export const TIER_DESCRIPTIONS: Record<PlayerTier, string> = {
  HT1: 'Elite',
  HT2: 'Master',
  HT3: 'Expert',
  HT4: 'Advanced',
  HT5: 'Skilled',
  LT1: 'Proficient',
  LT2: 'Intermediate',
  LT3: 'Developing',
  LT4: 'Beginner',
  LT5: 'Starter',
}
