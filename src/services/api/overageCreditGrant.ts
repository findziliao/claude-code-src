/** Stubbed — not needed for local code generation. */

export type OverageCreditGrantInfo = {
  available: boolean
  eligible: boolean
  granted: boolean
  amount_minor_units: number | null
  currency: string | null
}

export type OverageCreditGrantCacheEntry = {
  info: OverageCreditGrantInfo
  timestamp: number
}

export function getCachedOverageCreditGrant(): OverageCreditGrantInfo | null {
  return null
}

export function invalidateOverageCreditGrantCache(): void {}

export async function refreshOverageCreditGrantCache(): Promise<void> {}

export function formatGrantAmount(_info: OverageCreditGrantInfo): string | null {
  return null
}
