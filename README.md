# InvestPro - Investment Platform

A modern, responsive investment platform connecting startups with strategic investors.

## 🚀 Features

- **Modern Design**: Clean, professional interface with a blue color scheme
- **Responsive Layout**: Fully responsive across all device sizes
- **Component-Based Architecture**: Reusable components for easy maintenance and scaling
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
my-app/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Main landing page
│   └── globals.css        # Global styles and CSS variables
├── components/
│   ├── layout/
│   │   ├── header.jsx     # Navigation header with responsive menu
│   │   └── footer.jsx     # Footer with links and contact info
│   ├── sections/
│   │   ├── hero.jsx       # Hero section with CTA
│   │   ├── highlight.jsx  # Key highlights and stats
│   │   ├── services.jsx   # Services/features grid
│   │   ├── benefits.jsx   # Benefits with checklist
│   │   ├── industries.jsx # Industries grid
│   │   ├── investor-matching.jsx # Stage-wise matching
│   │   ├── testimonials.jsx # Client testimonials
│   │   ├── faqs.jsx       # Expandable FAQ section
│   │   └── resources.jsx  # Videos, downloads, case studies
│   └── ui/
│       └── button.jsx     # Reusable button component
└── lib/
    └── utils.js           # Utility functions
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb) - Used for CTAs and accents
- **Secondary**: Light gray (#f1f5f9) - Used for backgrounds
- **Success**: Green (#10b981) - Used for positive indicators
- **Warning**: Orange (#f59e0b) - Used for highlights
- **Danger**: Red (#ef4444) - Used for alerts

### Typography
- **Headings**: Bold, modern typography with proper hierarchy
- **Body Text**: Readable with good contrast ratios
- **Font Family**: Geist Sans (primary), Geist Mono (code)

### Components
All components are built with:
- Responsive design (mobile-first approach)
- Hover states and smooth transitions
- Accessible markup and keyboard navigation
- Consistent spacing and typography

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2
- **Styling**: Tailwind CSS 4.0
- **Icons**: Lucide React
- **Components**: Custom components with Radix UI primitives
- **Animations**: CSS transitions and transforms

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Sections Overview

1. **Header/Navbar** - Sticky navigation with mobile menu
2. **Hero Section** - Main value proposition with stats
3. **Highlight Section** - Key benefits and market insights
4. **Services Section** - Feature cards with icons
5. **Benefits Section** - Why choose us with checklist
6. **Industries Section** - Sectors served with stats
7. **Investor Matching** - Stage-wise funding process
8. **Testimonials** - Client success stories
9. **FAQs** - Common questions and answers
10. **Resources** - Videos, downloads, case studies
11. **Footer** - Links, contact info, newsletter signup

## 🔧 Customization

The components are designed for easy customization:

- **Colors**: Update CSS variables in `globals.css`
- **Content**: Modify text and data in individual components
- **Layout**: Adjust grid layouts and spacing
- **Branding**: Replace logo and company name throughout

## 📈 Performance

- **Optimized Images**: Using Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **CSS Optimization**: Tailwind CSS purging
- **SEO**: Proper meta tags and semantic HTML

## 🎯 Next Steps

This foundation provides:
- Scalable component architecture
- Responsive design system
- Professional appearance
- Easy content management

Perfect for expanding into additional pages like:
- About Us
- Individual service pages
- Blog/Resources section
- Contact forms
- User dashboards