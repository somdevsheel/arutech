import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const DB = process.env.MONGODB_DB || "arutechdata";

// Public endpoint — returns only approved reviews
export async function GET() {
  try {
    const client = await clientPromise.get();
    const reviews = await client
      .db(DB)
      .collection("reviews")
      .find({ approved: true })
      .sort({ createdAt: -1 })
      .limit(6)
      .toArray();

    return NextResponse.json(
      reviews.map(r => ({
        _id: r._id.toString(),
        name: r.name,
        company: r.company,
        role: r.role,
        quote: r.quote,
        rating: r.rating,
        initials: r.initials,
        avatarColor: r.avatarColor,
      }))
    );
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
