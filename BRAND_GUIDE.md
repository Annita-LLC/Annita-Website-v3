# Annita Brand Guide - Colors & Fonts

Use this guide to maintain consistent branding across all Annita websites and applications.

---

## 🎨 **COLOR PALETTE**

### **Primary Colors (Navy Blue)**
The primary brand color represents trust, professionalism, and innovation.

- **Primary 500**: `#003366` (Main brand color)
- **Primary 400**: `#3385ff`
- **Primary 600**: `#002952`
- **Primary 700**: `#001f3d`
- **Primary 50**: `#e6f0ff` (Lightest tint)
- **Primary 900**: `#000a14` (Darkest shade)

**Usage**: Main buttons, headers, primary CTAs, brand logo elements

---

### **Secondary Colors (Purple)**
Used for accents, highlights, and secondary actions.

- **Secondary 500**: `#4B0082` (Indigo purple)
- **Secondary 400**: `#9f33ff`
- **Secondary 600**: `#3d0068`
- **Secondary 50**: `#f3e6ff` (Lightest tint)

**Usage**: Secondary buttons, feature highlights, gradient combinations

---

### **Accent Colors (Green)**
Represents growth, success, and positive actions.

- **Accent 500**: `#00AF54` (Success green)
- **Accent 400**: `#33ff85`
- **Accent 600**: `#008c43`
- **Accent 50**: `#e6fff0` (Lightest tint)

**Usage**: Success states, positive indicators, growth metrics

---

### **Orange (Brand Signature)**
The signature Annita orange - vibrant and energetic.

- **Orange 500**: `#FF6600` ⭐ **Main brand orange**
- **Orange 400**: `#ff9933`
- **Orange 600**: `#cc5200`
- **Orange 50**: `#fff2e6` (Lightest tint)

**Usage**: Logo text, brand name, key highlights, "Trusted & Backed By" section headers

---

### **Neutral Colors (Grays)**
For text, backgrounds, and UI elements.

- **Neutral 50**: `#fafafa` (Lightest background)
- **Neutral 100**: `#f5f5f5`
- **Neutral 200**: `#e5e5e5`
- **Neutral 500**: `#737373` (Medium gray)
- **Neutral 600**: `#525252`
- **Neutral 700**: `#404040`
- **Neutral 900**: `#262626` (Darkest)

**Usage**: Body text, borders, backgrounds, subtle UI elements

---

### **Status Colors**

**Success (Green)**
- Success 500: `#22c55e`
- Success 600: `#16a34a`

**Warning (Amber)**
- Warning 500: `#f59e0b`
- Warning 600: `#d97706`

**Error (Red)**
- Error 500: `#ef4444`
- Error 600: `#dc2626`

---

## 🎨 **GRADIENT COMBINATIONS**

### **Hero Gradients** (Most commonly used)
```css
/* Primary Hero Gradient */
background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%);

/* Orange Hero Gradient */
background: linear-gradient(135deg, #FF6600 0%, #ff9933 100%);

/* Orange to Red Gradient */
background: linear-gradient(135deg, #FF6600 0%, #ef4444 100%);
```

### **Feature Gradients**
```css
/* Blue to Cyan */
background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);

/* Purple to Pink */
background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);

/* Green to Emerald */
background: linear-gradient(135deg, #22c55e 0%, #10b981 100%);

/* Orange to Red */
background: linear-gradient(135deg, #FF6600 0%, #ef4444 100%);
```

### **Background Gradients**
```css
/* Light Background */
background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);

/* Card Gradient */
background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
```

---

## 🔤 **TYPOGRAPHY**

### **Font Families**

#### **1. Zen Dots** (Display/Headings)
- **Usage**: Headings, display text, brand name, hero titles
- **Weights**: 400 (Regular)
- **Google Fonts Link**: `https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap`
- **CSS**: `font-family: 'Zen Dots', system-ui, sans-serif;`

