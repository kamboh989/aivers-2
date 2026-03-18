import { Metadata } from 'next';
import { blogSEO } from './seo';
import BlogClient from './blogclient';

export const metadata: Metadata = blogSEO;

export default function BlogPage() {
  return (
    <main>
      <BlogClient />
    </main>
  );
}
