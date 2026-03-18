'use client'

import Hero from "./hero";
import BlogList from "./bloglist";
import { useBlogs } from "./fetchblog";
import { useState, useEffect } from "react";
import { blogSEO } from './seo';
import { Metadata } from 'next';

export const metadata: Metadata = blogSEO;

const Page = () => {
  const categories = ["All", "Software Development","Web Development", "Graphic Design", "Digital Marketing", "3D Animation", "Ai Automation", "Wordpress", "Shopify", "Game Development"];
  const [category, setCategory] = useState("All");

  // Convert to lowercase for backend
  const [fetchCategory, setFetchCategory] = useState("");

  useEffect(() => {
    setFetchCategory(category === "All" ? "" : category.toLowerCase());
  }, [category]);

  const { blogs, loading } = useBlogs(fetchCategory);

  return (
    <div>
      <Hero />

      {/* EXPLORE + CATEGORIES */}
      <div className="flex flex-col items-center mt-15 mb-6 max-w-5xl mx-auto">
        <div className="px-6 py-2 mb-12 text-lg font-semibold bg-gray-200 rounded-full shadow-md shadow-gray-400/60 text-gray-800">
          Explore Trending Blogs
        </div>

        <div className="flex gap-3 flex-wrap justify-center mb-15">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 bg-gray-200 rounded-full shadow-sm shadow-gray-400/60 text-sm text-gray-800 hover:shadow-md hover:scale-105 transition ${
                category === cat ? "border-blue-400 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-300 text-blue-900" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* BLOG LIST */}
      {loading ? (
        <p className="text-center mt-10 mb-10">Loading blogs...</p>
      ) : (
        <BlogList blogs={blogs} />
      )}
    </div>
  );
};

export default Page;
