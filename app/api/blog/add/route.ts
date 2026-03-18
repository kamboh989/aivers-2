import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import { Blog } from "@/model/blog";
import cloudinary from "@/lib/cloudinary";

const streamifier = require("streamifier");
export async function POST(req: Request) {
  try {
    await dbConnect();

    const formData = await req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const image = formData.get("image") as File;

    if (!title || !content || !category || !image) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    // ✅ Cloudinary upload using streamifier
    const uploadResult: { secure_url: string } = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "blogs" },
        (error, result) => {
          if (error) return reject(error);
          if (!result || !result.secure_url) return reject(new Error("Cloudinary upload failed"));
          resolve({ secure_url: result.secure_url });
        }
      );

      // Convert File to ArrayBuffer then stream
      image.arrayBuffer().then((buffer) => {
        streamifier.createReadStream(Buffer.from(buffer)).pipe(uploadStream);
      }).catch(reject);
    });

    // Save blog in MongoDB
    const blog = await Blog.create({
      title,
      content,
      category,
      image: uploadResult.secure_url, // Cloudinary URL
    });

    return NextResponse.json(blog, { status: 201 });

  } catch (error) {
    console.error("BLOG ADD ERROR:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal Server Error" },
      { status: 500 }
    );
  }
}
