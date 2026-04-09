/** Stubbed — buddy/useBuddyNotification is behind feature flag BUDDY. */

export function isBuddyTeaserWindow(): boolean {
  return false
}

export function isBuddyLive(): boolean {
  return false
}

export function useBuddyNotification(): void {}

export function findBuddyTriggerPositions(_text: string): Array<{
  start: number
  end: number
}> {
  return []
}
