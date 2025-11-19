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

