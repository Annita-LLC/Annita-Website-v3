# 🚀 Netlify Functions Setup Guide - Production Ready

This guide explains how the secure backend is set up for **Annita Website** using **Netlify Functions** and **Supabase**.

## 📋 Overview

Your website uses a **production-grade secure architecture**:

- ✅ **Frontend**: Static Next.js site (no API keys exposed)
- ✅ **Backend**: Netlify Functions (server-side, secure)
- ✅ **Database**: Supabase (all data stored securely)
- ✅ **Security**: Rate limiting, input validation, XSS protection
- ✅ **Performance**: Fast, globally distributed via Netlify CDN

---

## 🏗️ Architecture

```
User Browser
    ↓
Frontend (Next.js Static)
    ↓ (POST request, no keys)
Netlify Function (Server-side)
    ↓ (uses SUPABASE_SERVICE_ROLE_KEY)
Supabase Database
```

**Key Point**: API keys are **NEVER** exposed to the browser. All sensitive operations happen server-side in Netlify Functions.

---

## 📁 File Structure

```
annita-websit-v3/
├── netlify/
│   └── functions/
│       ├── supabaseClient.js      ← Secure Supabase client
│       ├── submitForm.js          ← Form submission handler
│       ├── waitlist.js            ← Waitlist handler
│       ├── trackDownload.js      ← Download tracking handler
│       ├── utils/
│       │   └── validation.js      ← Validation & sanitization
│       └── package.json          ← Function dependencies
├── lib/
│   └── api/
│       └── client.ts              ← Frontend API client (no keys)
├── .env.local                    ← Local environment (not committed)
└── netlify.toml                  ← Netlify configuration
```

---

## 🔐 Environment Variables

### Local Development (`.env.local`)

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Netlify Production

1. Go to **Netlify Dashboard** → Your Site → **Site settings** → **Environment variables**
2. Add these variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = Your Supabase project URL
   - `SUPABASE_SERVICE_ROLE_KEY` = Your Supabase service role key ⚠️ **KEEP SECRET**

**Important**: 
- `NEXT_PUBLIC_SUPABASE_URL` is safe to expose (used in frontend)
- `SUPABASE_SERVICE_ROLE_KEY` is **NEVER** exposed - only used in Netlify Functions

---

## 🛠️ Local Development

### 1. Install Netlify CLI

```bash
npm install -g netlify-cli
```

### 2. Start Development Server

```bash
# Start Next.js dev server + Netlify Functions
netlify dev
```

This will:
- Start Next.js on `http://localhost:3000`
- Start Netlify Functions on `http://localhost:8888`
- Load environment variables from `.env.local`

### 3. Test Functions Locally

Functions are available at:
- `http://localhost:8888/.netlify/functions/submitForm`
- `http://localhost:8888/.netlify/functions/waitlist`
- `http://localhost:8888/.netlify/functions/trackDownload`

---

## 🌍 Production Deployment

### Step 1: Set Environment Variables in Netlify

1. Go to **Netlify Dashboard** → Your Site
2. **Site settings** → **Environment variables**
3. Add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`

### Step 2: Deploy

**Option A: Git Integration (Recommended)**
1. Push to GitHub
2. Netlify auto-deploys on push
3. Functions are automatically built and deployed

**Option B: Manual Deploy**
```bash
netlify deploy --prod
```

### Step 3: Verify

1. Test forms on your live site: `https://www.an-nita.com`
2. Check Netlify Functions logs: **Functions** tab in Netlify Dashboard
3. Verify data in Supabase: **Table Editor** in Supabase Dashboard

---

## 🔒 Security Features

### ✅ Implemented

1. **No API Keys in Frontend**
   - All Supabase operations happen server-side
   - Frontend only makes HTTP requests to Netlify Functions

2. **Input Validation**
   - Email format validation
   - Phone number validation
   - Required field checks
   - Data type validation

3. **Input Sanitization**
   - XSS attack prevention
   - HTML tag removal
   - JavaScript protocol blocking
   - Event handler removal

4. **Rate Limiting**
   - 10 requests/minute per IP (forms)
   - 5 requests/minute per IP (waitlist)
   - 20 requests/minute per IP (downloads)
   - Prevents spam and abuse

5. **Security Headers**
   - X-Content-Type-Options: nosniff
   - X-Frame-Options: DENY
   - X-XSS-Protection: 1; mode=block
   - Referrer-Policy: strict-origin-when-cross-origin

6. **Error Handling**
   - Generic error messages (no sensitive info leaked)
   - Proper HTTP status codes
   - Logging for debugging (server-side only)

