/** Stubbed — not needed for local code generation. */

export type AccountSettings = {
  grove_enabled: boolean | null
  grove_notice_viewed_at: string | null
}

export type GroveConfig = {
  grove_enabled: boolean
  domain_excluded: boolean
  notice_is_grace_period: boolean
  notice_reminder_frequency: number | null
}

export type ApiResult<T> = { success: true; data: T } | { success: false }

const _noopCache = { clear: () => {} }

export const getGroveSettings = Object.assign(
  async (): Promise<ApiResult<AccountSettings>> => {
    return { success: false }
  },
  { cache: _noopCache },
)

export async function markGroveNoticeViewed(): Promise<void> {}

export async function updateGroveSettings(
  _groveEnabled: boolean,
): Promise<void> {}

export async function isQualifiedForGrove(): Promise<boolean> {
  return false
}

export const getGroveNoticeConfig = Object.assign(
  async (): Promise<ApiResult<GroveConfig>> => {
    return { success: false }
  },
  { cache: _noopCache },
)

export function calculateShouldShowGrove(
  _settingsResult: ApiResult<AccountSettings>,
  _configResult: ApiResult<GroveConfig>,
  _showIfAlreadyViewed: boolean,
): boolean {
  return false
}

export async function checkGroveForNonInteractive(): Promise<void> {}