**When to use**: 
- Main page headings (H1, H2)
- Hero section titles
- Brand name "Annita"
- Large display text
- Section headers

---

#### **2. Lora** (Body/Serif)
- **Usage**: Body text, paragraphs, descriptions
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
- **Google Fonts Link**: `https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap`
- **CSS**: `font-family: 'Lora', Georgia, serif;`

**When to use**:
- Body paragraphs
- Product descriptions
- Long-form content
- Article text
- Subheadings (H3, H4)

---

#### **3. JetBrains Mono** (Code/Monospace)
- **Usage**: Code blocks, technical content, numbers
- **Weights**: 100-800 (all weights available)
- **Google Fonts Link**: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap`
- **CSS**: `font-family: 'JetBrains Mono', monospace;`

**When to use**:
- Code snippets
- Technical documentation
- API endpoints
- Numbers/statistics (optional)

---

### **Font Sizes**

```css
/* Heading Sizes */
text-xs: 0.75rem (12px)
text-sm: 0.875rem (14px)
text-base: 1rem (16px)
text-lg: 1.125rem (18px)
text-xl: 1.25rem (20px)
text-2xl: 1.5rem (24px)
text-3xl: 1.875rem (30px)
text-4xl: 2.25rem (36px)
text-5xl: 3rem (48px)
text-6xl: 3.75rem (60px)
```

---

## 📐 **USAGE EXAMPLES**

### **CSS Variables (for easy theming)**
```css
:root {
  --primary: #003366;
  --primary-light: #3385ff;
  --secondary: #4B0082;
  --accent: #00AF54;
  --orange: #FF6600;
  --orange-light: #ff9933;
  --neutral-50: #fafafa;
  --neutral-900: #262626;
}
```

### **Tailwind CSS Classes**
```html
<!-- Primary Button -->
<button class="bg-primary-500 text-white hover:bg-primary-600">
  Click Me
</button>

<!-- Orange Brand Text -->
<h1 class="text-orange-500 font-display">Annita</h1>

<!-- Gradient Background -->
<div class="bg-gradient-to-r from-orange-500 to-orange-600">
  Content
</div>

<!-- Typography -->
<h1 class="font-display text-4xl">Heading</h1>
<p class="font-serif text-base">Body text</p>
```

### **React/Next.js Example**
```jsx
import { Zen_Dots, Lora } from 'next/font/google'

const zenDots = Zen_Dots({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-zen-dots',
})

const lora = Lora({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
})

// Usage
<h1 className={`${zenDots.variable} font-display`}>
  Annita
</h1>
```

---

## 🎯 **BRAND COLOR USAGE GUIDELINES**

1. **Primary Blue (#003366)**: Use for main CTAs, navigation, primary buttons
2. **Orange (#FF6600)**: Use for brand name "Annita", highlights, "Trusted & Backed By" headers
3. **Purple (#4B0082)**: Use for secondary actions, feature cards, gradients
4. **Green (#00AF54)**: Use for success states, positive metrics, growth indicators
5. **Neutral Grays**: Use for body text, backgrounds, borders

---

## 📱 **RESPONSIVE TYPOGRAPHY**

```css
/* Responsive Heading */
h1 {
  font-size: 2rem;        /* Mobile */
}

@media (min-width: 640px) {
  h1 {
    font-size: 2.5rem;   /* Small screens */
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 3rem;     /* Large screens */
  }
}
```

---

## 🎨 **QUICK REFERENCE**

**Main Brand Colors:**
- Primary: `#003366`
- Orange: `#FF6600` ⭐
- Secondary: `#4B0082`
- Accent: `#00AF54`

**Main Fonts:**
- Headings: **Zen Dots** (400)
- Body: **Lora** (400, 500, 600, 700)
- Code: **JetBrains Mono** (400)

**Key Gradients:**
- Hero: `linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)`
- Orange: `linear-gradient(135deg, #FF6600 0%, #ff9933 100%)`

---

**Copy this entire guide and use it as a reference when building your other Annita websites!**

