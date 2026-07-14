import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { getAdminSession } from "@/lib/adminAuth";

const DB = process.env.MONGODB_DB || "arutechdata";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const adminParam = searchParams.get("admin");
  const isAdminQuery = adminParam === "true" || adminParam === "1";
  const isAdmin = isAdminQuery ? await getAdminSession() : false;
  const admin = isAdmin;
  const client = await clientPromise.get();
  const db = client.db(DB);
  const filter = admin ? {} : { status: "published" };
  const courses = await db.collection("courses").find(filter).sort({ createdAt: -1 }).toArray();
  return NextResponse.json({ courses });
}

export async function POST(req: NextRequest) {
  const isAdmin = await getAdminSession();
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const client = await clientPromise.get();
  const db = client.db(DB);
  const doc = {
    ...body,
    lessons: body.lessons || [],
    status: body.status || "draft",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const result = await db.collection("courses").insertOne(doc);
  return NextResponse.json({ success: true, id: result.insertedId });
}
