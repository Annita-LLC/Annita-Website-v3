# DigitalOcean Deployment Guide

This guide covers deploying the Annita backend API and PostgreSQL database to DigitalOcean App Platform, with Resend email integration.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Resend Email Setup](#resend-email-setup)
- [Option 1: Deploy via DigitalOcean Dashboard (Recommended)](#option-1-deploy-via-digitalocean-dashboard-recommended)
- [Option 2: Deploy via DigitalOcean CLI (doctl)](#option-2-deploy-via-digitalocean-cli-doctl)
- [Database Setup](#database-setup)
- [Environment Variables](#environment-variables)
- [Running Migrations](#running-migrations)
- [Monitoring and Logs](#monitoring-and-logs)
- [Troubleshooting](#troubleshooting)

## Prerequisites

1. **DigitalOcean Account**: Sign up at [digitalocean.com](https://www.digitalocean.com)
2. **GitHub Repository**: Your code should be in a GitHub repository
3. **Resend Account**: Sign up at [resend.com](https://resend.com) for email service
4. **DigitalOcean CLI (Optional)**: Install `doctl` if using CLI deployment
   ```bash
   # macOS
   brew install doctl
   
   # Windows (using Chocolatey)
   choco install doctl
   
   # Or download from: https://github.com/digitalocean/doctl/releases
   ```

## Resend Email Setup

### Step 1: Create Resend Account
1. Go to [resend.com](https://resend.com) and sign up
2. Verify your email address

### Step 2: Add and Verify Domain (Recommended)
1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Add your domain (e.g., `yourdomain.com`)
4. Add the DNS records Resend provides to your domain's DNS settings
5. Wait for verification (usually a few minutes)

**Alternative**: You can use Resend's test domain (`onboarding.resend.dev`) for testing, but it's not recommended for production.

### Step 3: Create API Key
1. Go to **API Keys** in Resend dashboard
2. Click **Create API Key**
3. Give it a name (e.g., "Annita Production")
4. Copy the API key (you'll only see it once!)
5. Save it securely - you'll need it for environment variables

**Important**: Keep your API key secure. Never commit it to version control.

## Option 1: Deploy via DigitalOcean Dashboard (Recommended)

### Step 1: Create Database

1. Go to [DigitalOcean Dashboard](https://cloud.digitalocean.com)
2. Navigate to **Databases** → **Create Database Cluster**
3. Choose:
   - **Database Engine**: PostgreSQL
   - **Version**: 15 (or latest stable)
   - **Datacenter Region**: Choose closest to your users
   - **Plan**: Basic or Professional (start with Basic if testing)
   - **Database Name**: `annita_db` (or your preferred name)
4. Click **Create Database Cluster**
5. Wait for database to be created (takes a few minutes)

### Step 2: Get Database Connection Details

1. Once created, click on your database cluster
2. Go to **Connection Details** tab
3. Copy the connection details:
   - **Host**: `your-db-host.db.ondigitalocean.com`
   - **Port**: Usually `25060` (for managed databases)
   - **Database**: `defaultdb` (or your custom name)
   - **Username**: `doadmin`
   - **Password**: Click **Show** to reveal (save this securely!)

**Important**: DigitalOcean managed databases use SSL by default. The backend is configured to handle this.

### Step 3: Create App Platform Application

1. Go to **App Platform** → **Create App**
2. **Connect Repository**:
   - Connect your GitHub account if not already connected
   - Select your repository
   - Choose the branch (usually `main` or `master`)
   - Click **Next**

3. **Configure App**:
   - **Root Directory**: Set to `backend`
   - **Build Command**: `npm install`
   - **Run Command**: `npm start`
   - **Environment**: Node.js
   - Click **Next**

4. **Configure Resources**:
   - **Plan**: Basic ($5/month) is fine for starting
   - **Instance Size**: Basic (512MB RAM) - can upgrade later
   - **Instance Count**: 1 (can scale horizontally later)
   - Click **Next**

5. **Environment Variables**:
   Add the following environment variables:

   ```
   NODE_ENV=production
   PORT=3001
   DB_HOST=<your-db-host.db.ondigitalocean.com>
   DB_PORT=25060
   DB_NAME=defaultdb
   DB_USER=doadmin
   DB_PASSWORD=<your-database-password>
   DB_SSL=true
   FRONTEND_URL=https://your-frontend-url.com
   RUN_MIGRATIONS=false
   RESEND_API_KEY=<your-resend-api-key>
   RESEND_FROM_EMAIL=noreply@yourdomain.com
   RESEND_TO_EMAIL=admin@yourdomain.com
   APP_NAME=Annita
   ```

   **Important**: 
   - Replace `<your-db-host>` and `<your-database-password>` with actual values
   - Replace `<your-resend-api-key>` with your Resend API key
   - Replace `noreply@yourdomain.com` with your verified domain email
   - Replace `admin@yourdomain.com` with your admin email
   - Replace `https://your-frontend-url.com` with your actual frontend URL
   - Mark `DB_PASSWORD` and `RESEND_API_KEY` as **Encrypted** (click the lock icon)
   - If you have multiple frontend URLs, separate with commas: `https://example.com,https://www.example.com`

6. **Review and Launch**:
   - Review your configuration
   - Click **Create Resources** or **Launch App**

### Step 4: Link Database to App (Recommended)

1. In your App Platform app, go to **Settings** → **Components**
2. Click **Add Component** → **Database**
3. Select your existing database cluster
4. This automatically creates environment variables for database connection

**Note**: If you link the database, you may need to adjust the environment variable names to match what DigitalOcean provides (usually `DATABASE_URL` or prefixed variables).

## Option 2: Deploy via DigitalOcean CLI (doctl)

### Step 1: Authenticate

```bash
doctl auth init
```

Follow the prompts to authenticate with your DigitalOcean account.

### Step 2: Create Database (if not using dashboard)

```bash
# Create database cluster
doctl databases create annita-db \
  --engine pg \
  --version 15 \
  --region nyc1 \
  --size db-s-dev-database
```

### Step 3: Create App from YAML

1. Update `backend/.do/app.yaml` with your repository details
2. Update environment variables in the YAML file (including Resend credentials)
3. Deploy:

```bash
cd backend
doctl apps create --spec .do/app.yaml
```

### Step 4: Link Database

```bash
# Get your app ID
doctl apps list

# Get your database ID
doctl databases list

# Link database to app
doctl apps update <app-id> --spec .do/app.yaml
```

## Database Setup

### Running Migrations

DigitalOcean App Platform runs your app in a container. To run migrations:

#### Option A: Run Migrations Manually via Console

1. Go to your App Platform app
2. Navigate to **Settings** → **Console**
3. Run:
   ```bash
   npm run migrate
   ```

#### Option B: Use DigitalOcean Run Command (One-Time)

1. Go to your App Platform app
2. Navigate to **Settings** → **Run Command**
3. Set command to: `npm run migrate`
4. Click **Run**

#### Option C: Enable Auto-Migration (Use with Caution)

1. Set environment variable: `RUN_MIGRATIONS=true`
2. The server will run migrations on startup
3. **Important**: Set back to `false` after first deployment to prevent re-running migrations

#### Option D: Use Local Connection (For Development)

1. Set up a local tunnel to your DigitalOcean database:
   ```bash
   doctl databases connection <database-id> --format ConnectionString
   ```
2. Update local `.env` with the connection details
3. Run: `npm run migrate`

### Database Connection String

If you prefer using a connection string instead of individual variables:

1. Get connection string from DigitalOcean database dashboard
2. Set environment variable: `DATABASE_URL=postgresql://user:password@host:port/database?sslmode=require`
3. Update `backend/config/database.js` to parse `DATABASE_URL` if present

## Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `PORT` | Server port | `3001` |
| `DB_HOST` | Database hostname | `your-db.db.ondigitalocean.com` |
| `DB_PORT` | Database port | `25060` |
| `DB_NAME` | Database name | `defaultdb` |
| `DB_USER` | Database username | `doadmin` |
| `DB_PASSWORD` | Database password | (encrypted in DO) |
| `DB_SSL` | Enable SSL connection | `true` |
| `FRONTEND_URL` | Allowed CORS origins | `https://your-site.com` |
| `RESEND_API_KEY` | Resend API key | `re_...` (encrypted) |
| `RESEND_FROM_EMAIL` | Email sender address | `noreply@yourdomain.com` |
| `RESEND_TO_EMAIL` | Admin notification email | `admin@yourdomain.com` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `RUN_MIGRATIONS` | Run migrations on startup | `false` |
| `APP_NAME` | Application name (used in emails) | `Annita` |

## Email Configuration

### Email Features

The backend sends emails via Resend for:

1. **Admin Notifications**: Sent to `RESEND_TO_EMAIL` when:
   - Forms are submitted (contact, career, support, etc.)
   - Users join the waitlist
   - Downloads are tracked

2. **User Confirmations**: Sent to form submitters when:
   - They submit contact forms
   - They join the waitlist
   - They submit applications

### Testing Emails

1. Use Resend's test domain (`onboarding.resend.dev`) for development
2. Check Resend dashboard → **Logs** to see sent emails
3. In production, ensure your domain is verified in Resend

### Email Failure Handling

Email sending is **non-blocking**. If Resend fails:
- Form submissions still succeed and are saved to database
- Errors are logged to console
- Users receive success responses even if email fails

## Monitoring and Logs

### View Logs

1. **Via Dashboard**:
   - Go to your App Platform app
   - Click **Runtime Logs** tab
   - Filter by component, time, or search

2. **Via CLI**:
   ```bash
   doctl apps logs <app-id>
   ```

### Health Checks

The app includes a health check endpoint at `/health` that:
- Returns server status
- Tests database connectivity
- Shows environment information

DigitalOcean App Platform can be configured to use this for health checks:
- In app settings, set health check path to `/health`

### Metrics

DigitalOcean provides built-in metrics:
- CPU usage
- Memory usage
- Request rate
- Response times

View in your app's **Metrics** tab.

### Resend Monitoring

- Go to Resend dashboard → **Logs** to see all email activity
- Check delivery status, bounces, and errors
- Set up webhooks for email events (optional)

## Troubleshooting

### Database Connection Issues

**Problem**: `Connection refused` or `SSL required`

**Solutions**:
1. Verify `DB_SSL=true` is set
2. Check database firewall rules allow App Platform connections
3. Verify database credentials are correct
4. Check database cluster is running and healthy

**Firewall Configuration**:
1. Go to your database cluster
2. Navigate to **Settings** → **Trusted Sources**
3. Add your App Platform component (DigitalOcean provides this option)

### Email Not Sending

**Problem**: Emails not being sent

**Solutions**:
1. Verify `RESEND_API_KEY` is set correctly
2. Check `RESEND_FROM_EMAIL` uses a verified domain
3. Check Resend dashboard → **Logs** for error messages
4. Verify domain DNS records are correct (if using custom domain)
5. Check app logs for email-related errors
6. Ensure email addresses are valid format

**Common Issues**:
- Using unverified domain: Use `onboarding.resend.dev` for testing
- Invalid API key: Regenerate in Resend dashboard
- Domain not verified: Complete DNS verification in Resend

### CORS Errors

**Problem**: Frontend can't connect to backend

**Solutions**:
1. Verify `FRONTEND_URL` includes your frontend domain (with https://)
2. For multiple origins, separate with commas
3. Check browser console for exact CORS error
4. Verify backend is accessible (test `/health` endpoint)

### Migration Issues

**Problem**: Migrations fail or tables don't exist

**Solutions**:
1. Run migrations manually via console (see [Running Migrations](#running-migrations))
2. Check database connection is working: `npm run migrate`
3. Verify migration file exists: `backend/migrations/001_create_form_tables.sql`
4. Check database user has CREATE TABLE permissions

### App Won't Start

**Problem**: App crashes on startup

**Solutions**:
1. Check logs: `doctl apps logs <app-id>`
2. Verify all required environment variables are set
3. Test locally with same environment variables
4. Check `package.json` scripts are correct
5. Verify Node.js version compatibility (App Platform usually detects automatically)

### High Memory Usage

**Problem**: App runs out of memory

**Solutions**:
1. Upgrade instance size in App Platform settings
2. Check for memory leaks in application code
3. Review database connection pool settings (`max` connections in `database.js`)
4. Monitor metrics to see memory usage patterns

## Post-Deployment Checklist

- [ ] Database cluster created and running
- [ ] App Platform app deployed successfully
- [ ] Database migrations run successfully
- [ ] Health check endpoint (`/health`) returns 200 OK
- [ ] Environment variables configured correctly (including Resend)
- [ ] Resend domain verified (or using test domain)
- [ ] CORS configured to allow frontend domain
- [ ] Database firewall allows App Platform connections
- [ ] Test form submission from frontend
- [ ] Test waitlist submission
- [ ] Test download tracking
- [ ] Verify admin email notifications are received
- [ ] Verify user confirmation emails are sent
- [ ] Monitor logs for any errors
- [ ] Set up alerts/notifications (optional)

## Scaling

### Horizontal Scaling

1. Go to App Platform app settings
2. Navigate to **Components** → Select your service
3. Increase **Instance Count**
4. Click **Save**

### Vertical Scaling

1. Go to App Platform app settings
2. Navigate to **Components** → Select your service
3. Change **Instance Size**
4. Click **Save**

### Database Scaling

1. Go to your database cluster
2. Click **Settings** → **Edit Cluster**
3. Select larger plan
4. Click **Save Changes**

## Cost Estimation

- **Basic App**: $5/month (512MB RAM, 1 instance)
- **Basic Database**: $15/month (1GB RAM, 1GB storage)
- **Resend**: Free tier includes 3,000 emails/month, then $20/month for 50,000 emails
- **Total Starting Cost**: ~$20-40/month

Costs scale with:
- Instance size and count
- Database plan and storage
- Email volume (Resend)
- Data transfer (usually included)

## Support

- **DigitalOcean Docs**: [docs.digitalocean.com](https://docs.digitalocean.com)
- **DigitalOcean Community**: [digitalocean.com/community](https://www.digitalocean.com/community)
- **Resend Docs**: [resend.com/docs](https://resend.com/docs)
- **Resend Support**: Available in Resend dashboard

---

**Last Updated**: 2024

