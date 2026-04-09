/** Stubbed — not needed for local code generation. */

export async function checkMetricsEnabled(): Promise<{
  enabled: boolean
  hasError: boolean
}> {
  return { enabled: false, hasError: false }
}

export const _clearMetricsEnabledCacheForTesting = (): void => {}
