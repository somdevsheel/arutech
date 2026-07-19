import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";
import Contact from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Social Media Marketing Agency India | Meta Ads, Content & Community",
  description: "Grow your brand with strategic Social Media Marketing by Arutech. Expert Meta Ads, content creation, community management, influencer marketing, and paid social campaigns that drive engagement and real business results.",
  keywords: ["Social Media Marketing", "Social Media Marketing Agency", "Meta Ads Management", "Facebook Ads", "Instagram Marketing", "Social Media Management", "Content Creation", "Community Management", "Paid Social Media", "Social Media Strategy"],
  alternates: { canonical: "https://arutechconsultancy.com/services/social-media-marketing" },
};

const whySMM = [
  { icon: "📣", title: "Brand Awareness at Scale", desc: "Reach millions of potential customers where they spend their time. Social media is the fastest way to build brand recognition and recall in your target market." },
  { icon: "🎯", title: "Precise Audience Targeting", desc: "Meta Ads let you target by age, location, interests, behaviours, and lookalike audiences — ensuring your content reaches the right people at the right time." },
  { icon: "💬", title: "Build Loyal Communities", desc: "Consistent, engaging content builds a community of brand advocates who trust your business, refer others, and become repeat customers." },
  { icon: "📈", title: "Measurable Business Results", desc: "Every post, campaign, and ad is tracked. See exactly how social media contributes to website traffic, leads, and sales for your business." },
];

const ourServices = [
  { icon: "📱", title: "Social Media Management", desc: "Full-service management of your Instagram, Facebook, LinkedIn, and other profiles — strategy, content calendar, posting, and engagement." },
  { icon: "🖼️", title: "Content Creation", desc: "Eye-catching graphics, reels, stories, carousels, and video content designed to stop the scroll and communicate your brand story." },
  { icon: "🎯", title: "Meta Ads (Facebook & Instagram)", desc: "High-ROI paid social campaigns on Facebook and Instagram — lead generation, traffic, awareness, retargeting, and conversion campaigns." },
  { icon: "👥", title: "Community Management", desc: "Proactive engagement with your audience — responding to comments, DMs, reviews, and building meaningful conversations around your brand." },
  { icon: "🤝", title: "Influencer Marketing", desc: "Identify, outreach, and collaborate with relevant micro and macro influencers to amplify your brand reach and credibility authentically." },
  { icon: "📊", title: "Social Media Analytics", desc: "Monthly reporting on reach, engagement, follower growth, ad performance, and actionable insights to continuously improve your strategy." },
];

const platforms = [
  { name: "Instagram", icon: "📸" },
  { name: "Facebook", icon: "👤" },
  { name: "LinkedIn", icon: "💼" },
  { name: "YouTube", icon: "▶️" },
  { name: "Twitter/X", icon: "✖️" },
  { name: "Pinterest", icon: "📌" },
];

const process = [
  { num: "01", title: "Brand & Audience Audit", desc: "Analyse your current social presence, competitor landscape, target audience personas, and define clear goals for your social media strategy." },
  { num: "02", title: "Strategy & Content Planning", desc: "Develop a tailored content strategy, monthly calendar, content themes, hashtag research, and campaign roadmap aligned to your business objectives." },
  { num: "03", title: "Content Creation", desc: "Design and produce platform-optimised graphics, reels, carousels, stories, and copy that reflects your brand voice and drives engagement." },
  { num: "04", title: "Publishing & Community Management", desc: "Schedule posts at optimal times, respond to comments and messages, manage your community, and protect your brand's online reputation." },
  { num: "05", title: "Paid Social Campaigns", desc: "Set up, launch, and manage Meta Ads campaigns with precise targeting, compelling creatives, and conversion-focused landing pages." },
  { num: "06", title: "Reporting & Optimisation", desc: "Monthly performance reports with key metrics, insights, learnings, and a revised strategy to continuously improve results." },
];

const industries = [
  "E-commerce & Retail", "Healthcare & Wellness", "Real Estate", "Education & Coaching",
  "Restaurants & Food", "Fashion & Lifestyle", "Finance & Fintech", "Startups & SaaS",
];

