import { Metadata } from "next";

export const blogSEO: Metadata = {
  title: 'AiVerse | Our Blogs',
  description: 'Read the latest articles and insights on web development, software, 3D animation, game development, digital marketing, and AI automation by AiVerse.pk.',
  keywords: 'AiVerse, blog, articles, web development, software, 3D animation, game development, digital marketing, AI automation, Pakistan',
  
  alternates: {
    canonical: 'https://aiverse.pk/blogs',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  openGraph: {
    title: 'AiVerse | Our Blog',
    description: 'Read the latest articles and insights on web development, software, 3D animation, game development, digital marketing, and AI automation by AiVerse.pk.',
    url: 'https://aiverse.pk/blogs',
    siteName: 'AiVerse',
    images: [
      { url: 'https://aiverse.pk/home/ai-verse.png', width: 1200, height: 630 },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AiVerse | Our Blog',
    description: 'Read the latest articles and insights on web development, software, 3D animation, game development, digital marketing, and AI automation by AiVerse.pk.',
    images: ['https://aiverse.pk/home/ai-verse.png'],
    creator: '@AiVerseOfficial',
  },

  icons: {
    icon: '/favicon.ico',
  },
};
