import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { getAdminSession } from "@/lib/adminAuth";
import { ObjectId } from "mongodb";

const DB = process.env.MONGODB_DB || "arutechdata";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const client = await clientPromise.get();
  const db = client.db(DB);
  const course = await db.collection("courses").findOne({ _id: new ObjectId(id) });
  if (!course) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ course });
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const isAdmin = await getAdminSession();
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const body = await req.json();
  const client = await clientPromise.get();
  const db = client.db(DB);
  const { _id, ...update } = body;
  await db.collection("courses").updateOne(
    { _id: new ObjectId(id) },
    { $set: { ...update, updatedAt: new Date() } }
  );
  return NextResponse.json({ success: true });
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const isAdmin = await getAdminSession();
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const client = await clientPromise.get();
  const db = client.db(DB);
  await db.collection("courses").deleteOne({ _id: new ObjectId(id) });
  return NextResponse.json({ success: true });
}
