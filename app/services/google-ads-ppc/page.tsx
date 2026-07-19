import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";
import Contact from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Google Ads & PPC Management Agency | ROI-Focused Campaigns",
  description: "Maximise your advertising ROI with expert Google Ads and PPC management by Arutech. Search, Display, Shopping, Performance Max, and Remarketing campaigns designed to generate qualified leads.",
  keywords: ["Google Ads Management", "Google Ads Agency", "PPC Management", "PPC Management Services", "PPC Agency", "Google Ads Campaign Management", "PPC Advertising Services", "Search Engine Marketing", "Pay Per Click Advertising"],
  alternates: { canonical: "https://arutechconsultancy.com/services/google-ads-ppc" },
};

const whyPPC = [
  { icon: "🎯", title: "Instant Visibility", desc: "Appear at the top of Google search results immediately when potential customers are actively looking for your products or services." },
  { icon: "💰", title: "Pay Only for Results", desc: "With PPC, you only pay when someone clicks your ad — meaning your budget directly targets people already interested in what you offer." },
  { icon: "📊", title: "Measurable ROI", desc: "Every rupee spent is tracked. Know exactly which ads, keywords, and campaigns are generating leads and sales for your business." },
  { icon: "⚡", title: "Scale What Works", desc: "Increase budget on winning campaigns and pause underperformers — giving you full control over your advertising spend and results." },
];

const ourServices = [
  { icon: "🔍", title: "Search Ads", desc: "Text ads targeting high-intent keywords to capture customers actively searching for your products or services on Google." },
  { icon: "🖼️", title: "Display Ads", desc: "Visually rich banner ads across millions of websites to build brand awareness and retarget previous website visitors." },
  { icon: "🛒", title: "Shopping Ads", desc: "Product listing ads showing your inventory directly in Google search results — perfect for e-commerce businesses." },
  { icon: "🚀", title: "Performance Max", desc: "AI-powered campaigns that automatically optimise across all Google channels — Search, Display, YouTube, Gmail, and Maps." },
  { icon: "🎬", title: "Video Ads", desc: "YouTube advertising campaigns that reach your target audience through engaging video content and brand storytelling." },
  { icon: "🔄", title: "Remarketing", desc: "Re-engage visitors who left your website without converting — bringing warm leads back with targeted follow-up ads." },
];

const process = [
  { num: "01", title: "Business & Goal Discovery", desc: "Understand your business, target audience, competitors, budget, and define clear campaign success metrics." },
  { num: "02", title: "Keyword Research", desc: "Identify high-intent, cost-effective keywords your customers use when searching for your products or services." },
  { num: "03", title: "Campaign Setup", desc: "Structure campaigns, ad groups, ad copy, extensions, bidding strategies, and audience targeting for maximum performance." },
  { num: "04", title: "Tracking & Analytics", desc: "Set up conversion tracking, call tracking, and Google Analytics integration to measure real business outcomes." },
  { num: "05", title: "Optimisation", desc: "Continuous A/B testing, bid adjustments, negative keyword refinement, and quality score improvements." },
  { num: "06", title: "Reporting", desc: "Transparent monthly reports showing spend, clicks, conversions, cost-per-lead, and actionable recommendations." },
];

const industries = [
  "Healthcare & Clinics", "Real Estate", "Education & Coaching", "Legal Services",
  "E-commerce", "Home Services", "Restaurants & Food", "Finance & Insurance",
];

const faqs = [
  { q: "How much budget do I need to start Google Ads?", a: "We recommend a minimum monthly ad spend of ₹15,000–₹30,000 for most local businesses. E-commerce and competitive industries may require more. We always aim to maximise returns regardless of budget size." },
  { q: "How quickly will I see results from Google Ads?", a: "Google Ads can drive traffic and leads within days of launch. However, optimal performance typically develops over 4–6 weeks as we gather data, refine targeting, and optimise bids." },
  { q: "What is included in your PPC management service?", a: "Our service includes campaign strategy, keyword research, ad creation, bid management, A/B testing, negative keyword management, conversion tracking, and monthly performance reports." },
  { q: "Can you improve an existing Google Ads campaign?", a: "Yes. We audit existing campaigns, identify wasted spend, improve Quality Scores, restructure ad groups, fix tracking issues, and implement a performance improvement roadmap." },
  { q: "How do you track conversions and ROI?", a: "We set up Google Ads conversion tracking, Google Analytics goals, call tracking, and CRM integrations to give you a complete picture of which campaigns are generating real business value." },
  { q: "Do you manage Google Ads for local businesses?", a: "Absolutely. Local search campaigns, local service ads, and location-based targeting are specialties of ours — helping local businesses dominate their geographic market on Google." },
];

export default function GoogleAdsPPC() {
  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-orange-50 via-white to-amber-50/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6">
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">Google Ads & PPC Management</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            Drive More Leads & Sales with{" "}
            <span className="text-orange-500">Data-Driven Google Ads</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 text-justify">
            Maximise your advertising investment with strategic Google Ads campaigns designed to generate qualified leads, increase conversions, and deliver measurable ROI — from campaign setup to ongoing optimisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all shadow-md shadow-orange-200">
              Launch My Ads
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="/services/digital-marketing-seo" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all">
              Explore SEO Services →
            </a>
          </div>
        </div>
      </section>

      {/* Why PPC */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Why PPC?</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Why Invest in Google Ads & PPC Advertising?</h2>
            <p className="text-gray-600 leading-relaxed text-justify">Reach potential customers at the exact moment they&apos;re searching for your products or services. Our PPC strategies help you generate instant visibility, high-quality traffic, and measurable business results.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyPPC.map((r) => (
              <div key={r.title} className="p-6 rounded-2xl bg-orange-50 border border-orange-100 hover:shadow-md transition-shadow">
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
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Campaign Types</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Google Ads Services We Offer</h2>
            <p className="text-gray-600 leading-relaxed text-justify">From Search and Display campaigns to Shopping, Performance Max, Video, and Remarketing, we manage every aspect of your Google Ads strategy to maximise results.</p>
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

      {/* Process */}
      <section className="py-16 lg:py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest font-semibold">How We Work</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Our PPC Strategy & Management Process</h2>
            <p className="text-gray-400 leading-relaxed text-justify">Our data-driven approach combines audience research, campaign planning, A/B testing, bid optimisation, and ongoing performance analysis to continuously improve your return on ad spend.</p>
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
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Industries</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Industries We Help Grow</h2>
            <p className="text-gray-600 leading-relaxed text-justify">We create high-performing Google Ads campaigns for businesses across industries, helping startups, local businesses, e-commerce brands, and enterprises achieve sustainable growth.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((ind) => (
              <span key={ind} className="px-5 py-2.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-700 font-semibold text-sm">{ind}</span>
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
            <p className="text-gray-600 text-justify">Find answers to common questions about Google Ads management, campaign budgets, bidding strategies, timelines, reporting, and expected results.</p>
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
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Ready to Grow with Google Ads?</h2>
        <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">Whether you&apos;re launching your first campaign or improving existing performance, we&apos;ll build a PPC strategy that attracts qualified customers and scales with confidence.</p>
        <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-500 font-semibold rounded-xl hover:bg-orange-50 transition-all shadow-md">
          Get a Free Ads Audit
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
