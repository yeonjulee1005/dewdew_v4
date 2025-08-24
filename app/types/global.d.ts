declare module 'typeit'

/**
 * Global Type Declarations
 *
 * This file imports and re-exports domain-specific types
 * for global availability throughout the application.
 */

// Domain-specific type imports
export * from './weather'
export * from './portfolio'
export * from './ui'
export * from './utils'

// Legacy global types for backward compatibility
declare global {
  // Window interface extension
  interface Window {
    skipWaiting: () => Promise<void>
    __WB_MANIFEST: Array<unknown>
  }
}

// Type aliases for backward compatibility
export type { WeatherFirstData as weatherFirstData } from './weather'
export type { WeatherSecondData as weatherSecondData } from './weather'
