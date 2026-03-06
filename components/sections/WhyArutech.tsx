import Link from "next/link";
import { Shield, Zap, Users, Globe2, Award, HeartHandshake, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Speed to Market",
    desc: "We move fast without breaking things. Agile delivery processes that get your product live in weeks, not months.",
    color: "text-yellow-500",
    bg: "bg-yellow-50 dark:bg-yellow-950/20",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Security-first architecture. Every system we build follows industry best practices for data protection and compliance.",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    icon: Globe2,
    title: "Cloud-Native by Default",
    desc: "Built on AWS with auto-scaling, high availability, and global CDN  -  your platform performs flawlessly at any scale.",
    color: "text-sky-500",
    bg: "bg-sky-50 dark:bg-sky-950/20",
  },
  {
    icon: Award,
    title: "DPIIT Recognized",
    desc: "Government-validated innovation. As a DPIIT startup, we bring the credibility and rigor of India's top startup program.",
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/20",
  },
  {
    icon: HeartHandshake,
    title: "Long-term Partnership",
    desc: "We don't just deliver and disappear. We're your technology partner  -  from first commit to future roadmap.",
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950/20",
  },
  {
    icon: Users,
    title: "India-First Focus",
    desc: "Deep understanding of the Indian market, compliance landscape, and scale requirements  -  built into every solution.",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
  },
];

export function WhyArutech() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="section-label mb-5 inline-flex">Why Arutech</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white tracking-tight leading-tight">
              The Difference Is In<br />
              <span className="text-gradient-brand">How We Think</span>
            </h2>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg mb-6">
              Hundreds of agencies write code. We engineer systems. There is a fundamental difference in how we approach every engagement  -  with architectural thinking, long-term ownership, and genuine partnership.
            </p>
            <Link href="/about"
              className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold text-sm hover:gap-3 transition-all group">
              About our approach <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc, color, bg }) => (
            <div key={title} className="card-enterprise p-7 group">
              <div className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
