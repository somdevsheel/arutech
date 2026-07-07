import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";

export const metadata: Metadata = {
  title: "Learning | Arutech Consultancy Services LLP",
  description: "Free resources, tutorials, and guides on AI, cloud deployment, web development, and digital marketing — from the Arutech team.",
  alternates: { canonical: "https://arutechconsultancy.com/learning" },
};

const topics = [
  { icon: "🤖", label: "AI & Machine Learning", count: "Coming Soon", color: "bg-orange-50 border-orange-200 text-orange-700" },
  { icon: "☁️", label: "Cloud & DevOps", count: "Coming Soon", color: "bg-sky-50 border-sky-200 text-sky-700" },
  { icon: "⚛️", label: "React & Next.js", count: "Coming Soon", color: "bg-violet-50 border-violet-200 text-violet-700" },
  { icon: "📱", label: "React Native", count: "Coming Soon", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { icon: "📊", label: "Business Analytics", count: "Coming Soon", color: "bg-amber-50 border-amber-200 text-amber-700" },
  { icon: "📈", label: "Digital Marketing", count: "Coming Soon", color: "bg-rose-50 border-rose-200 text-rose-700" },
];

export default function Learning() {
  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-orange-50 via-white to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6">
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">Learning Hub</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5 tracking-tight">
            Learn What We{" "}
            <span className="text-orange-500">Build With</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Free tutorials, guides, and deep-dives from the Arutech team — practical content written by engineers who ship to production.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-8 text-center">Topics we cover</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((t) => (
              <div key={t.label} className={`p-6 rounded-2xl border ${t.color} bg-white hover:shadow-md transition-shadow`}>
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="font-display text-base font-bold text-gray-900 mb-1">{t.label}</h3>
                <span className="text-xs font-medium text-gray-400">{t.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">📚</div>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-3">Content is on its way</h2>
          <p className="text-gray-600 mb-8">
            We&apos;re building out the learning hub with tutorials, guides, and videos. Subscribe to be notified when new content drops.
          </p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <button className="px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl text-sm transition-all shadow-md shadow-orange-100">
              Notify Me
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
