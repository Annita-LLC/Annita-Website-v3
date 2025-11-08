/**
 * Input Validation and Sanitization Utilities
 * 
 * Production-grade validation for all form inputs
 */

/**
 * Validate email format
 */
export function validateEmail(email) {
  if (!email || typeof email !== 'string') return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.trim().toLowerCase())
}

/**
 * Validate phone number (international format)
 */
export function validatePhone(phone) {
  if (!phone || typeof phone !== 'string') return false
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '')
  // Check if it's a valid international phone (7-15 digits)
  return /^\+?[1-9]\d{6,14}$/.test(cleaned)
}

/**
 * Sanitize string input to prevent XSS attacks
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return input
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .substring(0, 10000) // Limit length
}

/**
 * Sanitize object recursively
 */
export function sanitizeObject(obj) {
  if (obj === null || obj === undefined) return obj
  if (typeof obj !== 'object') return sanitizeInput(String(obj))
  
  if (Array.isArray(obj)) {
    return obj.map(item => sanitizeObject(item))
  }
  
  const sanitized = {}
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value)
    } else if (typeof value === 'object') {
      sanitized[key] = sanitizeObject(value)
    } else {
      sanitized[key] = value
    }
  }
  return sanitized
}

/**
 * Get client IP address from request headers
 */
export function getClientIP(headers) {
  const forwarded = headers['x-forwarded-for'] || headers['x-forwarded-for']
  const realIP = headers['x-real-ip']
  const cfConnectingIP = headers['cf-connecting-ip']
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  if (realIP) {
    return realIP
  }
  if (cfConnectingIP) {
    return cfConnectingIP
  }
  
  return 'unknown'
}

/**
 * Get user agent from request headers
 */
export function getUserAgent(headers) {
  return headers['user-agent'] || headers['User-Agent'] || 'unknown'
}

/**
 * Validate required fields
 */
export function validateRequired(data, requiredFields) {
  const missing = []
  for (const field of requiredFields) {
    if (!data[field] || (typeof data[field] === 'string' && !data[field].trim())) {
      missing.push(field)
    }
  }
  return missing.length === 0 ? null : `Missing required fields: ${missing.join(', ')}`
}

/**
 * Rate limiting check (simple in-memory - for production, use Redis or similar)
 */
const rateLimitMap = new Map()

export function checkRateLimit(ip, maxRequests = 10, windowMs = 60000) {
  const now = Date.now()
  const key = ip
  
  if (!rateLimitMap.has(key)) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  const record = rateLimitMap.get(key)
  
  if (now > record.resetTime) {
    record.count = 1
    record.resetTime = now + windowMs
    return true
  }
  
  if (record.count >= maxRequests) {
    return false
  }
  
  record.count++
  return true
}

