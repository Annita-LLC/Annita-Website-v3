// Backend API configuration
export const getBackendUrl = () => {
  // In browser, use NEXT_PUBLIC_BACKEND_URL or fallback
  if (typeof window !== 'undefined') {
    return process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001'
  }
  // Server-side (won't be used with static export, but for type safety)
  return process.env.BACKEND_URL || 'http://localhost:3001'
}

export const BACKEND_URL = getBackendUrl()

