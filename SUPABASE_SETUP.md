# 🔐 Supabase Database Integration Setup Guide

## 📋 Overview

This guide will help you set up Supabase as your backend database for the Annita website. All form submissions and user data will be securely stored in Supabase instead of being lost or exposed publicly.

## 🚀 Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up/Login to your account
3. Click "New Project"
4. Choose your organization
5. Enter project details:
   - **Name**: `annita-website-db`
   - **Database Password**: Generate a strong password
   - **Region**: Choose closest to your users (e.g., `us-east-1` for US)
6. Click "Create new project"
7. Wait for the project to be set up (2-3 minutes)

## 🗄️ Step 2: Set Up Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the entire content from `database-schema.sql`
3. Paste it into the SQL editor
4. Click **Run** to execute the schema
5. Verify all tables are created in **Table Editor**

## 🔑 Step 3: Get API Keys

1. In Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (e.g., `https://your-project-id.supabase.co`)
   - **anon public** key
   - **service_role** key (keep this secret!)

## ⚙️ Step 4: Configure Environment Variables

1. Create a `.env.local` file in your project root
2. Add the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Example:
# NEXT_PUBLIC_SUPABASE_URL=https://abc123.supabase.co
# NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
# SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 📦 Step 5: Install Dependencies

```bash
npm install @supabase/supabase-js
```

## 🛡️ Step 6: Set Up Storage Bucket

1. In Supabase dashboard, go to **Storage**
2. Create a new bucket called `files`
3. Set it to **Private** for security
4. Configure RLS policies for file uploads

## 🔒 Step 7: Configure Row Level Security (RLS)

The database schema already includes RLS policies, but you may want to customize them:

1. Go to **Authentication** → **Policies**
2. Review and adjust policies as needed
3. For admin access, create admin roles and policies

## 📊 Step 8: Test the Integration

1. Start your development server: `npm run dev`
2. Test form submissions on various pages
3. Check Supabase dashboard to see data being stored
4. Verify file uploads work correctly

## 🎯 Step 9: Update Forms (Next Steps)

Now you need to update each form to use the new database integration. Here's what needs to be changed:

### Forms to Update:

1. **Contact Us** (`/contact-us`)
2. **Contact Sales** (`/contact-sales`)
3. **Career Applications** (`/careers`, `/careers/apply`)
4. **Support Issues** (`/support/report-issues`)
5. **Business Inquiries** (`/business-model`)
6. **Pricing Inquiries** (`/pricing`)
7. **The 100 Applications** (`/the100`)
8. **Download/Newsletter** (`/download`)

### Example Form Update:

```typescript
// Before (local state only)
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  await new Promise(resolve => setTimeout(resolve, 2000))
  setIsSubmitting(false)
  setIsSubmitted(true)
}

// After (with database integration)
import { useFormSubmission, formValidations } from '@/lib/hooks/useFormSubmission'

const { submitForm, isSubmitting, isSubmitted, error, success } = useFormSubmission({
  validateForm: formValidations.contact,
  onSuccess: (data) => {
    console.log('Form submitted successfully:', data)
  },
  onError: (error) => {
    console.error('Form submission failed:', error)
  }
})

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  await submitForm('contact', formData)
}
```

## 🔍 Step 10: Monitor and Admin

### View Data in Supabase:
- **Table Editor**: View all form submissions
- **SQL Editor**: Run custom queries
- **Logs**: Monitor API calls and errors

### Create Admin Dashboard (Optional):
- Build a simple admin interface to view submissions
- Use the `recent_inquiries` view for overview
- Implement authentication for admin access

## 🚨 Security Considerations

1. **Never expose service_role key** in client-side code
2. **Use RLS policies** to control data access
3. **Validate all inputs** on both client and server
4. **Sanitize data** before storing
5. **Monitor for suspicious activity**
6. **Regular backups** of your database

## 📈 Performance Optimization

1. **Indexes**: Already created for common queries
2. **Connection pooling**: Supabase handles this automatically
3. **Caching**: Consider implementing Redis for frequently accessed data
4. **File optimization**: Compress images before upload

## 🆘 Troubleshooting

### Common Issues:

1. **"Invalid API key"**: Check your environment variables
2. **"Table doesn't exist"**: Run the database schema again
3. **"RLS policy violation"**: Check your RLS policies
4. **"File upload failed"**: Verify storage bucket configuration

### Debug Steps:

1. Check browser console for errors
2. Check Supabase logs in dashboard
3. Verify API routes are working
4. Test database connection

## 📞 Support

- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **Discord Community**: [discord.gg/supabase](https://discord.gg/supabase)
- **GitHub Issues**: For code-specific problems

## ✅ Checklist

- [ ] Supabase project created
- [ ] Database schema executed
- [ ] Environment variables configured
- [ ] Dependencies installed
- [ ] Storage bucket created
- [ ] RLS policies configured
- [ ] Forms updated to use database
- [ ] Testing completed
- [ ] Admin access configured (optional)
- [ ] Monitoring set up

---

**Next Steps**: Once this setup is complete, you'll need to update each form component to use the new database integration. The files are ready - just need to replace the local state management with the database service calls.
