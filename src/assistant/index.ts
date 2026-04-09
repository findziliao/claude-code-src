/** Stubbed — assistant/index is behind feature flag KAIROS. */

export const isAssistantMode: () => boolean = () => false
export const initializeAssistantTeam: () => Promise<void> = async () => {}
export const markAssistantForced: () => void = () => {}
export const isAssistantForced: () => boolean = () => false
export const getAssistantSystemPromptAddendum: () => string = () => ''
export const getAssistantActivationPath: () => string | undefined = () => undefined
