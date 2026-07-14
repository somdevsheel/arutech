import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";
import CourseCatalog from "@/components/learning/CourseCatalog";
import clientPromise from "@/lib/mongodb";

export const metadata: Metadata = {
  title: "Learning Hub | Arutech Consultancy Services",
  description: "Free and premium courses on AI, web development, mobile apps, and digital marketing — built by engineers who ship to production.",
  alternates: { canonical: "https://arutechconsultancy.com/learning" },
};

const DB = process.env.MONGODB_DB || "arutechdata";

async function getCourses(): Promise<Record<string, any>[]> {
  try {
    const client = await clientPromise.get();
    const db = client.db(DB);
    const courses = await db
      .collection("courses")
      .find({ status: "published" })
      .sort({ createdAt: -1 })
      .toArray();
    return courses.map((c) => ({ ...c, _id: c._id.toString() })) as Record<string, any>[];
  } catch {
    return [];
  }
}

const STAT_ICONS = ["🎓", "🆓", "📂", "🏆"];

export default async function LearningPage() {
  const courses = await getCourses();

  const freeCount = courses.filter((c) => !c.price || c.price === 0).length;
  const categories = Array.from(new Set(courses.map((c) => c.category).filter(Boolean))) as string[];
  const certCount = courses.filter((c) => c.isCertified).length;

  const stats = [
    { label: "Total Courses", value: courses.length, icon: STAT_ICONS[0] },
    { label: "Free Courses", value: freeCount, icon: STAT_ICONS[1] },
    { label: "Categories", value: categories.length, icon: STAT_ICONS[2] },
    { label: "With Certificate", value: certCount, icon: STAT_ICONS[3] },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      <FloatingTab />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/2 -left-24 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">Arutech Learning Hub</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5 tracking-tight">
            Level Up With{" "}
            <span className="text-orange-500">Real Skills</span>
          </h1>

          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Practical courses built by engineers and marketers who ship to production — from AI fundamentals to full-stack web apps.
          </p>

          {/* Stats row */}
          {courses.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
              {stats.map((s) => (
                <div key={s.label} className="bg-white border border-gray-100 rounded-2xl px-4 py-4 shadow-sm">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="font-display text-2xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Catalog or empty state */}
      <section className="py-10 px-4 sm:px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {courses.length > 0 ? (
            <CourseCatalog courses={courses as any} categories={categories} />
          ) : (
            <div className="text-center py-24">
              <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-5">📚</div>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-3">Courses Coming Soon</h2>
              <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                We&apos;re building out the learning hub with courses, tutorials, and videos. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
