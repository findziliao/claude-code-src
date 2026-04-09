/** Stubbed — buddy/sprites is behind feature flag BUDDY. */

import type { CompanionBones, Species } from './types.js'

export function renderSprite(_bones: CompanionBones, _frame?: number): string[] {
  return []
}

export function spriteFrameCount(_species: Species): number {
  return 1
}

export function renderFace(_bones: CompanionBones): string {
  return ''
}
