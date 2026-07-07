import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import CookieBanner from "@/components/cookie-banner";

const BASE_URL = "https://arutechconsultancy.com";
const GA_ID = "G-PZ2FZVD9DN";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Arutech Consultancy Services LLP | AI, Cloud & Web App Development India",
    template: "%s | Arutech Consultancy Services LLP",
  },
  description:
    "Arutech Consultancy Services LLP delivers expert AI/ML solutions, cloud deployment, React web development & React Native mobile apps in India. 50+ projects delivered. Get a free consultation today.",
  keywords: [
    "AI consulting company India",
    "machine learning solutions India",
    "cloud deployment services",
    "React web development India",
    "React Native app development",
    "Next.js development company",
    "software consultancy India",
    "AI ML solutions for business",
    "mobile app development India",
    "Arutech Consultancy",
    "web application development India",
    "IT consultancy services India",
    "Freenoo PDF tools",
  ],
  authors: [{ name: "Arutech Consultancy Services LLP", url: BASE_URL }],
  creator: "Arutech Consultancy Services LLP",
  publisher: "Arutech Consultancy Services LLP",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: BASE_URL },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "500x500" },
    ],
    apple: [
      { url: "/icon.png", sizes: "500x500", type: "image/png" },
    ],
    shortcut: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Arutech Consultancy Services LLP",
    title: "Arutech Consultancy | AI, Cloud & Web Development India",
    description:
      "Expert AI/ML solutions, cloud deployment, React web & React Native mobile app development. Build smarter, deploy faster with Arutech.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Arutech Consultancy Services LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@arutech_consult",
    creator: "@arutech_consult",
    title: "Arutech Consultancy | AI, Cloud & Web Development India",
    description:
      "Expert AI/ML solutions, cloud deployment, React web & React Native mobile development.",
    images: [`${BASE_URL}/og-image.png`],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",
  },
};

const schemaOrg = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Arutech Consultancy Services LLP",
  url: BASE_URL,
  logo: { "@type": "ImageObject", url: `${BASE_URL}/images/logo.png` },
  email: "hello@arutechconsultancy.com",
  sameAs: [
    "https://www.facebook.com/arutechconsultancy",
    "https://www.youtube.com/@ArutechConsultancy",
    "https://www.instagram.com/arutech_consultancy",
    "https://www.linkedin.com/company/arutech-consultancy",
    "https://x.com/arutech_consult",
  ],
});

const schemaWebsite = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Arutech Consultancy Services LLP",
  publisher: { "@id": `${BASE_URL}/#organization` },
});

const schemaFaq = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Arutech Consultancy offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arutech offers AI & ML solutions, cloud deployment, React web app development, and React Native Android mobile app development.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Arutech Consultancy based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arutech Consultancy Services LLP is based in India and works with clients remotely.",
      },
    },
    {
      "@type": "Question",
      name: "What products has Arutech built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arutech built Freenoo (free PDF tools at freenoo.com), Instachat (Android social app), and Moneto AI Terminal (coming soon).",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Arutech Consultancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact via the form at arutechconsultancy.com/#contact or email hello@arutechconsultancy.com.",
      },
    },
  ],
});

const gaScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');
`.trim();

// Runs synchronously before first paint to apply the saved theme,
// preventing a flash of the default dark theme for light/normal users.
const themeInitScript = `(function(){try{var t=localStorage.getItem('arutech-theme-v2')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Theme init — must be first to avoid FOUC */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics 4 */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script dangerouslySetInnerHTML={{ __html: gaScript }} />

        {/* JSON-LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaOrg }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaWebsite }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaFaq }} />
      </head>
      <body className="font-body antialiased transition-colors duration-300">
        <ThemeProvider>
          {children}
          <Analytics />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
