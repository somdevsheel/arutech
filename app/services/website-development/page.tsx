import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";
import Contact from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Website Design & Development Company | Next.js & React Experts",
  description: "Build fast, responsive, and SEO-friendly websites with Arutech. Custom website design and development services for businesses, startups, and enterprises across India.",
  keywords: ["Website Development", "Web Development Company", "Website Design Services", "Website Design Agency", "Responsive Website Design", "Custom Website Development", "SEO Friendly Website Design", "Next.js Development", "UI/UX Design"],
  alternates: { canonical: "https://arutechconsultancy.com/services/website-development" },
};

const whyWebsite = [
  { icon: "🌐", title: "Your 24/7 Sales Engine", desc: "A professional website works round the clock — generating leads, building trust, and converting visitors even while you sleep." },
  { icon: "🔍", title: "Dominate Search Results", desc: "An SEO-optimised website attracts qualified organic traffic from Google, reducing dependence on paid advertising." },
  { icon: "🤝", title: "Build Instant Credibility", desc: "A well-designed website establishes trust and professionalism, giving customers the confidence to choose your business." },
  { icon: "📊", title: "Track & Optimise Growth", desc: "Measure visitor behaviour, lead sources, and conversions with integrated analytics to continuously improve performance." },
];

const ourServices = [
  { icon: "🎨", title: "UI/UX Design", desc: "Research-backed design that creates intuitive, visually engaging experiences guiding users toward conversion." },
  { icon: "⚡", title: "Custom Web Development", desc: "Scalable, high-performance websites built with Next.js, React, and modern frameworks for speed and flexibility." },
  { icon: "🛒", title: "E-commerce Development", desc: "Feature-rich online stores with payment gateways, inventory management, and seamless checkout experiences." },
  { icon: "📝", title: "CMS Development", desc: "Easy-to-manage content management systems so your team can update content without developer dependency." },
  { icon: "🔧", title: "Website Redesign", desc: "Transform outdated websites into modern, fast, and conversion-optimised digital experiences." },
  { icon: "🛡️", title: "Maintenance & Support", desc: "Ongoing security updates, performance optimisation, and feature additions to keep your website at its best." },
];

const websiteTypes = [
  "Business & Corporate Websites", "E-commerce Platforms", "Landing Pages",
  "Portfolio Websites", "SaaS & Product Websites", "Restaurant & Food Websites",
  "Real Estate Websites", "Healthcare Portals", "Educational Platforms", "NGO & Nonprofit Websites",
];

const technologies = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB",
  "PostgreSQL", "WordPress", "Shopify", "Vercel", "AWS", "Cloudinary",
];

const process = [
  { num: "01", title: "Discovery & Planning", desc: "We understand your business goals, target audience, competitors, and define a clear project scope and sitemap." },
  { num: "02", title: "UI/UX Design", desc: "Wireframes and high-fidelity designs reviewed and approved by you before development begins." },
  { num: "03", title: "Development", desc: "Clean, modular code built with modern frameworks, optimised for speed, SEO, and accessibility." },
  { num: "04", title: "Content Integration", desc: "Your content, images, and media integrated into the design with SEO best practices applied throughout." },
  { num: "05", title: "Testing & QA", desc: "Cross-browser, cross-device testing ensuring pixel-perfect rendering and functional reliability." },
  { num: "06", title: "Launch & Support", desc: "Domain setup, hosting deployment, SSL, analytics setup, and post-launch performance monitoring." },
];

const features = [
  "Mobile-First Responsive Design", "Core Web Vitals Optimisation", "SEO-Ready Architecture",
  "Google Analytics Integration", "Contact Forms & Lead Capture", "WhatsApp & Chat Integration",
  "Fast Loading Speed", "SSL Security", "CMS / Easy Content Editing", "Social Media Integration",
  "Multi-Language Support", "Accessibility Compliance",
];

const industries = [
  "Restaurants & Food", "Real Estate", "Healthcare", "Education",
  "Retail & E-commerce", "Professional Services", "SaaS & Technology", "Non-Profit",
];

