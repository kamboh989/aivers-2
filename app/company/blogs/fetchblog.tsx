// fetchblog.tsx
import { useEffect, useState } from "react";

export interface Blog {
  _id: string;
  title: string;
  content: string;
  image: string;
  category: string;
}

export function useBlogs(category: string) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
        const res = await fetch(`/api/blog/get?category=${category}`);
        const data = await res.json();
        setBlogs(Array.isArray(data) ? data : []); // ✅ safe check
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setBlogs([]);
      }
      setLoading(false);
    }

    fetchBlogs();
  }, [category]);

  return { blogs, loading };
}
