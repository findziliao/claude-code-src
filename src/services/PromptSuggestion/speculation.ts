/** Stubbed — not needed for local code generation. */

import type { CompletionBoundary } from '../../state/AppStateStore.js'
import {
  type AppState,
  IDLE_SPECULATION_STATE,
  type SpeculationResult,
  type SpeculationState,
} from '../../state/AppStateStore.js'
import type { Message } from '../../types/message.js'
import type { CacheSafeParams } from '../../utils/forkedAgent.js'
import type { REPLHookContext } from '../../utils/hooks/postSamplingHooks.js'
import type { SetAppState } from '../../utils/messageQueueManager.js'

export type ActiveSpeculationState = Extract<
  SpeculationState,
  { status: 'active' }
>

export function prepareMessagesForInjection(messages: Message[]): Message[] {
  return messages
}

export function isSpeculationEnabled(): boolean {
  return false
}

export async function startSpeculation(
  _suggestionText: string,
  _context: REPLHookContext,
  _setAppState: (f: (prev: AppState) => AppState) => void,
  _isPipelined?: boolean,
  _cacheSafeParams?: CacheSafeParams,
): Promise<void> {}

export async function acceptSpeculation(
  _state: SpeculationState,
  _setAppState: (f: (prev: AppState) => AppState) => void,
  _cleanMessageCount: number,
): Promise<SpeculationResult | null> {
  return null
}

export function abortSpeculation(_setAppState: SetAppState): void {}

export async function handleSpeculationAccept(
  _speculationState: ActiveSpeculationState,
  _speculationSessionTimeSavedMs: number,
  _setAppState: SetAppState,
  _input: string,
  _deps: {
    setMessages: (f: (prev: Message[]) => Message[]) => void
    readFileState: { current: any }
    cwd: string
  },
): Promise<{ queryRequired: boolean }> {
  return { queryRequired: true }
}
