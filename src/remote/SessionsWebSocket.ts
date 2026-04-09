/** Stubbed — not needed for local code generation. */

export type SessionsWebSocketCallbacks = {
  onMessage: (message: unknown) => void
  onClose?: () => void
  onError?: (error: Error) => void
  onConnected?: () => void
  onReconnecting?: () => void
}

export class SessionsWebSocket {
  constructor(
    _sessionId: string,
    _orgUuid: string,
    _getAccessToken: () => string,
    _callbacks: SessionsWebSocketCallbacks,
  ) {}

  async connect(): Promise<void> {}

  sendControlResponse(_response: unknown): void {}

  sendControlRequest(_request: unknown): void {}

  isConnected(): boolean {
    return false
  }

  close(): void {}

  reconnect(): void {}
}
