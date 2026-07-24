import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";
import Contact from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Digital Marketing Agency India | Lead Generation & Content Marketing",
  description: "Drive qualified leads and measurable business growth with expert Digital Marketing services by Arutech. Content marketing, email campaigns, lead generation, performance marketing, and data-driven strategies tailored to your goals.",
  keywords: ["Digital Marketing Agency India", "Digital Marketing Services", "Lead Generation", "Content Marketing", "Performance Marketing", "Email Marketing", "Digital Marketing Company India", "Online Marketing Services"],
  alternates: { canonical: "https://arutechconsultancy.com/services/digital-marketing" },
};

const whyDigitalMarketing = [
  { icon: "🎯", title: "Reach the Right Audience", desc: "Digital marketing lets you target your exact audience by demographics, interests, behaviour, and intent — ensuring every campaign reaches people most likely to convert." },
  { icon: "📊", title: "Fully Measurable Results", desc: "Every campaign, click, and conversion is tracked. Know exactly what's working, what's not, and where to invest your marketing budget for maximum return." },
  { icon: "💰", title: "Higher ROI than Traditional Marketing", desc: "Digital marketing delivers a significantly higher ROI than print, TV, or radio — with lower costs, better targeting, and real-time performance optimisation." },
  { icon: "🚀", title: "Scale What Works", desc: "Start small, measure results, and scale winning campaigns quickly. Digital marketing gives you full control over budget, audience, and messaging." },
];

const ourServices = [
  { icon: "✍️", title: "Content Marketing", desc: "SEO-optimised blog posts, articles, case studies, and long-form content that builds authority, drives organic traffic, and generates inbound leads." },
  { icon: "📧", title: "Email Marketing", desc: "Automated email sequences, newsletters, drip campaigns, and re-engagement flows that nurture leads and convert prospects into paying customers." },
  { icon: "🎯", title: "Lead Generation", desc: "End-to-end lead generation campaigns — landing pages, lead magnets, forms, and nurture sequences designed to fill your sales pipeline consistently." },
  { icon: "📱", title: "Performance Marketing", desc: "Data-driven paid campaigns across Google, Meta, and other platforms — optimised for conversions, cost-per-lead, and return on ad spend." },
  { icon: "🤝", title: "Influencer & Affiliate Marketing", desc: "Connect with relevant influencers and affiliates to amplify your brand reach, build credibility, and drive sales through trusted recommendations." },
  { icon: "📊", title: "Marketing Analytics & Reporting", desc: "Monthly reports on campaign performance, traffic sources, lead quality, conversion rates, and actionable recommendations to continuously improve ROI." },
];

const process = [
  { num: "01", title: "Business & Audience Discovery", desc: "Understand your business goals, target audience personas, competitive landscape, and current marketing performance to define a winning strategy." },
  { num: "02", title: "Strategy & Campaign Planning", desc: "Build a comprehensive digital marketing roadmap — channels, budget allocation, content calendar, campaign goals, and KPIs aligned to your objectives." },
  { num: "03", title: "Content & Creative Production", desc: "Create compelling content, ad creatives, landing pages, and email sequences that speak directly to your audience and drive them to take action." },
  { num: "04", title: "Campaign Launch & Distribution", desc: "Launch campaigns across the right channels — organic content, paid ads, email, and partnerships — with precise targeting and tracking in place." },
  { num: "05", title: "Optimisation & A/B Testing", desc: "Continuously test headlines, creatives, CTAs, and audience segments to improve conversion rates and reduce cost per lead over time." },
  { num: "06", title: "Reporting & Growth Planning", desc: "Monthly performance reviews with clear metrics, insights, learnings, and an updated strategy to scale what's working and fix what isn't." },
];

const industries = [
  "E-commerce & Retail", "SaaS & Technology", "Healthcare & Wellness", "Real Estate",
  "Education & Coaching", "Finance & Fintech", "Restaurants & Food", "Startups",
];

