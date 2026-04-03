import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next"
import CookieBanner from "@/components/cookie-banner";

export const metadata: Metadata = {
  title: "Arutech Consultancy Services LLP | AI, Cloud & Web Solutions",
  description:
    "Arutech builds intelligent software systems — from AI/ML solutions and cloud deployments to web and mobile applications. Products: Freenoo, Moneto AI Terminal, Instachat.",
  keywords: "AI consulting, machine learning, cloud deployment, React development, React Native, web applications, Freenoo, Moneto, Instachat",
  openGraph: {
    title: "Arutech Consultancy Services LLP",
    description: "Building intelligent software for the modern era.",
    url: "https://arutechconsultancy.com",
    siteName: "Arutech",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
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