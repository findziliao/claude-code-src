/** Stubbed — not needed for local code generation. */

import type { TeamMemorySyncPushResult } from './types.js'
import type { SyncState } from './index.js'

export function isPermanentFailure(_r: TeamMemorySyncPushResult): boolean {
  return false
}

export async function startTeamMemoryWatcher(): Promise<void> {}

export async function notifyTeamMemoryWrite(): Promise<void> {}

export async function stopTeamMemoryWatcher(): Promise<void> {}

export function _resetWatcherStateForTesting(_opts?: {
  syncState?: SyncState
  skipWatcher?: boolean
  pushSuppressedReason?: string | null
}): void {}

export function _startFileWatcherForTesting(_dir: string): Promise<void> {
  return Promise.resolve()
}
