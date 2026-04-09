/** Stubbed — not needed for local code generation. */

export function encodeChunk(data: Uint8Array): Uint8Array {
  return new Uint8Array(0)
}

export function decodeChunk(buf: Uint8Array): Uint8Array | null {
  return null
}

export type UpstreamProxyRelay = {
  port: number
  stop: () => void
}

export async function startUpstreamProxyRelay(_opts: {
  wsUrl: string
  sessionId: string
  token: string
}): Promise<UpstreamProxyRelay> {
  return { port: 0, stop: () => {} }
}

export async function startNodeRelay(
  _wsUrl: string,
  _authHeader: string,
  _wsAuthHeader: string,
): Promise<UpstreamProxyRelay> {
  return { port: 0, stop: () => {} }
}
