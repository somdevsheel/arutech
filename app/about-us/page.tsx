import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";

export const metadata: Metadata = {
  title: "About Us | Arutech Consultancy Services LLP",
  description:
    "Learn about Arutech Consultancy — our story, mission, values, and the senior team behind 50+ delivered projects in AI, Cloud, Web, and Mobile development.",
  alternates: { canonical: "https://arutechconsultancy.com/about-us" },
};

const values = [
  { icon: "⚡", title: "Speed Without Shortcuts", description: "We move fast because we plan properly. Every sprint is grounded in architecture that was thought through before code was written." },
  { icon: "🎯", title: "Outcomes Over Invoices", description: "We measure success by what you ship and what stays running — not by hours billed or scope expanded without reason." },
  { icon: "🔒", title: "You Own Everything", description: "Every deliverable is documented, tested, and structured for handoff. You own the code, the infrastructure, and the roadmap." },
  { icon: "🤝", title: "No Juniors on Client Work", description: "Small, senior team — you work directly with the people building your product. No layers, no surprises." },
];

const milestones = [
  { year: "2020", label: "Founded", desc: "Arutech Consultancy Services LLP established in India" },
  { year: "2021", label: "10 Projects", desc: "First 10 client engagements across web and mobile" },
  { year: "2022", label: "AI Practice", desc: "Launched dedicated AI/ML services and data pipeline work" },
  { year: "2023", label: "Freenoo Live", desc: "Shipped Freenoo — 25+ free PDF tools, thousands of users" },
  { year: "2024", label: "50+ Projects", desc: "Crossed 50 delivered projects across 4 service verticals" },
  { year: "2026", label: "Expanding", desc: "Adding Digital Marketing and Business Analytics practices" },
];

export default function AboutUs() {
  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-orange-50 via-white to-amber-50/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6">
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">About Us</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            We Build Software That{" "}
            <span className="text-orange-500">Stays Valuable</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Arutech Consultancy Services LLP is an India-based software consultancy specialising in AI, Cloud, Web, and Mobile solutions — built to perform in the real world.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Our Mission</span>
            <h2 className="font-display text-4xl font-bold text-gray-900 mt-3 mb-5 leading-tight">
              Intelligent software for businesses that need to move fast.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              We design and deliver high-performance software systems — from AI-powered pipelines and cloud infrastructure to production-grade web and mobile applications and marketing funnels that convert.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our clients are founders, product teams, and business owners who need a reliable technical partner — not just a vendor. We work as an extension of your team and measure our success by yours.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "4+",  label: "Years of Experience" },
              { value: "6",   label: "Service Verticals" },
            ].map((stat) => (
              <div key={stat.label} className="bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center">
                <p className="font-display text-4xl font-bold text-orange-500 mb-2">{stat.value}</p>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">What We Stand For</span>
            <h2 className="font-display text-4xl font-bold text-gray-900 mt-3">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-display text-base font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Our Journey</span>
            <h2 className="font-display text-4xl font-bold text-gray-900 mt-3">How We Got Here</h2>
          </div>
          <div className="relative pl-8 border-l-2 border-orange-100 space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-orange-500 border-4 border-white shadow-sm" />
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-sm font-bold text-orange-500">{m.year}</span>
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{m.label}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-orange-500 text-center text-white">
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Ready to work together?</h2>
        <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
          Tell us what you&apos;re building. We&apos;ll respond within 24 hours.
        </p>
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-500 font-semibold rounded-xl hover:bg-orange-50 transition-all shadow-md"
        >
          Get in Touch
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </section>

      <Footer />
    </main>
  );
}
