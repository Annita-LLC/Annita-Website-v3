# Deployment Guide

## Overview

This project consists of two parts:
1. **Frontend** - Next.js static site (deploy to Netlify)
2. **Backend** - Node.js/Express API (deploy separately - see options below)

## Frontend Deployment (Netlify)

### Prerequisites
- GitHub repository connected
- Netlify account

### Steps

1. **Connect Repository to Netlify**
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

2. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: `18` (set in Netlify UI or netlify.toml)

3. **Set Environment Variables**
   In Netlify Dashboard → Site settings → Environment variables, add:
   ```
   NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com
   NEXT_PUBLIC_FRONTEND_URL=https://your-netlify-site.netlify.app
   ```
   
   **Important**: Use `NEXT_PUBLIC_` prefix so the variable is available in the browser (required for static export).

4. **Deploy**
   - Netlify will automatically deploy on every push to main branch
   - Or trigger manual deploy from dashboard

### Important Notes
- The frontend is configured for **static export** (`output: 'export'` in next.config.js)
- API routes in `app/api/` are **NOT used** - they won't work with static export
- The frontend makes **direct API calls** to your backend server

## Backend Deployment (DigitalOcean)

The backend **MUST be deployed separately** as Netlify only hosts static sites and serverless functions.

### DigitalOcean App Platform (Recommended)

We use DigitalOcean App Platform for both the backend API and PostgreSQL database.

See detailed deployment instructions in: [`backend/DIGITALOCEAN_DEPLOYMENT.md`](./backend/DIGITALOCEAN_DEPLOYMENT.md)

**Quick Setup:**

1. Go to [DigitalOcean Dashboard](https://cloud.digitalocean.com)
2. Create a PostgreSQL database cluster
3. Create an App Platform app
4. Connect your GitHub repository
5. Set root directory to `backend`
6. Configure environment variables (see DigitalOcean deployment guide)

**Required Environment Variables:**
```
NODE_ENV=production
PORT=3001
DB_HOST=<your-do-db-host>
DB_PORT=25060
DB_NAME=defaultdb
DB_USER=doadmin
DB_PASSWORD=<your-db-password>
DB_SSL=true
FRONTEND_URL=https://your-frontend-url.com
RESEND_API_KEY=<your-resend-api-key>
RESEND_FROM_EMAIL=noreply@yourdomain.com
RESEND_TO_EMAIL=admin@yourdomain.com
```

## Database Setup

The PostgreSQL database is hosted on **DigitalOcean Managed Databases**.

- Managed PostgreSQL 15+ cluster
- SSL connections required
- Automatic backups
- High availability options

See [`backend/DIGITALOCEAN_DEPLOYMENT.md`](./backend/DIGITALOCEAN_DEPLOYMENT.md) for complete setup instructions.

## Post-Deployment Checklist

### Frontend (Netlify)
- [ ] Site is accessible
- [ ] Environment variables set
- [ ] `BACKEND_URL` points to your deployed backend
- [ ] Forms can submit (check browser console for errors)

### Backend
- [ ] Server is running and accessible
- [ ] Database connection works
- [ ] CORS allows requests from frontend domain
- [ ] Environment variables configured
- [ ] Health check endpoint works: `GET /health`

### Testing
- [ ] Submit a contact form
- [ ] Add to waitlist
- [ ] Track a download
- [ ] Check database for new records

## Troubleshooting

### Frontend can't connect to backend
- Check `BACKEND_URL` environment variable in Netlify
- Verify backend is running and accessible
- Check CORS settings in backend (should allow frontend domain)
- Check browser console for CORS errors

### Backend connection errors
- Verify database credentials
- Check database is accessible from backend hosting
- Review backend logs for connection errors
- Test database connection locally first

### Forms not submitting
- Check browser console for errors
- Verify `BACKEND_URL` is set correctly
- Check backend logs for incoming requests
- Ensure backend CORS allows frontend domain

## Environment Variables Summary

### Frontend (Netlify)
```
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com
NEXT_PUBLIC_FRONTEND_URL=https://your-site.netlify.app
```

**Note**: The `NEXT_PUBLIC_` prefix is required for environment variables to be available in the browser with static export.

### Backend (DigitalOcean)
```
NODE_ENV=production
PORT=3001
DB_HOST=your-do-db-host.db.ondigitalocean.com
DB_PORT=25060
DB_NAME=defaultdb
DB_USER=doadmin
DB_PASSWORD=your_password
DB_SSL=true
FRONTEND_URL=https://your-site.netlify.app
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=noreply@yourdomain.com
RESEND_TO_EMAIL=admin@yourdomain.com
APP_NAME=Annita
```

---

**Note**: The backend and frontend are separate deployments. Make sure both are deployed and configured correctly for the website to function.

