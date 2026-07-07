import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";

export const metadata: Metadata = {
  title: "Projects | Arutech Consultancy Services LLP",
  description: "Explore Arutech's portfolio of delivered projects across AI/ML, cloud infrastructure, web apps, and mobile development.",
  alternates: { canonical: "https://arutechconsultancy.com/projects" },
};

const projects = [
  {
    category: "Web App · Delivered",
    title: "Shri Anandam Sweets & Restaurant",
    description: "A premium restaurant website with full menu showcase, image gallery, and conversion-focused CTAs — built for a pure-vegetarian Indian cuisine brand.",
    tags: ["Next.js", "Tailwind CSS", "Responsive", "SEO Optimised"],
    live: "https://www.shrianandamsweets.in/",
    color: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    category: "AI / ML · Delivered",
    title: "Predictive Analytics Dashboard",
    description: "Real-time forecasting interface for an e-commerce client. ML pipeline surfaces demand signals before they materialise, reducing inventory waste significantly.",
    tags: ["Python", "FastAPI", "React", "PostgreSQL"],
    live: null,
    color: "bg-orange-50 border-orange-200",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    category: "Cloud · Delivered",
    title: "Multi-Tenant SaaS Infrastructure",
    description: "Containerised cloud setup with Kubernetes orchestration. Handles 100K+ daily requests with auto-scaling and zero-downtime deploys.",
    tags: ["AWS", "Docker", "K8s", "Terraform"],
    live: null,
    color: "bg-sky-50 border-sky-200",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    category: "Mobile App · Delivered",
    title: "Field Service Mobile Platform",
    description: "React Native app for field technicians — offline-capable, GPS-integrated, and synced with a central dispatch system in real time.",
    tags: ["React Native", "Expo", "SQLite", "REST API"],
    live: null,
    color: "bg-emerald-50 border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    category: "Web App · Delivered",
    title: "Digilab Agency Website",
    description: "Marketing agency website with service showcases, case studies, and lead capture — designed to convert visitors into enquiries.",
    tags: ["React", "Next.js", "Tailwind CSS", "CMS"],
    live: null,
    color: "bg-violet-50 border-violet-200",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    category: "Web App · Delivered",
    title: "Animation Portfolio",
    description: "A creative portfolio website for a content creator and animator, showcasing reels, projects, and brand identity.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    live: null,
    color: "bg-pink-50 border-pink-200",
    badge: "bg-pink-100 text-pink-700",
  },
];

export default function Projects() {
  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-orange-50 via-white to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6">
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">Selected Work</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5 tracking-tight">
            Projects We&apos;re{" "}
            <span className="text-orange-500">Proud Of</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Real work delivered to real clients — across industries and technology stacks.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-2xl p-7 border ${project.color} hover:shadow-lg transition-all`}
            >
              <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full ${project.badge} mb-4`}>
                {project.category}
              </span>
              <h3 className="font-display text-lg font-bold text-gray-900 mb-3 leading-snug">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-xs text-gray-500 bg-white border border-gray-200 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                >
                  View Live Site
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-3">Want to be our next case study?</h2>
        <p className="text-gray-600 mb-6">Tell us what you&apos;re building — we&apos;ll get back to you within 24 hours.</p>
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all shadow-md shadow-orange-200"
        >
          Start a Project
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </section>

      <Footer />
    </main>
  );
}