const faqs = [
  { q: "How many posts per week do you create?", a: "Our packages typically include 4–6 posts per week depending on the platform. We create content calendars in advance for your review and approval before publishing." },
  { q: "Which social media platforms do you manage?", a: "We primarily manage Instagram, Facebook, and LinkedIn. We also work with YouTube, Twitter/X, and Pinterest depending on where your target audience is most active." },
  { q: "Do you run paid Meta Ads as part of the service?", a: "Yes. Paid Meta Ads (Facebook & Instagram advertising) are included in our full-service packages or available as a standalone add-on. Ad spend budget is separate from our management fee." },
  { q: "How long before we see results from social media marketing?", a: "Organic social media typically shows meaningful engagement growth in 2–3 months. Paid Meta Ads campaigns can generate leads and traffic within days of launch." },
  { q: "Do you create video content and reels?", a: "Yes. We create short-form video content, Instagram Reels, Facebook videos, and YouTube Shorts as part of our content creation service — graphics, copywriting, and video editing included." },
  { q: "Can you manage our existing social media accounts?", a: "Absolutely. We audit your existing accounts, align content with your brand guidelines, and take full ownership of strategy, creation, and community management." },
];

export default function SocialMediaMarketing() {
  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-rose-50 via-white to-pink-50/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 border border-rose-200 mb-6">
            <span className="text-xs font-mono text-rose-600 tracking-widest font-semibold uppercase">Social Media Marketing</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            Grow Your Brand with{" "}
            <span className="text-rose-500">Strategic Social Media Marketing</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 text-justify">
            Build a powerful social media presence that attracts your ideal audience, drives engagement, and converts followers into customers — with expert content creation, community management, and high-ROI Meta Ads campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl transition-all shadow-md shadow-rose-200">
              Grow My Social Presence
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="/services/digital-marketing-seo" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all">
              Explore SEO & Digital Marketing →
            </a>
          </div>
        </div>
      </section>

      {/* Why SMM */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-rose-500 uppercase tracking-widest font-semibold">Why Social Media?</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Why Invest in Social Media Marketing?</h2>
            <p className="text-gray-600 leading-relaxed text-justify">With over 460 million active social media users in India, social platforms are where your customers discover brands, research products, and make purchase decisions. A strategic presence is no longer optional.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whySMM.map((r) => (
              <div key={r.title} className="p-6 rounded-2xl bg-rose-50 border border-rose-100 hover:shadow-md transition-shadow">
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
            <span className="text-xs font-mono text-rose-500 uppercase tracking-widest font-semibold">What We Do</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Social Media Marketing Services We Offer</h2>
            <p className="text-gray-600 leading-relaxed text-justify">From content strategy and creation to paid social advertising and community management, we handle every aspect of your social media presence so you can focus on running your business.</p>
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

      {/* Platforms */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-rose-500 uppercase tracking-widest font-semibold">Platforms</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Platforms We Manage</h2>
            <p className="text-gray-600 leading-relaxed text-justify">We manage your social media presence across all major platforms, creating platform-specific strategies and content formats that perform best for each channel&apos;s unique audience and algorithm.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {platforms.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-rose-50 border border-rose-100 hover:shadow-md transition-shadow">
                <span className="text-3xl">{p.icon}</span>
                <span className="font-semibold text-gray-800 text-sm text-center">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-rose-400 uppercase tracking-widest font-semibold">How We Work</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Our Social Media Marketing Process</h2>
            <p className="text-gray-400 leading-relaxed text-justify">Our proven process combines audience research, strategic content planning, creative production, community management, and data-driven optimisation to build a social media presence that drives real business results.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-mono text-2xl font-bold text-rose-400">{step.num}</span>
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
            <span className="text-xs font-mono text-rose-500 uppercase tracking-widest font-semibold">Industries</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Industries We Help Grow</h2>
            <p className="text-gray-600 leading-relaxed text-justify">We create social media strategies for businesses across all industries — from e-commerce and healthcare to education, real estate, and hospitality.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((ind) => (
              <span key={ind} className="px-5 py-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 font-semibold text-sm">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-rose-500 uppercase tracking-widest font-semibold">FAQ</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-justify">Find answers to common questions about our social media marketing services, content creation process, platforms we manage, and expected results.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-display font-semibold text-gray-900 text-sm sm:text-base">
                  {faq.q}
                  <svg className="w-5 h-5 text-rose-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed text-justify">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-rose-500 text-center text-white">
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Ready to Dominate Social Media?</h2>
        <p className="text-rose-100 text-lg mb-8 max-w-xl mx-auto">Whether you&apos;re starting from scratch or looking to scale your existing social presence, we&apos;ll build a strategy that grows your audience and drives measurable business results.</p>
        <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-500 font-semibold rounded-xl hover:bg-rose-50 transition-all shadow-md">
          Get a Free Social Media Audit
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
