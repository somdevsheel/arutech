import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";
import Contact from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Business Automation & Workflow Solutions | AI Automation Agency",
  description: "Automate your business operations with custom workflow automation, AI integrations, n8n, Zapier, and API development. Save time, reduce costs, and scale efficiently with Arutech.",
  keywords: ["AI Automation Services", "Workflow Automation", "Business Process Automation", "Business Automation Agency", "API Integration", "CRM Automation", "n8n Automation", "Zapier Automation", "AI Business Solutions", "AI Integration Services"],
  alternates: { canonical: "https://arutechconsultancy.com/services/automation-workflows" },
};

const whyAutomate = [
  { icon: "⏱️", title: "Save Hours Every Week", desc: "Automate repetitive tasks that consume your team's time, allowing them to focus on work that truly drives business value." },
  { icon: "❌", title: "Eliminate Human Errors", desc: "Automated workflows execute consistently every time, removing data entry mistakes, missed steps, and communication gaps." },
  { icon: "📈", title: "Scale Without Headcount", desc: "Handle increased business volume, more customers, and growing complexity without proportionally growing your team." },
  { icon: "🔗", title: "Connect All Your Tools", desc: "Break down data silos by connecting your CRM, ERP, marketing tools, communication platforms, and custom systems." },
];

const ourServices = [
  { icon: "⚙️", title: "Workflow Automation", desc: "Design and implement intelligent workflows that automate multi-step business processes across departments." },
  { icon: "🔌", title: "API Integration", desc: "Connect any two applications, platforms, or databases through secure, reliable custom API integrations." },
  { icon: "🤖", title: "AI-Powered Automation", desc: "Combine AI decision-making with workflow automation for smarter, adaptive business processes." },
  { icon: "📋", title: "CRM & ERP Automation", desc: "Automate lead routing, data sync, pipeline management, and reporting across your CRM and ERP systems." },
  { icon: "📧", title: "Communication Automation", desc: "Auto-trigger emails, Slack messages, WhatsApp notifications, and follow-ups based on business events." },
  { icon: "📊", title: "Reporting & Analytics Automation", desc: "Automatically generate, compile, and distribute business reports to stakeholders on any schedule." },
];

const processesAutomate = [
  "Lead Capture & CRM Entry", "Invoice & Payment Follow-ups", "Customer Onboarding",
  "Inventory Management", "Social Media Scheduling", "HR & Leave Management",
  "Order Processing", "Email Campaign Triggers", "Data Sync Between Apps", "Support Ticket Routing",
];

const platforms = [
  "n8n", "Zapier", "Make (Integromat)", "REST APIs", "GraphQL", "Webhooks",
  "Google Workspace", "HubSpot", "Salesforce", "Notion", "Airtable", "Slack",
];

const process = [
  { num: "01", title: "Process Discovery", desc: "We map your existing workflows, identify bottlenecks, and prioritise automation opportunities by ROI." },
  { num: "02", title: "Automation Design", desc: "Design the automated workflow architecture including triggers, conditions, actions, and error handling." },
  { num: "03", title: "Development & Integration", desc: "Build and connect the automation using the most appropriate platforms and custom code where needed." },
  { num: "04", title: "Testing", desc: "Thorough testing with real data scenarios to ensure reliability, accuracy, and edge case handling." },
  { num: "05", title: "Deployment", desc: "Go-live with monitoring, error alerting, and documentation so your team can manage the automation." },
  { num: "06", title: "Optimisation", desc: "Continuous improvement based on performance data, new requirements, and expanding use cases." },
];

const industries = [
  "E-commerce & Retail", "Real Estate", "Healthcare", "Digital Agencies",
  "Finance & Accounting", "HR & Recruitment", "Education", "SaaS & Technology",
];

