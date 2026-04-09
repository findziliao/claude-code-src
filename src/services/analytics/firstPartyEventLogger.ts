/**
 * 1st-party event logger — stubbed out for local-only builds.
 * All exports preserved for API compatibility.
 */

export type EventSamplingConfig = {
  [eventName: string]: { sample_rate: number }
}

export type GrowthBookExperimentData = {
  experimentId: string
  variationId: number
  userAttributes?: Record<string, unknown>
  experimentMetadata?: Record<string, unknown>
}

export function getEventSamplingConfig(): EventSamplingConfig { return {} }
export function shouldSampleEvent(_eventName: string): number | null { return 0 }
export function is1PEventLoggingEnabled(): boolean { return false }
export function logEventTo1P(
  _eventName: string,
  _metadata?: Record<string, number | boolean | undefined>,
): void {}
export function logGrowthBookExperimentTo1P(_data: GrowthBookExperimentData): void {}
export function initialize1PEventLogging(): void {}
export async function reinitialize1PEventLoggingIfConfigChanged(): Promise<void> {}
export async function shutdown1PEventLogging(): Promise<void> {}
