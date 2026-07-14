import { notFound } from "next/navigation";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "./PrintButton";

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
  if (!course) return { title: "Certificate Not Found" };
  return { title: `Certificate — ${course.title} | Arutech` };
}

export default async function CertificatePage({ params }: { params: { courseId: string } }) {
  const course = await getCourse(params.courseId);
  if (!course || !course.isCertified) notFound();

  const issueDate = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Action bar */}
      <div className="print:hidden flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-white/5">
        <Link
          href={`/learning/${params.courseId}`}
          className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Course
        </Link>
        <PrintButton />
      </div>

      {/* Certificate */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10">
        <div
          id="certificate"
          className="relative w-full max-w-3xl bg-white rounded-none sm:rounded-2xl shadow-2xl overflow-hidden print:shadow-none print:rounded-none"
          style={{ minHeight: "480px" }}
        >
          {/* Border decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-3 border-2 border-orange-200 rounded-none sm:rounded-xl" />
            <div className="absolute inset-5 border border-orange-100 rounded-none sm:rounded-lg" />
          </div>

          {/* Top accent */}
          <div className="h-2 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500" />

          <div className="relative px-8 sm:px-16 py-10 sm:py-14 text-center">
            {/* Brand */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="font-bold text-gray-800 text-lg tracking-tight">Arutech Consultancy</span>
              </div>
              <p className="text-xs text-gray-400 tracking-widest uppercase font-mono">Certificate of Completion</p>
            </div>

            <div className="text-5xl sm:text-6xl mb-6">🏆</div>

            <p className="text-sm text-gray-500 uppercase tracking-[0.2em] font-mono mb-3">This certifies that</p>
            <div className="w-64 sm:w-80 h-px bg-gray-200 mx-auto mb-3" />
            <p className="text-gray-400 text-sm italic mb-4">[Your Name]</p>

            <p className="text-sm text-gray-500 mb-4">has successfully completed the course</p>

            <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight max-w-md mx-auto">
              {course.title}
            </h1>

            {course.instructor && (
              <p className="text-sm text-gray-500 mb-6">
                Instructed by <span className="font-semibold text-gray-700">{course.instructor}</span>
              </p>
            )}

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 text-center mb-10 text-xs text-gray-500">
              {(course.lessons || []).length > 0 && (
                <div>
                  <p className="font-bold text-gray-800 text-base">{(course.lessons || []).length}</p>
                  <p>Lessons</p>
                </div>
              )}
              {course.totalDuration && (
                <div>
                  <p className="font-bold text-gray-800 text-base">{course.totalDuration}</p>
                  <p>Duration</p>
                </div>
              )}
              {course.level && (
                <div>
                  <p className="font-bold text-gray-800 text-base capitalize">{course.level}</p>
                  <p>Level</p>
                </div>
              )}
            </div>

            {/* Signatures */}
            <div className="flex items-end justify-center gap-16 mb-8">
              <div className="text-center">
                <div className="w-28 h-px bg-gray-300 mb-1" />
                <p className="text-xs text-gray-500">Date Issued</p>
                <p className="text-xs font-medium text-gray-700 mt-0.5">{issueDate}</p>
              </div>
              <div className="text-center">
                <div className="w-28 h-px bg-gray-300 mb-1" />
                <p className="text-xs text-gray-500">Authorized By</p>
                <p className="text-xs font-medium text-gray-700 mt-0.5">Arutech Consultancy Services</p>
              </div>
            </div>

            <p className="text-[10px] text-gray-300 font-mono tracking-wider">
              Credential ID: ART-{course._id.toString().slice(-8).toUpperCase()}
            </p>
          </div>

          <div className="h-2 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-400" />
        </div>
      </div>

      <style>{`
        @media print {
          body { background: white !important; }
          #certificate { width: 100%; box-shadow: none !important; }
        }
      `}</style>
    </div>
  );
}
