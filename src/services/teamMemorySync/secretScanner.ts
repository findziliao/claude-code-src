/** Stubbed — not needed for local code generation. */

export type SecretMatch = {
  ruleId: string
  label: string
}

export function scanForSecrets(_content: string): SecretMatch[] {
  return []
}

export function getSecretLabel(ruleId: string): string {
  return ruleId
}

export function redactSecrets(content: string): string {
  return content
}
