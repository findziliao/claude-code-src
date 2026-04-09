/** Stubbed — services/voiceStreamSTT is behind feature flag VOICE_MODE. */

export const FINALIZE_TIMEOUTS_MS = {
  safety: 5_000,
  noData: 1_500,
}

export type VoiceStreamCallbacks = {
  onTranscript: (text: string, isFinal: boolean) => void
  onError: (error: string, opts?: { fatal?: boolean }) => void
  onClose: () => void
  onReady: (connection: VoiceStreamConnection) => void
}

export type FinalizeSource =
  | 'post_closestream_endpoint'
  | 'no_data_timeout'
  | 'safety_timeout'
  | 'ws_close'
  | 'ws_already_closed'

export type VoiceStreamConnection = {
  send: (audioChunk: Buffer) => void
  finalize: () => Promise<FinalizeSource>
  close: () => void
  isConnected: () => boolean
}

export function isVoiceStreamAvailable(): boolean {
  return false
}

export async function connectVoiceStream(
  _callbacks: VoiceStreamCallbacks,
  _options?: { language?: string; keyterms?: string[] },
): Promise<VoiceStreamConnection | null> {
  return null
}
