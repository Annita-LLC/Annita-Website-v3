import { createClient } from '@supabase/supabase-js'

// Create Supabase client function to avoid build-time issues
export function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }
  
  return createClient(supabaseUrl, supabaseAnonKey)
}

// Create client instance for runtime use
let supabaseInstance: ReturnType<typeof createSupabaseClient> | null = null

export function getSupabaseClient() {
  if (!supabaseInstance) {
    supabaseInstance = createSupabaseClient()
  }
  return supabaseInstance
}

// Note: Don't export supabase at module level to avoid build-time issues
// Use getSupabaseClient() function instead

// Database types based on our schema
export interface ContactInquiry {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  company?: string
  country?: string
  subject?: string
  message: string
  inquiry_category: 'general' | 'technical' | 'account' | 'business' | 'feature' | 'feedback'
  urgency?: 'low' | 'normal' | 'high' | 'urgent'
  preferred_contact?: 'email' | 'phone'
  newsletter_opt_in?: boolean
  ip_address?: string
  user_agent?: string
  created_at?: string
  updated_at?: string
}

export interface CareerApplication {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  location?: string
  position: string
  experience?: 'entry' | 'mid' | 'senior' | 'lead' | 'executive'
  company?: string
  current_position?: string
  education?: string
  field_of_study?: string
  linkedin_url?: string
  portfolio_url?: string
  resume_url?: string
  cover_letter?: string
  source?: string
  willing_to_relocate?: boolean
  salary_expectations?: string
  message?: string
  ip_address?: string
  user_agent?: string
  created_at?: string
  updated_at?: string
}

export interface SupportIssue {
  id?: string
  issue_category: 'bug' | 'feature' | 'security' | 'performance' | 'ui' | 'payment'
  priority?: 'low' | 'medium' | 'high' | 'critical'
  title: string
  description: string
  steps_to_reproduce?: string
  expected_behavior?: string
  actual_behavior?: string
  browser?: string
  device?: string
  email: string
  attachments?: string[]
  ip_address?: string
  user_agent?: string
  status?: string
  assigned_to?: string
  created_at?: string
  updated_at?: string
}

export interface BusinessInquiry {
  id?: string
  name: string
  email: string
  company?: string
  phone?: string
  business_type?: string
  revenue_range?: string
  message?: string
  selected_model?: string
  ip_address?: string
  user_agent?: string
  created_at?: string
  updated_at?: string
}

export interface SalesInquiry {
  id?: string
  first_name: string
  last_name: string
  email: string
  company?: string
  phone?: string
  company_size?: '1-10' | '11-50' | '51-200' | '201-500' | '500+'
  industry?: string
  goals?: string
  timeline?: string
  budget?: string
  ip_address?: string
  user_agent?: string
  created_at?: string
  updated_at?: string
}

export interface PricingInquiry {
  id?: string
  name: string
  email: string
  company?: string
  phone?: string
  selected_plan?: string
  billing_cycle?: string
  message?: string
  ip_address?: string
  user_agent?: string
  created_at?: string
  updated_at?: string
}

export interface The100YouthApplication {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  age?: number
  education?: string
  institution?: string
  sector?: string
  experience?: string
  goals?: string
  motivation?: string
  availability?: string
  references_info?: string
  ip_address?: string
  user_agent?: string
  status?: string
  created_at?: string
  updated_at?: string
}

export interface The100PartnerApplication {
  id?: string
  organization_name: string
  contact_person: string
  email: string
  phone?: string
  organization_type?: string
  website?: string
  partnership_goals?: string
  capabilities?: string
  resources?: string
  additional_info?: string
  ip_address?: string
  user_agent?: string
  status?: string
  created_at?: string
  updated_at?: string
}

export interface The100MentorApplication {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  expertise_areas?: string
  experience_summary?: string
  availability?: string
  motivation?: string
  additional_info?: string
  ip_address?: string
  user_agent?: string
  status?: string
  created_at?: string
  updated_at?: string
}

export interface The100ContactInquiry {
  id?: string
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  interest_area?: string
  ip_address?: string
  user_agent?: string
  created_at?: string
  updated_at?: string
}

export interface NewsletterSubscription {
  id?: string
  email: string
  platform?: string
  ip_address?: string
  user_agent?: string
  subscribed_at?: string
  unsubscribed_at?: string
  is_active?: boolean
}

export interface FileUpload {
  id?: string
  original_name: string
  file_name: string
  file_path: string
  file_size: number
  mime_type: string
  related_table?: string
  related_id?: string
  uploaded_by?: string
  ip_address?: string
  created_at?: string
}

export interface InvestorDownload {
  id?: string
  document_name: string
  document_type: 'pitch_deck' | 'financial_model' | 'business_plan' | 'executive_summary' | 'market_analysis' | 'other'
  downloader_email?: string
  downloader_name?: string
  downloader_company?: string
  downloader_role?: string
  ip_address?: string
  user_agent?: string
  download_count?: number
  created_at?: string
  updated_at?: string
}

// Utility functions to get client information
export const getClientInfo = () => {
  if (typeof window === 'undefined') {
    return {
      ip_address: null,
      user_agent: null
    }
  }

  return {
    ip_address: null, // Will be set by server-side function
    user_agent: navigator.userAgent
  }
}

