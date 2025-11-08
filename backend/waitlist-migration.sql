-- Waitlist Table Migration for Supabase
-- Run this in your Supabase SQL Editor

-- 1. Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20),
    business VARCHAR(200),
    interest VARCHAR(50) DEFAULT 'general',
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);

-- 3. Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS policy to allow anonymous insertions
CREATE POLICY "Allow insert for all users" ON waitlist FOR INSERT WITH CHECK (true);

-- 5. Verify the table was created
SELECT * FROM waitlist LIMIT 1;
