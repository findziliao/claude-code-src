/**
 * 1P event logging exporter — stubbed out for local-only builds.
 */

export class FirstPartyEventLoggingExporter {
  constructor(_opts?: Record<string, unknown>) {}
  export(): void {}
  shutdown(): Promise<void> { return Promise.resolve() }
  forceFlush(): Promise<void> { return Promise.resolve() }
}
