# Tashi Technologies Website - Architecture Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Folder Structure](#folder-structure)
4. [Frontend Architecture](#frontend-architecture)
5. [Component Hierarchy](#component-hierarchy)
6. [Routing System](#routing-system)
7. [Design System](#design-system)
8. [Authentication Flow](#authentication-flow)
9. [Form Handling](#form-handling)
10. [Animation System](#animation-system)
11. [How to Run Locally](#how-to-run-locally)
12. [Deployment](#deployment)
13. [Future Backend Integration](#future-backend-integration)

---

## Project Overview

Tashi Technologies Corp website is a modern, enterprise-grade corporate website built with React and TypeScript. It showcases the company's AI and automation services while providing lead generation capabilities through contact forms and meeting booking functionality.

### Key Features

- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI/UX**: Clean, minimal, futuristic design with professional micro-animations
- **Lead Generation**: Contact and booking forms ready for backend integration
- **Authentication Ready**: Sign-in page with email/password and OAuth placeholders
- **Accessibility**: WCAG-friendly with proper contrast, keyboard navigation, and labels
- **Performance Optimized**: Lazy loading, optimized assets, no heavy animation libraries

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18 with TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS + CSS Variables |
| **UI Components** | shadcn/ui (Radix UI primitives) |
| **Routing** | React Router v6 |
| **State Management** | React hooks (useState, useEffect) |
| **Form Validation** | Zod schemas |
| **Icons** | Lucide React |
| **Notifications** | Sonner + Radix Toast |

---

## Folder Structure

```
src/
├── assets/                 # Static assets (logo, images)
│   └── logo.png
├── components/             # Reusable components
│   ├── ui/                 # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── separator.tsx
│   │   └── ... (other UI primitives)
│   ├── AnimatedSection.tsx # Intersection Observer animations
│   ├── BackgroundPattern.tsx # SVG tech patterns
│   ├── Footer.tsx          # Site footer
│   ├── FormInput.tsx       # Form input components
│   ├── Layout.tsx          # Page layout wrapper
│   ├── Navbar.tsx          # Navigation bar
│   ├── NavLink.tsx         # Navigation link component
│   ├── ScrollToTop.tsx     # Route change scroll handler
│   └── ServiceCard.tsx     # Service display card
├── hooks/                  # Custom React hooks
│   ├── use-mobile.tsx      # Mobile detection hook
│   └── use-toast.ts        # Toast notification hook
├── lib/                    # Utility functions
│   └── utils.ts            # cn() classname utility
├── pages/                  # Page components
│   ├── About.tsx           # About page
│   ├── BookMeeting.tsx     # Meeting booking page
│   ├── Contact.tsx         # Contact form page
│   ├── Home.tsx            # Homepage
│   ├── NotFound.tsx        # 404 page
│   ├── Services.tsx        # Services page
│   └── SignIn.tsx          # Authentication page
├── test/                   # Test files
│   ├── example.test.ts
│   └── setup.ts
├── App.tsx                 # Root app component with routes
├── index.css               # Global styles & design tokens
├── main.tsx                # App entry point
└── vite-env.d.ts           # Vite type definitions
```

---

## Frontend Architecture

### Component Composition Pattern

The application follows a compositional architecture:

```
App (Router)
└── Layout (shared wrapper)
    ├── BackgroundPattern (visual layer)
    ├── Navbar (navigation)
    ├── main (page content)
    │   └── [Page Component]
    │       ├── AnimatedSection (animation wrapper)
    │       └── UI Components (buttons, cards, forms)
    └── Footer (site footer)
```

### Key Architectural Decisions

1. **Layout Component**: Wraps all pages with consistent navbar, footer, and background
2. **AnimatedSection**: Uses Intersection Observer for performant scroll animations
3. **Design Tokens**: All colors defined as CSS variables in index.css
4. **Component Variants**: Using class-variance-authority (CVA) for button variants

---

## Component Hierarchy

### Layout Component (`Layout.tsx`)

```tsx
<Layout>
  <BackgroundPattern variant="circuit" />
  <Navbar />
  <main className="flex-1 pt-32">
    {children}  // Page content
  </main>
  <Footer />
</Layout>
```

### Navbar Component (`Navbar.tsx`)

- Floating pill-shaped design
- Responsive with mobile menu
- Active state highlighting
- Contains: Logo, navigation links, Sign In button, Book a Meeting CTA

### AnimatedSection Component (`AnimatedSection.tsx`)

Wrapper component that animates children when they enter the viewport:

```tsx
<AnimatedSection 
  animation="fade-up"  // fade-up | fade-down | scale | slide-right | slide-left
  delay={100}          // Animation delay in ms
>
  {children}
</AnimatedSection>
```

Uses Intersection Observer API for performance (no heavy animation libraries).

---

## Routing System

### Route Configuration (`App.tsx`)

```tsx
<BrowserRouter>
  <ScrollToTop />  // Resets scroll position on navigation
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/book-meeting" element={<BookMeeting />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

### ScrollToTop Component

Ensures every page navigation starts from the top:

```tsx
// ScrollToTop.tsx
const { pathname } = useLocation();
useEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" });
}, [pathname]);
```

---

## Design System

### Color Tokens (index.css)

All colors are defined as HSL values in CSS variables:

```css
:root {
  /* Core Colors */
  --background: 0 0% 100%;          /* White */
  --foreground: 220 15% 10%;        /* Dark charcoal */
  
  /* Primary - Ocean Blue */
  --primary: 199 89% 48%;           /* #0EA5E9 */
  --primary-foreground: 0 0% 100%;  /* White */
  
  /* Semantic Colors */
  --muted: 210 20% 96%;
  --muted-foreground: 215 16% 47%;
  --accent: 199 89% 95%;
  --border: 214 32% 91%;
}
```

### Using Colors in Components

**✅ Correct:**
```tsx
<div className="bg-background text-foreground" />
<button className="bg-primary text-primary-foreground" />
```

**❌ Incorrect:**
```tsx
<div className="bg-white text-black" />  // Don't use raw colors
```

### Custom Gradients

```css
--gradient-primary: linear-gradient(135deg, hsl(199 89% 48%), hsl(210 100% 45%));
--gradient-hero: linear-gradient(180deg, hsl(210 100% 98%) 0%, hsl(0 0% 100%) 100%);
```

### Button Variants

Defined in `components/ui/button.tsx` using CVA:

| Variant | Usage |
|---------|-------|
| `default` | Standard actions |
| `hero` | Primary CTAs (gradient) |
| `heroOutline` | Secondary CTAs |
| `outline` | Tertiary actions |
| `ghost` | Minimal emphasis |
| `destructive` | Dangerous actions |

---

## Authentication Flow

### Current State (Frontend Only)

The SignIn page (`pages/SignIn.tsx`) provides the UI for:

1. **Email/Password Login**
   - Form validation with controlled inputs
   - Password visibility toggle
   - Loading state handling

2. **OAuth Providers**
   - Google sign-in button
   - Microsoft sign-in button

### To Enable Authentication

1. **Enable Lovable Cloud** in your project
2. Configure authentication providers in the Supabase dashboard
3. Replace the mock handlers with actual auth calls:

```tsx
// Example with Supabase
import { supabase } from "@/integrations/supabase/client";

const handleEmailSignIn = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

const handleGoogleSignIn = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });
};
```

---

## Form Handling

### Contact Form (`pages/Contact.tsx`)

**Validation Schema (Zod):**
```tsx
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
```

**Form Flow:**
1. User fills form
2. Client-side validation with Zod
3. Display error messages if invalid
4. Submit handler (currently shows toast, ready for API)
5. Success feedback via toast notification

### Meeting Booking Form (`pages/BookMeeting.tsx`)

Similar pattern with additional fields:
- Name, Email, Company
- Phone number
- Preferred date/time
- Meeting topic
- Additional notes

### Ready for Backend Integration

Forms are structured for easy API connection:

```tsx
const handleSubmit = async (data: FormData) => {
  // Replace with actual API call
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  
  // Or with webhook for Zapier/n8n
  await fetch('https://hooks.zapier.com/...', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
```

---

## Animation System

### Philosophy

- Professional micro-animations only
- No heavy animation libraries
- CSS animations + Intersection Observer
- Short, smooth, purposeful

### Implementation

**AnimatedSection Component:**
```tsx
const animationClasses = {
  "fade-up": "translate-y-8 opacity-0",    // Initial state
  "fade-down": "-translate-y-8 opacity-0",
  "scale": "scale-95 opacity-0",
  "slide-right": "-translate-x-8 opacity-0",
  "slide-left": "translate-x-8 opacity-0",
};
```

**CSS Keyframes (index.css):**
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Where Animations Are Applied

| Element | Animation |
|---------|-----------|
| Section entry | Fade + translate |
| Cards | Hover elevation + border glow |
| Buttons | Subtle hover transitions |
| Navbar | Active state underline |
| Mobile menu | Fade in down |

---

## How to Run Locally

### Prerequisites

- Node.js 18+ 
- npm or bun package manager

### Steps

```bash
# 1. Clone the repository
git clone <repository-url>
cd <project-name>

# 2. Install dependencies
npm install
# or
bun install

# 3. Start development server
npm run dev
# or
bun dev

# 4. Open in browser
# http://localhost:8080
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest tests |

---

## Deployment

### Lovable Deployment

1. Open your Lovable project
2. Click Share → Publish
3. Your site is live!

### Manual Deployment

```bash
# Build for production
npm run build

# Output in dist/ folder
# Deploy to any static hosting:
# - Vercel
# - Netlify
# - Cloudflare Pages
# - AWS S3 + CloudFront
```

### Environment Variables

Currently no environment variables required for frontend-only deployment.

For backend integration, add:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

---

## Future Backend Integration

### Lovable Cloud (Recommended)

Enable Lovable Cloud to get:
- PostgreSQL database
- Authentication (email, OAuth)
- File storage
- Edge functions

### Database Schema (Planned)

```sql
-- Contacts table
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Meeting bookings table
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  preferred_date DATE,
  preferred_time TEXT,
  topic TEXT NOT NULL,
  notes TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Webhook Integration (Zapier/n8n)

Forms are designed for easy webhook integration:

```tsx
// After form validation
const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;

await fetch(webhookUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: 'contact_form',
    data: formData,
    timestamp: new Date().toISOString(),
  }),
});
```

### API Routes Structure (When Implemented)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Submit contact form |
| `/api/bookings` | POST | Create meeting booking |
| `/api/bookings` | GET | List bookings (auth required) |
| `/api/auth/login` | POST | Email/password login |
| `/api/auth/oauth` | GET | OAuth redirect |

---

## Component Reference

### Core Components

| Component | File | Purpose |
|-----------|------|---------|
| Layout | `components/Layout.tsx` | Page wrapper with nav/footer |
| Navbar | `components/Navbar.tsx` | Navigation bar |
| Footer | `components/Footer.tsx` | Site footer |
| AnimatedSection | `components/AnimatedSection.tsx` | Scroll animation wrapper |
| BackgroundPattern | `components/BackgroundPattern.tsx` | Tech pattern background |
| ServiceCard | `components/ServiceCard.tsx` | Service display card |
| ScrollToTop | `components/ScrollToTop.tsx` | Route change scroll reset |

### UI Components (shadcn/ui)

| Component | Usage |
|-----------|-------|
| Button | CTAs and actions |
| Input | Form text inputs |
| Label | Form labels |
| Separator | Visual dividers |
| Card | Content containers |
| Toast/Sonner | Notifications |

---

## Best Practices

### Code Style

- TypeScript strict mode
- Functional components with hooks
- Named exports for components
- Default exports for pages

### Styling

- Use Tailwind semantic tokens
- No hardcoded colors
- Mobile-first responsive design
- Consistent spacing scale

### Performance

- Lazy load images
- Use Intersection Observer for animations
- Minimize bundle size
- No heavy dependencies

### Accessibility

- Semantic HTML elements
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation
- Focus visible states

---

## Troubleshooting

### Common Issues

**Page doesn't scroll to top on navigation:**
- Ensure `<ScrollToTop />` is inside `<BrowserRouter>`
- Check if component is properly imported

**Animations not working:**
- Verify AnimatedSection wrapper
- Check browser Intersection Observer support

**Styles not applying:**
- Run `npm run dev` to regenerate Tailwind classes
- Check for typos in className strings

**Build errors:**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run lint`

---

## Contact & Support

For development questions or issues, refer to:
- [Lovable Documentation](https://docs.lovable.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
