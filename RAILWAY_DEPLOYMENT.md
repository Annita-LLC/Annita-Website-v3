# Railway Deployment Guide

## Step 1: Prepare Backend for Railway

### Create Procfile (if needed)
Railway auto-detects Node.js, but you can create a `Procfile` in `backend/` for explicit control:

```
web: node server.js
```

### Update package.json start script
Make sure `backend/package.json` has:
```json
"scripts": {
  "start": "node server.js"
}
```

## Step 2: Sign Up and Connect GitHub

1. Go to https://railway.app
2. Click "Start a New Project"
3. Sign up with GitHub
4. Authorize Railway to access your repositories

## Step 3: Create New Project

1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose your repository: `Annita-Website-v3`
4. Railway will detect it's a Node.js project

## Step 4: Configure Service

1. Railway will create a service automatically
2. Click on the service
3. Go to "Settings" tab
4. Set **Root Directory** to: `backend`
5. Railway will auto-detect Node.js and install dependencies

## Step 5: Add PostgreSQL Database

1. In your project dashboard, click "+ New"
2. Select "Database" → "Add PostgreSQL"
3. Railway will create a PostgreSQL database
4. Note the connection details (auto-populated in environment variables)

## Step 6: Set Environment Variables

### Option A: Using Railway's Service References (Recommended)

1. Go to your backend service → "Variables" tab
2. Click "New Variable"
3. For each variable, use Railway's service reference syntax:

**Important**: Replace `Postgres` with your actual PostgreSQL service name (Railway shows this in your project).

```
DB_HOST=${{Postgres.PGHOST}}
DB_PORT=${{Postgres.PGPORT}}
DB_NAME=${{Postgres.PGDATABASE}}
DB_USER=${{Postgres.PGUSER}}
DB_PASSWORD=${{Postgres.PGPASSWORD}}
```

**Important**: When using service references (`${{Postgres.*}}`), Railway automatically uses the **private network** (no egress fees) since both services are in the same project.

**How to find your service name:**
- Look at your PostgreSQL service in Railway dashboard
- The service name appears at the top (usually "Postgres" or "postgres")
- Use that exact name in the `${{ServiceName.Variable}}` syntax

### Option B: Manual Values (If service reference doesn't work)

**⚠️ Important**: Use **PRIVATE** endpoint to avoid egress fees!

1. Go to your PostgreSQL service → "Variables" tab
2. Look for **private** connection variables:
   - `PGHOST` - Use the **private** one (not `DATABASE_PUBLIC_URL`)
   - `PGPORT`
   - `PGDATABASE`
   - `PGUSER`
   - `PGPASSWORD`
3. Go to your backend service → "Variables" tab
4. Add them manually:

```
DB_HOST=<paste PRIVATE PGHOST value - NOT the public URL>
DB_PORT=<paste PGPORT value>
DB_NAME=<paste PGDATABASE value>
DB_USER=<paste PGUSER value>
DB_PASSWORD=<paste PGPASSWORD value>
```

**Note**: If you see `DATABASE_PUBLIC_URL` or `RAILWAY_TCP_PROXY_DOMAIN`, **don't use those** - they incur egress fees. Use the private `PGHOST` instead.

### Required Variables (Add these too):

```
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://your-netlify-site.netlify.app
```

**Note**: Railway automatically provides database connection variables. The `${{ServiceName.Variable}}` syntax references variables from other services in your project.

## Step 7: Run Migration

### Option A: Using Railway CLI

1. Install Railway CLI:
   ```bash
   npm i -g @railway/cli
   ```

2. Login:
   ```bash
   railway login
   ```

3. Link project:
   ```bash
   railway link
   ```

4. Run migration:
   ```bash
   cd backend
   railway run npm run migrate
   ```

### Option B: Using Railway Dashboard

1. Go to your service
2. Click "Deployments" tab
3. Click on latest deployment
4. Open "Shell" tab
5. Run:
   ```bash
   cd backend
   npm run migrate
   ```

## Step 8: Get Your Backend URL

1. Go to your service dashboard
2. Click "Settings" → "Networking"
3. Click "Generate Domain"
4. Copy the URL (e.g., `https://your-app.up.railway.app`)
5. This is your `BACKEND_URL`

## Step 9: Update Frontend Environment Variable

In Netlify (or your frontend hosting):

1. Go to Site Settings → Environment Variables
2. Add/Update:
   ```
   NEXT_PUBLIC_BACKEND_URL=https://your-app.up.railway.app
   ```
3. Redeploy frontend

## Step 10: Configure CORS in Backend

Update `backend/server.js` to allow your frontend domain:

```javascript
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'https://your-netlify-site.netlify.app',
  credentials: true,
  optionsSuccessStatus: 200
};
```

Redeploy backend after this change.

## Step 11: Verify Deployment

1. Check backend health: `https://your-app.up.railway.app/health`
2. Should return: `{"status":"ok","timestamp":"..."}`
3. Test form submission from frontend
4. Check Railway logs for any errors

## Troubleshooting

### Build Fails
- Check Root Directory is set to `backend`
- Verify `package.json` exists in `backend/`
- Check build logs in Railway dashboard

### Database Connection Errors
- Verify environment variables are set correctly
- Check database is provisioned and running
- Ensure using `${{Postgres.*}}` syntax for database vars

### CORS Errors
- Verify `FRONTEND_URL` matches your actual frontend domain
- Check backend logs for CORS errors
- Ensure frontend uses correct `NEXT_PUBLIC_BACKEND_URL`

### Migration Fails
- Run migration via Railway CLI or Shell
- Check database credentials are correct
- Verify migration file exists in `backend/migrations/`

## Railway Dashboard Features

- **Logs**: Real-time logs in dashboard
- **Metrics**: CPU, Memory usage
- **Deployments**: View deployment history
- **Variables**: Manage environment variables
- **Settings**: Configure service settings

## Auto-Deploy

Railway auto-deploys on every push to your main branch. No manual deployment needed after initial setup.

## Custom Domain (Optional)

1. Go to Settings → Networking
2. Click "Custom Domain"
3. Add your domain
4. Configure DNS as instructed
5. Railway provides free SSL

