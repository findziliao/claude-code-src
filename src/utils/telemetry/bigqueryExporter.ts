/**
 * BigQuery metrics exporter — stubbed out for local-only builds.
 */

export class BigQueryMetricsExporter {
  constructor(_options: { timeout?: number } = {}) {}
  async export(_metrics: unknown, resultCallback: (result: { code: number }) => void): Promise<void> {
    resultCallback({ code: 0 })
  }
  async shutdown(): Promise<void> {}
  async forceFlush(): Promise<void> {}
  selectAggregationTemporality(): number { return 1 }
}
