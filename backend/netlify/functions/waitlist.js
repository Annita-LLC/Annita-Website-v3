/**
 * Secure Waitlist Handler (Netlify Function)
 * 
 * Handles waitlist submissions securely server-side.
 * 
 * Endpoint: /.netlify/functions/waitlist
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

    // Validate required fields
    if (!body.name || !body.email) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Name and email are required' })
      }
    }

    // Validate email format
    if (!validateEmail(body.email)) {
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

    // Rate limiting: 5 requests per minute per IP for waitlist
    if (!checkRateLimit(clientIP, 5, 60000)) {
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
      name: body.name,
      email: body.email,
      phone: body.phone || null,
      business: body.business || null,
      interest: body.interest || 'general'
    })

    // Prepare waitlist data
    const waitlistData = {
      name: sanitizedData.name.trim(),
      email: sanitizedData.email.trim().toLowerCase(),
      phone: sanitizedData.phone || null,
      business: sanitizedData.business || null,
      interest: sanitizedData.interest || 'general',
      ip_address: clientIP,
      user_agent: userAgent,
      submitted_at: new Date().toISOString()
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('waitlist')
      .insert([waitlistData])
      .select()

    // Handle errors
    if (error) {
      console.error('Supabase error:', error)
      
      // Handle duplicate email
      if (error.code === '23505' && error.message.includes('email')) {
        return {
          statusCode: 409,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({ error: 'This email is already on the waitlist' })
        }
      }

      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Failed to add to waitlist. Please try again.' })
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
        message: 'Successfully added to waitlist!',
        data: {
          id: data[0].id,
          email: data[0].email
        }
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

