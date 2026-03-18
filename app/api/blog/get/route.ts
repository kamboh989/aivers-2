// app/api/blog/get/route.ts
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import { Blog } from "@/model/blog";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    let category = searchParams.get("category") || "";
    category = category.toLowerCase();

    const query: any = {};
    if (category) query.category = category;

    const blogs = await Blog.find(query).sort({ createdAt: -1 }).lean();

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error); // Production log me dekho
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
