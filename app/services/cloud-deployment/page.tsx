import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";
import Contact from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Cloud Deployment & DevOps Services India | AWS, GCP, Azure",
  description: "Deploy, scale, and manage your applications on cloud with expert Cloud Deployment and DevOps services by Arutech. AWS, Google Cloud, Azure, Docker, Kubernetes, CI/CD pipelines, and infrastructure automation.",
  keywords: ["Cloud Deployment", "Cloud Services India", "AWS Deployment", "Google Cloud Platform", "Azure Deployment", "DevOps Services", "Docker Kubernetes", "CI/CD Pipeline", "Cloud Infrastructure", "Cloud Migration", "DevOps Consulting India"],
  alternates: { canonical: "https://arutechconsultancy.com/services/cloud-deployment" },
};

const whyCloud = [
  { icon: "⚡", title: "Scale Instantly", desc: "Automatically scale your infrastructure up or down based on real-time demand — so your app handles traffic spikes without performance degradation or over-provisioning." },
  { icon: "🔒", title: "Enterprise-Grade Security", desc: "Benefit from built-in security features including IAM policies, VPCs, SSL, encryption at rest and in transit, and compliance frameworks like SOC 2 and GDPR." },
  { icon: "💰", title: "Reduce Infrastructure Costs", desc: "Pay only for what you use. Cloud-optimised architecture and right-sizing eliminate wasteful spend on idle servers and over-provisioned resources." },
  { icon: "🌍", title: "Global Availability", desc: "Deploy your application to multiple regions worldwide for low-latency access, built-in redundancy, and 99.99% uptime SLAs backed by major cloud providers." },
];

const ourServices = [
  { icon: "☁️", title: "Cloud Infrastructure Setup", desc: "Design and provision scalable, secure cloud infrastructure on AWS, Google Cloud, or Azure — VPCs, subnets, security groups, load balancers, and auto-scaling groups." },
  { icon: "🐳", title: "Docker & Containerisation", desc: "Containerise your applications with Docker for consistent deployments across environments — from development to staging to production." },
  { icon: "⚙️", title: "Kubernetes Orchestration", desc: "Deploy and manage containerised workloads at scale with Kubernetes — automated rollouts, self-healing, horizontal pod autoscaling, and service discovery." },
  { icon: "🔄", title: "CI/CD Pipeline Setup", desc: "Implement continuous integration and deployment pipelines with GitHub Actions, GitLab CI, or Jenkins — automate testing, builds, and deployments." },
  { icon: "📦", title: "Cloud Migration", desc: "Migrate your existing on-premise or legacy applications to the cloud with minimal downtime using proven lift-and-shift or re-architecting strategies." },
  { icon: "📊", title: "Monitoring & Alerting", desc: "Set up cloud-native monitoring, logging, and alerting with CloudWatch, Stackdriver, or Datadog to maintain visibility and respond to incidents faster." },
];

const platforms = [
  { name: "AWS", icon: "☁️" },
  { name: "Google Cloud", icon: "🌐" },
  { name: "Azure", icon: "🔷" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "⚙️" },
  { name: "Terraform", icon: "🏗️" },
];

const process = [
  { num: "01", title: "Discovery & Architecture Review", desc: "Understand your application stack, current infrastructure, traffic patterns, compliance needs, and define the optimal cloud architecture for your workloads." },
  { num: "02", title: "Infrastructure Design", desc: "Design a cloud-native infrastructure blueprint — VPCs, compute instances, managed databases, storage, CDN, load balancers, and networking configuration." },
  { num: "03", title: "Containerisation & Setup", desc: "Dockerise your application, write Kubernetes manifests or Helm charts, and set up container registries for repeatable, environment-agnostic deployments." },
  { num: "04", title: "CI/CD Pipeline Implementation", desc: "Build automated pipelines that run tests, build Docker images, push to registries, and deploy to your cloud environment on every code push." },
  { num: "05", title: "Deployment & Migration", desc: "Execute the deployment or migration with a rollback strategy in place — zero-downtime deployments using blue-green or canary release techniques." },
  { num: "06", title: "Monitoring & Handover", desc: "Configure monitoring dashboards, alerts, log aggregation, and uptime checks — then hand over full documentation and access to your team." },
];

const industries = [
  "SaaS Platforms", "E-commerce", "FinTech & Banking", "Healthcare Tech",
  "EdTech", "Media & Streaming", "Startups", "Enterprise Software",
];

