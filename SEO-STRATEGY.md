# Arutech Consultancy — Full SEO Execution Plan
## Target: C Grade → A Grade

---

## ✅ ALREADY IMPLEMENTED IN CODE

| Item | Status | File |
|------|--------|------|
| Optimised meta title + description | ✅ Done | `app/layout.tsx` |
| Keywords array (15+ targeted) | ✅ Done | `app/layout.tsx` |
| Open Graph tags (full) | ✅ Done | `app/layout.tsx` |
| Twitter Card tags | ✅ Done | `app/layout.tsx` |
| Canonical URL | ✅ Done | `app/page.tsx` |
| robots.txt | ✅ Done | `public/robots.txt` |
| XML Sitemap (dynamic) | ✅ Done | `app/sitemap.ts` |
| Organization Schema | ✅ Done | `components/schema-markup.tsx` |
| WebSite Schema + SearchAction | ✅ Done | `components/schema-markup.tsx` |
| LocalBusiness Schema | ✅ Done | `components/schema-markup.tsx` |
| Service Schema (×4 services) | ✅ Done | `components/schema-markup.tsx` |
| FAQ Schema (5 questions) | ✅ Done | `components/schema-markup.tsx` |
| BreadcrumbList Schema | ✅ Done | `components/schema-markup.tsx` |
| Security headers (X-Frame, CSP, HSTS) | ✅ Done | `next.config.js` |
| www → non-www redirect | ✅ Done | `next.config.js` |
| Image optimization (AVIF/WebP) | ✅ Done | `next.config.js` |
| Static asset caching (1 year) | ✅ Done | `next.config.js` |
| Facebook Pixel (env-gated) | ✅ Done | `app/layout.tsx` |
| Cookie consent banner | ✅ Done | `components/cookie-banner.tsx` |
| Privacy Policy page | ✅ Done | `app/privacy-policy/page.tsx` |
| Terms of Service page | ✅ Done | `app/terms-of-service/page.tsx` |
| Cookie Policy page | ✅ Done | `app/cookie-policy/page.tsx` |

---

## 🔧 MANUAL SETUP REQUIRED (Step-by-step)

### 1. Google Search Console — PRIORITY: 🔴 HIGH

1. Go to https://search.google.com/search-console
2. Add property → URL prefix → `https://arutechconsultancy.com`
3. Choose "HTML tag" verification method
4. Copy the content value from the meta tag
5. Add to Vercel env: `NEXT_PUBLIC_GSC_VERIFICATION=your_code`
6. After deployment, click Verify in GSC
7. Submit sitemap: GSC → Sitemaps → `https://arutechconsultancy.com/sitemap.xml`

### 2. Google Analytics 4 — PRIORITY: 🔴 HIGH