---

## 📊 API Endpoints

### 1. Submit Form
- **Endpoint**: `/.netlify/functions/submitForm`
- **Method**: POST
- **Body**:
  ```json
  {
    "formType": "contact|career|support|business|sales|pricing|the100_youth|the100_partner|the100_mentor|the100_contact|download|newsletter|investor_download",
    "formData": { ... }
  }
  ```

### 2. Waitlist
- **Endpoint**: `/.netlify/functions/waitlist`
- **Method**: POST
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "business": "Company Name",
    "interest": "general"
  }
  ```

### 3. Track Download
- **Endpoint**: `/.netlify/functions/trackDownload`
- **Method**: POST
- **Body**:
  ```json
  {
    "document_name": "Pitch Deck",
    "document_type": "investor_document",
    "downloader_email": "investor@example.com",
    "downloader_name": "John Doe",
    "downloader_company": "VC Firm",
    "downloader_role": "Partner"
  }
  ```

---

## 🧪 Testing

### Test Form Submission

```bash
curl -X POST https://www.an-nita.com/.netlify/functions/submitForm \
  -H "Content-Type: application/json" \
  -d '{
    "formType": "contact",
    "formData": {
      "first_name": "John",
      "last_name": "Doe",
      "email": "john@example.com",
      "message": "Test message"
    }
  }'
```

### Test Waitlist

```bash
curl -X POST https://www.an-nita.com/.netlify/functions/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com"
  }'
```

---

## 📝 Form Types Supported

| Form Type | Supabase Table | Required Fields |
|-----------|---------------|----------------|
| `contact` | `contact_inquiries` | email, message |
| `career` | `career_applications` | email, first_name, last_name |
| `support` | `support_issues` | email, title, description |
| `business` | `business_inquiries` | email, company |
| `sales` | `sales_inquiries` | email, company |
| `pricing` | `pricing_inquiries` | email |
| `the100_youth` | `the100_youth_applications` | email, first_name, last_name |
| `the100_partner` | `the100_partner_applications` | email, company_name |
| `the100_mentor` | `the100_mentor_applications` | email, first_name, last_name |
| `the100_contact` | `the100_contact_inquiries` | email |
| `download` | `download_requests` | downloader_email |
| `newsletter` | `newsletter_subscriptions` | email |
| `investor_download` | `investor_downloads` | downloader_email, document_name |

---

## 🐛 Troubleshooting

### Functions Not Working Locally

1. **Check Netlify CLI is installed**: `netlify --version`
2. **Start with**: `netlify dev` (not `npm run dev`)
3. **Check environment variables**: Ensure `.env.local` exists

### Functions Not Working in Production

1. **Check environment variables** in Netlify Dashboard
2. **Check function logs**: Netlify Dashboard → Functions → View logs
3. **Verify Supabase connection**: Check Supabase dashboard for errors
4. **Check rate limits**: Wait 1 minute if you hit rate limit

### Common Errors

- **"Missing Supabase environment variables"**: Set env vars in Netlify Dashboard
- **"Too many requests"**: Rate limit hit, wait 60 seconds
- **"Invalid form type"**: Check formType matches supported types
- **"Invalid email format"**: Ensure email is properly formatted

---

## 🚀 Next Steps

1. ✅ **Deploy to Netlify** with environment variables set
2. ✅ **Test all forms** on production site
3. ✅ **Monitor function logs** in Netlify Dashboard
4. ✅ **Verify data** in Supabase Table Editor
5. ✅ **Set up email notifications** (optional - see below)

---

## 📧 Optional: Email Notifications

To receive email notifications when forms are submitted, you can:

1. **Use Supabase Edge Functions** (recommended)
2. **Use Netlify Functions** with email service (SendGrid, Mailgun, etc.)
3. **Use Supabase Database Webhooks** → Zapier/Make.com

---

## ✅ Security Checklist

- [x] `.env.local` in `.gitignore`
- [x] No API keys in frontend code
- [x] All sensitive operations server-side
- [x] Input validation and sanitization
- [x] Rate limiting implemented
- [x] Security headers configured
- [x] Error handling (no sensitive info leaked)
- [x] CORS properly configured
- [x] HTTPS enforced (Netlify default)

---

## 📚 Resources

- [Netlify Functions Docs](https://docs.netlify.com/functions/overview/)
- [Supabase JS Client](https://supabase.com/docs/reference/javascript/introduction)
- [Netlify Environment Variables](https://docs.netlify.com/environment-variables/overview/)

---

**Your backend is now production-ready and secure! 🎉**

