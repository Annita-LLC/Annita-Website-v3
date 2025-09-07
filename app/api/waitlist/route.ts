import { NextRequest, NextResponse } from 'next/server'
import { addToWaitlist } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Get client IP and user agent
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Prepare data for database
    const waitlistData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim() || null,
      business: body.business?.trim() || null,
      interest: body.interest || 'general',
      ip_address: ip,
      user_agent: userAgent
    }

    // Add to waitlist
    const result = await addToWaitlist(waitlistData)

    return NextResponse.json({
      success: true,
      message: 'Successfully added to waitlist!',
      data: {
        id: result.id,
        email: result.email
      }
    })

  } catch (error: any) {
    console.error('Waitlist submission error:', error)
    
    // Handle duplicate email error
    if (error.code === '23505' && error.message.includes('email')) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to add to waitlist. Please try again.' },
      { status: 500 }
    )
  }
}
