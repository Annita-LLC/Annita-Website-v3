/**
 * Secure Form Submission Handler (Netlify Function)
 * 
 * This function handles all form submissions securely server-side.
 * No API keys are exposed to the frontend.
 * 
 * Endpoint: /.netlify/functions/submitForm
 */

import supabase from './supabaseClient.js'
import { 
  validateEmail, 
  validatePhone, 
  sanitizeObject, 
  getClientIP, 
  getUserAgent,
  validateRequired,
  checkRateLimit
} from './utils/validation.js'

// Form type to table mapping
const FORM_TABLE_MAP = {
  'contact': 'contact_inquiries',
  'career': 'career_applications',
  'support': 'support_issues',
  'business': 'business_inquiries',
  'sales': 'sales_inquiries',
  'pricing': 'pricing_inquiries',
  'the100_youth': 'the100_youth_applications',
  'the100_partner': 'the100_partner_applications',
  'the100_mentor': 'the100_mentor_applications',
  'the100_contact': 'the100_contact_inquiries',
  'download': 'download_requests',
  'newsletter': 'newsletter_subscriptions',
  'investor_download': 'investor_downloads'
}

// Required fields per form type
const REQUIRED_FIELDS = {
  'contact': ['email', 'message'],
  'career': ['email', 'first_name', 'last_name'],
  'support': ['email', 'title', 'description'],
  'business': ['email', 'company'],
  'sales': ['email', 'company'],
  'pricing': ['email'],
  'the100_youth': ['email', 'first_name', 'last_name'],
  'the100_partner': ['email', 'company_name'],
  'the100_mentor': ['email', 'first_name', 'last_name'],
  'the100_contact': ['email'],
  'download': ['downloader_email'],
  'newsletter': ['email'],
  'investor_download': ['downloader_email', 'document_name']
}

export const handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  try {
    // Parse request body
    let body
    try {
      body = JSON.parse(event.body)
    } catch (e) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Invalid JSON in request body' })
      }
    }

    const { formType, formData } = body

    // Validate form type
    if (!formType || !FORM_TABLE_MAP[formType]) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Invalid form type' })
      }
    }

    // Get client information for rate limiting and tracking
    const clientIP = getClientIP(event.headers)
    const userAgent = getUserAgent(event.headers)

    // Rate limiting: 10 requests per minute per IP
    if (!checkRateLimit(clientIP, 10, 60000)) {
      return {
        statusCode: 429,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Retry-After': '60'
        },
        body: JSON.stringify({ error: 'Too many requests. Please try again later.' })
      }
    }

    // Validate required fields
    const requiredFields = REQUIRED_FIELDS[formType] || []
    const missingFields = validateRequired(formData, requiredFields)
    if (missingFields) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: missingFields })
      }
    }

    // Validate email if present
    if (formData.email && !validateEmail(formData.email)) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Invalid email format' })
      }
    }

    // Validate phone if present
    if (formData.phone && !validatePhone(formData.phone)) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Invalid phone number format' })
      }
    }

    // Sanitize all input data
    const sanitizedData = sanitizeObject(formData)

    // Enrich data with client information
    const enrichedData = {
      ...sanitizedData,
      ip_address: clientIP,
      user_agent: userAgent,
      submitted_at: new Date().toISOString()
    }

    // Get table name for this form type
    const tableName = FORM_TABLE_MAP[formType]

    // Insert into Supabase
    let result
    if (formType === 'newsletter') {
      // Use upsert for newsletter to handle duplicates
      result = await supabase
        .from(tableName)
        .upsert([enrichedData], {
          onConflict: 'email',
          ignoreDuplicates: false
        })
        .select()
    } else {
      // Regular insert for other forms
      result = await supabase
        .from(tableName)
        .insert([enrichedData])
        .select()
    }

    // Check for database errors
    if (result.error) {
      console.error('Supabase error:', result.error)
      
      // Handle duplicate email error
      if (result.error.code === '23505' && result.error.message.includes('email')) {
        return {
          statusCode: 409,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({ error: 'This email is already registered' })
        }
      }

      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Failed to submit form. Please try again.' })
      }
    }

    // Success response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: true,
        message: 'Form submitted successfully',
        data: result.data[0]
      })
    }

  } catch (error) {
    console.error('Function error:', error)
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: 'Internal server error' })
    }
  }
}

