/** Stubbed — not needed for local code generation. */

export function clearTrackedMagicDocs(): void {}

export function detectMagicDocHeader(
  _content: string,
): { title: string; instructions?: string } | null {
  return null
}

export function registerMagicDoc(_filePath: string): void {}

export async function initMagicDocs(): Promise<void> {}
