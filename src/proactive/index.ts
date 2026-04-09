/** Stubbed — proactive/index is behind feature flag PROACTIVE. */

export const isProactiveActive: () => boolean = () => false
export const activateProactive: (source?: string) => void = () => {}
export const isProactivePaused: () => boolean = () => false
export const deactivateProactive: () => void = () => {}
