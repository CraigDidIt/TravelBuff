# TRAVELBUFF CONCIERGE SERVICES - DESIGN GUIDELINES

## DESIGN APPROACH

**Philosophy:** Emotional storytelling through authentic imagery (Travelshift approach) + bold typography confidence (Oakame) + technical credibility (Photoncycle) + dramatic contrast sections (Autex)

**Target Experience:** Premium, culturally-focused travel concierge that transforms travel from transactional to transformative

## TYPOGRAPHY SYSTEM

**Primary Fonts:**
- **Headlines:** Playfair Display (serif, elegant, culturally sophisticated)
  - Hero: 72px desktop / 42px mobile
  - Section Headlines: 48-56px desktop / 32-40px mobile
  - Service Numbers: 180px (outlined style, positioned behind headlines)
  
- **Body & UI:** Inter (sans-serif, clean, readable)
  - Body Copy: 20px desktop / 18px mobile, line-height 1.7
  - Subheadlines: 24px desktop / 18px mobile
  - Eyebrow Text: 14px, uppercase, tracking: 2px
  - Stats/Numbers: 96px

**Font Loading:** Via Google Fonts CDN

## LAYOUT SYSTEM

**Spacing Primitives:** Use Tailwind units: 2, 4, 8, 12, 16, 20, 32, 40, 60, 80

**Container Widths:**
- Max content width: 1200px
- Text blocks: 480-650px max-width
- Stats section: 1200px centered

**Section Heights:**
- Hero: 100vh desktop / 85vh mobile
- Service sections: Minimum 80vh each
- Other sections: Natural content height with consistent vertical rhythm

**Vertical Rhythm:**
- Desktop sections: py-20 to py-32
- Mobile sections: py-12 to py-16

## COLOR PALETTE

- **Navy:** #1F4788 (primary text, headings)
- **Gold:** #C9A961 (primary CTA backgrounds, accents)
- **Coral:** #FF6B6B (secondary accents, eyebrow text)
- **Cream/Ivory:** #F8F6F0 (section backgrounds for warmth)
- **Teal:** For Caribbean-specific elements
- **White:** Primary backgrounds
- **Light Grey:** #F5F5F5 (partner showcase section)

## COMPONENT LIBRARY

### Navigation
- Floating badge top-right hero: "🌐 FLUENT IN English • Español • Français" (semi-transparent white background)
- Standard top navigation with brand and primary CTA

