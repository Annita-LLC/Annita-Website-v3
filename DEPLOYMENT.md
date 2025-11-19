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

## Backend Deployment Options

The backend **MUST be deployed separately** as Netlify only hosts static sites and serverless functions.

### Option 1: Railway (Recommended - Easy)

1. Go to [Railway.app](https://railway.app)
2. Create new project → Deploy from GitHub
3. Select your repository
4. Set root directory to `backend`
5. Add environment variables:
   ```
   DB_HOST=your_db_host
   DB_PORT=5432
   DB_NAME=annita_db
   DB_USER=postgres
   DB_PASSWORD=your_password
   PORT=3001
   NODE_ENV=production
   FRONTEND_URL=https://your-netlify-site.netlify.app
   ```
6. Railway will auto-deploy and provide a URL like `https://your-app.railway.app`

### Option 2: Render

1. Go to [Render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Node
5. Add environment variables (same as Railway)
6. Render provides URL like `https://your-app.onrender.com`

### Option 3: Heroku

1. Install Heroku CLI
2. Create `Procfile` in `backend/`:
   ```
   web: node server.js
   ```
3. Deploy:
   ```bash
   cd backend
   heroku create your-app-name
   heroku config:set DB_HOST=... DB_PASSWORD=... (etc)
   git subtree push --prefix backend heroku main
   ```

### Option 4: DigitalOcean App Platform / AWS / Google Cloud

Similar process - deploy the `backend` folder as a Node.js application.

## Database Setup

Your PostgreSQL database can be:
- **Railway** (includes PostgreSQL)
- **Render** (includes PostgreSQL)
- **Supabase** (PostgreSQL as a service)
- **AWS RDS** / **Google Cloud SQL**
- **Self-hosted PostgreSQL**

Make sure your database is accessible from your backend hosting provider.

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

### Backend (Railway/Render/etc)
```
DB_HOST=your_db_host
DB_PORT=5432
DB_NAME=annita_db
DB_USER=postgres
DB_PASSWORD=your_password
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://your-site.netlify.app
```

---

**Note**: The backend and frontend are separate deployments. Make sure both are deployed and configured correctly for the website to function.

