-- Simple script to create waitlist table in Supabase
-- Copy and paste this entire script into Supabase SQL Editor and run it

-- Step 1: Create the waitlist table
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

-- Step 2: Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Step 3: Create policy to allow insertions
CREATE POLICY "Allow insert for all users" ON waitlist FOR INSERT WITH CHECK (true);

-- Step 4: Create indexes
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);

-- Step 5: Test the table (this should return empty result, not an error)
SELECT 'Waitlist table created successfully!' as status;
SELECT COUNT(*) as total_records FROM waitlist;
