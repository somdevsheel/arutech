import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";
import { products, statusLabel, statusClasses, accentClasses } from "@/lib/products";

export const metadata: Metadata = {
  title: "Our Products | Arutech Consultancy Services LLP",
  description:
    "Apps built and launched by Arutech — Freenoo free PDF tools, Instachat social app and Moneto AI Terminal. See what each product does and read its privacy policy.",
  alternates: { canonical: "https://arutechconsultancy.com/products" },
};

export default function ProductsPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-orange-50 via-white to-amber-50/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6">
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">Our Products</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5 tracking-tight">
            Apps We&apos;ve <span className="text-orange-500">Built</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Beyond client work, we design, build and run our own products. Pick an app to see what it does, how it works and its privacy policy.
          </p>
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const a = accentClasses[p.accent];
            return (
              <div key={p.slug} className={`flex flex-col rounded-2xl border ${a.border} bg-white p-7 shadow-sm hover:shadow-md transition-all`}>
                <div className="flex items-start justify-between mb-5">
                  {p.iconUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.iconUrl} alt={`${p.name} icon`} className={`w-12 h-12 rounded-xl border ${a.border}`} />
                  ) : (
                    <div className={`w-12 h-12 rounded-xl ${a.bg} border ${a.border} flex items-center justify-center font-display text-xl font-bold ${a.text}`}>
                      {p.name.charAt(0)}
                    </div>
                  )}
                  <span className={`px-2.5 py-1 text-[11px] font-semibold border rounded-full ${statusClasses[p.status]}`}>
                    ● {statusLabel[p.status].toUpperCase()}
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">{p.name}</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">{p.tagline}</p>
                <div className="flex items-center gap-4 flex-wrap">
                  <Link
                    href={`/products/${p.slug}`}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 ${a.button} text-white text-sm font-semibold rounded-xl transition-all`}
                  >
                    View app
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  {p.privacyPolicy && (
                    <Link href={`/products/${p.slug}/privacy-policy`} className="text-sm font-medium text-gray-500 hover:text-orange-500 hover:underline">
                      Privacy Policy
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
