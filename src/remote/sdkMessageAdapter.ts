/** Stubbed — not needed for local code generation. */

import type { SDKMessage, SDKResultMessage } from '../entrypoints/agentSdkTypes.js'
import type { Message, StreamEvent } from '../types/message.js'

export type ConvertedMessage =
  | { type: 'message'; message: Message }
  | { type: 'stream_event'; event: StreamEvent }
  | { type: 'ignored' }

export function convertSDKMessage(
  _msg: SDKMessage,
  _opts?: unknown,
): ConvertedMessage {
  return { type: 'ignored' }
}

export function isSessionEndMessage(_msg: SDKMessage): boolean {
  return false
}

export function isSuccessResult(_msg: SDKResultMessage): boolean {
  return false
}

export function getResultText(_msg: SDKResultMessage): string | null {
  return null
}
