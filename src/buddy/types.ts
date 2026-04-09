/** Stubbed — buddy/types is behind feature flag BUDDY. */

export const RARITIES = [
  'common',
  'uncommon',
  'rare',
  'epic',
  'legendary',
] as const
export type Rarity = (typeof RARITIES)[number]

export const duck = 'duck' as 'duck'
export const goose = 'goose' as 'goose'
export const blob = 'blob' as 'blob'
export const cat = 'cat' as 'cat'
export const dragon = 'dragon' as 'dragon'
export const octopus = 'octopus' as 'octopus'
export const owl = 'owl' as 'owl'
export const penguin = 'penguin' as 'penguin'
export const turtle = 'turtle' as 'turtle'
export const snail = 'snail' as 'snail'
export const ghost = 'ghost' as 'ghost'
export const axolotl = 'axolotl' as 'axolotl'
export const capybara = 'capybara' as 'capybara'
export const cactus = 'cactus' as 'cactus'
export const robot = 'robot' as 'robot'
export const rabbit = 'rabbit' as 'rabbit'
export const mushroom = 'mushroom' as 'mushroom'
export const chonk = 'chonk' as 'chonk'

export const SPECIES = [
  duck, goose, blob, cat, dragon, octopus, owl, penguin,
  turtle, snail, ghost, axolotl, capybara, cactus, robot,
  rabbit, mushroom, chonk,
] as const
export type Species = (typeof SPECIES)[number]

export const EYES = ['·', '✦', '×', '◉', '@', '°'] as const
export type Eye = (typeof EYES)[number]

export const HATS = [
  'none', 'crown', 'tophat', 'propeller', 'halo',
  'wizard', 'beanie', 'tinyduck',
] as const
export type Hat = (typeof HATS)[number]

export const STAT_NAMES = [
  'DEBUGGING', 'PATIENCE', 'CHAOS', 'WISDOM', 'SNARK',
] as const
export type StatName = (typeof STAT_NAMES)[number]

export type CompanionBones = {
  rarity: Rarity
  species: Species
  eye: Eye
  hat: Hat
  shiny: boolean
  stats: Record<StatName, number>
}

export type CompanionSoul = {
  name: string
  personality: string
}

export type Companion = CompanionBones &
  CompanionSoul & {
    hatchedAt: number
  }

export type StoredCompanion = CompanionSoul & { hatchedAt: number }

export const RARITY_WEIGHTS = {
  common: 60,
  uncommon: 25,
  rare: 10,
  epic: 4,
  legendary: 1,
} as const satisfies Record<Rarity, number>

export const RARITY_STARS = {
  common: '★',
  uncommon: '★★',
  rare: '★★★',
  epic: '★★★★',
  legendary: '★★★★★',
} as const satisfies Record<Rarity, string>

export const RARITY_COLORS = {
  common: 'inactive',
  uncommon: 'success',
  rare: 'permission',
  epic: 'autoAccept',
  legendary: 'warning',
} as const satisfies Record<Rarity, keyof import('../utils/theme.js').Theme>
