import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { products, getProduct } from "@/lib/products";

const BASE_URL = "https://arutechconsultancy.com";

// Only apps that have a published policy get a page; others 404.
export function generateStaticParams() {
  return products.filter((p) => p.privacyPolicy).map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProduct(params.slug);
  if (!p?.privacyPolicy) return {};
  return {
    title: `${p.name} Privacy Policy | Arutech Consultancy Services LLP`,
    description: `Privacy Policy for the ${p.name} app by Arutech Consultancy Services LLP — what data is handled and how your files are protected.`,
    alternates: { canonical: `${BASE_URL}/products/${p.slug}/privacy-policy` },
  };
}

export default function ProductPrivacyPolicy({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p?.privacyPolicy) notFound();
  const policy = p.privacyPolicy;

  return (
    <main className="bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <Link href={`/products/${p.slug}`} className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange-500 mb-8">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to {p.name}
        </Link>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 border border-orange-200 mb-5">
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">Legal · {p.name}</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {p.name} Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">Last updated: {policy.lastUpdated}</p>
        </div>

        <div className="space-y-10">
          {policy.sections.map((s) => (
            <section key={s.title} className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">{s.title}</h2>
              {s.paragraphs?.map((para, i) => (
                <p key={i} className="text-gray-600 text-sm leading-relaxed">{para}</p>
              ))}
              {s.bullets && (
                <ul className="list-disc pl-5 space-y-1.5 text-gray-600 text-sm leading-relaxed">
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}
              {s.note && <p className="text-gray-600 text-sm leading-relaxed">{s.note}</p>}
              {s.links && (
                <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
                  {s.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">{l.label} ↗</a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
              {policy.sections.length + 1}. Contact Us
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-600 space-y-1">
              <p className="font-semibold text-gray-900">Arutech Consultancy Services LLP</p>
              <p>Email: <a href="mailto:hello@arutechconsultancy.com" className="text-orange-500 hover:underline">hello@arutechconsultancy.com</a></p>
              <p>Website: <a href="https://arutechconsultancy.com" className="text-orange-500 hover:underline">arutechconsultancy.com</a></p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
