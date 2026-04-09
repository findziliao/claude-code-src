/** Stubbed — not needed for local code generation. */

import type { TaskContext } from '../../Task.js'
import type { AgentId } from '../../types/ids.js'
import type { CacheSafeParams } from '../../utils/forkedAgent.js'

export function startAgentSummarization(
  _taskId: string,
  _agentId: AgentId,
  _cacheSafeParams: CacheSafeParams,
  _setAppState: TaskContext['setAppState'],
): { stop: () => void } {
  return { stop: () => {} }
}
