import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

const DB = process.env.MONGODB_DB || "arutechdata";

async function getCourse(id: string): Promise<Record<string, any> | null> {
  try {
    if (!ObjectId.isValid(id)) return null;
    const client = await clientPromise.get();
    const db = client.db(DB);
    const course = await db.collection("courses").findOne({ _id: new ObjectId(id), status: "published" });
    if (!course) return null;
    return { ...course, _id: course._id.toString() } as Record<string, any>;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { courseId: string } }): Promise<Metadata> {
  const course = await getCourse(params.courseId);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.title} | Arutech Learning`,
    description: course.description || `Learn ${course.title} with Arutech`,
    openGraph: course.thumbnail ? { images: [course.thumbnail] } : undefined,
  };
}

const LEVEL_COLORS: Record<string, string> = {
  beginner: "bg-emerald-100 text-emerald-700 border-emerald-200",
  intermediate: "bg-amber-100 text-amber-700 border-amber-200",
  advanced: "bg-red-100 text-red-700 border-red-200",
};

const LEVEL_LABEL_DARK: Record<string, string> = {
  beginner: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  intermediate: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  advanced: "bg-red-500/15 text-red-300 border-red-500/30",
};

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-4 h-4 ${s <= Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-gray-600 fill-gray-600"}`} viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

interface Lesson {
  title: string;
  duration: string;
  videoUrl: string;
  description: string;
  isFree?: boolean;
  type?: "video" | "article";
}

