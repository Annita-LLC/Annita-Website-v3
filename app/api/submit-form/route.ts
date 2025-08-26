import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Server-side Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

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
    const { formType, formData } = body
    
    // Get client information
    const ipAddress = getClientIP(request)
    const userAgent = getUserAgent(request)
    
    // Add client info to form data
    const enrichedData = {
      ...formData,
      ip_address: ipAddress,
      user_agent: userAgent
    }
    
    let result
    
    switch (formType) {
      case 'contact':
        result = await supabase
          .from('contact_inquiries')
          .insert([enrichedData])
          .select()
        break
        
      case 'career':
        result = await supabase
          .from('career_applications')
          .insert([enrichedData])
          .select()
        break
        
      case 'support':
        result = await supabase
          .from('support_issues')
          .insert([enrichedData])
          .select()
        break
        
      case 'business':
        result = await supabase
          .from('business_inquiries')
          .insert([enrichedData])
          .select()
        break
        
      case 'sales':
        result = await supabase
          .from('sales_inquiries')
          .insert([enrichedData])
          .select()
        break
        
      case 'pricing':
        result = await supabase
          .from('pricing_inquiries')
          .insert([enrichedData])
          .select()
        break
        
      case 'the100_youth':
        result = await supabase
          .from('the100_youth_applications')
          .insert([enrichedData])
          .select()
        break
        
      case 'the100_partner':
        result = await supabase
          .from('the100_partner_applications')
          .insert([enrichedData])
          .select()
        break
        
      case 'the100_mentor':
        result = await supabase
          .from('the100_mentor_applications')
          .insert([enrichedData])
          .select()
        break
        
      case 'the100_contact':
        result = await supabase
          .from('the100_contact_inquiries')
          .insert([enrichedData])
          .select()
        break
        
      case 'newsletter':
        result = await supabase
          .from('newsletter_subscriptions')
          .upsert([enrichedData], {
            onConflict: 'email',
            ignoreDuplicates: false
          })
          .select()
        break
        
      case 'investor_download':
        result = await supabase
          .from('investor_downloads')
          .insert([enrichedData])
          .select()
        break
        
      default:
        return NextResponse.json(
          { error: 'Invalid form type' },
          { status: 400 }
        )
    }
    
    if (result.error) {
      console.error('Database error:', result.error)
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      )
    }
    
    return NextResponse.json({
      success: true,
      data: result.data[0],
      message: 'Form submitted successfully'
    })
    
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
