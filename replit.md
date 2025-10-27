# Travelbuff Concierge Services

## Overview

Travelbuff Concierge Services is a premium travel concierge platform that connects Caribbean nationals with global travel experiences and brings international travelers to authentic Caribbean cultural experiences. The application is a full-stack web solution featuring a high-converting landing page with sophisticated animations, consultation request management, and email notification capabilities.

The platform positions itself as a transformative travel experience creator rather than a transactional booking service, focusing on medical tourism, romantic getaways, solo adventures, and cultural immersion experiences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, chosen for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (simpler alternative to React Router)
- TanStack Query (React Query) for server state management and API data fetching

**UI Component System:**
- Shadcn/ui component library built on Radix UI primitives, providing accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for theming (navy, gold, coral, cream color palette)
- Component aliasing via path resolution (@/components, @/lib, etc.)

**Design Implementation:**
- Playfair Display (serif) for headlines and elegant typography
- Inter (sans-serif) for body text and UI elements
- Google Fonts CDN integration for web font loading
- Animation system using CSS transitions and Tailwind animation utilities
- Ken Burns effect for hero background images
- Intersection Observer API for scroll-triggered animations

**Page Structure:**
- Single-page application with modular component architecture
- Sections: Hero, Value Proposition, Service Sections, Stats, Partner Showcase, Contact Form, Footer
- Responsive design with mobile-first breakpoints
- Full viewport height hero section with cinematic imagery

### Backend Architecture

**Server Framework:**
- Express.js for HTTP server and API routing
- TypeScript for type safety across the stack
- Custom middleware for request logging and JSON parsing

**API Design:**
- RESTful endpoints for consultation management
- POST /api/consultations - Create new consultation request
- GET /api/consultations - Retrieve all consultations
- GET /api/consultations/:id - Retrieve specific consultation
- Zod schema validation for request data integrity

**Data Storage:**
- In-memory storage implementation (MemStorage class) for development/demo
- Drizzle ORM configured for PostgreSQL (production-ready schema defined)
- Database schema includes consultations table with fields: id, name, email, phone, serviceInterest, message, createdAt
- UUID primary keys with automatic timestamp tracking

**Email Service:**
- Nodemailer for SMTP email delivery
- Graceful degradation when SMTP credentials not configured
- Consultation notification emails sent to business address
- Environment variable configuration for flexibility across deployment environments

### External Dependencies

**Database:**
- PostgreSQL via Neon Database (@neondatabase/serverless driver)
- Drizzle ORM for type-safe database queries and migrations
- Drizzle Kit for schema management and migrations
- Connection pooling for serverless environments

**Third-Party Services:**
- SMTP email service (configurable provider via environment variables)
- Google Fonts CDN for typography assets
- Stock imagery stored in attached_assets directory

**Development Tools:**
- Replit-specific plugins for development experience (cartographer, dev banner, runtime error overlay)
- ESBuild for server-side bundling in production
- TypeScript compiler for type checking
- PostCSS with Autoprefixer for CSS processing

**UI Libraries:**
- Radix UI primitives (26+ component packages for dialogs, dropdowns, forms, etc.)
- class-variance-authority for type-safe component variants
- clsx and tailwind-merge for conditional className composition
- cmdk for command palette functionality
- react-hook-form with Zod resolver for form state and validation
- date-fns for date manipulation
- lucide-react for icon components

**Session & State Management:**
- connect-pg-simple for PostgreSQL session storage (configured but not actively used in current implementation)
- TanStack Query for client-side data fetching and caching