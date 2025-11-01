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
- **Express.js** with TypeScript for API routes
- **In-memory storage** for development (production-ready interface for future database migration)
- **Nodemailer** for email notifications (optional SMTP configuration)
- **Zod** for request validation and type-safe schemas
- **Drizzle ORM** schemas defined (ready for PostgreSQL when needed)

### Development Tools
- **Vite** for fast development server and optimized production builds
- **TSX** for TypeScript execution in development
- **ESBuild** for server-side bundling in production
- **Drizzle Kit** available for future database migrations

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/travelbuff-concierge.git
   cd travelbuff-concierge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   
   The application will be available at **http://localhost:5000**
   
   Both the Express backend and Vite frontend are served on the same port through Vite's middleware system.

### Optional Configuration

#### Email Notifications

To enable email notifications for consultation requests, create a `.env` file in the root directory:

```env
# SMTP Configuration (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
NOTIFICATION_EMAIL=notifications@travelbuff.com
```

Without SMTP configuration, the application will still work but email notifications will be disabled. All form submissions are logged to the console.

#### Future Database Migration

The application currently uses in-memory storage. Database schemas are defined using Drizzle ORM for future PostgreSQL migration:

```env
DATABASE_URL=postgresql://user:password@host:port/database
```

Then run migrations:
```bash
npm run db:push
```

**Note:** Database migration requires updating `server/storage.ts` to use a PostgreSQL implementation instead of `MemStorage`.

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
├── server/                   # Backend Express application
│   ├── routes.ts            # API route definitions
│   ├── storage.ts           # Storage interface and implementations
│   ├── email.ts             # Email service
│   └── index.ts             # Server entry point
├── shared/                   # Shared types and schemas
│   └── schema.ts            # Drizzle ORM schemas and Zod validators
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

## 📧 Email Configuration

The application includes email notification capabilities via Nodemailer. Email service will gracefully degrade if SMTP credentials are not configured.

### Gmail Setup Example
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password (Google Account > Security > App Passwords)
3. Use the app password in `SMTP_PASS` environment variable

## 🔒 Security

- Environment-based configuration for sensitive SMTP credentials
- Input validation with Zod schemas on all API endpoints
- Type-safe data handling with TypeScript across the stack
- Future-ready for SQL injection protection via Drizzle ORM

## 🌐 Deployment

### Replit Deployment (Recommended)
The application is configured for seamless deployment on Replit:
1. Connect your GitHub repository to Replit
2. Set environment variables in Replit Secrets (SMTP credentials if desired)
3. Click "Run" - the `npm run dev` command starts the application

### Production Build
```bash
# Build the frontend and bundle the backend
npm run build

# Start the production server
npm start
```

The build process:
- Vite builds the React frontend to `dist/public`
- ESBuild bundles the Express server to `dist/index.js`
- Production server serves the static frontend and API routes

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