### Buttons & CTAs
**Primary Button:**
- Gold (#C9A961) background with navy text
- Blurred background when placed over images
- No custom hover states (Button component handles)

**Secondary Link:**
- White text with underline on hover (on dark backgrounds)
- Navy text with gold underline (on light backgrounds)
- Arrow notation (→) for directional links

### Icons & Graphics
- **Service Icons:** 80px, gold accent
- **Checkmarks:** Custom gold checkmark for feature bullets
- **Section Numbers:** Massive outlined numbers (180px) positioned behind headlines as design element

### Cards & Content Blocks
**Three-Icon Grid Pattern:**
- Icons: 80px with gold accents
- Labels below in Inter
- Horizontal layout on desktop, stack on mobile

**Feature Bullets:**
- Gold checkmark icon
- Inter font, 18px
- Adequate spacing between items

## SECTION SPECIFICATIONS

### 1. HERO SECTION
**Layout:** Full-screen cinematic (100vh desktop / 85vh mobile)
**Background:** Full-bleed hero image (2400px+ width) with:
- Subtle gradient overlay (30% dark vignette from edges)
- Ken Burns zoom animation (8-10 seconds)

**Content Stack (centered):**
- Eyebrow text (small, uppercase, 2px tracking)
- Main headline (Playfair, 72px/42px)
- Subheadline (Inter, 24px/18px, max-width 650px)
- Dual CTAs (Primary gold button + Secondary text link)
- Animated scroll indicator at bottom

**Animations:**
- Staggered fade-up: headline → subheadline → CTA (0.3s delays)
- Scroll indicator: Animated bounce

### 2. VALUE PROPOSITION
**Layout:** 50/50 split desktop (image left, content right), stack mobile
**Background:** Cream (#F8F6F0)
**Image Treatment:** Soft shadow, 16px border-radius
**Content Padding:** 80px desktop / 40px mobile
**Animations:** Image slides from left, text fades from right (scroll trigger)

**Content Structure:**
- Eyebrow (Coral, uppercase, 14px)
- Section headline (Playfair, 48px)
- Body copy (Inter, 20px, max-width 520px)
- Three-icon grid below

### 3. SERVICES SECTIONS (×3)
**Layout:** Full-width alternating (image/text flip sides for each service)
**Section Height:** Minimum 80vh per service
**Background:** Alternating white and cream for visual rhythm

**Each Service Contains:**
- Massive outlined section number (01, 02, 03 - 180px, positioned behind headline)
- Full-bleed image on one side (50%) with slight parallax
- Content side (50%, centered vertically) with:
  - Eyebrow text (uppercase)
  - Headline (Playfair, 56px)
  - Body copy (Inter, 20px, max-width 480px)
  - Feature bullets with gold checkmarks
  - Text link CTA with arrow
  - Trust badge

**Scroll Animation:** Text slides from opposite direction of image

### 4. IMPACT STATS SECTION
**Background:** White with subtle texture
**Layout:** Centered, max-width 1200px
**Stats Grid:** 2×2 desktop / 1 column mobile

**Stats Design:**
- Large numbers (Playfair, 96px) with countUp animation on scroll
- Labels below (Inter, 18px)
- Centered eyebrow above grid
- Supporting statement below (24px, max-width 700px)

### 5. PARTNER SHOWCASE
**Background:** Light grey (#F5F5F5)
**Layout:** Logo grid - 3 columns desktop / 2 columns mobile
**Logo Treatment:**
- 140px width, auto height, centered
- Greyscale default → Color on hover (0.3s transition)
- 60px spacing between logos

### 6. CONSULTATION/CTA SECTION
**Design:** Full-width, high-contrast section
**Content:** Centered CTA block with primary action

## IMAGES SPECIFICATION

**Required Images (from Kaboompics, StockSnap, Shopify Stock Photos):**

1. **Hero Background:** Cinematic travel moment - Caribbean traveler at scenic Latin American overlook OR intimate cultural interaction OR solo traveler at European bistro (golden hour lighting, 2400px+ width)

2. **Value Proposition:** Cultural connection scene - medical consultation, cooking with locals, or market exploration with guide

3. **Service 1 (Medical Tourism):** Modern Latin American medical facility exterior at golden hour OR professional in consultation

4. **Service 2 (Romantic/Solo):** Couple at European bistro sunset OR solo traveler journaling at scenic overlook

5. **Service 3 (Caribbean Immersion):** European/Latin travelers learning Caribbean cooking OR at authentic festival with locals

6. **Partner Logos:** 6-9 partner logos (medical facilities, hotels, cultural organizations)

**Image Treatment:**
- Full-bleed where specified
- Soft shadows for contained images
- 16px border-radius for content sections
- Warm color grading for Caribbean-focused imagery
- Professional, authentic moments (no stock photo clichés)

## ANIMATIONS & INTERACTIONS

**Use Sparingly - Sophisticated, Not Distracting:**

- **Hero:** Ken Burns slow zoom (8-10s), staggered text fade-up
- **Scroll Indicator:** Gentle bounce animation
- **Service Sections:** Parallax on images, text slide-in from opposite direction
- **Stats:** CountUp animation when entering viewport
- **Partner Logos:** Greyscale to color on hover (0.3s)
- **All animations:** Scroll-triggered using intersection observer

## RESPONSIVE STRATEGY

**Breakpoints:**
- Mobile: base (single column, stack everything)
- Tablet: md (max 2 columns)
- Desktop: lg (full multi-column layouts)

**Mobile Adaptations:**
- Hero: 85vh height
- Split sections: Stack image above content
- Typography: Scale down (72px → 42px for hero, etc.)
- Service sections: Single column, reduced padding
- Stats grid: Single column
- Partner logos: 2 columns

## ACCESSIBILITY

- Maintain WCAG AA contrast ratios
- Proper heading hierarchy (h1 → h6)
- Alt text for all imagery describing cultural context
- Focus states for all interactive elements
- Skip to content link
- Reduced motion preferences respected for animations

## MULTILINGUAL INTEGRATION

- Prominent trilingual badge in hero
- Language selector in navigation
- Support for English, Spanish, French throughout all sections