1. Go to https://analytics.google.com → Create property
2. Property name: `arutechconsultancy.com` | Country: India | Currency: INR
3. Create a Web data stream → enter your URL
4. Copy Measurement ID (G-XXXXXXXXXX)
5. Install: `npm install @next/third-parties`
6. In `app/layout.tsx` add:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'
// Inside <body>:
<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ID!} />
```
7. Add to Vercel env: `NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX`

### 3. Facebook Pixel — PRIORITY: 🟡 MEDIUM

1. Go to https://business.facebook.com → Events Manager → Connect Data Sources → Web
2. Create Pixel → name: `Arutech Website`
3. Copy the Pixel ID
4. Add to Vercel env: `NEXT_PUBLIC_FB_PIXEL_ID=your_pixel_id`
5. The pixel code is already in `app/layout.tsx` — it activates when the env var is set

### 4. OG Image — PRIORITY: 🔴 HIGH

Create a 1200×630px image at `public/og-image.png`:
- Dark navy background (#020B18)
- Arutech logo top-left
- Headline: "Build Smarter. Deploy Faster."
- Subtext: "AI • Cloud • Web • Mobile"
- URL: arutechconsultancy.com
- Use Figma/Canva and export as PNG

### 5. Favicon — PRIORITY: 🟡 MEDIUM

Add these to `public/`:
- `favicon.ico` (32×32)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180×180)
- `site.webmanifest`

Add to `app/layout.tsx` metadata:
```tsx
icons: {
  icon: '/favicon.ico',
  apple: '/apple-touch-icon.png',
  shortcut: '/favicon-32x32.png',
},
manifest: '/site.webmanifest',
```

### 6. Google My Business — PRIORITY: 🔴 HIGH

1. Go to https://business.google.com
2. Add business: "Arutech Consultancy Services LLP"
3. Category: "Software Company" / "IT Consulting Agency"
4. Add website, phone, description, photos
5. Post weekly updates about projects/products
6. Ask clients (Kamaldeep Singh, Sandeep Yadav) to leave Google Reviews

---

## 📧 EMAIL AUTHENTICATION (SPF, DKIM, DMARC)
### PRIORITY: 🔴 HIGH — Prevents spam folder, improves deliverability

Add these DNS records at your domain registrar:

### SPF Record
```
Type: TXT
Host: @
Value: v=spf1 include:_spf.google.com include:sendgrid.net ~all
TTL: 3600
```

### DKIM (Gmail/Google Workspace)
1. Google Admin → Apps → Gmail → Authenticate email → Generate DKIM key
2. Add the generated TXT record to DNS

### DMARC Record
```
Type: TXT
Host: _dmarc
Value: v=DMARC1; p=quarantine; pct=100; rua=mailto:hello@arutechconsultancy.com; ruf=mailto:hello@arutechconsultancy.com; sp=quarantine; adkim=s; aspf=s
TTL: 3600
```

### Verify at: https://mxtoolbox.com/dmarc.aspx

---

## 🔗 BACKLINK STRATEGY (30+ Sources)
### PRIORITY: 🔴 HIGH

#### Tier 1 — SaaS & Startup Directories (Submit Immediately)
| Site | URL | DA | Type |
|------|-----|----|------|
| Product Hunt | producthunt.com | 90 | Product launch |
| AngelList / Wellfound | wellfound.com | 85 | Startup listing |
| Crunchbase | crunchbase.com | 92 | Company profile |
| G2 | g2.com | 89 | Software listing |
| Capterra | capterra.com | 87 | Software directory |
| Clutch | clutch.co | 82 | IT services |
| GoodFirms | goodfirms.co | 74 | Software agencies |
| DesignRush | designrush.com | 68 | Agency listing |
| Sortlist | sortlist.in | 65 | Agency directory |
| TechBehemoths | techbehemoths.com | 58 | IT companies |

#### Tier 2 — Indian Tech Directories
| Site | URL | Notes |
|------|-----|-------|
| IndiaMART | indiamart.com | List as IT services provider |
| Justdial | justdial.com | Local business listing |
| Sulekha | sulekha.com | IT services |
| YellowPages India | yellowpages.in | Business listing |
| TradeIndia | tradeindia.com | Business directory |
| StartupIndia | startupindia.gov.in | Government startup registry |
| NASSCOM | nasscom.in | Tech industry body |

#### Tier 3 — Guest Posting (Tech Blogs)
| Site | DA | Topic |
|------|-----|-------|
| Dev.to | 75 | AI/ML tutorials, React tips |
| Hashnode | 72 | Web dev articles |
| Medium | 95 | Thought leadership |
| HackerNoon | 78 | Tech deep-dives |
| Smashing Magazine | 88 | Web dev (pitch required) |
| CSS-Tricks | 85 | Frontend (pitch required) |
| LogRocket Blog | 70 | React/Next.js |
| FreeCodeCamp | 82 | Tutorials |
| DZone | 76 | Cloud/DevOps |

#### Tier 4 — Forum & Community Links
| Platform | Strategy |
|----------|----------|
| Reddit r/webdev, r/MachineLearning | Helpful answers with profile link |
| Quora | Answer AI/cloud questions, link to blog |
| Stack Overflow | Answer technical questions |
| GitHub | Open source contributions, profile link |
| IndiaHacks | Participate in hackathons |

---

### 📝 Outreach Email Templates

**Template 1 — Guest Post Pitch**
```
Subject: Guest Post Pitch: "5 Ways React Native is Changing Mobile Dev in India"

Hi [Editor Name],

I'm Somdev from Arutech Consultancy (arutechconsultancy.com), a software 
consultancy based in India. We've delivered 50+ projects in AI/ML, cloud 
deployment, and React development.

I'd love to contribute a guest post to [Blog Name] on one of these topics:
• "Building Production-Ready AI Pipelines with FastAPI and React"
• "React Native vs Flutter: A 2026 Comparison from Real Projects"  
• "How to Deploy Next.js Apps on Vercel with Zero Downtime"

Each piece would be 1,500+ words, original, with code examples — nothing 
AI-generated.

Would any of these work for your audience?

