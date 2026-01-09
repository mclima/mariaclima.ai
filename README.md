# Maria AI Portfolio

AI-focused frontend developer portfolio built with Next.js, featuring server-side rendering for optimal SEO and performance.

## Tech Stack

- **Next.js 15** - React framework with SSR/SSG
- **React 19** - UI library
- **GSAP** - Animation library
- **CSS** - Custom styling

## Features

- ✅ Server-side rendering for SEO
- ✅ Static site generation
- ✅ Optimized meta tags for search engines and social sharing
- ✅ GSAP animations
- ✅ Responsive design
- ✅ Accessible markup

## Prerequisites

This project requires **Node.js 20.19+** or **22.12+**.

If using nvm:
```bash
nvm use 20
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Development server runs at `http://localhost:3000`

## Build

```bash
# Create production build
npm run build
```

Static files are exported to `/out` directory, ready for deployment.

## Deployment

This portfolio is optimized for deployment to **Vercel**:

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push code to GitHub
2. Import repository at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js configuration

### Option 3: Other Static Hosts
Deploy the `/out` directory to any static hosting service (Netlify, GitHub Pages, etc.)

## Project Structure

```
├── app/
│   ├── layout.jsx       # Root layout with SEO metadata
│   └── page.jsx         # Home page
├── src/
│   ├── components/      # React components
│   └── styles/          # CSS files
├── public/              # Static assets
└── next.config.js       # Next.js configuration
```

## SEO

The site includes comprehensive SEO optimization:
- Pre-rendered HTML for all pages
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card metadata
- Semantic HTML structure
