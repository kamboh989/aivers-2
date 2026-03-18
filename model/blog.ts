import mongoose, { Schema, models } from "mongoose";

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

export const Blog = models.Blog || mongoose.model("Blog", BlogSchema);
