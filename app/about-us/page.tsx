import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";
import Contact from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "About Us | Arutech Consultancy Services LLP",
  description:
    "Founded in March 2025, Arutech Consultancy Services LLP has delivered 21+ projects in AI, Mobile Apps, Web Development, Automation, Google Ads and Digital Marketing across India.",
  alternates: { canonical: "https://arutechconsultancy.com/about-us" },
};

const values = [
  { icon: "⚡", title: "Strategic Execution", description: "We move fast because we plan properly. Every sprint is grounded in architecture that was thought through before code was written." },
  { icon: "🎯", title: "Business-First Approach", description: "We measure success by what you ship and what stays running — not by hours billed or scope expanded without reason." },
  { icon: "🔒", title: "Transparency & Complete Ownership", description: "Every deliverable is documented, tested, and structured for handoff. You own the code, the infrastructure, and the roadmap." },
  { icon: "🤝", title: "Results That Matter", description: "Small, senior team — you work directly with the people building your product. No layers, no surprises." },
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
            Build Smart.{" "}
            <span className="text-orange-500">Grow Fast.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Arutech Consultancy Services LLP is an India-based digital consultancy specialising in AI, Mobile Apps, Web Development, Automation, Google Ads, SEO and Social Media Marketing — built to deliver measurable business results.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Our Mission</span>
            <h2 className="font-display text-4xl font-bold text-gray-900 mt-3 mb-5 leading-tight">
              Smarter digital solutions for businesses that want to grow fast.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              We design and deliver complete digital ecosystems — from custom mobile apps and AI-powered automation to high-converting websites, Google Ads campaigns, SEO, and social media marketing that drives real results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our clients are founders, product teams, and business owners who need a reliable partner — not just a vendor. We work as an extension of your team and measure our success by yours.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "21+", label: "Projects Delivered" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "3+",  label: "Years of Experience" },
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
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">We Stand For!</span>
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


      <Contact />
      <Footer />
    </main>
  );
}