const faqs = [
  { q: "What types of business processes can be automated?", a: "Almost any repetitive, rule-based process can be automated — lead management, invoicing, data entry, email follow-ups, social media posting, reporting, customer onboarding, inventory updates, and much more." },
  { q: "Do I need technical knowledge to manage automated workflows?", a: "No. We build workflows that are easy to monitor and manage through visual dashboards. We also provide training and documentation so your team can handle basic modifications independently." },
  { q: "Which automation platforms do you work with?", a: "We work with n8n, Zapier, Make (Integromat), and also build custom automation solutions using REST APIs, webhooks, and serverless functions when needed." },
  { q: "How long does it take to implement business automation?", a: "Simple automations can be live within 1–2 weeks. Complex multi-system integrations with custom logic typically take 4–8 weeks depending on the number of systems and complexity." },
  { q: "Is our data secure when using automation platforms?", a: "Yes. We implement encrypted data transfer, access controls, audit logs, and where required, on-premise automation solutions to ensure your business data stays secure and compliant." },
  { q: "Can you automate workflows in our existing software?", a: "Yes. If the software has an API, webhook, or integration capability, we can build automation around it. For software without APIs, we explore browser automation and other approaches." },
];

export default function AutomationWorkflows() {
  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-amber-50 via-white to-orange-50/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-6">
            <span className="text-xs font-mono text-amber-600 tracking-widest font-semibold uppercase">Automation & Workflows</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            Automate Your Business with Intelligent{" "}
            <span className="text-orange-500">Workflows & AI Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 text-justify">
            Eliminate repetitive tasks, connect your business applications, and streamline operations with custom workflow automation, AI integrations, and intelligent business process automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all shadow-md shadow-orange-200">
              Automate My Business
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="/services/ai-development" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all">
              Explore AI Solutions →
            </a>
          </div>
        </div>
      </section>

      {/* Why Automate */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Why Automate?</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Why Business Automation Matters</h2>
            <p className="text-gray-600 leading-relaxed text-justify">Modern businesses thrive on efficiency. Discover how workflow automation reduces manual effort, minimises errors, improves productivity, and lets your team focus on high-value work.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyAutomate.map((r) => (
              <div key={r.title} className="p-6 rounded-2xl bg-amber-50 border border-amber-100 hover:shadow-md transition-shadow">
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
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">What We Offer</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Our Automation & Workflow Services</h2>
            <p className="text-gray-600 leading-relaxed text-justify">From workflow design and system integration to AI-powered automation and API development, we build scalable automation solutions tailored to your business processes.</p>
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

      {/* What We Automate & Tools */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Use Cases</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 mt-3 mb-4">Business Processes We Can Automate</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-justify">Automate repetitive tasks across sales, marketing, customer support, HR, finance, and operations with custom workflows designed around your business.</p>
            <div className="grid grid-cols-1 gap-2">
              {processesAutomate.map((s) => (
                <div key={s} className="flex items-center gap-2 p-3 rounded-xl bg-amber-50 border border-amber-100">
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-gray-700 font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Platforms & Tools</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 mt-3 mb-4">Platforms & Tools We Work With</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-justify">We integrate leading automation platforms, CRMs, APIs, and AI technologies to build seamless, scalable workflows that fit your existing ecosystem.</p>
            <div className="flex flex-wrap gap-2">
              {platforms.map((t) => (
                <span key={t} className="px-3 py-1.5 text-sm font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded-lg">{t}</span>
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Our Automation Development Process</h2>
            <p className="text-gray-400 leading-relaxed text-justify">From process discovery and workflow mapping to implementation, testing, deployment, and optimisation, we ensure every automation delivers measurable business value.</p>
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Industries We Help Automate</h2>
            <p className="text-gray-600 leading-relaxed text-justify">We build automation solutions for startups, SMEs, and enterprises across a wide range of industries, helping teams save time, reduce costs, and scale efficiently.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((ind) => (
              <span key={ind} className="px-5 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 font-semibold text-sm">{ind}</span>
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
            <p className="text-gray-600 text-justify">Find answers to common questions about workflow automation, AI integrations, implementation timelines, security, costs, and ongoing support.</p>
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
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Ready to Automate Your Business?</h2>
        <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">Let&apos;s build intelligent workflows that eliminate repetitive work, improve efficiency, and help your business scale faster.</p>
        <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-500 font-semibold rounded-xl hover:bg-orange-50 transition-all shadow-md">
          Get a Free Consultation
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
