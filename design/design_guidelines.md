# Design Guidelines

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Dark mode: Background 220 15% 8%, Text 220 10% 95%
- Light mode: Background 220 10% 98%, Text 220 15% 15%

**Accent Colors:**
- Primary brand: 220 85% 60% (professional blue)
- Success/links: 160 75% 45% (subtle green for active states)
- Neutral borders: 220 10% 85% (light) / 220 15% 25% (dark)

**Gradients:**
- Subtle hero background gradient from primary brand color to deeper blue
- Card hover effects with gentle color transitions

### B. Typography
**Font Stack:**
- Primary: Inter (Google Fonts) - clean, professional sans-serif
- Code/technical: JetBrains Mono - for any code snippets or technical details

**Hierarchy:**
- H1: 3rem (48px) font-weight-700 for name on homepage
- H2: 2rem (32px) font-weight-600 for section headers
- H3: 1.5rem (24px) font-weight-600 for project titles
- Body: 1rem (16px) font-weight-400 for descriptions
- Small: 0.875rem (14px) for tags and metadata

### C. Layout System
**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 24 (p-4, m-8, gap-12, etc.)
- Consistent 4-unit base for tight spacing
- 8-unit for standard component spacing
- 12-16 units for section separation
- 24 units for major page sections

### D. Component Library

**Navigation:**
- Clean horizontal nav with subtle background blur
- Consistent across all pages with active state indicators

**Project Cards:**
- Grid layout (responsive: 1 col mobile, 2-3 cols desktop)
- Subtle shadow with hover elevation
- Technology tags with rounded corners
- Clear hierarchy: title → description → tech stack → buttons

**Buttons:**
- Primary: Solid with brand color background
- Secondary: Outline style with subtle borders
- Consistent padding and rounded corners
- No custom hover states (let default handle)

**Contact Elements:**
- Clean contact cards with icons
- Email and LinkedIn prominently displayed
- Professional formatting

### E. Page-Specific Layouts

**Homepage:**
- Centered hero section with name, tagline, and CTA buttons
- Minimal, focused design under 2 viewport heights
- Three main action buttons: Resume (PDF), GitHub, LinkedIn

**Projects Page:**
- Responsive grid showcasing 4 main technical projects
- Each card: title, tech description, technology tags, GitHub + demo/video links
- Emphasis on technical depth and variety

**About Page:**
- Professional bio highlighting education progression
- Key expertise areas: embedded systems, robotics, ML, cloud
- Clean typography with proper information hierarchy

**Contact Page:**
- Simple, direct contact information
- Email and LinkedIn as primary contact methods
- Professional and accessible layout

## Images
- This portfolio focuses on content and technical expertise rather than visual imagery. Any images should be:
- Project screenshots (optional): Small thumbnails in project cards
- Professional headshot (optional): Small avatar in about section

## Accessibility & Professional Standards
- Full dark/light mode support with consistent theming
- Professional color contrast ratios
- Mobile-responsive design for various viewing contexts
- Fast loading times suitable for employer review scenarios
- Clean, scannable layouts that highlight technical expertise effectively