import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { getAdminSession } from "@/lib/adminAuth";
import { ObjectId } from "mongodb";

const DB = process.env.MONGODB_DB || "arutechdata";

export async function GET(_: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const client = await clientPromise.get();
  const db = client.db(DB);
  const query = ObjectId.isValid(slug) ? { _id: new ObjectId(slug) } : { slug };
  const post = await db.collection("blog_posts").findOne(query);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ post });
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const isAdmin = await getAdminSession();
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { slug } = await params;
  const body = await req.json();
  const client = await clientPromise.get();
  const db = client.db(DB);
  const { _id, ...update } = body;
  await db.collection("blog_posts").updateOne(
    { _id: new ObjectId(slug) },
    { $set: { ...update, updatedAt: new Date() } }
  );
  return NextResponse.json({ success: true });
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const isAdmin = await getAdminSession();
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { slug } = await params;
  const client = await clientPromise.get();
  const db = client.db(DB);
  await db.collection("blog_posts").deleteOne({ _id: new ObjectId(slug) });
  return NextResponse.json({ success: true });
}
