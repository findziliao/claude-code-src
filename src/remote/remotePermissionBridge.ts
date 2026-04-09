/** Stubbed — not needed for local code generation. */

import type { Tool } from '../Tool.js'
import type { AssistantMessage } from '../types/message.js'

export function createSyntheticAssistantMessage(
  _request: unknown,
  _requestId: string,
): AssistantMessage {
  return {
    type: 'assistant',
    uuid: '',
    message: {} as AssistantMessage['message'],
    requestId: undefined,
    timestamp: new Date().toISOString(),
  }
}

export function createToolStub(_toolName: string): Tool {
  return {} as unknown as Tool
}
