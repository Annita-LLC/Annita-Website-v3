-- Annita Website Database Schema for Supabase
-- This schema handles all form submissions and user data collection

-- Enable Row Level Security (RLS)
-- Note: app.jwt_secret setting removed as it requires superuser privileges
-- RLS policies work without this setting for our anonymous form submissions

-- Create custom types (only if they don't exist)
DO $$ BEGIN
    CREATE TYPE inquiry_type AS ENUM ('general', 'technical', 'account', 'business', 'feature', 'feedback');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE urgency_level AS ENUM ('low', 'normal', 'high', 'urgent');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE contact_method AS ENUM ('email', 'phone');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE issue_type AS ENUM ('bug', 'feature', 'security', 'performance', 'ui', 'payment');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE priority_level AS ENUM ('low', 'medium', 'high', 'critical');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE application_type AS ENUM ('youth', 'partner', 'mentor');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE business_size AS ENUM ('1-10', '11-50', '51-200', '201-500', '500+');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE experience_level AS ENUM ('entry', 'mid', 'senior', 'lead', 'executive');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 1. CONTACT INQUIRIES TABLE
DROP TABLE IF EXISTS contact_inquiries CASCADE;
CREATE TABLE contact_inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(200),
    country VARCHAR(100),
    subject VARCHAR(200),
    message TEXT NOT NULL,
    inquiry_category inquiry_type NOT NULL,
    urgency urgency_level DEFAULT 'normal',
    preferred_contact contact_method DEFAULT 'email',
    newsletter_opt_in BOOLEAN DEFAULT false,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. CAREER APPLICATIONS TABLE
DROP TABLE IF EXISTS career_applications CASCADE;
CREATE TABLE career_applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    location VARCHAR(200),
    position VARCHAR(100),
    experience experience_level,
    company VARCHAR(200),
    current_position VARCHAR(200),
    education VARCHAR(100),
    field_of_study VARCHAR(200),
    linkedin_url VARCHAR(500),
    portfolio_url VARCHAR(500),
    resume_url VARCHAR(500), -- File storage URL
    cover_letter TEXT,
    source VARCHAR(100),
    willing_to_relocate BOOLEAN,
    salary_expectations VARCHAR(100),
    message TEXT,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. SUPPORT ISSUES TABLE
DROP TABLE IF EXISTS support_issues CASCADE;
CREATE TABLE support_issues (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    issue_category issue_type NOT NULL,
    priority priority_level DEFAULT 'medium',
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    steps_to_reproduce TEXT,
    expected_behavior TEXT,
    actual_behavior TEXT,
    browser VARCHAR(50),
    device VARCHAR(50),
    email VARCHAR(255) NOT NULL,
    attachments JSONB, -- Array of file URLs
    ip_address INET,
    user_agent TEXT,
    status VARCHAR(50) DEFAULT 'open',
    assigned_to UUID,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. BUSINESS INQUIRIES TABLE
DROP TABLE IF EXISTS business_inquiries CASCADE;
CREATE TABLE business_inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(200),
    phone VARCHAR(20),
    business_type VARCHAR(100),
    revenue_range VARCHAR(100),
    message TEXT,
    selected_model VARCHAR(100),
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. SALES INQUIRIES TABLE
DROP TABLE IF EXISTS sales_inquiries CASCADE;
CREATE TABLE sales_inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(200),
    phone VARCHAR(20),
    company_size business_size,
    industry VARCHAR(100),
    goals TEXT,
    timeline VARCHAR(100),
    budget VARCHAR(100),
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. PRICING INQUIRIES TABLE
DROP TABLE IF EXISTS pricing_inquiries CASCADE;
CREATE TABLE pricing_inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(200),
    phone VARCHAR(20),
    selected_plan VARCHAR(100),
    billing_cycle VARCHAR(20),
    message TEXT,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. THE 100 YOUTH APPLICATIONS TABLE
DROP TABLE IF EXISTS the100_youth_applications CASCADE;
CREATE TABLE the100_youth_applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    age INTEGER,
    education VARCHAR(100),
    institution VARCHAR(200),
    sector VARCHAR(100),
    experience TEXT,
    goals TEXT,
    motivation TEXT,
    availability VARCHAR(100),
    references_info TEXT,
    ip_address INET,
    user_agent TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. THE 100 PARTNER APPLICATIONS TABLE
DROP TABLE IF EXISTS the100_partner_applications CASCADE;
CREATE TABLE the100_partner_applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    organization_name VARCHAR(200) NOT NULL,
    contact_person VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    organization_type VARCHAR(100),
    website VARCHAR(500),
    partnership_goals TEXT,
    capabilities TEXT,
    resources TEXT,
    additional_info TEXT,
    ip_address INET,
    user_agent TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. THE 100 MENTOR APPLICATIONS TABLE
DROP TABLE IF EXISTS the100_mentor_applications CASCADE;
CREATE TABLE the100_mentor_applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    expertise_areas TEXT,
    experience_summary TEXT,
    availability TEXT,
    motivation TEXT,
    additional_info TEXT,
    ip_address INET,
    user_agent TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 10. THE 100 CONTACT INQUIRIES TABLE
DROP TABLE IF EXISTS the100_contact_inquiries CASCADE;
CREATE TABLE the100_contact_inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(200),
    message TEXT NOT NULL,
    interest_area VARCHAR(100),
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 11. NEWSLETTER SUBSCRIPTIONS TABLE
DROP TABLE IF EXISTS newsletter_subscriptions CASCADE;
CREATE TABLE newsletter_subscriptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    platform VARCHAR(50), -- 'download', 'general', etc.
    ip_address INET,
    user_agent TEXT,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    unsubscribed_at TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT true
);

-- 12. FILE UPLOADS TABLE (for resumes, attachments, etc.)
DROP TABLE IF EXISTS file_uploads CASCADE;
CREATE TABLE file_uploads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    original_name VARCHAR(255) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    file_size BIGINT NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    related_table VARCHAR(50), -- 'career_applications', 'support_issues', etc.
    related_id UUID,
    uploaded_by VARCHAR(255), -- email or identifier
    ip_address INET,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 13. INVESTOR DOWNLOADS TABLE (track investor document downloads)
DROP TABLE IF EXISTS investor_downloads CASCADE;
CREATE TABLE investor_downloads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    document_name VARCHAR(200) NOT NULL,
    document_type VARCHAR(100) NOT NULL, -- 'pitch_deck', 'financial_model', 'business_plan', etc.
    downloader_email VARCHAR(255),
    downloader_name VARCHAR(200),
    downloader_company VARCHAR(200),
    downloader_role VARCHAR(100),
    ip_address INET,
    user_agent TEXT,
    download_count INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_contact_inquiries_email ON contact_inquiries(email);
CREATE INDEX idx_contact_inquiries_created_at ON contact_inquiries(created_at);
CREATE INDEX idx_career_applications_email ON career_applications(email);
CREATE INDEX idx_career_applications_position ON career_applications(position);
CREATE INDEX idx_support_issues_email ON support_issues(email);
CREATE INDEX idx_support_issues_status ON support_issues(status);
CREATE INDEX idx_support_issues_priority ON support_issues(priority);
CREATE INDEX idx_the100_youth_email ON the100_youth_applications(email);
CREATE INDEX idx_the100_partner_email ON the100_partner_applications(email);
CREATE INDEX idx_the100_mentor_email ON the100_mentor_applications(email);
CREATE INDEX idx_newsletter_email ON newsletter_subscriptions(email);
CREATE INDEX idx_investor_downloads_email ON investor_downloads(downloader_email);
CREATE INDEX idx_investor_downloads_document ON investor_downloads(document_type);
CREATE INDEX idx_investor_downloads_created_at ON investor_downloads(created_at);

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql' SECURITY DEFINER SET search_path = public;

CREATE TRIGGER update_contact_inquiries_updated_at BEFORE UPDATE ON contact_inquiries FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_career_applications_updated_at BEFORE UPDATE ON career_applications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_support_issues_updated_at BEFORE UPDATE ON support_issues FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_business_inquiries_updated_at BEFORE UPDATE ON business_inquiries FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_sales_inquiries_updated_at BEFORE UPDATE ON sales_inquiries FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_pricing_inquiries_updated_at BEFORE UPDATE ON pricing_inquiries FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_the100_youth_updated_at BEFORE UPDATE ON the100_youth_applications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_the100_partner_updated_at BEFORE UPDATE ON the100_partner_applications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_the100_mentor_updated_at BEFORE UPDATE ON the100_mentor_applications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_the100_contact_updated_at BEFORE UPDATE ON the100_contact_inquiries FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_investor_downloads_updated_at BEFORE UPDATE ON investor_downloads FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS) on all tables
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_issues ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE sales_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE the100_youth_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE the100_partner_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE the100_mentor_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE the100_contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE file_uploads ENABLE ROW LEVEL SECURITY;
ALTER TABLE investor_downloads ENABLE ROW LEVEL SECURITY;

