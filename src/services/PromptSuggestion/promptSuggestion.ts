/** Stubbed — not needed for local code generation. */

import type { AppState } from '../../state/AppState.js'
import type { Message } from '../../types/message.js'
import type { CacheSafeParams } from '../../utils/forkedAgent.js'
import type { REPLHookContext } from '../../utils/hooks/postSamplingHooks.js'
import { getLastAssistantMessage } from '../../utils/messages.js'

export type PromptVariant = 'user_intent' | 'stated_intent'

export function getPromptVariant(): PromptVariant {
  return 'user_intent'
}

export function shouldEnablePromptSuggestion(): boolean {
  return false
}

export function abortPromptSuggestion(): void {}

export function getSuggestionSuppressReason(_appState: AppState): string | null {
  return 'disabled'
}

export async function tryGenerateSuggestion(
  _abortController: AbortController,
  _messages: Message[],
  _getAppState: () => AppState,
  _cacheSafeParams: CacheSafeParams,
  _source?: 'cli' | 'sdk',
): Promise<{
  suggestion: string
  promptId: PromptVariant
  generationRequestId: string | null
} | null> {
  return null
}

export async function executePromptSuggestion(_context: REPLHookContext): Promise<void> {}

export function getParentCacheSuppressReason(
  _lastAssistantMessage: ReturnType<typeof getLastAssistantMessage>,
): string | null {
  return null
}

export async function generateSuggestion(
  _abortController: AbortController,
  _promptId: PromptVariant,
  _cacheSafeParams: CacheSafeParams,
): Promise<{ suggestion: string | null; generationRequestId: string | null }> {
  return { suggestion: null, generationRequestId: null }
}

export function shouldFilterSuggestion(
  _suggestion: string | null,
  _promptId: PromptVariant,
  _source?: 'cli' | 'sdk',
): boolean {
  return true
}

export function logSuggestionOutcome(
  _suggestion: string,
  _userInput: string,
  _emittedAt: number,
  _promptId: PromptVariant,
  _generationRequestId: string | null,
): void {}

export function logSuggestionSuppressed(
  _reason: string,
  _suggestion?: string,
  _promptId?: PromptVariant,
  _source?: 'cli' | 'sdk',
): void {}