// Database operation functions
export const databaseService = {
  // Contact Inquiries
  async submitContactInquiry(data: ContactInquiry) {
    const supabase = getSupabaseClient()
    const { data: result, error } = await supabase
      .from('contact_inquiries')
      .insert([data])
      .select()
    
    if (error) throw error
    return result[0]
  },

  // Career Applications
  async submitCareerApplication(data: CareerApplication) {
    const supabase = getSupabaseClient()
    const { data: result, error } = await supabase
      .from('career_applications')
      .insert([data])
      .select()
    
    if (error) throw error
    return result[0]
  },

  // Support Issues
  async submitSupportIssue(data: SupportIssue) {
    const supabase = getSupabaseClient()
    const { data: result, error } = await supabase
      .from('support_issues')
      .insert([data])
      .select()
    
    if (error) throw error
    return result[0]
  },

  // Business Inquiries
  async submitBusinessInquiry(data: BusinessInquiry) {
    const supabase = getSupabaseClient()
    const { data: result, error } = await supabase
      .from('business_inquiries')
      .insert([data])
      .select()
    
    if (error) throw error
    return result[0]
  },

  // Sales Inquiries
  async submitSalesInquiry(data: SalesInquiry) {
    const supabase = getSupabaseClient()
    const { data: result, error } = await supabase
      .from('sales_inquiries')
      .insert([data])
      .select()
    
    if (error) throw error
    return result[0]
  },

  // Pricing Inquiries
  async submitPricingInquiry(data: PricingInquiry) {
    const supabase = getSupabaseClient()
    const { data: result, error } = await supabase
      .from('pricing_inquiries')
      .insert([data])
      .select()
    
    if (error) throw error
    return result[0]
  },

  // The 100 Youth Applications
  async submitThe100YouthApplication(data: The100YouthApplication) {
    const supabase = getSupabaseClient()
    const { data: result, error } = await supabase
      .from('the100_youth_applications')
      .insert([data])
      .select()
    
    if (error) throw error
    return result[0]
  },

  // The 100 Partner Applications
  async submitThe100PartnerApplication(data: The100PartnerApplication) {
    const supabase = getSupabaseClient()
    const { data: result, error } = await supabase
      .from('the100_partner_applications')
      .insert([data])
      .select()
    
    if (error) throw error
    return result[0]
  },

  // The 100 Mentor Applications
  async submitThe100MentorApplication(data: The100MentorApplication) {
    const supabase = getSupabaseClient()
    const { data: result, error } = await supabase
      .from('the100_mentor_applications')
      .insert([data])
      .select()
    
    if (error) throw error
    return result[0]
  },

  // The 100 Contact Inquiries
  async submitThe100ContactInquiry(data: The100ContactInquiry) {
    const supabase = getSupabaseClient()
    const { data: result, error } = await supabase
      .from('the100_contact_inquiries')
      .insert([data])
      .select()
    
    if (error) throw error
    return result[0]
  },

  // Newsletter Subscriptions
  async subscribeToNewsletter(email: string, platform?: string) {
    const supabase = getSupabaseClient()
    const { data: result, error } = await supabase
      .from('newsletter_subscriptions')
      .upsert([{ 
        email, 
        platform,
        is_active: true 
      }], { 
        onConflict: 'email',
        ignoreDuplicates: false 
      })
      .select()
    
    if (error) throw error
    return result[0]
  },

  // File Uploads
  async uploadFile(file: File, relatedTable?: string, relatedId?: string) {
    const supabase = getSupabaseClient()
    const fileName = `${Date.now()}-${file.name}`
    const filePath = `uploads/${relatedTable || 'general'}/${fileName}`

    // Upload to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('files')
      .upload(filePath, file)

    if (uploadError) throw uploadError

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('files')
      .getPublicUrl(filePath)

    // Save file metadata to database
    const fileRecord: FileUpload = {
      original_name: file.name,
      file_name: fileName,
      file_path: filePath,
      file_size: file.size,
      mime_type: file.type,
      related_table: relatedTable,
      related_id: relatedId,
      uploaded_by: 'anonymous' // Will be updated when auth is implemented
    }

    const { data: dbData, error: dbError } = await supabase
      .from('file_uploads')
      .insert([fileRecord])
      .select()

    if (dbError) throw dbError

    return {
      ...dbData[0],
      public_url: urlData.publicUrl
    }
  },

  // Get recent inquiries (for admin dashboard)
  async getRecentInquiries(limit = 50) {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from('recent_inquiries')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit)
    
    if (error) throw error
    return data
  },

  // Track investor document downloads
  async trackInvestorDownload(data: InvestorDownload) {
    const supabase = getSupabaseClient()
    const { data: result, error } = await supabase
      .from('investor_downloads')
      .insert([data])
      .select()
    
    if (error) throw error
    return result[0]
  },

  // Get download statistics
  async getDownloadStats() {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from('investor_downloads')
      .select('document_type, download_count')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  }
}

// Error handling utility
export class DatabaseError extends Error {
  constructor(message: string, public code?: string) {
    super(message)
    this.name = 'DatabaseError'
  }
}

// Validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '')
}
