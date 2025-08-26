import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Create Supabase client function to avoid build-time issues
function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing Supabase environment variables')
  }
  
  return createClient(supabaseUrl, supabaseServiceKey)
}

// Get client IP address
function getClientIP(request: NextRequest): string | null {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cfConnectingIP = request.headers.get('cf-connecting-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  if (realIP) {
    return realIP
  }
  if (cfConnectingIP) {
    return cfConnectingIP
  }
  
  return null
}

// Get user agent
function getUserAgent(request: NextRequest): string | null {
  return request.headers.get('user-agent') || null
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      document_name, 
      document_type, 
      downloader_email, 
      downloader_name, 
      downloader_company, 
      downloader_role 
    } = body
    
    // Get client information
    const ipAddress = getClientIP(request)
    const userAgent = getUserAgent(request)
    
    // Create download record
    const downloadData = {
      document_name,
      document_type,
      downloader_email,
      downloader_name,
      downloader_company,
      downloader_role,
      ip_address: ipAddress,
      user_agent: userAgent,
      download_count: 1
    }
    
    // Insert into database
    const supabase = createSupabaseClient()
    const { data, error } = await supabase
      .from('investor_downloads')
      .insert([downloadData])
      .select()
    
    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to track download' },
        { status: 500 }
      )
    }
    
    return NextResponse.json({
      success: true,
      data: data[0],
      message: 'Download tracked successfully'
    })
    
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
