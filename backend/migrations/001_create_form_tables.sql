-- Migration: Create Form Submission Tables
-- Run this migration to create all tables needed for form submissions

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
    CREATE TYPE business_size AS ENUM ('1-10', '11-50', '51-200', '201-500', '500+');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE experience_level AS ENUM ('entry', 'mid', 'senior', 'lead', 'executive');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE document_type AS ENUM ('pitch_deck', 'financial_model', 'business_plan', 'executive_summary', 'market_analysis', 'other');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 1. CONTACT INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS contact_inquiries (
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
CREATE TABLE IF NOT EXISTS career_applications (
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
    resume_url VARCHAR(500),
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
CREATE TABLE IF NOT EXISTS support_issues (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    issue_category issue_type NOT NULL,
    priority priority_level DEFAULT 'medium',
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    steps_to_reproduce TEXT,
    expected_behavior TEXT,
    actual_behavior TEXT,
    browser VARCHAR(100),
    device VARCHAR(100),
    email VARCHAR(255) NOT NULL,
    attachments TEXT[], -- Array of file URLs
    ip_address INET,
    user_agent TEXT,
    status VARCHAR(50) DEFAULT 'open',
    assigned_to VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. BUSINESS INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS business_inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(200),
    phone VARCHAR(20),
    business_type VARCHAR(100),
    revenue_range VARCHAR(50),
    message TEXT,
    selected_model VARCHAR(100),
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. SALES INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS sales_inquiries (
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
CREATE TABLE IF NOT EXISTS pricing_inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(200),
    phone VARCHAR(20),
    selected_plan VARCHAR(100),
    billing_cycle VARCHAR(50),
    message TEXT,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. THE 100 YOUTH APPLICATIONS TABLE
CREATE TABLE IF NOT EXISTS the100_youth_applications (
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
    availability TEXT,
    references_info TEXT,
    ip_address INET,
    user_agent TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. THE 100 PARTNER APPLICATIONS TABLE
CREATE TABLE IF NOT EXISTS the100_partner_applications (
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
CREATE TABLE IF NOT EXISTS the100_mentor_applications (
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
CREATE TABLE IF NOT EXISTS the100_contact_inquiries (
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
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    platform VARCHAR(50),
    ip_address INET,
    user_agent TEXT,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    unsubscribed_at TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT true
);

-- 12. INVESTOR DOWNLOADS TABLE
CREATE TABLE IF NOT EXISTS investor_downloads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    document_name VARCHAR(200) NOT NULL,
    document_type document_type NOT NULL,
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

-- 13. WAITLIST TABLE
CREATE TABLE IF NOT EXISTS waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20),
    business VARCHAR(200),
    interest VARCHAR(100) DEFAULT 'general',
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_email ON contact_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at ON contact_inquiries(created_at);
CREATE INDEX IF NOT EXISTS idx_career_applications_email ON career_applications(email);
CREATE INDEX IF NOT EXISTS idx_career_applications_created_at ON career_applications(created_at);
CREATE INDEX IF NOT EXISTS idx_support_issues_email ON support_issues(email);
CREATE INDEX IF NOT EXISTS idx_support_issues_status ON support_issues(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_active ON newsletter_subscriptions(is_active);
CREATE INDEX IF NOT EXISTS idx_investor_downloads_email ON investor_downloads(downloader_email);
CREATE INDEX IF NOT EXISTS idx_investor_downloads_type ON investor_downloads(document_type);
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);

-- Add comments for documentation
COMMENT ON TABLE contact_inquiries IS 'Stores contact form submissions';
COMMENT ON TABLE career_applications IS 'Stores job application submissions';
COMMENT ON TABLE support_issues IS 'Stores support ticket submissions';
COMMENT ON TABLE business_inquiries IS 'Stores business inquiry submissions';
COMMENT ON TABLE sales_inquiries IS 'Stores sales inquiry submissions';
COMMENT ON TABLE pricing_inquiries IS 'Stores pricing inquiry submissions';
COMMENT ON TABLE the100_youth_applications IS 'Stores The 100 Youth program applications';
COMMENT ON TABLE the100_partner_applications IS 'Stores The 100 Partner program applications';
COMMENT ON TABLE the100_mentor_applications IS 'Stores The 100 Mentor program applications';
COMMENT ON TABLE the100_contact_inquiries IS 'Stores The 100 contact form submissions';
COMMENT ON TABLE newsletter_subscriptions IS 'Stores newsletter subscription data';
COMMENT ON TABLE investor_downloads IS 'Tracks investor document downloads';
COMMENT ON TABLE waitlist IS 'Stores waitlist signups';

