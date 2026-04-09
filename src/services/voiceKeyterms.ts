/** Stubbed — services/voiceKeyterms is behind feature flag VOICE_MODE. */

export function splitIdentifier(_name: string): string[] {
  return []
}

export async function getVoiceKeyterms(
  _recentFiles?: ReadonlySet<string>,
): Promise<string[]> {
  return []
}
