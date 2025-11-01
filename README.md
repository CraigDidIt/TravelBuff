# Travelbuff Concierge Services

A premium travel concierge landing page connecting Caribbean nationals with transformative global travel experiences and bringing international travelers to authentic Caribbean cultural immersion.

## 🌟 Overview

Travelbuff Concierge Services is a modern single-page web application showcasing curated travel experiences. The platform specializes in three core service areas:

- **Medical Tourism** - Access world-class healthcare with comprehensive travel support
- **Romantic Escapes & Solo Adventures** - Bespoke journeys designed for connection and self-discovery
- **Caribbean Cultural Immersion** - Authentic experiences showcasing Caribbean heritage and culture

## ✨ Current Features

### Multilingual Support
- **Complete i18n implementation** with English, Spanish, and French
- Real-time language switching across all UI components
- Localized content for all service pages and interactive elements

### Fully Responsive Design
- **Mobile-first architecture** tested on iPhone 12, iPhone SE, and desktop viewports
- Touch-optimized buttons with 44px+ minimum touch targets
- Responsive typography and spacing that adapts to screen size
- Cinematic hero sections with dynamic background imagery

### Lead Capture System
- **Consultation request form** with Zod validation
- Email lead capture with source tracking
- Waitlist registration for priority access
- Email notifications for consultation requests (requires SMTP configuration)

### Modern UI/UX
- **Custom design system** with Navy (#1F4788), Gold (#C9A961), Coral (#FF6B6B), and Cream (#F8F6F0) palette
- Lucide React icons throughout for professional appearance
- Smooth scroll animations and transitions
- Accessible Shadcn/ui components built on Radix UI primitives

### Multi-Page Structure
- Homepage with hero, services showcase, stats, and contact sections
- Dedicated service pages: Medical Tourism, Romantic/Solo Adventures, Caribbean Immersion
- Mobile-responsive navigation with hamburger menu
- SEO-ready page structure

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript for type-safe component development
- **Vite** for lightning-fast development and optimized builds
- **Wouter** for lightweight client-side routing
- **TanStack Query (React Query)** for server state management
- **Tailwind CSS** for utility-first styling
- **Shadcn/ui** component library built on Radix UI primitives
- **React Hook Form** with Zod validation
- **Lucide React** for icon system

### Backend
- **Supabase** for PostgreSQL database and real-time APIs
- **Row Level Security (RLS)** for data protection
- **Zod** for client-side validation and type-safe schemas
- **Drizzle ORM** schemas defined for type consistency

### Development Tools
- **Vite** for fast development server and optimized production builds
- **TSX** for TypeScript execution in development
- **ESBuild** for server-side bundling in production
- **Drizzle Kit** available for future database migrations

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** installed
- **Supabase account** (free tier available at https://supabase.com)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/CraigDidIt/TravelBuff.git
   cd TravelBuff
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   
   Follow the detailed guide in **[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)** to:
   - Create your Supabase project
   - Run the database schema
   - Get your API credentials

4. **Configure environment variables**
   
   Copy `.env.example` to `.env` and add your Supabase credentials:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```
   
   The application will be available at **http://localhost:5000**

### Testing Form Submissions

After setup, test that forms are working:

1. Submit the consultation form on the homepage
2. Check your Supabase dashboard > Table Editor > `consultations` table
3. Your submission should appear there instantly

All form data is saved directly to Supabase with Row Level Security protecting the data.

## 📁 Project Structure

```
travelbuff-concierge/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── ui/          # Shadcn/ui base components
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── ServiceSection.tsx
│   │   │   ├── ConsultationForm.tsx
│   │   │   ├── BookingCalendar.tsx
│   │   │   └── ...
│   │   ├── contexts/        # React context providers
│   │   │   └── LanguageContext.tsx
│   │   ├── lib/             # Utilities and configurations
│   │   │   ├── translations.ts
│   │   │   └── queryClient.ts
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── MedicalTourism.tsx
│   │   │   ├── RomanticSolo.tsx
│   │   │   └── CaribbeanImmersion.tsx
│   │   └── App.tsx          # Main application component
│   └── index.html
├── shared/                   # Shared types and schemas
│   └── schema.ts            # Drizzle ORM schemas and Zod validators
├── .github/workflows/       # GitHub Actions workflows
│   └── deploy.yml          # Automated GitHub Pages deployment
└── attached_assets/         # Static assets (images, etc.)
```

## 🎨 Design System

### Color Palette
- **Navy** (#1F4788) - Primary brand color, headlines
- **Gold** (#C9A961) - Accent color, CTAs, luxury elements
- **Coral** (#FF6B6B) - Secondary accent, highlights
- **Cream** (#F8F6F0) - Background, soft contrast

### Typography
- **Playfair Display** - Serif font for headlines and elegant typography
- **Inter** - Sans-serif for body text and UI elements

### Responsive Breakpoints
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 💾 Database

The application uses Supabase as its backend database with the following tables:

- **consultations** - Consultation requests from the contact form
- **email_leads** - Email captures from guide downloads
- **waitlist** - Waitlist signups for priority access
- **bookings** - Calendar booking requests
- **partners** - Partner showcase data (future feature)
- **testimonials** - Customer testimonials (future feature)

All tables use Row Level Security (RLS) policies that allow public form submissions but restrict viewing to authenticated users.

## 🔒 Security

- **Row Level Security (RLS)** on all Supabase tables
- Client-side input validation with Zod schemas
- Type-safe data handling with TypeScript across the stack
- Environment variables for sensitive Supabase credentials
- Anon key safely used on frontend (protected by RLS policies)

## 🌐 Deployment

### GitHub Pages (Recommended)

The application is configured for automatic deployment to GitHub Pages. See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for complete setup instructions.

**Quick Summary:**
1. Add your Supabase credentials as GitHub Secrets
2. Enable GitHub Pages with "GitHub Actions" as the source
3. Push to `main` branch - automatic deployment!

Your live site will be at: **https://craigdidit.github.io/TravelBuff/**

The GitHub Actions workflow automatically:
- Builds the static site with the correct base path
- Injects Supabase environment variables
- Deploys to GitHub Pages on every push

### Local Production Build

Test the production build locally:

```bash
# Build with GitHub Pages base path
npm exec vite build -- --base=/TravelBuff/

# Serve the build locally
npx serve dist/public -l 3000
```

Visit http://localhost:3000 to test the production build.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the package.json for details.

## 📞 Contact

For inquiries about Travelbuff Concierge Services:
- Website: [Your website URL]
- Email: contact@travelbuff.com

---

Built with ❤️ for authentic travel experiences
