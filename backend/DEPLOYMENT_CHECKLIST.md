# 🚀 Production Deployment Checklist - Annita Website

## ✅ Pre-Deployment Checklist

### 1. Environment Variables Setup

**In Netlify Dashboard:**
- [ ] Go to **Site settings** → **Environment variables**
- [ ] Add `NEXT_PUBLIC_SUPABASE_URL` = Your Supabase project URL
- [ ] Add `SUPABASE_SERVICE_ROLE_KEY` = Your Supabase service role key ⚠️ **KEEP SECRET**
- [ ] Verify both variables are set for **Production** environment

### 2. Supabase Database Setup

- [ ] All tables created in Supabase (see `database-schema.sql`)
- [ ] Tables verified in Supabase Table Editor
- [ ] Row Level Security (RLS) policies configured (if needed)
- [ ] Test insert/select operations work

### 3. Code Verification

- [ ] All forms use Netlify Functions (not `/api/` routes)
- [ ] No API keys in frontend code
- [ ] `.env.local` is in `.gitignore`
- [ ] All environment variables use `process.env.*`

### 4. Security Verification

- [ ] Rate limiting enabled (10 req/min for forms)
- [ ] Input validation working
- [ ] XSS protection active
- [ ] Security headers configured in `netlify.toml`
- [ ] CORS properly configured

---

## 🚀 Deployment Steps

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Production-ready secure backend with Netlify Functions"
git push origin main
```

### Step 2: Netlify Auto-Deploy

1. Netlify will automatically detect the push
2. Build will start
3. Functions will be built automatically

### Step 3: Verify Deployment

1. **Check Build Logs**
   - Go to Netlify Dashboard → Deploys
   - Verify build succeeded
   - Check for any errors

2. **Test Functions**
   - Go to Netlify Dashboard → Functions
   - Verify all 3 functions are deployed:
     - `submitForm`
     - `waitlist`
     - `trackDownload`

3. **Test Forms on Live Site**
   - Visit `https://www.an-nita.com`
   - Submit contact form
   - Join waitlist
   - Download investor document
   - Verify all work correctly

4. **Check Function Logs**
   - Netlify Dashboard → Functions → View logs
   - Verify no errors
   - Check request/response times

5. **Verify Data in Supabase**
   - Go to Supabase Dashboard
   - Check Table Editor
   - Verify form submissions are being saved

---

## 🔍 Post-Deployment Verification

### Function Endpoints

Test these endpoints on your live site:

1. **Form Submission**
   ```
   POST https://www.an-nita.com/.netlify/functions/submitForm
   ```

2. **Waitlist**
   ```
   POST https://www.an-nita.com/.netlify/functions/waitlist
   ```

3. **Download Tracking**
   ```
   POST https://www.an-nita.com/.netlify/functions/trackDownload
   ```

### Security Checks

- [ ] No API keys visible in browser DevTools
- [ ] All requests go to `/.netlify/functions/*`
- [ ] Rate limiting working (try 11 requests quickly)
- [ ] Invalid inputs are rejected
- [ ] Error messages don't leak sensitive info

### Performance Checks

- [ ] Functions respond in < 1 second
- [ ] No timeout errors
- [ ] Forms submit successfully
- [ ] Success messages display correctly

---

## 🐛 Troubleshooting

### Issue: Functions return 500 error

**Solution:**
1. Check Netlify Function logs
2. Verify environment variables are set
3. Check Supabase connection
4. Verify table names match exactly

### Issue: CORS errors

**Solution:**
1. Check `netlify.toml` headers configuration
2. Verify `Access-Control-Allow-Origin` is set
3. Ensure functions return proper CORS headers

### Issue: Rate limit errors

**Solution:**
1. Wait 60 seconds
2. Check if IP is being rate limited
3. Adjust rate limits in `validation.js` if needed

### Issue: Forms not submitting

**Solution:**
1. Check browser console for errors
2. Verify function endpoints are correct
3. Check network tab for failed requests
4. Verify environment variables in Netlify

---

## 📊 Monitoring

### Netlify Dashboard

- **Functions Tab**: Monitor function invocations, errors, duration
- **Deploys Tab**: Monitor build status and deployment history
- **Analytics Tab**: Monitor site traffic and performance

### Supabase Dashboard

- **Table Editor**: View all form submissions
- **Logs**: Check for database errors
- **API**: Monitor API usage and performance

---

## ✅ Success Criteria

Your deployment is successful when:

- ✅ All forms submit successfully
- ✅ Data appears in Supabase tables
- ✅ No errors in Netlify Function logs
- ✅ No API keys exposed in frontend
- ✅ Rate limiting works correctly
- ✅ Security headers are active
- ✅ Site loads fast (< 2 seconds)
- ✅ All features work on mobile and desktop

---

## 🎉 You're Production Ready!

Your Annita website now has:
- ✅ Secure, production-grade backend
- ✅ No exposed API keys
- ✅ Rate limiting and security
- ✅ Fast, globally distributed
- ✅ Enterprise-level reliability

**Congratulations! 🚀**