const faqs = [
  { q: "Which cloud platform do you recommend — AWS, GCP, or Azure?", a: "The right platform depends on your use case, existing tooling, and team familiarity. AWS is the most feature-rich; GCP excels for data/ML workloads; Azure is ideal for Microsoft-heavy environments. We help you evaluate and choose the best fit." },
  { q: "Can you migrate our existing server to the cloud?", a: "Yes. We handle complete cloud migrations — from single VPS setups to multi-server architectures. We plan the migration strategy, minimise downtime, and validate performance before fully cutting over." },
  { q: "What is the difference between Docker and Kubernetes?", a: "Docker is used to package applications into containers. Kubernetes orchestrates and manages those containers at scale — handling deployment, scaling, self-healing, and load balancing across a cluster of machines." },
  { q: "Do you set up CI/CD pipelines for our development team?", a: "Yes. We set up automated CI/CD pipelines using GitHub Actions, GitLab CI, or similar tools — integrating tests, builds, Docker image creation, and deployments so your team ships with confidence." },
  { q: "How do you ensure security in cloud deployments?", a: "We follow security best practices: least-privilege IAM policies, private subnets, security groups, secrets management (AWS Secrets Manager / Vault), HTTPS enforcement, and regular vulnerability scanning." },
  { q: "What ongoing support do you provide after deployment?", a: "We offer post-deployment monitoring, incident response support, and maintenance retainers. We also provide full documentation and knowledge transfer so your team can manage the infrastructure independently." },
];

export default function CloudDeployment() {
  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-sky-50 via-white to-cyan-50/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 border border-sky-200 mb-6">
            <span className="text-xs font-mono text-sky-600 tracking-widest font-semibold uppercase">Cloud Deployment & DevOps</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            Deploy Faster. Scale Smarter with{" "}
            <span className="text-sky-500">Expert Cloud & DevOps</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 text-justify">
            Build reliable, scalable cloud infrastructure on AWS, GCP, or Azure — with containerisation, CI/CD automation, Kubernetes orchestration, and cloud migration expertise that helps your applications perform at any scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-all shadow-md shadow-sky-200">
              Get a Cloud Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="/services/ai-development" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all">
              Explore AI Development →
            </a>
          </div>
        </div>
      </section>

      {/* Why Cloud */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-sky-500 uppercase tracking-widest font-semibold">Why Cloud?</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Why Move to the Cloud?</h2>
            <p className="text-gray-600 leading-relaxed text-justify">Cloud infrastructure gives modern businesses the agility to scale, the security to comply, and the cost-efficiency to grow — without the overhead of managing physical servers or on-premise data centres.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCloud.map((r) => (
              <div key={r.title} className="p-6 rounded-2xl bg-sky-50 border border-sky-100 hover:shadow-md transition-shadow">
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
            <span className="text-xs font-mono text-sky-500 uppercase tracking-widest font-semibold">What We Do</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Cloud & DevOps Services We Offer</h2>
            <p className="text-gray-600 leading-relaxed text-justify">From initial cloud architecture and containerisation to CI/CD automation and 24/7 monitoring, we manage the full spectrum of cloud deployment and DevOps engineering for your applications.</p>
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
            <span className="text-xs font-mono text-sky-500 uppercase tracking-widest font-semibold">Technologies</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Cloud Platforms & Tools We Use</h2>
            <p className="text-gray-600 leading-relaxed text-justify">We work with the leading cloud platforms and DevOps toolchain to deliver robust, maintainable, and cost-effective infrastructure solutions.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {platforms.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-sky-50 border border-sky-100 hover:shadow-md transition-shadow">
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
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">How We Work</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Our Cloud Deployment Process</h2>
            <p className="text-gray-400 leading-relaxed text-justify">Our structured approach covers everything from infrastructure design and containerisation to CI/CD automation and go-live monitoring — ensuring smooth, reliable deployments every time.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-mono text-2xl font-bold text-sky-400">{step.num}</span>
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
            <span className="text-xs font-mono text-sky-500 uppercase tracking-widest font-semibold">Industries</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Industries We Deploy For</h2>
            <p className="text-gray-600 leading-relaxed text-justify">We deploy cloud infrastructure for businesses across industries — from early-stage startups needing their first production environment to enterprises migrating complex workloads.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((ind) => (
              <span key={ind} className="px-5 py-2.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 font-semibold text-sm">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-sky-500 uppercase tracking-widest font-semibold">FAQ</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-justify">Common questions about cloud platforms, Docker vs Kubernetes, CI/CD pipelines, migration strategies, and post-deployment support.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-display font-semibold text-gray-900 text-sm sm:text-base">
                  {faq.q}
                  <svg className="w-5 h-5 text-sky-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed text-justify">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-sky-500 text-center text-white">
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Ready to Move to the Cloud?</h2>
        <p className="text-sky-100 text-lg mb-8 max-w-xl mx-auto">Whether you&apos;re deploying a new application or migrating existing infrastructure, our cloud experts will design a scalable, secure, and cost-efficient solution for your business.</p>
        <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-500 font-semibold rounded-xl hover:bg-sky-50 transition-all shadow-md">
          Get a Free Cloud Audit
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
