/** Stubbed — services/voice is behind feature flag VOICE_MODE. */

export function _resetArecordProbeForTesting(): void {}

export function _resetAlsaCardsForTesting(): void {}

export async function checkVoiceDependencies(): Promise<{
  available: boolean
  missing: string[]
  installCommand: string | null
}> {
  return { available: false, missing: ['Voice mode is stubbed'], installCommand: null }
}

export type RecordingAvailability = {
  available: boolean
  reason: string | null
}

export async function requestMicrophonePermission(): Promise<boolean> {
  return false
}

export async function checkRecordingAvailability(): Promise<RecordingAvailability> {
  return { available: false, reason: 'Voice mode is stubbed' }
}

export async function startRecording(
  _onData: (chunk: Buffer) => void,
  _onEnd: () => void,
  _options?: { silenceDetection?: boolean },
): Promise<boolean> {
  return false
}

export function stopRecording(): void {}
