import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";
import Contact from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Business Analytics & Data Intelligence Services | Arutech",
  description: "Turn raw data into actionable business insights with expert Business Analytics services by Arutech. Custom dashboards, KPI reporting, data visualisation, market research, and data-driven strategy consulting.",
  keywords: ["Business Analytics", "Business Intelligence", "Data Analytics India", "KPI Dashboard", "Data Visualisation", "Market Research", "Data-Driven Strategy", "Reporting Dashboards", "Business Insights", "Analytics Consulting India"],
  alternates: { canonical: "https://arutechconsultancy.com/services/business-analytics" },
};

const whyAnalytics = [
  { icon: "📊", title: "Data-Driven Decisions", desc: "Replace gut-feel decisions with evidence-backed insights. Business analytics gives leadership a clear, real-time view of what is working, what isn&apos;t, and where to invest next." },
  { icon: "🎯", title: "Identify Growth Opportunities", desc: "Uncover hidden patterns in your sales, marketing, and operations data that reveal your highest-value customers, best-performing channels, and untapped growth levers." },
  { icon: "⚡", title: "Reduce Operational Waste", desc: "Analyse process bottlenecks, resource utilisation, and cost drivers to eliminate inefficiencies — reducing operational costs while improving output quality." },
  { icon: "🔮", title: "Predictive Insights", desc: "Move beyond historical reporting. Predictive analytics models help you forecast revenue, anticipate churn, and plan inventory or staffing with confidence." },
];

const ourServices = [
  { icon: "📈", title: "KPI Dashboard Design", desc: "Custom real-time dashboards using Google Looker Studio, Power BI, or Metabase — tracking your most critical business metrics in one clear, visual view." },
  { icon: "🗃️", title: "Data Aggregation & ETL", desc: "Connect and consolidate data from multiple sources — CRMs, ad platforms, spreadsheets, databases — into a single unified analytics layer." },
  { icon: "🔍", title: "Marketing Analytics", desc: "Attribution modelling, campaign performance analysis, customer acquisition cost, lifetime value, and ROAS reporting across all your marketing channels." },
  { icon: "📉", title: "Sales & Revenue Analytics", desc: "Pipeline analysis, conversion rate optimisation, sales velocity, cohort analysis, and revenue forecasting to help your sales team close more deals." },
  { icon: "🏭", title: "Operations Analytics", desc: "Process efficiency analysis, resource utilisation reporting, delivery performance tracking, and supply chain optimisation insights." },
  { icon: "📋", title: "Custom Reports & Insights", desc: "Regular automated reports and ad-hoc analysis delivered to stakeholders — with clear narratives, visualisations, and actionable recommendations." },
];

const tools = [
  "Google Looker Studio", "Power BI", "Metabase", "Google Analytics 4",
  "BigQuery", "Excel & Sheets", "Python / Pandas", "SQL",
];

const process = [
  { num: "01", title: "Business Goals Discovery", desc: "Understand your business objectives, key decisions you need data to support, current reporting gaps, and the metrics that matter most to your leadership team." },
  { num: "02", title: "Data Audit & Source Mapping", desc: "Identify all available data sources — CRM, marketing platforms, databases, spreadsheets — and assess data quality, completeness, and integration requirements." },
  { num: "03", title: "Data Pipeline & Integration", desc: "Build ETL pipelines to extract, transform, and load data from all sources into a centralised data warehouse or reporting layer for accurate, consistent analysis." },
  { num: "04", title: "Dashboard & Report Design", desc: "Design intuitive, interactive dashboards and reports that present the right data to the right stakeholders — executives, marketing teams, or operations managers." },
  { num: "05", title: "Insight Delivery & Interpretation", desc: "Go beyond the numbers — we contextualise findings, identify trends and anomalies, and translate data into clear business recommendations." },
  { num: "06", title: "Ongoing Monitoring & Updates", desc: "Maintain and evolve your analytics setup as your business grows — adding new data sources, updating metrics, and delivering regular insight briefings." },
];

const industries = [
  "E-commerce & Retail", "SaaS & Technology", "Healthcare", "Real Estate",
  "Finance & Fintech", "Education", "Manufacturing", "Digital Marketing Agencies",
];

