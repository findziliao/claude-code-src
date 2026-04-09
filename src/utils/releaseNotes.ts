/** Stubbed — not needed for local code generation. */

export const CHANGELOG_URL =
  'https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md'

export function _resetChangelogCacheForTesting(): void {}

export async function migrateChangelogFromConfig(): Promise<void> {}

export async function fetchAndStoreChangelog(): Promise<void> {}

export async function getStoredChangelog(): Promise<string> {
  return ''
}

export function getStoredChangelogFromMemory(): string {
  return ''
}

export function parseChangelog(_content: string): Record<string, string[]> {
  return {}
}

export function getRecentReleaseNotes(
  _currentVersion: string,
  _previousVersion: string | null | undefined,
  _changelogContent?: string,
): string[] {
  return []
}

export function getAllReleaseNotes(
  _changelogContent?: string,
): Array<[string, string[]]> {
  return []
}

export async function checkForReleaseNotes(
  _lastSeenVersion: string | null | undefined,
  _currentVersion?: string,
): Promise<{ hasReleaseNotes: boolean; releaseNotes: string[] }> {
  return { hasReleaseNotes: false, releaseNotes: [] }
}

export function checkForReleaseNotesSync(
  _lastSeenVersion: string | null | undefined,
  _currentVersion?: string,
): { hasReleaseNotes: boolean; releaseNotes: string[] } {
  return { hasReleaseNotes: false, releaseNotes: [] }
}
