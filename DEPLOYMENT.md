# 🚀 Deployment Guide - Annita Website

This guide will help you deploy the Annita website to Netlify for testing and then to Cloudflare for production.

## 📋 Prerequisites

- GitHub account
- Netlify account (free)
- Cloudflare account (free)
- Node.js 18+ installed locally

## 🔧 Local Setup

1. **Build the project locally**
   ```bash
   npm run build:static
   ```

2. **Test the build**
   ```bash
   npm run dev
   ```

## 🌐 Step 1: Netlify Deployment (Testing)

### Option A: Drag & Drop (Quick Test)

1. **Build the project**
   ```bash
   npm run build:static
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag the `out` folder to the Netlify dashboard
   - Your site will be live instantly!

### Option B: Git Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to Netlify Dashboard
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Configure build settings:
     - **Build command**: `npm run build:static`
     - **Publish directory**: `out`
   - Click "Deploy site"

3. **Custom Domain (Optional)**
   - Go to Site Settings → Domain Management
   - Add your custom domain
   - Configure DNS settings

## ☁️ Step 2: Cloudflare Pages Deployment (Production)

### 1. Prepare GitHub Repository

1. **Ensure all files are committed**
   ```bash
   git add .
   git commit -m "Ready for Cloudflare deployment"
   git push origin main
   ```

2. **Verify repository structure**
   ```
   annita-website/
   ├── app/
   ├── components/
   ├── public/
   ├── next.config.js
   ├── package.json
   ├── netlify.toml
   └── README.md
   ```

### 2. Deploy to Cloudflare Pages

1. **Go to Cloudflare Dashboard**
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com)
   - Sign up/Login

2. **Create New Pages Project**
   - Click "Pages" in the sidebar
   - Click "Create a project"
   - Choose "Connect to Git"

3. **Connect GitHub Repository**
   - Select your GitHub account
   - Choose the annita-website repository
   - Click "Begin setup"

4. **Configure Build Settings**
   - **Project name**: `annita-website` (or your preferred name)
   - **Production branch**: `main`
   - **Framework preset**: `None`
   - **Build command**: `npm run build:static`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave empty)

5. **Environment Variables (Optional)**
   - Add any environment variables if needed
   - Click "Save and Deploy"

### 3. Custom Domain Setup

1. **Add Custom Domain**
   - Go to your Pages project
   - Click "Custom domains"
   - Add your domain (e.g., `annita.com`)

2. **Configure DNS**
   - Cloudflare will automatically configure DNS
   - Or manually add CNAME record pointing to your Pages URL

3. **SSL/TLS Settings**
   - Go to SSL/TLS settings
   - Set to "Full" or "Full (strict)"
   - Enable "Always Use HTTPS"

## 🔄 Continuous Deployment

Both Netlify and Cloudflare will automatically:
- Deploy when you push to the main branch
- Provide preview deployments for pull requests
- Handle SSL certificates automatically

## 📊 Performance Optimization

### Cloudflare Optimizations

1. **Enable Cloudflare Features**
   - Auto Minify: JavaScript, CSS, HTML
   - Brotli compression
   - Rocket Loader
   - Early Hints

2. **Caching Rules**
   - Static assets: Cache everything
   - HTML files: Cache for 1 hour
   - API routes: No cache

### Netlify Optimizations

1. **Build Optimizations**
   - Enable build caching
   - Use build plugins if needed

2. **Performance Headers**
   - Already configured in `netlify.toml`

## 🔍 Testing Checklist

### Before Deployment
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Forms work (if functional)
- [ ] Mobile responsiveness
- [ ] Performance scores (Lighthouse)

### After Deployment
- [ ] Site loads on custom domain
- [ ] HTTPS works correctly
- [ ] All links work
- [ ] SEO meta tags are present
- [ ] Analytics tracking (if configured)

## 🛠️ Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (18+)
   - Verify all dependencies are installed
   - Check for syntax errors

2. **Images Not Loading**
   - Ensure images are in `public/` folder
   - Check image paths in components

3. **Styling Issues**
   - Verify Tailwind CSS is building correctly
   - Check for missing CSS classes

4. **404 Errors**
   - Ensure `trailingSlash: true` in next.config.js
   - Check file paths and routing

### Support

- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Cloudflare**: [developers.cloudflare.com](https://developers.cloudflare.com)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)

## 🎯 Next Steps

1. **Analytics Setup**
   - Google Analytics 4
   - Facebook Pixel
   - Custom event tracking

2. **SEO Optimization**
   - Submit sitemap to search engines
   - Set up Google Search Console
   - Configure social media meta tags

3. **Monitoring**
   - Set up uptime monitoring
   - Performance monitoring
   - Error tracking

4. **Content Management**
   - Consider adding a CMS
   - Set up content workflows
   - Plan content updates

---

**Your Annita website is now ready for deployment! 🚀**

Follow these steps and you'll have a professional, high-performance website running on both Netlify (testing) and Cloudflare (production).