export default async function CoursePage({ params }: { params: { courseId: string } }) {
  const course = await getCourse(params.courseId);
  if (!course) notFound();

  const lessons: Lesson[] = course.lessons || [];
  const whatYouLearn: string[] = course.whatYouLearn || [];
  const requirements: string[] = course.requirements || [];
  const totalLessons = lessons.length;
  const freeLessons = lessons.filter((l) => l.isFree).length;

  return (
    <main className="bg-gray-950 min-h-screen">
      <Navbar />
      <FloatingTab />

      {/* Hero — dark gradient */}
      <section className="relative pt-32 pb-10 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-950 border-b border-white/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <Link href="/learning" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-orange-400 transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Learning Hub
          </Link>

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Left: Course info */}
            <div className="lg:col-span-2">
              {course.category && (
                <span className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-3 block">{course.category}</span>
              )}

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 tracking-tight">
                {course.title}
              </h1>

              {course.description && (
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">{course.description}</p>
              )}

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {course.level && (
                  <span className={`px-3 py-1 rounded-full border text-xs font-semibold capitalize ${LEVEL_LABEL_DARK[course.level] || "bg-gray-800 text-gray-300 border-gray-700"}`}>
                    {course.level}
                  </span>
                )}
                {!course.price && (
                  <span className="px-3 py-1 rounded-full border text-xs font-bold bg-emerald-500/15 text-emerald-300 border-emerald-500/30">
                    FREE
                  </span>
                )}
                {course.isCertified && (
                  <span className="px-3 py-1 rounded-full border text-xs font-semibold bg-amber-500/15 text-amber-300 border-amber-500/30">
                    🏆 Certificate
                  </span>
                )}
                {course.language && (
                  <span className="text-xs text-gray-500">🌐 {course.language}</span>
                )}
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap gap-5 text-sm text-gray-400">
                {course.rating && (
                  <div className="flex items-center gap-2">
                    <StarRow rating={course.rating} />
                    <span className="font-bold text-amber-400">{course.rating.toFixed(1)}</span>
                    {course.enrollCount && <span className="text-gray-600">({course.enrollCount.toLocaleString()} enrolled)</span>}
                  </div>
                )}
                <span>{totalLessons} {totalLessons === 1 ? "lesson" : "lessons"}</span>
                {course.totalDuration && <span>⏱ {course.totalDuration}</span>}
                {course.instructor && <span>👤 {course.instructor}</span>}
              </div>
            </div>

            {/* Right: Card on lg — sticky sidebar, hidden on mobile (shows below) */}
            <div className="hidden lg:block">
              <CourseCard course={course} lessons={lessons} freeLessons={freeLessons} />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-10">

            {/* What you'll learn */}
            {whatYouLearn.length > 0 && (
              <div className="bg-gray-900 border border-white/5 rounded-2xl p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-white mb-5">What You&apos;ll Learn</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {whatYouLearn.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Curriculum */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display text-xl font-bold text-white">Curriculum</h2>
                <span className="text-xs text-gray-500">{totalLessons} lessons{course.totalDuration ? ` · ${course.totalDuration}` : ""}</span>
              </div>

              {lessons.length === 0 ? (
                <div className="bg-gray-900 border border-white/5 rounded-2xl p-10 text-center text-gray-600">
                  <p className="text-sm">Lessons are being added soon. Check back shortly!</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {lessons.map((lesson, i) => (
                    <div key={i} className="group bg-gray-900 border border-white/5 hover:border-orange-500/20 rounded-xl p-4 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-gray-800 group-hover:bg-orange-500/10 rounded-full flex items-center justify-center text-xs font-bold text-gray-500 group-hover:text-orange-400 flex-shrink-0 transition-colors">
                          {i + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-3">
                            <h3 className="text-sm font-semibold text-gray-200 truncate">{lesson.title}</h3>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              {lesson.isFree && (
                                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Preview</span>
                              )}
                              {lesson.duration && <span className="text-xs text-gray-600">{lesson.duration}</span>}
                            </div>
                          </div>
                          {lesson.description && (
                            <p className="text-xs text-gray-600 mt-1 truncate">{lesson.description}</p>
                          )}
                        </div>
                        <div className="flex-shrink-0 text-gray-700">
                          {lesson.type === "article" ? (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Requirements */}
            {requirements.length > 0 && (
              <div>
                <h2 className="font-display text-xl font-bold text-white mb-4">Requirements</h2>
                <ul className="space-y-2">
                  {requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="text-orange-500 mt-0.5 flex-shrink-0">→</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Instructor */}
            {course.instructor && (
              <div className="bg-gray-900 border border-white/5 rounded-2xl p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-white mb-5">Instructor</h2>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {course.instructor.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-base">{course.instructor}</p>
                    {course.instructorBio ? (
                      <p className="text-sm text-gray-400 mt-1 leading-relaxed">{course.instructorBio}</p>
                    ) : (
                      <p className="text-sm text-gray-500 mt-1">Arutech Consultancy Services</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar — mobile shows here, desktop shows in hero */}
          <div className="lg:hidden">
            <CourseCard course={course} lessons={lessons} freeLessons={freeLessons} />
          </div>
          <div className="hidden lg:block">
            <CourseCard course={course} lessons={lessons} freeLessons={freeLessons} sticky />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function CourseCard({
  course,
  lessons,
  freeLessons,
  sticky = false,
}: {
  course: Record<string, any>;
  lessons: Lesson[];
  freeLessons: number;
  sticky?: boolean;
}) {
  return (
    <div className={`bg-gray-900 border border-white/8 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 ${sticky ? "sticky top-24" : ""}`}>
      {course.thumbnail && (
        <div className="aspect-video overflow-hidden bg-gray-800">
          <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        <p className="font-display text-3xl font-bold text-white mb-1">
          {course.price ? `₹${course.price.toLocaleString()}` : "Free"}
        </p>
        {!course.price && <p className="text-xs text-emerald-400 mb-4">No credit card required</p>}
        {course.price && <p className="text-xs text-gray-500 mb-4">Full lifetime access</p>}

        <Link
          href={`/learning/${course._id}/learn`}
          className="block w-full text-center px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-md shadow-orange-500/20 mb-3"
        >
          {course.price ? "Enroll Now" : "Start Learning →"}
        </Link>

        <a
          href="/#contact"
          className="block w-full text-center px-6 py-3 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 font-semibold rounded-xl transition-all text-sm"
        >
          Have questions? Talk to us
        </a>

        {/* Details */}
        <div className="mt-5 space-y-2.5">
          {[
            course.level && ["Level", <span key="l" className="capitalize">{course.level}</span>],
            ["Lessons", lessons.length],
            freeLessons > 0 && ["Free Preview", `${freeLessons} lesson${freeLessons > 1 ? "s" : ""}`],
            course.totalDuration && ["Duration", course.totalDuration],
            course.language && ["Language", course.language],
            course.isCertified && ["Certificate", "Included 🏆"],
          ]
            .filter(Boolean)
            .map((row: any, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-gray-500">{row[0]}</span>
                <span className="text-gray-300 font-medium">{row[1]}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
