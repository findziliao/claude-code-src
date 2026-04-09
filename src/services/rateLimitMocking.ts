/** Stubbed — not needed for local code generation. */

import type { APIError } from '@anthropic-ai/sdk'

export function processRateLimitHeaders(headers: globalThis.Headers): globalThis.Headers {
  return headers
}

export function shouldProcessRateLimits(_isSubscriber: boolean): boolean {
  return false
}

export function checkMockRateLimitError(
  _currentModel: string,
  _isFastModeActive?: boolean,
): APIError | null {
  return null
}

export function isMockRateLimitError(_error: APIError): boolean {
  return false
}

export { shouldProcessMockLimits } from './mockRateLimits.js'
