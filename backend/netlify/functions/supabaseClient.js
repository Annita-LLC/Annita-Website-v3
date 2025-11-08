/**
 * Secure Supabase Client for Netlify Functions
 * 
 * This file creates a Supabase client using environment variables
 * that are only available server-side. Never expose these keys to the frontend.
 */

import { createClient } from '@supabase/supabase-js'

// Get environment variables (set in Netlify dashboard)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Netlify environment variables.')
}

// Create Supabase client with service role key (admin privileges)
// This key should NEVER be exposed to the frontend
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

export default supabase