const faqs = [
  { q: "How long does it take to build a website?", a: "A standard business website typically takes 3–5 weeks. E-commerce platforms and custom web applications can take 6–12 weeks depending on complexity and features required." },
  { q: "How much does website development cost?", a: "Pricing depends on design complexity, number of pages, and features. Simple business websites start from ₹25,000. E-commerce and custom platforms vary based on requirements." },
  { q: "Will my website rank on Google?", a: "Yes. Every website we build follows SEO best practices — clean code structure, fast loading, mobile-first design, proper meta tags, and schema markup — giving you a strong foundation for search visibility." },
  { q: "Can I update the website content myself?", a: "Absolutely. We integrate user-friendly CMS solutions so your team can update text, images, and pages without any technical knowledge." },
  { q: "Do you provide web hosting?", a: "Yes. We recommend and set up reliable hosting solutions on Vercel, AWS, or other providers optimised for performance, security, and uptime." },
  { q: "Do you redesign existing websites?", a: "Yes. Website redesigns are a core part of our services. We modernise design, improve performance, fix SEO issues, and enhance user experience while preserving your existing content." },
];

export default function WebsiteDevelopment() {
  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-violet-50 via-white to-purple-50/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 border border-violet-200 mb-6">
            <span className="text-xs font-mono text-violet-600 tracking-widest font-semibold uppercase">Website Design & Development</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            Build High-Performance Websites That{" "}
            <span className="text-orange-500">Grow Your Business</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 text-justify">
            Create fast, responsive, and SEO-friendly websites that deliver exceptional user experiences, strengthen your brand, and convert visitors into customers — from business websites to custom web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all shadow-md shadow-orange-200">
              Build My Website
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="/projects" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all">
              View Our Work →
            </a>
          </div>
        </div>
      </section>

      {/* Why Website */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Why It Matters</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Why Your Business Needs a Professional Website</h2>
            <p className="text-gray-600 leading-relaxed text-justify">Your website is more than an online presence — it&apos;s your most valuable digital asset. A professionally designed website builds trust, generates leads, and supports long-term business growth.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyWebsite.map((r) => (
              <div key={r.title} className="p-6 rounded-2xl bg-violet-50 border border-violet-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{r.icon}</div>
                <h3 className="font-display text-base font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 lg:py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Services</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Our Website Design & Development Services</h2>
            <p className="text-gray-600 leading-relaxed text-justify">We provide end-to-end website design and development services, from strategy and UI/UX design to custom development, performance optimisation, and ongoing maintenance.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ourServices.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-display text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types & Features */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Website Types</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 mt-3 mb-4">Website Solutions We Build</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-justify">Whether you&apos;re launching a startup, scaling an enterprise, or modernising your online presence, we develop custom websites tailored to your business goals.</p>
            <div className="grid grid-cols-1 gap-2">
              {websiteTypes.map((s) => (
                <div key={s} className="flex items-center gap-2 p-3 rounded-xl bg-violet-50 border border-violet-100">
                  <svg className="w-4 h-4 text-violet-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-gray-700 font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Included Features</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 mt-3 mb-4">Features Included in Every Website</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-justify">Every website is developed with essential features such as responsive design, SEO optimisation, security, performance, and analytics integration.</p>
            <div className="grid grid-cols-1 gap-2">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-gray-700 font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest font-semibold">How We Work</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Our Website Design & Development Process</h2>
            <p className="text-gray-400 leading-relaxed text-justify">From discovery and planning to design, development, testing, launch, and continuous support, our collaborative process ensures every project is delivered with precision.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-mono text-2xl font-bold text-orange-400">{step.num}</span>
                <h3 className="font-display text-base font-bold text-white mt-2 mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-xs font-mono text-orange-400 uppercase tracking-widest font-semibold mb-4">Technologies We Use</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {technologies.map((t) => (
                <span key={t} className="px-3 py-1.5 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-lg">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Industries</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Industries We Serve</h2>
            <p className="text-gray-600 leading-relaxed text-justify">We develop custom websites for startups, SMEs, and enterprises across diverse industries, delivering solutions that meet unique business requirements.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((ind) => (
              <span key={ind} className="px-5 py-2.5 rounded-xl bg-violet-50 border border-violet-200 text-violet-700 font-semibold text-sm">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">FAQ</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-justify">Get answers to common questions about website design, development timelines, technologies, pricing, SEO, and post-launch support.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-display font-semibold text-gray-900 text-sm sm:text-base">
                  {faq.q}
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed text-justify">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-orange-500 text-center text-white">
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Ready to Build a Website That Performs?</h2>
        <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">Whether you need a corporate website, e-commerce platform, landing page, or custom web application, we&apos;ll help you create a digital experience that drives growth.</p>
        <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-500 font-semibold rounded-xl hover:bg-orange-50 transition-all shadow-md">
          Get a Free Quote
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
