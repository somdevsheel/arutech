import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";
import Contact from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Mobile App Development Company | Android, iOS & Flutter Apps",
  description: "Build high-performance Android, iOS, and cross-platform mobile apps with Arutech. Custom mobile app development services for startups, SMEs, and enterprises across India.",
  keywords: ["Mobile App Development", "App Development Company", "Mobile Application Development", "App Development Services", "Flutter App Development", "React Native App Development", "Android App Development", "iOS App Development", "Cross Platform App Development", "Custom App Development"],
  alternates: { canonical: "https://arutechconsultancy.com/services/mobile-app-development" },
};

const whyReasons = [
  { icon: "📱", title: "Reach Billions of Users", desc: "With 6.8 billion smartphone users globally, a mobile app puts your business in the pocket of your audience 24/7." },
  { icon: "🔄", title: "Boost Customer Retention", desc: "Mobile apps increase engagement by up to 3x compared to mobile websites through personalized notifications and experiences." },
  { icon: "⚙️", title: "Streamline Operations", desc: "Automate workflows, manage field teams, and digitize business processes with purpose-built enterprise mobile solutions." },
  { icon: "💰", title: "Create New Revenue Streams", desc: "Launch in-app purchases, subscriptions, loyalty programs, and digital services that directly grow your bottom line." },
];

const ourServices = [
  { title: "Native Android Development", desc: "High-performance Android apps built with Kotlin and Java for the best user experience on Google Play.", icon: "🤖" },
  { title: "Native iOS Development", desc: "Smooth, fast iOS apps built with Swift and SwiftUI for iPhone and iPad users on the App Store.", icon: "🍎" },
  { title: "Flutter Development", desc: "Beautiful cross-platform apps from a single codebase — deploy to Android, iOS, and web simultaneously.", icon: "💙" },
  { title: "React Native Development", desc: "JavaScript-powered cross-platform apps with near-native performance and a large ecosystem of libraries.", icon: "⚛️" },
  { title: "Mobile UI/UX Design", desc: "Intuitive, visually engaging interfaces designed for mobile-first user journeys that convert and retain.", icon: "🎨" },
  { title: "App Testing & QA", desc: "Rigorous manual and automated testing to ensure your app performs flawlessly across all devices and OS versions.", icon: "✅" },
];

const solutions = [
  "E-commerce & Shopping Apps", "Social Networking Apps", "Enterprise & B2B Apps",
  "Healthcare & Telemedicine", "Food & Restaurant Apps", "FinTech & Banking Apps",
  "EdTech & Learning Apps", "On-Demand Service Apps", "Travel & Logistics Apps", "Real Estate Apps",
];

const platforms = [
  { name: "Android", detail: "Kotlin · Java · Android SDK", color: "bg-green-50 border-green-200 text-green-700" },
  { name: "iOS", detail: "Swift · SwiftUI · Xcode", color: "bg-gray-50 border-gray-300 text-gray-700" },
  { name: "Flutter", detail: "Dart · Flutter SDK · Firebase", color: "bg-blue-50 border-blue-200 text-blue-700" },
  { name: "React Native", detail: "JavaScript · Expo · Metro", color: "bg-cyan-50 border-cyan-200 text-cyan-700" },
];

const process = [
  { num: "01", title: "Discovery & Strategy", desc: "We analyse your business goals, target audience, and competitors to define a clear product roadmap." },
  { num: "02", title: "UI/UX Design", desc: "Our designers create wireframes, prototypes, and pixel-perfect interfaces optimised for mobile usability." },
  { num: "03", title: "Development", desc: "Clean, scalable code is written following best practices with regular sprint reviews and client updates." },
  { num: "04", title: "Testing & QA", desc: "Comprehensive testing across multiple devices, OS versions, and real-user scenarios before release." },
  { num: "05", title: "Launch", desc: "We manage App Store and Google Play submissions, handle review processes, and ensure a smooth go-live." },
  { num: "06", title: "Maintenance & Support", desc: "Post-launch monitoring, bug fixes, feature updates, and performance optimisation to keep your app thriving." },
];

const features = [
  "Push Notifications", "Offline Mode Support", "Payment Gateway Integration", "Analytics & Reporting",
  "Biometric Authentication", "Cloud Synchronisation", "Social Login (Google, Apple)", "In-App Messaging",
  "Real-Time Updates", "Geolocation & Maps", "Camera & Media Access", "Multi-Language Support",
];

const technologies = [
  "React Native", "Flutter", "Kotlin", "Swift", "Node.js", "Firebase",
  "AWS", "PostgreSQL", "MongoDB", "Redux", "GraphQL", "REST APIs",
];

const industries = [
  "Healthcare", "Education", "Retail & E-commerce", "Finance & FinTech",
  "Hospitality", "Real Estate", "Logistics & Transport", "Food & Beverage",
];

