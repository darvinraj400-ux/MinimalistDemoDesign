# FORM / FIELD — Architecture Studio Portfolio

A minimalist portfolio website for FORM / FIELD, an architecture studio specializing in residential spaces and adaptive reuse. Built with extreme restraint, architectural precision, and mobile-first responsiveness.

## Overview

This is a complete, production-ready portfolio website featuring:
- Minimalist design with white canvas, black typography, and fine rules
- Mobile-first responsive layout (320px → desktop)
- Smooth animations and page transitions
- Keyboard-accessible image viewer with swipe support
- Filterable project archive
- Expandable project metadata
- Contact form with validation
- Architectural drawings as SVG placeholders

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v6 (HashRouter)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + Space Mono (Google Fonts)

## Design Principles

- **Extreme restraint**: No gradients, decorative blobs, or unnecessary animations
- **Architectural grid**: 12-column grid inspired by architectural plans
- **Typography-driven**: Modular scale with precise spacing
- **Intentional motion**: Subtle transitions that enhance, not distract
- **Mobile-first**: Recomposed layouts for small screens, not just shrunk desktop

## Features

### Pages
- **Homepage**: Hero image, selected works, philosophy statement
- **Projects Archive**: Filterable by type and year, grouped by year
- **Project Detail**: Full project documentation with images, drawings, materials, rationale
- **Studio**: Philosophy, team, process, recognition
- **Contact**: Project inquiry form with validation

### Interactions
- Expandable project metadata (accordion)
- Keyboard-accessible image viewer (Escape, Arrow keys)
- Touch swipe navigation in image viewer
- Smooth page transitions
- Scroll-triggered reveals
- Form validation with error states
- Loading states for images

### Accessibility
- Respects `prefers-reduced-motion`
- Keyboard navigation throughout
- Semantic HTML
- ARIA labels and roles
- Focus indicators
- Touch targets ≥ 44px
- Safe area support for notched devices

## Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd form-field-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Type Checking

```bash
npm run typecheck
```

## Project Structure

```
src/
├── components/
│   ├── ArchImage.tsx          # Robust image component with loading/error states
│   ├── Footer.tsx             # Site footer
│   ├── ImageViewer.tsx        # Keyboard-accessible image viewer
│   ├── Navigation.tsx         # Responsive navigation with mobile menu
│   ├── PageTransition.tsx     # Page transition wrapper
│   └── Reveal.tsx             # Scroll-triggered animations
├── data/
│   ├── drawings.ts            # SVG architectural drawings
│   └── projects.ts            # Project data and types
├── pages/
│   ├── Contact.tsx            # Contact form page
│   ├── Home.tsx               # Homepage
│   ├── ProjectDetail.tsx      # Individual project page
│   ├── Projects.tsx           # Project archive
│   └── Studio.tsx             # Studio information
├── App.tsx                    # Main app with routing
├── index.css                  # Global styles and design system
└── main.tsx                   # Entry point
```

## Design System

### Typography
- **Display**: Space Mono, clamp(2rem, 5vw, 4.5rem)
- **Heading**: Space Mono, clamp(1.25rem, 2.5vw, 1.75rem)
- **Body**: Inter, clamp(0.9375rem, 1.2vw, 1.0625rem)
- **Caption**: Space Mono, 0.6875rem, uppercase

### Colors
- **Ink**: #0a0a0a (primary text)
- **Paper**: #ffffff (background)
- **Rule**: #e0e0e0 (borders)
- **Muted**: #6b6b6b (secondary text)
- **Subtle**: #f5f5f5 (backgrounds)

### Spacing
- Container: max-width 1440px, padding clamp(1.25rem, 4vw, 3rem)
- Grid: 12-column on desktop, single column on mobile
- Touch targets: minimum 44×44px

## Images

The project uses AI-generated architectural photographs. Images are stored as URLs in `src/data/projects.ts`. The `ArchImage` component provides:
- Loading spinners
- Error fallbacks
- Smooth fade-in transitions
- SVG data URL support for architectural drawings

## Customization

### Adding Projects

Edit `src/data/projects.ts` and add a new project object:

```typescript
{
  id: "project-slug",
  title: "Project Name",
  subtitle: "Brief description",
  year: 2024,
  type: "Residential", // or "Adaptive Reuse", "Cultural"
  location: "City, Country",
  area: "XXX m²",
  status: "Completed",
  materials: ["Material 1", "Material 2"],
  heroImage: { src: "url", alt: "description", caption: "caption" },
  images: [...],
  description: "Full description",
  rationale: "Design rationale",
  drawings: ["Drawing 1", "Drawing 2"]
}
```

### Modifying Colors

Edit CSS custom properties in `src/index.css`:

```css
@theme {
  --color-ink: #0a0a0a;
  --color-paper: #ffffff;
  --color-rule: #e0e0e0;
  --color-muted: #6b6b6b;
  --color-subtle: #f5f5f5;
}
```

### Adjusting Animations

Animation durations and easing are defined in individual components. Key files:
- `PageTransition.tsx`: Page enter/exit
- `Reveal.tsx`: Scroll-triggered reveals
- `ImageViewer.tsx`: Image transitions

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- Lazy-loaded images
- Optimized bundle size (~106KB gzipped JS)
- Efficient animations using transform and opacity
- Minimal re-renders with React best practices

## License

This project is provided as-is for educational and portfolio purposes.

## Credits

- Architecture photography: AI-generated
- Typography: Inter by Rasmus Andersson, Space Mono by Colophon
- Icons: Lucide React
- Design inspiration: Tadao Ando, Peter Zumthor, John Pawson

---

**FORM / FIELD** — Spaces shaped by restraint
