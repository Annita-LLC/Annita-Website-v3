# Running Migration - Alternative Methods

Since you can't find the shell tab, here are alternative ways to run the migration:

## Method 1: Auto-Run on Startup (Easiest - Already Set Up)

I've modified your backend to automatically run migrations on first startup. Just:

1. **Redeploy your backend service** in Railway
2. The migration will run automatically when the server starts
3. Check the logs to see if migration succeeded

**To redeploy:**
- Go to Railway dashboard → Your backend service
- Click "Settings" → "Redeploy" or just push a new commit to trigger redeploy

## Method 2: Using Railway CLI with Proper Command

Try this command from your local terminal (make sure you're in the backend directory):

```bash
cd backend
npx @railway/cli run --service Annita-Website-v3 npm run migrate
```

## Method 3: Railway Dashboard - Alternative Locations

The shell might be in different places:

1. **Service Overview** → Click on your service → Look for "Shell" or "Terminal" button
2. **Deployments** → Click on a deployment → Look for "Shell" tab
3. **Settings** → Look for "Shell Access" or "Terminal"
4. **Logs** → Some Railway versions have a shell option in the logs view

## Method 4: Create a One-Time Migration Endpoint

If none of the above work, I can create a temporary endpoint that runs the migration when you visit it once.

## Method 5: Manual SQL Execution

If Railway provides a database dashboard:
1. Go to your PostgreSQL service
2. Look for "Database" or "Query" tab
3. Copy the SQL from `backend/migrations/001_create_form_tables.sql`
4. Paste and execute it directly

---

**Recommended: Use Method 1** - The auto-run on startup is already configured. Just redeploy your service and check the logs!