Best,
Somdev
Arutech Consultancy Services LLP
arutechconsultancy.com
```

**Template 2 — Directory Submission Follow-up**
```
Subject: Arutech Consultancy — Profile Review Request

Hi [Team],

I recently submitted Arutech Consultancy Services LLP for listing on 
[Directory Name]. We're an India-based IT consultancy specialising in 
AI solutions, cloud deployment, and web/mobile development.

Profile URL: [submitted URL]
Website: https://arutechconsultancy.com

Could you confirm receipt and let me know if any additional information 
is needed?

Thanks,
Somdev
```

---

## 🎯 KEYWORD STRATEGY

### Primary Keywords (High Intent)
| Keyword | Monthly Volume | Difficulty | Target Page |
|---------|---------------|------------|-------------|
| AI consulting company India | 320 | Medium | Homepage |
| software development company India | 2,400 | High | Homepage |
| React Native app development India | 880 | Medium | Services |
| Next.js development company | 590 | Medium | Services |
| cloud deployment services India | 480 | Low | Services |
| machine learning solutions India | 720 | Medium | Services |

### Long-tail Keywords (Quick Wins)
| Keyword | Volume | Difficulty |
|---------|--------|------------|
| hire React Native developer India | 260 | Low |
| AI ML integration for business India | 110 | Low |
| Next.js web development agency India | 90 | Low |
| free PDF tools online India | 590 | Low |
| software consultancy LLP India | 70 | Low |

### Content Gaps — Blog Posts to Write
1. "How We Built Freenoo: A Free PDF Platform with Next.js" → targets SaaS builders
2. "Top 5 AI Use Cases for Indian SMEs in 2026" → targets decision makers
3. "React Native vs Kotlin for Android: Our 2026 Take" → developer audience
4. "How to Deploy a Node.js App on AWS in 2026" → cloud seekers
5. "Case Study: Building Shri Anandam Sweets Website" → local + restaurant industry

---

## 📱 SOCIAL CONTENT PLAN

### YouTube (@ArutechConsultancy) — Post 2×/month
| Video | Topic |
|-------|-------|
| Demo: Freenoo PDF tools walkthrough | Product awareness |
| Tutorial: Deploy Next.js on Vercel in 5 minutes | Developer audience |
| Behind the scenes: Building Shri Anandam website | Client showcase |
| Tutorial: Building a REST API with Node.js | Developer audience |
| AI for small businesses — getting started | Business audience |

### Instagram (@arutech_consultancy) — Post 3×/week
- Mon: Tech tip carousel (React/Next.js/AI)
- Wed: Project showcase / before-after
- Fri: Team culture / behind the scenes

### LinkedIn — Post 2×/week
- Case studies from delivered projects
- AI/cloud industry insights
- Company milestones (Freenoo launch, Instachat progress)

---

## ⚡ CORE WEB VITALS CHECKLIST

### Already handled by Next.js + Vercel:
- ✅ LCP: Images with `priority` prop + AVIF/WebP
- ✅ CLS: Explicit image dimensions in all `<Image>` components
- ✅ TTFB: Vercel Edge Network CDN
- ✅ FID: Minimal JS, deferred non-critical scripts

### Additional steps:
1. **Font display swap** — add `&display=swap` to Google Fonts URL (already done)
2. **Preload hero image** — add `priority` to hero logo
3. **Lazy load** Vanta.js — already done (loaded after mount)
4. **Bundle analysis**: `npm run build` then check bundle sizes
5. **Image compression**: Run all PNGs through https://squoosh.app before uploading

---

## 🏆 PRIORITY EXECUTION ORDER

| Priority | Task | Time |
|----------|------|------|
| 🔴 1 | Submit to Google Search Console + sitemap | 30 min |
| 🔴 2 | Set up Google Analytics 4 | 30 min |
| 🔴 3 | Create OG image (1200×630) | 1 hour |
| 🔴 4 | Add SPF/DKIM/DMARC DNS records | 30 min |
| 🔴 5 | Submit to Google My Business | 45 min |
| 🔴 6 | Submit to Clutch, GoodFirms, Crunchbase | 2 hours |
| 🟡 7 | Create Product Hunt launch for Freenoo | 2 hours |
| 🟡 8 | Set up Facebook Pixel | 20 min |
| 🟡 9 | Write first 2 blog posts | 4 hours |
| 🟡 10 | Submit to 10 directories | 3 hours |
| 🟢 11 | Guest post outreach (5 blogs) | 2 hours |
| 🟢 12 | Set up weekly social posting schedule | 1 hour |
