# Arutech Consultancy Services LLP — Website

Production-ready Next.js 14 website for Arutech Consultancy Services LLP.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Sora (display) + DM Sans (body) + JetBrains Mono

## Project Structure

```
arutech-website/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Home page (section assembly)
│   ├── globals.css         # Global styles, animations, utilities
│   └── api/
│       └── contact/
│           └── route.ts    # POST /api/contact — validated form handler
├── components/
│   ├── navbar.tsx          # Sticky nav with scroll detection
│   ├── footer.tsx          # Full footer with links + socials
│   └── sections/
│       ├── hero.tsx        # Hero with mock dashboard UI
│       ├── services.tsx    # 4 service cards
│       ├── products.tsx    # Freenoo (live) + Moneto (coming soon) + Future AI
│       ├── process.tsx     # 4-step horizontal process flow
│       ├── portfolio.tsx   # Selected work cards with mock UI previews
│       ├── trust.tsx       # Highlights + testimonials
│       ├── vision.tsx      # Vision section
│       └── contact.tsx     # Contact form wired to API route
├── lib/
│   └── utils.ts            # cn(), delay(), truncate(), formatNumber()
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Contact API

`POST /api/contact`

**Request body:**
```json
{
  "name": "string (min 2 chars)",
  "email": "valid email",
  "message": "string (10–2000 chars)"
}
```

**Success response:**
```json
{ "success": true, "message": "Thank you for reaching out..." }
```

**Error response:**
```json
{ "success": false, "error": "Validation message" }
```

To wire up email delivery in production, integrate SendGrid, Nodemailer, or Resend inside `app/api/contact/route.ts`.

## Customisation

- **Colors**: Edit `tailwind.config.js` — `navy`, `accent`, and `teal` palettes
- **Fonts**: Update Google Fonts import in `app/globals.css` and `app/layout.tsx`
- **Content**: All section copy lives inside each component in `components/sections/`
- **Social links**: Update hrefs in `components/footer.tsx`
- **Freenoo URL**: Update `href` in `components/sections/products.tsx` and `components/navbar.tsx`
