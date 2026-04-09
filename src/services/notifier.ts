/** Stubbed — not needed for local code generation. */

import type { TerminalNotification } from '../ink/useTerminalNotification.js'

export type NotificationOptions = {
  message: string
  title?: string
  notificationType: string
}

export async function sendNotification(
  _notif: NotificationOptions,
  _terminal: TerminalNotification,
): Promise<void> {}
