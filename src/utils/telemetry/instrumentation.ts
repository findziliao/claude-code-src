/**
 * OpenTelemetry instrumentation — stubbed out for local-only builds.
 * Removes ~400KB+ of @opentelemetry imports.
 */

export function bootstrapTelemetry(): void {}
export function parseExporterTypes(_value: string | undefined): string[] { return [] }
export function isTelemetryEnabled(): boolean { return false }
export async function initializeTelemetry(): Promise<null> { return null }
export async function flushTelemetry(): Promise<void> {}
