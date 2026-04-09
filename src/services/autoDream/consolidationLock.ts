/** Stubbed — not needed for local code generation. */

export async function readLastConsolidatedAt(): Promise<number> {
  return 0
}

export async function tryAcquireConsolidationLock(): Promise<number | null> {
  return null
}

export async function rollbackConsolidationLock(
  _priorMtime: number,
): Promise<void> {}

export async function listSessionsTouchedSince(
  _sinceMs: number,
): Promise<string[]> {
  return []
}

export async function recordConsolidation(): Promise<void> {}
