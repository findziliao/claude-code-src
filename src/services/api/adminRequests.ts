/** Stubbed — not needed for local code generation. */

export type AdminRequestType = 'limit_increase' | 'seat_upgrade'

export type AdminRequestStatus = 'pending' | 'approved' | 'dismissed'

export type AdminRequestSeatUpgradeDetails = {
  message?: string | null
  current_seat_tier?: string | null
}

export type AdminRequestCreateParams =
  | { request_type: 'limit_increase'; details: null }
  | { request_type: 'seat_upgrade'; details: AdminRequestSeatUpgradeDetails }

export type AdminRequest = {
  uuid: string
  status: AdminRequestStatus
  requester_uuid?: string | null
  created_at: string
} & (
  | { request_type: 'limit_increase'; details: null }
  | { request_type: 'seat_upgrade'; details: AdminRequestSeatUpgradeDetails }
)

export async function createAdminRequest(
  _params: AdminRequestCreateParams,
): Promise<AdminRequest> {
  return {
    uuid: '',
    status: 'pending',
    created_at: new Date().toISOString(),
    request_type: 'limit_increase',
    details: null,
  }
}

export async function getMyAdminRequests(
  _requestType: AdminRequestType,
  _statuses: AdminRequestStatus[],
): Promise<AdminRequest[] | null> {
  return null
}

export async function checkAdminRequestEligibility(
  _requestType: AdminRequestType,
): Promise<{ request_type: AdminRequestType; is_allowed: boolean } | null> {
  return null
}
