/**
 * Datadog analytics — stubbed out for local-only builds.
 * All exports preserved for API compatibility.
 */

import memoize from 'lodash-es/memoize.js'

export const initializeDatadog = memoize(async (): Promise<boolean> => false)
export async function shutdownDatadog(): Promise<void> {}
export async function trackDatadogEvent(
  _eventName: string,
  _properties: { [key: string]: boolean | number | undefined },
): Promise<void> {}
