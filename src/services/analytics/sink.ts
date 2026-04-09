/**
 * Analytics sink — stubbed out for local-only builds.
 * Attaches a no-op sink so queued events are silently drained.
 */

import { attachAnalyticsSink } from './index.js'

export function initializeAnalyticsGates(): void {}

export function initializeAnalyticsSink(): void {
  attachAnalyticsSink({
    logEvent: () => {},
    logEventAsync: () => Promise.resolve(),
  })
}
