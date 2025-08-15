# Annita Website

Africa's first all-in-one digital platform, combining e-commerce, fintech, AI, communication, marketing, logistics, and more into a single ecosystem. We empower MSMEs and individuals with innovative solutions, connectivity, and convenience.

## 🚀 Features

- **Modern Design**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive**: Perfect on all devices (mobile, tablet, desktop)
- **Performance**: Optimized for speed and SEO
- **Security**: Enterprise-level security features
- **Scalable**: Ready for production deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS (custom design system)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Netlify, Cloudflare Pages

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd annita-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Static export (for Netlify/Cloudflare)
npm run build:static

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🚀 Deployment

### Netlify Deployment (Testing)

1. **Build the project**
   ```bash
   npm run build:static
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build:static`
   - Set publish directory: `out`
   - Deploy!

3. **Manual deployment**
   ```bash
   npm run deploy:netlify
   ```

### Cloudflare Pages Deployment (Production)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for production deployment"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to Cloudflare Dashboard → Pages
   - Connect your GitHub repository
   - Set build command: `npm run build:static`
   - Set build output directory: `out`
   - Deploy!

3. **Custom domain setup**
   - Add your custom domain in Cloudflare Pages
   - Configure DNS settings
   - Enable SSL/TLS

## 📁 Project Structure

```
annita-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── marketplace/       # Marketplace page
│   ├── payments/          # Payments page
│   ├── logistics/         # Logistics page
│   ├── connect/           # Connect page
│   └── pricing/           # Pricing page
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── ui/               # UI components
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── netlify.toml          # Netlify configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6) to Cyan (#06B6D4)
- **Secondary**: Green (#10B981) to Emerald (#059669)
- **Accent**: Purple (#8B5CF6) to Pink (#EC4899)
- **Neutral**: Gray scale (#F9FAFB to #111827)

### Typography
- **Primary**: Inter (sans-serif)
- **Secondary**: Poppins (display)
- **Monospace**: JetBrains Mono (code)

### Components
- **Buttons**: Multiple variants with hover effects
- **Cards**: Feature cards, testimonial cards, pricing cards
- **Forms**: Contact forms, newsletter signup
- **Navigation**: Responsive navigation with mobile menu

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Build Configuration
The project is configured for static export with:
- `output: 'export'` in `next.config.js`
- Optimized images and assets
- SEO-friendly meta tags
- Performance optimizations

## 📱 Responsive Design

The website is fully responsive with:
- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** interactions
- **Optimized** for all screen sizes

## 🔒 Security Features

- **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.
- **HTTPS**: Enforced on production
- **Content Security Policy**: Configured for security
- **Input Validation**: Form validation with Zod
- **Dependency Security**: Regular security audits

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for speed
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic code splitting
- **Caching**: Optimized caching strategies

## 🌍 SEO Optimization

- **Meta Tags**: Comprehensive meta tags for all pages
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine optimization
- **Open Graph**: Social media optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software owned by Annita. All rights reserved.

## 🆘 Support

For support and questions:
- **Email**: support@annita.com
- **Phone**: +231 123 456 789
- **Website**: https://annita.com

## 🎯 Roadmap

- [ ] E-commerce functionality
- [ ] Payment gateway integration
- [ ] Logistics tracking system
- [ ] AI-powered analytics
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] Advanced reporting
- [ ] API documentation

---

**Built with ❤️ for Africa's digital future**
