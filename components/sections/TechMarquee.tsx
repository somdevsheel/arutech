const techRow1 = [
  { name: "React", emoji: "⚛️" }, { name: "Next.js", emoji: "▲" }, { name: "Node.js", emoji: "🟢" },
  { name: "TypeScript", emoji: "🔷" }, { name: "AWS", emoji: "☁️" }, { name: "Python", emoji: "🐍" },
  { name: "Redis", emoji: "🔴" }, { name: "PostgreSQL", emoji: "🐘" }, { name: "Docker", emoji: "🐳" },
];
const techRow2 = [
  { name: "Kubernetes", emoji: "⚙️" }, { name: "Terraform", emoji: "🏗️" }, { name: "React Native", emoji: "📱" },
  { name: "LangChain", emoji: "🔗" }, { name: "OpenAI", emoji: "🤖" }, { name: "GraphQL", emoji: "◈" },
  { name: "MongoDB", emoji: "🍃" }, { name: "GitHub Actions", emoji: "⚡" }, { name: "FastAPI", emoji: "🚀" },
];

function TechChip({ name, emoji }: { name: string; emoji: string }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-3 bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.06] rounded-full shadow-sm mx-2 flex-shrink-0 hover:border-brand-200 dark:hover:border-brand-700/50 transition-colors group">
      <span className="text-lg">{emoji}</span>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{name}</span>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-900/50 border-y border-gray-100 dark:border-white/[0.04] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="section-label inline-flex mb-3">Technology Stack</span>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white">
          Built with Modern, Battle-Tested Tech
        </h2>
      </div>

      {/* Row 1  -  left */}
      <div className="relative mb-4">
        <div className="flex animate-marquee">
          {[...techRow1, ...techRow1].map((t, i) => <TechChip key={i} {...t} />)}
        </div>
      </div>

      {/* Row 2  -  right */}
      <div className="relative">
        <div className="flex animate-marquee-reverse">
          {[...techRow2, ...techRow2].map((t, i) => <TechChip key={i} {...t} />)}
        </div>
      </div>

      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none" style={{ background: "linear-gradient(90deg, var(--surface-fade, #f9fafb) 0%, transparent 100%)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none" style={{ background: "linear-gradient(270deg, var(--surface-fade, #f9fafb) 0%, transparent 100%)" }} />
    </section>
  );
}
