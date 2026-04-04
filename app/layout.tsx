// import type { Metadata } from "next";
// import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
// import { Analytics } from "@vercel/analytics/next"
// import CookieBanner from "@/components/cookie-banner";

// export const metadata: Metadata = {
//   title: "Arutech Consultancy Services LLP | AI, Cloud & Web Solutions",
//   description:
//     "Arutech builds intelligent software systems — from AI/ML solutions and cloud deployments to web and mobile applications. Products: Freenoo, Moneto AI Terminal, Instachat.",
//   keywords: "AI consulting, machine learning, cloud deployment, React development, React Native, web applications, Freenoo, Moneto, Instachat",
//   openGraph: {
//     title: "Arutech Consultancy Services LLP",
//     description: "Building intelligent software for the modern era.",
//     url: "https://arutechconsultancy.com",
//     siteName: "Arutech",
//     locale: "en_US",
//     type: "website",
//   },
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className="font-body antialiased transition-colors duration-300">
//         <ThemeProvider>
//           {children}
//           <Analytics />
//           <CookieBanner />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }



import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import CookieBanner from "@/components/cookie-banner";
import SchemaMarkup from "@/components/schema-markup";
import Script from "next/script";

const BASE_URL = "https://arutechconsultancy.com";

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
    "cloud application deployment",
    "mobile app development India",
    "Arutech Consultancy",
    "web application development India",
    "software development company India",
    "IT consultancy services India",
    "Freenoo PDF tools",
  ],
  authors: [{ name: "Arutech Consultancy Services LLP", url: BASE_URL }],
  creator: "Arutech Consultancy Services LLP",
  publisher: "Arutech Consultancy Services LLP",
  category: "Technology",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Arutech Consultancy Services LLP",
    title: "Arutech Consultancy | AI, Cloud & Web Development India",
    description:
      "Expert AI/ML solutions, cloud deployment, React web & React Native mobile app development. Build smarter, deploy faster with Arutech.",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Arutech Consultancy Services LLP" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@arutech_consult",
    creator: "@arutech_consult",
    title: "Arutech Consultancy | AI, Cloud & Web Development India",
    description: "Expert AI/ML solutions, cloud deployment, React web & React Native mobile development.",
    images: [`${BASE_URL}/og-image.png`],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",
  },
};

const GA_ID = "G-PZ2FZVD9DN";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ── Google Analytics 4 ── */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* ── Facebook Pixel (optional — set env var to activate) ── */}
        {process.env.NEXT_PUBLIC_FB_PIXEL_ID && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* ── Google Fonts ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* ── Schema Markup ── */}
        <SchemaMarkup />
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