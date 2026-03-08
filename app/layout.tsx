import type { Metadata } from "next";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Arutech Consultancy Services LLP | Building Technology for a Self-Sufficient India",
    template: "%s | Arutech Consultancy Services LLP",
  },
  description:
    "Arutech Consultancy Services LLP  -  A DPIIT-recognized startup building scalable digital platforms, cloud infrastructure, and AI applications. Headquartered in Uttarakhand, India.",
  keywords: ["software development", "AI applications", "cloud infrastructure", "digital platforms", "DPIIT startup", "India tech"],
  metadataBase: new URL("https://www.arutechconsultancy.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.arutechconsultancy.com",
    siteName: "Arutech Consultancy Services LLP",
    title: "Arutech Consultancy Services LLP",
    description: "Building Technology for a Self-Sufficient India.",
  },
  twitter: { card: "summary_large_image", title: "Arutech Consultancy Services LLP", description: "Building Technology for a Self-Sufficient India." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-8622386256126590" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}})()`,
        }} />
      </head>
      <body className="bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
