# Annita Website v3 - Project Structure

## 📁 Project Organization

This project is organized into two main directories:

### 🎨 Frontend (`/Frontend`)
All frontend code, components, pages, and configuration files.

**Contents:**
- `app/` - Next.js app directory (pages, layouts, routes)
- `components/` - React components
- `lib/` - Frontend utilities and hooks
- `public/` - Static assets (images, documents, etc.)
- `types/` - TypeScript type definitions
- Configuration files: `next.config.js`, `tailwind.config.js`, `tsconfig.json`, `package.json`

### ⚙️ Backend (`/backend`)
All backend code, Netlify Functions, and database schemas.

**Contents:**
- `netlify/` - Netlify Functions (serverless functions)
- `netlify.toml` - Netlify deployment configuration
- SQL migration files
- Backend documentation

---

## 🚀 Quick Start

### Frontend Development

```bash
cd Frontend
npm install
npm run dev
```

### Backend Development

The backend uses Netlify Functions. To test locally:

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# From project root
netlify dev
```

This will start:
- Frontend on `http://localhost:3000`
- Netlify Functions on `http://localhost:8888`

---

## 📚 Documentation

### Frontend Documentation
- `Frontend/README.md` - Frontend setup and development guide
- `Frontend/DEPLOYMENT.md` - Frontend deployment guide
- `Frontend/QUICK_START.md` - Quick start guide
- `Frontend/FORMS_UPDATE_SUMMARY.md` - Forms implementation summary

### Backend Documentation
- `backend/NETLIFY_FUNCTIONS_SETUP.md` - Complete backend setup guide
- `backend/BACKEND_ARCHITECTURE.md` - Backend architecture overview
- `backend/DEPLOYMENT_CHECKLIST.md` - Deployment checklist
- `backend/SUPABASE_SETUP.md` - Supabase database setup

---

## 🔐 Environment Variables

Create a `.env.local` file in the `Frontend` directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

**For Netlify Deployment:**
Set these in Netlify Dashboard → Site settings → Environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

---

## 🏗️ Architecture

```
Frontend (Next.js Static Site)
    ↓ HTTP Requests
Netlify Functions (Server-side)
    ↓ Secure API Calls
Supabase Database
```

**Key Points:**
- ✅ No API keys in frontend code
- ✅ All sensitive operations server-side
- ✅ Rate limiting and security built-in
- ✅ Production-ready and scalable

---

## 📦 Tech Stack

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form

### Backend
- Netlify Functions (Serverless)
- Supabase (PostgreSQL)
- Node.js

---

## 🚀 Deployment

### Netlify Deployment

1. **Connect Repository** to Netlify
2. **Set Build Command**: `cd Frontend && npm run build`
3. **Set Publish Directory**: `Frontend/.next`
4. **Set Functions Directory**: `backend/netlify/functions`
5. **Add Environment Variables** in Netlify Dashboard

### Environment Variables Required

- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

---

## 📝 Project Structure

```
annita-websit-v3/
├── Frontend/              # Frontend code
│   ├── app/              # Next.js pages
│   ├── components/       # React components
│   ├── lib/             # Utilities & hooks
│   ├── public/          # Static assets
│   ├── types/           # TypeScript types
│   └── package.json     # Frontend dependencies
│
├── backend/             # Backend code
│   ├── netlify/         # Netlify Functions
│   │   └── functions/   # Serverless functions
│   ├── netlify.toml     # Netlify config
│   └── *.sql           # Database migrations
│
└── README.md           # This file
```

---

## 🔒 Security

- ✅ No API keys in frontend
- ✅ All sensitive operations server-side
- ✅ Rate limiting (10 req/min)
- ✅ Input validation & sanitization
- ✅ XSS protection
- ✅ Security headers configured

---

## 📞 Support

For questions or issues, refer to the documentation in each directory or contact the development team.

---

**Built with ❤️ for Annita**