const faqs = [
  { q: "How long does it take to build a mobile app?", a: "A simple app typically takes 8–12 weeks. Medium-complexity apps take 3–5 months, and enterprise-grade apps may take 5–9 months depending on features and integrations." },
  { q: "Which platform should I build for first — Android or iOS?", a: "It depends on your target audience. For India-focused businesses, Android has higher market share. For premium audiences, iOS is preferred. We also offer cross-platform development so you can launch on both simultaneously." },
  { q: "How much does mobile app development cost?", a: "Costs vary based on features, complexity, and platform. We provide detailed estimates after a free discovery call. Most projects start from ₹2–3 lakhs for a basic app." },
  { q: "Can you integrate my existing CRM, ERP, or backend systems?", a: "Yes. We have extensive experience integrating mobile apps with third-party APIs, CRMs, ERPs, payment gateways, and custom backends." },
  { q: "Do you provide ongoing maintenance and support after launch?", a: "Absolutely. We offer flexible maintenance plans covering bug fixes, performance updates, OS compatibility updates, and new feature development." },
  { q: "How do you ensure the security of the mobile app?", a: "We implement industry-standard security practices including data encryption, secure API communication, biometric authentication, token-based auth, and regular security audits." },
];

export default function MobileAppDevelopment() {
  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-emerald-50 via-white to-teal-50/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-6">
            <span className="text-xs font-mono text-emerald-600 tracking-widest font-semibold uppercase">Mobile App Development</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            Build High-Performance Mobile Apps That{" "}
            <span className="text-orange-500">Drive Business Growth</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 text-justify">
            Transform your ideas into powerful Android, iOS, and cross-platform mobile applications designed to engage users, streamline operations, and accelerate business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all shadow-md shadow-orange-200">
              Start Your App Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="/projects" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Why Mobile?</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Why Invest in Mobile App Development?</h2>
            <p className="text-gray-600 leading-relaxed text-justify">Discover how a custom mobile application can improve customer engagement, increase operational efficiency, and create new revenue opportunities for your business.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyReasons.map((r) => (
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
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">What We Offer</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Our Mobile App Development Services</h2>
            <p className="text-gray-600 leading-relaxed text-justify">From strategy and design to development, testing, deployment, and ongoing support, we provide end-to-end mobile app development solutions tailored to your business needs.</p>
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

      {/* Solutions & Platforms */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Solutions</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 mt-3 mb-4">Mobile App Solutions We Build</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-justify">We develop scalable, secure, and feature-rich mobile applications across multiple industries and business models.</p>
            <div className="grid grid-cols-2 gap-2">
              {solutions.map((s) => (
                <div key={s} className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-gray-700 font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Platforms</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 mt-3 mb-4">Platforms We Specialise In</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-justify">Build once, scale everywhere. We create native and cross-platform mobile applications using modern frameworks and technologies.</p>
            <div className="space-y-3">
              {platforms.map((p) => (
                <div key={p.name} className={`p-4 rounded-xl border ${p.color}`}>
                  <p className="font-display text-base font-bold mb-1">{p.name}</p>
                  <p className="text-sm font-mono opacity-80">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">How We Work</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Our Mobile App Development Process</h2>
            <p className="text-gray-600 leading-relaxed text-justify">A transparent, agile development process that ensures faster delivery, high-quality code, and exceptional user experiences.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <span className="font-mono text-2xl font-bold text-orange-400">{step.num}</span>
                <h3 className="font-display text-base font-bold text-gray-900 mt-2 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Technologies */}
      <section className="py-16 lg:py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest font-semibold">App Features</span>
            <h2 className="font-display text-3xl font-bold text-white mt-3 mb-4">Features That Make Your App Stand Out</h2>
            <p className="text-gray-400 leading-relaxed mb-6 text-justify">Every application is designed with performance, security, usability, and scalability at its core.</p>
            <div className="grid grid-cols-2 gap-2">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                  <svg className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-gray-300">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest font-semibold">Tech Stack</span>
            <h2 className="font-display text-3xl font-bold text-white mt-3 mb-4">Technologies We Use</h2>
            <p className="text-gray-400 leading-relaxed mb-6 text-justify">We leverage the latest programming languages, frameworks, and cloud platforms to build future-ready mobile applications.</p>
            <div className="flex flex-wrap gap-2">
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
            <p className="text-gray-600 leading-relaxed text-justify">Our experience spans startups, SMEs, and enterprises across diverse industries with customised mobile solutions for every business.</p>
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
            <p className="text-gray-600 text-justify">Get answers to common questions about mobile app development, timelines, costs, technologies, and project delivery.</p>
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
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
        <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">Whether you&apos;re launching a startup or modernising your business, let&apos;s turn your vision into a powerful mobile application.</p>
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
