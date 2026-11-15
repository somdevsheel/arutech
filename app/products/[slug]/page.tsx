import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";
import { products, getProduct, statusLabel, statusClasses, accentClasses } from "@/lib/products";

const BASE_URL = "https://arutechconsultancy.com";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProduct(params.slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.tagline} | Arutech`,
    description: p.description,
    alternates: { canonical: `${BASE_URL}/products/${p.slug}` },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p) notFound();
  const a = accentClasses[p.accent];

  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      {/* Hero */}
      <section className="pt-32 pb-14 px-6 bg-gradient-to-br from-orange-50 via-white to-amber-50/40">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Link href="/products" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange-500 mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              All products
            </Link>
            <div className="flex items-center gap-3 mb-5">
              {p.iconUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.iconUrl} alt={`${p.name} icon`} className={`w-14 h-14 rounded-2xl border ${a.border}`} />
              ) : (
                <div className={`w-14 h-14 rounded-2xl ${a.bg} border ${a.border} flex items-center justify-center font-display text-2xl font-bold ${a.text}`}>
                  {p.name.charAt(0)}
                </div>
              )}
              <span className={`px-2.5 py-1 text-xs font-semibold border rounded-full ${statusClasses[p.status]}`}>
                ● {statusLabel[p.status].toUpperCase()}
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">{p.name}</h1>
            <p className={`text-lg font-medium ${a.text} mb-4`}>{p.tagline}</p>
            <p className="text-gray-600 leading-relaxed mb-7">{p.description}</p>

            <div className="flex items-center gap-3 flex-wrap">
              {p.links.website && (
                <a
                  href={p.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-3 ${a.button} text-white text-sm font-semibold rounded-xl transition-all shadow-md`}
                >
                  Open {p.name}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {p.links.playStore && (
                <a href={p.links.playStore} target="_blank" rel="noopener noreferrer" className="inline-flex hover:-translate-y-0.5 transition-transform">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-14 w-auto -my-1.5" />
                </a>
              )}
              {p.links.indusStore && (
                <a href={p.links.indusStore} target="_blank" rel="noopener noreferrer" className="inline-flex hover:-translate-y-0.5 transition-transform">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://docstore.indusappstore.com/public/external/developerdashboard-static/badge-black-background-english.png" alt="Get it on Indus Appstore" className="h-11 w-auto" />
                </a>
              )}
              {!p.links.website && !p.links.playStore && (
                <span className="text-sm text-gray-500">Not released yet — follow us for launch updates.</span>
              )}
            </div>
          </div>

          {p.screenshot && (
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 border-b border-gray-200">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white border border-gray-200 text-[10px] text-gray-400 font-mono truncate">
                  {p.screenshot.url}
                </div>
              </div>
              <div className="relative w-full aspect-[16/9] bg-gray-50">
                <Image src={p.screenshot.src} alt={`${p.name} screenshot`} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" priority />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What it does */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 tracking-tight">What {p.name} does</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-1.5">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 tracking-tight">How it works</h2>
          <ol className="space-y-4">
            {p.howItWorks.map((step, i) => (
              <li key={i} className="flex gap-4 items-start rounded-xl bg-white border border-gray-200 p-5">
                <span className={`flex-shrink-0 w-8 h-8 rounded-full ${a.bg} ${a.text} font-bold text-sm flex items-center justify-center`}>{i + 1}</span>
                <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 bg-white p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-1.5">Privacy</h2>
            <p className="text-sm text-gray-600">
              {p.privacyPolicy
                ? `Read how ${p.name} handles your data.`
                : `The ${p.name} privacy policy will be published here before launch.`}
            </p>
          </div>
          {p.privacyPolicy && (
            <Link
              href={`/products/${p.slug}/privacy-policy`}
              className="inline-flex items-center gap-2 px-5 py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-xl transition-all flex-shrink-0"
            >
              {p.name} Privacy Policy
            </Link>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
