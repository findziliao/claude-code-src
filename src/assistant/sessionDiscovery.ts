/** Stubbed — assistant/sessionDiscovery is behind feature flag KAIROS. */

export type AssistantSession = { id: string; [key: string]: unknown }
export const discoverAssistantSessions: () => Promise<AssistantSession[]> = () => Promise.resolve([])
