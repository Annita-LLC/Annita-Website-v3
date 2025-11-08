/**
 * Secure Download Tracking Handler (Netlify Function)
 * 
 * Tracks document downloads securely server-side.
 * 
 * Endpoint: /.netlify/functions/trackDownload
 */

import supabase from './supabaseClient.js'
import { 
  validateEmail, 
  sanitizeObject, 
  getClientIP, 
  getUserAgent,
  checkRateLimit
} from './utils/validation.js'

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

    const { 
      document_name, 
      document_type, 
      downloader_email, 
      downloader_name, 
      downloader_company, 
      downloader_role 
    } = body

    // Validate required fields
    if (!document_name || !downloader_email) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Document name and email are required' })
      }
    }

    // Validate email format
    if (!validateEmail(downloader_email)) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Invalid email format' })
      }
    }

    // Get client information
    const clientIP = getClientIP(event.headers)
    const userAgent = getUserAgent(event.headers)

    // Rate limiting: 20 downloads per minute per IP
    if (!checkRateLimit(clientIP, 20, 60000)) {
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

    // Sanitize input
    const sanitizedData = sanitizeObject({
      document_name,
      document_type: document_type || 'investor_document',
      downloader_email,
      downloader_name: downloader_name || null,
      downloader_company: downloader_company || null,
      downloader_role: downloader_role || null
    })

    // Prepare download data
    const downloadData = {
      document_name: sanitizedData.document_name,
      document_type: sanitizedData.document_type,
      downloader_email: sanitizedData.downloader_email.trim().toLowerCase(),
      downloader_name: sanitizedData.downloader_name || null,
      downloader_company: sanitizedData.downloader_company || null,
      downloader_role: sanitizedData.downloader_role || null,
      ip_address: clientIP,
      user_agent: userAgent,
      download_count: 1,
      downloaded_at: new Date().toISOString()
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('investor_downloads')
      .insert([downloadData])
      .select()

    // Handle errors
    if (error) {
      console.error('Supabase error:', error)
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Failed to track download' })
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
        message: 'Download tracked successfully',
        data: data[0]
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

