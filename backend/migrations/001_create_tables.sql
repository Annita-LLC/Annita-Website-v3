-- Migration: Create Essential Form Submission Tables
-- For DigitalOcean PostgreSQL deployment
-- This migration creates only the tables actually used by the frontend

-- Create custom types
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
    CREATE TYPE experience_level AS ENUM ('entry', 'mid', 'senior', 'lead', 'executive');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 1. CONTACT INQUIRIES TABLE
-- Used for: contact, cookie, privacy, legal forms
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
    inquiry_category inquiry_type NOT NULL DEFAULT 'general',
    urgency urgency_level DEFAULT 'normal',
    preferred_contact contact_method DEFAULT 'email',
    newsletter_opt_in BOOLEAN DEFAULT false,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contact_inquiries_email ON contact_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at ON contact_inquiries(created_at);

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

CREATE INDEX IF NOT EXISTS idx_career_applications_email ON career_applications(email);
CREATE INDEX IF NOT EXISTS idx_career_applications_created_at ON career_applications(created_at);

-- 3. BUSINESS INQUIRIES TABLE
-- Used for: solution forms
CREATE TABLE IF NOT EXISTS business_inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(200),
    phone VARCHAR(20),
    business_type VARCHAR(200),
    revenue_range VARCHAR(100),
    message TEXT,
    selected_model VARCHAR(200),
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_business_inquiries_email ON business_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_business_inquiries_created_at ON business_inquiries(created_at);

-- 4. SALES INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS sales_inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(200),
    phone VARCHAR(20),
    company_size VARCHAR(50),
    industry VARCHAR(100),
    goals TEXT,
    timeline VARCHAR(100),
    budget VARCHAR(100),
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_sales_inquiries_email ON sales_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_sales_inquiries_created_at ON sales_inquiries(created_at);

-- 5. WAITLIST TABLE
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

CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);

-- Add comments
COMMENT ON TABLE contact_inquiries IS 'Stores contact form submissions (contact, cookie, privacy, legal forms)';
COMMENT ON TABLE career_applications IS 'Stores job application submissions';
COMMENT ON TABLE business_inquiries IS 'Stores business/solution inquiry submissions';
COMMENT ON TABLE sales_inquiries IS 'Stores sales inquiry submissions';
COMMENT ON TABLE waitlist IS 'Stores waitlist signups';