const faqs = [
  { q: "What tools do you use to build dashboards?", a: "We primarily use Google Looker Studio (free), Power BI, and Metabase depending on your data sources and budget. We choose the tool that best fits your existing tech stack and team's ability to self-serve reports." },
  { q: "Can you connect data from multiple platforms into one dashboard?", a: "Yes. We build data pipelines that pull from Google Analytics, Facebook Ads, Google Ads, CRMs, databases, spreadsheets, and more — consolidating everything into a single unified dashboard." },
  { q: "Do I need a data warehouse to get started?", a: "Not necessarily. For smaller data volumes, we can work directly with existing data sources. For larger businesses or complex multi-source reporting, we recommend setting up Google BigQuery or a similar warehouse for reliability and scale." },
  { q: "What KPIs can you track for my business?", a: "We track KPIs tailored to your business — revenue, CAC, LTV, churn rate, ROAS, conversion rates, NPS, operational efficiency metrics, pipeline velocity, and many more. We start by identifying the metrics that actually drive your business decisions." },
  { q: "How long does it take to build a custom analytics dashboard?", a: "A standard dashboard with 2–3 data sources typically takes 1–2 weeks from data audit to delivery. More complex multi-source setups or predictive models take 3–6 weeks depending on data complexity." },
  { q: "Can you train our team to use the dashboards independently?", a: "Absolutely. We provide documentation, walkthroughs, and hands-on training so your team can explore data, create their own reports, and maintain dashboards without depending on us for every update." },
];

export default function BusinessAnalytics() {
  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-teal-50 via-white to-emerald-50/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 border border-teal-200 mb-6">
            <span className="text-xs font-mono text-teal-600 tracking-widest font-semibold uppercase">Business Analytics & Intelligence</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            Turn Your Data into{" "}
            <span className="text-teal-600">Actionable Business Insights</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 text-justify">
            Stop guessing and start growing with data-driven business analytics. We build custom KPI dashboards, marketing analytics, sales reporting, and intelligence systems that give your leadership team a clear view of what drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-all shadow-md shadow-teal-200">
              Get a Free Data Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="/services/ai-development" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all">
              Explore AI Development →
            </a>
          </div>
        </div>
      </section>

      {/* Why Analytics */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-teal-600 uppercase tracking-widest font-semibold">Why Analytics?</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Why Invest in Business Analytics?</h2>
            <p className="text-gray-600 leading-relaxed text-justify">Businesses that use data to guide decisions grow faster, waste less, and respond to market changes more effectively than those relying on intuition alone. Analytics transforms your existing data into your most valuable business asset.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyAnalytics.map((r) => (
              <div key={r.title} className="p-6 rounded-2xl bg-teal-50 border border-teal-100 hover:shadow-md transition-shadow">
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
            <span className="text-xs font-mono text-teal-600 uppercase tracking-widest font-semibold">What We Do</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Business Analytics Services We Offer</h2>
            <p className="text-gray-600 leading-relaxed text-justify">From custom KPI dashboards and marketing attribution to sales analytics and operational reporting, we deliver end-to-end analytics solutions that help you understand your business at a deeper level.</p>
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

      {/* Tools */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-teal-600 uppercase tracking-widest font-semibold">Tools We Use</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Analytics Tools & Technologies</h2>
            <p className="text-gray-600 leading-relaxed text-justify">We use industry-standard analytics and BI tools to build dashboards, automate reporting, and deliver insights that are easy for your team to understand and act on.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool) => (
              <span key={tool} className="px-5 py-2.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 font-semibold text-sm">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-semibold">How We Work</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Our Business Analytics Process</h2>
            <p className="text-gray-400 leading-relaxed text-justify">Our structured analytics process takes you from raw, scattered data to clean, reliable dashboards and actionable insights — with a focus on the decisions that matter most to your business.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-mono text-2xl font-bold text-teal-400">{step.num}</span>
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
            <span className="text-xs font-mono text-teal-600 uppercase tracking-widest font-semibold">Industries</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Industries We Serve</h2>
            <p className="text-gray-600 leading-relaxed text-justify">We deliver business analytics solutions across industries — helping e-commerce brands optimise conversions, SaaS companies reduce churn, and service businesses identify their most profitable customers.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((ind) => (
              <span key={ind} className="px-5 py-2.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 font-semibold text-sm">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-teal-600 uppercase tracking-widest font-semibold">FAQ</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-justify">Answers to common questions about our analytics tools, dashboard build timelines, data integration, KPI tracking, and team training.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-display font-semibold text-gray-900 text-sm sm:text-base">
                  {faq.q}
                  <svg className="w-5 h-5 text-teal-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed text-justify">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-teal-600 text-center text-white">
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Ready to Make Smarter Business Decisions?</h2>
        <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">Get a free data audit and discover exactly what insights are hiding in your existing data — and how we can turn them into a competitive advantage for your business.</p>
        <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-teal-50 transition-all shadow-md">
          Get My Free Data Audit
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