-- Create policies for secure access
-- Allow insert for all users (anonymous form submissions)
CREATE POLICY "Allow insert for all users" ON contact_inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert for all users" ON career_applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert for all users" ON support_issues FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert for all users" ON business_inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert for all users" ON sales_inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert for all users" ON pricing_inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert for all users" ON the100_youth_applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert for all users" ON the100_partner_applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert for all users" ON the100_mentor_applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert for all users" ON the100_contact_inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert for all users" ON newsletter_subscriptions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert for all users" ON file_uploads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert for all users" ON investor_downloads FOR INSERT WITH CHECK (true);

-- Allow read access for admin dashboard (using service role key)
-- These policies are for when you build an admin dashboard
-- For now, data access is through Supabase dashboard or direct SQL queries

-- Add RLS policy for the view (optional - for future admin dashboard)
-- CREATE POLICY "Allow admin read access" ON recent_inquiries FOR SELECT USING (auth.role() = 'service_role');

-- Note: View uses SECURITY INVOKER to respect user permissions and RLS policies
-- This ensures the view inherits security from underlying tables

-- Create views for easier data access
-- Note: View uses standard security (not SECURITY DEFINER) for better security
-- Access is controlled through RLS policies on underlying tables
-- Force drop and recreate to ensure no SECURITY DEFINER properties
DROP VIEW IF EXISTS recent_inquiries CASCADE;
DROP VIEW IF EXISTS public.recent_inquiries CASCADE;
-- Create view WITH SECURITY INVOKER for proper security (respects user permissions)
CREATE VIEW recent_inquiries 
WITH (security_invoker=on) AS
SELECT 
    'contact' as type,
    id,
    first_name,
    last_name,
    email,
    subject,
    created_at
FROM contact_inquiries
UNION ALL
SELECT 
    'career' as type,
    id,
    first_name,
    last_name,
    email,
    position as subject,
    created_at
FROM career_applications
UNION ALL
SELECT 
    'support' as type,
    id,
    '' as first_name,
    '' as last_name,
    email,
    title as subject,
    created_at
FROM support_issues
ORDER BY created_at DESC;

-- Verify view security properties (for debugging)
-- SELECT schemaname, viewname, security_barrier, security_invoker 
-- FROM pg_views WHERE viewname = 'recent_inquiries';
-- Expected: security_invoker should be 't' (true) for proper security

-- Create function to get user's IP address
DROP FUNCTION IF EXISTS get_client_ip();
CREATE OR REPLACE FUNCTION get_client_ip()
RETURNS INET AS $$
BEGIN
    RETURN inet_client_addr();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create function to get user agent
DROP FUNCTION IF EXISTS get_user_agent();
CREATE OR REPLACE FUNCTION get_user_agent()
RETURNS TEXT AS $$
BEGIN
    RETURN current_setting('request.headers', true)::json->>'user-agent';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;
