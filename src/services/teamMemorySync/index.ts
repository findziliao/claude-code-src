/** Stubbed — not needed for local code generation. */

import type {
  TeamMemorySyncPushResult,
} from './types.js'

export type SyncState = {
  lastKnownChecksum: string | null
  serverChecksums: Map<string, string>
  serverMaxEntries: number | null
}

export function createSyncState(): SyncState {
  return {
    lastKnownChecksum: null,
    serverChecksums: new Map(),
    serverMaxEntries: null,
  }
}

export function hashContent(content: string): string {
  return 'sha256:stub'
}

export function isTeamMemorySyncAvailable(): boolean {
  return false
}

export async function pullTeamMemory(
  _state: SyncState,
  _options?: { skipEtagCache?: boolean },
): Promise<{
  success: boolean
  filesWritten: number
  entryCount: number
  notModified?: boolean
  error?: string
}> {
  return { success: false, filesWritten: 0, entryCount: 0, error: 'Stubbed' }
}

export async function pushTeamMemory(
  _state: SyncState,
): Promise<TeamMemorySyncPushResult> {
  return { success: false, filesUploaded: 0, error: 'Stubbed' }
}

export async function syncTeamMemory(_state: SyncState): Promise<{
  success: boolean
  filesPulled: number
  filesPushed: number
  error?: string
}> {
  return { success: false, filesPulled: 0, filesPushed: 0, error: 'Stubbed' }
}

export function batchDeltaByBytes(
  _delta: Record<string, string>,
): Array<Record<string, string>> {
  return []
}
