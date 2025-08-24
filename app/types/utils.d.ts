/**
 * Generic Utility Types
 */

export type SerializeObject = any

export interface Window {
  skipWaiting: () => Promise<void>
  __WB_MANIFEST: Array<unknown>
}

/**
 * Generic API Response wrapper
 */
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

/**
 * Generic List Response with pagination
 */
export interface ListResponse<T> {
  items: T[]
  totalCount: number
  pageNo: number
  numOfRows: number
}

/**
 * Generic Entity with common fields
 */
export interface BaseEntity {
  id: string
  created_at: string
  updated_at?: string | null
  deleted?: boolean | null
  update_user_id?: string | null
}

/**
 * Generic Multilingual content
 */
export interface MultilingualContent<T = string> {
  ko: T
  en: T
}

/**
 * Generic Order/Index wrapper
 */
export interface OrderedItem {
  orderIndex: { index: number }
}
