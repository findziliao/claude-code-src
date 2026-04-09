/** Stubbed — buddy/companion is behind feature flag BUDDY. */

import type { Companion, CompanionBones } from './types.js'

export type Roll = {
  bones: CompanionBones
  inspirationSeed: number
}

export function roll(_userId: string): Roll {
  return {
    bones: {
      rarity: 'common',
      species: 'duck' as any,
      eye: '·',
      hat: 'none',
      shiny: false,
      stats: {
        DEBUGGING: 0,
        PATIENCE: 0,
        CHAOS: 0,
        WISDOM: 0,
        SNARK: 0,
      },
    },
    inspirationSeed: 0,
  }
}

export function rollWithSeed(_seed: string): Roll {
  return roll('')
}

export function companionUserId(): string {
  return 'anon'
}

export function getCompanion(): Companion | undefined {
  return undefined
}
