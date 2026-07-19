import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";
import Contact from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Digital Marketing & SEO Agency India | Content Marketing & Lead Generation",
  description: "Drive organic growth and qualified leads with expert Digital Marketing and SEO services by Arutech. Technical SEO, local SEO, content marketing, link building, and data-driven strategies that rank your business higher on Google.",
  keywords: ["Digital Marketing Agency", "SEO Services India", "Search Engine Optimisation", "Local SEO", "Technical SEO", "Content Marketing", "Link Building", "On-Page SEO", "Off-Page SEO", "SEO Agency India", "Digital Marketing Services"],
  alternates: { canonical: "https://arutechconsultancy.com/services/digital-marketing-seo" },
};

const whySEO = [
  { icon: "🔍", title: "Long-Term Organic Traffic", desc: "Unlike paid ads that stop the moment you pause spending, SEO builds lasting organic visibility that continues to drive traffic, leads, and sales for years." },
  { icon: "🏆", title: "Outrank Your Competitors", desc: "Rank above competitors on Google for high-intent keywords and capture customers at the exact moment they&apos;re searching for your products or services." },
  { icon: "💰", title: "Lowest Cost per Lead", desc: "Organic search delivers some of the lowest cost-per-lead of any marketing channel — making SEO one of the highest ROI investments for growing businesses." },
  { icon: "🌐", title: "Build Digital Authority", desc: "Consistent content marketing and authoritative backlinks establish your brand as a trusted industry leader — increasing credibility with both search engines and customers." },
];

const ourServices = [
  { icon: "⚙️", title: "Technical SEO", desc: "Website speed optimisation, Core Web Vitals, crawlability, indexation, structured data, XML sitemaps, and mobile-first technical audits to lay the right foundation." },
  { icon: "📝", title: "On-Page SEO", desc: "Keyword research, meta tags, heading structure, internal linking, content optimisation, and URL structure to make every page search-engine friendly." },
  { icon: "🔗", title: "Off-Page SEO & Link Building", desc: "High-quality backlink acquisition through digital PR, guest posting, HARO, and citation building to improve domain authority and search rankings." },
  { icon: "📍", title: "Local SEO", desc: "Google Business Profile optimisation, local citations, reviews management, and local keyword targeting to dominate local search results in your city." },
  { icon: "✍️", title: "Content Marketing", desc: "SEO-optimised blog posts, landing pages, pillar content, and lead magnets that rank on Google and convert visitors into qualified leads." },
  { icon: "📊", title: "SEO Analytics & Reporting", desc: "Monthly reports on keyword rankings, organic traffic, backlinks, Core Web Vitals, and actionable recommendations to continuously grow your search presence." },
];

const techStack = [
  "Google Search Console", "Google Analytics 4", "SEMrush", "Ahrefs",
  "Screaming Frog", "Moz", "PageSpeed Insights", "Surfer SEO",
];

const process = [
  { num: "01", title: "SEO Audit & Discovery", desc: "Comprehensive audit of your website&apos;s current technical health, keyword rankings, backlink profile, competitor analysis, and SEO opportunities." },
  { num: "02", title: "Keyword Research & Strategy", desc: "Identify high-value, low-competition keywords your target customers use — mapping them to specific pages and content topics for maximum impact." },
  { num: "03", title: "Technical Fixes & On-Page Optimisation", desc: "Resolve technical issues, optimise meta tags, improve site speed, fix crawl errors, and implement structured data for search engine clarity." },
  { num: "04", title: "Content Creation & Optimisation", desc: "Produce SEO-optimised, high-quality content — blog posts, service pages, and landing pages that rank for target keywords and convert readers." },
  { num: "05", title: "Link Building & Digital PR", desc: "Acquire authoritative backlinks through ethical, white-hat link building strategies that strengthen your domain authority and improve rankings." },
  { num: "06", title: "Monitoring & Reporting", desc: "Track keyword positions, organic traffic, conversions, and technical health monthly — adjusting the strategy based on data and algorithm updates." },
];

const industries = [
  "E-commerce", "Healthcare & Clinics", "Real Estate", "Legal Services",
  "Education & Coaching", "SaaS & Technology", "Local Businesses", "Finance",
];

