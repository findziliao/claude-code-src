/** Stubbed — not needed for local code generation. */

import { type ClaudeAILimits, currentLimits } from './claudeAiLimits.js'

export function useClaudeAiLimits(): ClaudeAILimits {
  return { ...currentLimits }
}