const faqs = [
  { q: "What is included in your digital marketing service?", a: "Our service covers content marketing, email marketing, lead generation campaigns, performance marketing (paid ads), marketing analytics, and monthly reporting. We tailor the mix based on your business goals and budget." },
  { q: "How is digital marketing different from SEO?", a: "SEO focuses specifically on improving organic search rankings and unpaid traffic. Digital marketing is broader — it includes SEO, paid advertising, content marketing, email, social media, and lead generation across all online channels." },
  { q: "How long does it take to see results from digital marketing?", a: "Paid campaigns can generate leads within days of launch. Content marketing and email campaigns typically show meaningful results within 2–3 months as the audience grows and campaigns are optimised." },
  { q: "Do you create the content or do I need to provide it?", a: "We handle everything — strategy, writing, design, and distribution. Our team creates all content assets including blog posts, email sequences, landing pages, and ad creatives as part of the service." },
  { q: "Can you work with a small marketing budget?", a: "Yes. We work with businesses at all stages. We help prioritise the highest-ROI channels for your specific business, so even a modest budget is invested where it has the greatest impact." },
  { q: "Do you track leads and conversions from our campaigns?", a: "Absolutely. We set up full conversion tracking — form submissions, calls, purchases, and CRM integrations — so you know exactly which campaigns are generating real business value." },
];

export default function DigitalMarketing() {
  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-violet-50 via-white to-purple-50/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 border border-violet-200 mb-6">
            <span className="text-xs font-mono text-violet-600 tracking-widest font-semibold uppercase">Digital Marketing</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            Grow Faster with{" "}
            <span className="text-violet-600">Performance-Driven Digital Marketing</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 text-justify">
            Drive qualified leads, build brand authority, and scale revenue with data-driven digital marketing strategies — from content marketing and email campaigns to lead generation and performance advertising tailored to your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all shadow-md shadow-violet-200">
              Grow My Business
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="/services/seo" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all">
              Explore SEO Services →
            </a>
          </div>
        </div>
      </section>

      {/* Why Digital Marketing */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-violet-600 uppercase tracking-widest font-semibold">Why Digital Marketing?</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Why Invest in Digital Marketing?</h2>
            <p className="text-gray-600 leading-relaxed text-justify">In a world where your customers are online before they ever walk through your door, digital marketing is the most cost-effective way to reach, engage, and convert your ideal audience at scale.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyDigitalMarketing.map((r) => (
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Digital Marketing Services We Offer</h2>
            <p className="text-gray-600 leading-relaxed text-justify">From content marketing and email automation to lead generation and performance campaigns, we offer a full suite of digital marketing services to grow your online presence and revenue.</p>
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
            <span className="text-xs font-mono text-violet-400 uppercase tracking-widest font-semibold">How We Work</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Our Digital Marketing Process</h2>
            <p className="text-gray-400 leading-relaxed text-justify">Our structured process takes you from audience discovery and strategy to content production, campaign launch, and continuous optimisation — ensuring every marketing dollar works harder for your business.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-mono text-2xl font-bold text-violet-400">{step.num}</span>
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
            <span className="text-xs font-mono text-violet-600 uppercase tracking-widest font-semibold">Industries</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Industries We Help Grow</h2>
            <p className="text-gray-600 leading-relaxed text-justify">We deliver digital marketing results across industries — helping e-commerce brands increase sales, SaaS companies generate trials, and service businesses fill their pipelines.</p>
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
            <p className="text-gray-600 text-justify">Answers to common questions about our digital marketing services, content creation, lead generation, timelines, and expected results.</p>
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
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Ready to Grow Your Business Online?</h2>
        <p className="text-violet-100 text-lg mb-8 max-w-xl mx-auto">Let&apos;s build a digital marketing strategy that attracts the right audience, generates qualified leads, and scales your revenue with measurable results.</p>
        <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 font-semibold rounded-xl hover:bg-violet-50 transition-all shadow-md">
          Get a Free Marketing Consultation
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
