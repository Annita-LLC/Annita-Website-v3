/**
 * Secure API Client for Frontend
 * 
 * This client handles all API calls to Netlify Functions.
 * No API keys are exposed - all sensitive operations happen server-side.
 */

const API_BASE = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:8888/.netlify/functions' 
  : '/.netlify/functions'

/**
 * Generic API request handler
 */
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<{ success: boolean; data?: T; error?: string }> {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    const result = await response.json()

    if (!response.ok) {
      return {
        success: false,
        error: result.error || 'Request failed',
      }
    }

    return {
      success: true,
      data: result.data || result,
    }
  } catch (error: any) {
    console.error('API request error:', error)
    return {
      success: false,
      error: error.message || 'Network error. Please check your connection.',
    }
  }
}

/**
 * Submit form data securely
 */
export async function submitForm(formType: string, formData: any) {
  return apiRequest('/submitForm', {
    method: 'POST',
    body: JSON.stringify({
      formType,
      formData,
    }),
  })
}

/**
 * Add to waitlist securely
 */
export async function addToWaitlist(data: {
  name: string
  email: string
  phone?: string
  business?: string
  interest?: string
}) {
  return apiRequest('/waitlist', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

/**
 * Track document download securely
 */
export async function trackDownload(data: {
  document_name: string
  document_type?: string
  downloader_email: string
  downloader_name?: string
  downloader_company?: string
  downloader_role?: string
}) {
  return apiRequest('/trackDownload', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