const faqs = [
  { q: "How long does SEO take to show results?", a: "SEO is a long-term investment. Most businesses start seeing meaningful improvements in rankings and traffic within 3–6 months. Competitive industries may take 6–12 months to achieve significant results, but the traffic compounds over time." },
  { q: "What is the difference between On-Page and Off-Page SEO?", a: "On-Page SEO involves optimising the content and technical elements on your website — keywords, meta tags, headings, internal links, and page speed. Off-Page SEO refers to building authority through backlinks, digital PR, and citations from other websites." },
  { q: "Do you do local SEO for small businesses?", a: "Yes. Local SEO is a core specialty. We optimise your Google Business Profile, build local citations, manage reviews, and target location-based keywords to help you appear in local search results and Google Maps." },
  { q: "What does your monthly SEO reporting include?", a: "Monthly reports include keyword ranking positions, organic traffic from Google Analytics, new backlinks acquired, Core Web Vitals scores, technical issues resolved, and a prioritised action plan for the following month." },
  { q: "Can you fix an SEO penalty or recover lost rankings?", a: "Yes. We perform penalty analysis — identifying whether the issue is algorithmic (Panda, Penguin, Core Updates) or manual. We then develop a recovery plan including content improvements, backlink removal, and technical fixes." },
  { q: "Do you write the content or do I need to provide it?", a: "We handle everything. Our team performs keyword research, creates an editorial calendar, writes SEO-optimised articles and landing pages, and optimises existing content — all as part of our content marketing service." },
];

export default function DigitalMarketingSEO() {
  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-violet-50 via-white to-indigo-50/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 border border-violet-200 mb-6">
            <span className="text-xs font-mono text-violet-600 tracking-widest font-semibold uppercase">Digital Marketing & SEO</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            Rank Higher. Get More Leads with{" "}
            <span className="text-violet-600">Expert SEO & Digital Marketing</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 text-justify">
            Grow your organic search presence and attract high-quality leads with comprehensive SEO, content marketing, and digital marketing strategies tailored to your business goals — from technical SEO and local search to content creation and link building.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all shadow-md shadow-violet-200">
              Get a Free SEO Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="/services/google-ads-ppc" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all">
              Explore Google Ads →
            </a>
          </div>
        </div>
      </section>

      {/* Why SEO */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-violet-600 uppercase tracking-widest font-semibold">Why SEO?</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Why Invest in SEO & Digital Marketing?</h2>
            <p className="text-gray-600 leading-relaxed text-justify">Over 93% of online experiences begin with a search engine. Businesses that rank on page one of Google capture the majority of clicks, traffic, and customers. SEO is the compounding investment that keeps generating returns long after the work is done.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whySEO.map((r) => (
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
            <span className="text-xs font-mono text-violet-600 uppercase tracking-widest font-semibold">What We Do</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Digital Marketing & SEO Services We Offer</h2>
            <p className="text-gray-600 leading-relaxed text-justify">From foundational technical SEO and on-page optimisation to advanced link building, local SEO, and content marketing — we offer a complete suite of digital marketing services to grow your online visibility.</p>
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

      {/* Tools & Tech */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-violet-600 uppercase tracking-widest font-semibold">Tools We Use</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Industry-Leading SEO Tools</h2>
            <p className="text-gray-600 leading-relaxed text-justify">We use the same professional-grade tools as the world&apos;s top SEO agencies to audit, track, and optimise your search performance with precision and accuracy.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tool) => (
              <span key={tool} className="px-5 py-2.5 rounded-xl bg-violet-50 border border-violet-200 text-violet-700 font-semibold text-sm">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-violet-400 uppercase tracking-widest font-semibold">How We Work</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Our SEO & Digital Marketing Process</h2>
            <p className="text-gray-400 leading-relaxed text-justify">Our systematic approach combines deep technical analysis, data-driven keyword strategy, high-quality content creation, and ethical link building to deliver consistent, sustainable organic growth for your business.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-mono text-2xl font-bold text-violet-400">{step.num}</span>
                <h3 className="font-display text-base font-bold text-white mt-2 mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-violet-600 uppercase tracking-widest font-semibold">Industries</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Industries We Help Rank Higher</h2>
            <p className="text-gray-600 leading-relaxed text-justify">We deliver SEO and digital marketing results for businesses across industries — from local service businesses and e-commerce stores to SaaS platforms and healthcare providers.</p>
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
            <span className="text-xs font-mono text-violet-600 uppercase tracking-widest font-semibold">FAQ</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-justify">Find answers to common questions about SEO timelines, our process, content marketing, link building strategies, and expected results for your business.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-display font-semibold text-gray-900 text-sm sm:text-base">
                  {faq.q}
                  <svg className="w-5 h-5 text-violet-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed text-justify">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-violet-600 text-center text-white">
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Ready to Rank Higher on Google?</h2>
        <p className="text-violet-100 text-lg mb-8 max-w-xl mx-auto">Get a free SEO audit and discover exactly what&apos;s holding your website back from ranking on page one — and how we can fix it.</p>
        <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 font-semibold rounded-xl hover:bg-violet-50 transition-all shadow-md">
          Get My Free SEO Audit
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
