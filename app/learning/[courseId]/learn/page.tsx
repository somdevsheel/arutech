import { notFound } from "next/navigation";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import LearningInterface from "@/components/learning/LearningInterface";
import type { Metadata } from "next";

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
  return { title: `Learn: ${course.title} | Arutech` };
}

export default async function LearnPage({ params }: { params: { courseId: string } }) {
  const course = await getCourse(params.courseId);
  if (!course) notFound();

  return <LearningInterface course={course as any} />;
}
