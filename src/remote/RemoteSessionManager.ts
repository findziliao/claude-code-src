/** Stubbed — not needed for local code generation. */

export type RemotePermissionResponse =
  | { behavior: 'allow'; updatedInput: Record<string, unknown> }
  | { behavior: 'deny'; message: string }

export type RemoteSessionConfig = {
  sessionId: string
  getAccessToken: () => string
  orgUuid: string
  hasInitialPrompt?: boolean
  viewerOnly?: boolean
}

export type RemoteSessionCallbacks = {
  onMessage: (message: unknown) => void
  onPermissionRequest: (request: unknown, requestId: string) => void
  onPermissionCancelled?: (requestId: string, toolUseId: string | undefined) => void
  onConnected?: () => void
  onDisconnected?: () => void
  onReconnecting?: () => void
  onError?: (error: Error) => void
}

export class RemoteSessionManager {
  constructor(
    _config: RemoteSessionConfig,
    _callbacks: RemoteSessionCallbacks,
  ) {}

  connect(): void {}

  async sendMessage(
    _content: unknown,
    _opts?: { uuid?: string },
  ): Promise<boolean> {
    return false
  }

  respondToPermissionRequest(
    _requestId: string,
    _result: RemotePermissionResponse,
  ): void {}

  isConnected(): boolean {
    return false
  }

  cancelSession(): void {}

  getSessionId(): string {
    return ''
  }

  disconnect(): void {}

  reconnect(): void {}
}

export function createRemoteSessionConfig(
  sessionId: string,
  getAccessToken: () => string,
  orgUuid: string,
  hasInitialPrompt = false,
  viewerOnly = false,
): RemoteSessionConfig {
  return { sessionId, getAccessToken, orgUuid, hasInitialPrompt, viewerOnly }
}
