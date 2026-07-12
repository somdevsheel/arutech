"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const stages = [
  {
    number: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.82V5a1 1 0 00-1-1H4a1 1 0 00-1 1v3.82a1 1 0 00.447.894L8 12M15 10l-7 2m7-2v6m-7-4v4m0 0l-4.553 2.069A1 1 0 013 19.18V15m12 1l4.553 2.069A1 1 0 0121 19.18V15M8 16l7-2" />
      </svg>
    ),
    title: "Attract",
    subtitle: "Build awareness where your buyers are",
    tactics: ["SEO & Content Marketing", "Google / Meta Ads", "Social Media Presence", "Brand Positioning"],
    color: "bg-orange-500",
    lightBg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-600",
  },
  {
    number: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Capture",
    subtitle: "Turn visitors into qualified leads",
    tactics: ["High-converting Landing Pages", "Lead Magnet Design", "Contact & Enquiry Forms", "Free Offer Campaigns"],
    color: "bg-amber-500",
    lightBg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-600",
  },
  {
    number: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Nurture",
    subtitle: "Build trust before the sale",
    tactics: ["Automated Email Sequences", "Retargeting Campaigns", "Case Study Delivery", "Personalised Follow-ups"],
    color: "bg-emerald-500",
    lightBg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-600",
  },
  {
    number: "04",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Convert",
    subtitle: "Close the deal with confidence",
    tactics: ["Proposal & Offer Pages", "Free Demo / Trial", "Testimonial Showcases", "Urgency & Incentive Triggers"],
    color: "bg-violet-500",
    lightBg: "bg-violet-50",
    border: "border-violet-200",
    text: "text-violet-600",
  },
  {
    number: "05",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Retain",
    subtitle: "Turn customers into advocates",
    tactics: ["Post-sale Onboarding", "Loyalty & Referral Programmes", "Upsell Email Flows", "Review Generation"],
    color: "bg-rose-500",
    lightBg: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-600",
  },
];

export default function Funnels() {
  const sectionRef = useScrollReveal();

  return (
    <section id="funnels" ref={sectionRef} className="relative py-14 lg:py-20 bg-white">
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-5">
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">Funnels & Pipelines</span>
          </div>
          <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            We Build the Systems That{" "}
            <span className="gradient-text">Fill Your Pipeline</span>
          </h2>
          <p className="animate-on-scroll delay-200 text-gray-600 text-lg leading-relaxed">
            From the first impression to long-term retention — we design and build marketing funnels that work while you sleep.
          </p>
        </div>

        {/* Funnel stages */}
        <div className="max-w-3xl mx-auto space-y-4">
            {stages.map((stage, i) => (
              <div
                key={stage.title}
                className={`animate-on-scroll delay-${(i + 1) * 100} card-hover flex flex-col sm:flex-row gap-5 bg-white rounded-2xl p-6 border ${stage.border} shadow-sm hover:shadow-md transition-all`}
              >
                {/* Number + icon */}
                <div className={`flex-shrink-0 flex items-center gap-4 sm:flex-col sm:items-start sm:w-24`}>
                  <div className={`w-12 h-12 rounded-xl ${stage.lightBg} flex items-center justify-center ${stage.text}`}>
                    {stage.icon}
                  </div>
                  <span className={`font-mono text-2xl font-black ${stage.text} opacity-30`}>{stage.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-1">{stage.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{stage.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {stage.tactics.map((t) => (
                      <span key={t} className={`px-3 py-1 text-xs font-medium ${stage.lightBg} ${stage.text} rounded-full border ${stage.border}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* CTA */}
        <div className="animate-on-scroll delay-400 text-center mt-8">
          <p className="text-gray-600 mb-5 text-lg">
            Ready to build a funnel that converts?
          </p>
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-0.5"
          >
            Build My Funnel
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
