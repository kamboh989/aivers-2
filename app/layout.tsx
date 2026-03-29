import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aiverse.pk - Software Development, Web Design & SEO",
  description:
    "Aiverse.pk is a leading software development company specializing in web development, digital marketing, SEO, 3D animation, and IT solutions. We create custom solutions to help businesses grow online.",
  keywords:
    "software development, web development, SEO, digital marketing, IT solutions, 3D animation, web design, software company, automation, Blender, IT support, custom software, e-commerce solutions, web applications, business growth",
  
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    url: "https://aiverse.pk",
    title: "Aiverse.pk - Software Development, Web Design & SEO",
    description:
      "Aiverse.pk offers professional software and web development services, digital marketing, SEO, 3D animation, and more to help your business succeed online.",
    images: [
      {
        url: "https://aiverse.pk/images/og-image.jpg", // Example image URL for Open Graph
        width: 1200,
        height: 630,
        alt: "Aiverse.pk Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AiversePk",
    title: "Aiverse.pk - Software Development, Web Design & SEO",
    description:
      "Aiverse.pk is a leading software development company specializing in web development, SEO, and digital marketing to grow your business online.",
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}