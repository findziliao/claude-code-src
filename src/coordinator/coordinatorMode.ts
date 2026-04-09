/** Stubbed — coordinator/coordinatorMode is behind feature flag COORDINATOR_MODE. */

export function isCoordinatorMode(): boolean {
  return false
}

export function matchSessionMode(
  _sessionMode: 'coordinator' | 'normal' | undefined,
): string | undefined {
  return undefined
}

export function getCoordinatorUserContext(
  _mcpClients: ReadonlyArray<{ name: string }>,
  _scratchpadDir?: string,
): { [k: string]: string } {
  return {}
}

export function getCoordinatorSystemPrompt(): string {
  return ''
}
