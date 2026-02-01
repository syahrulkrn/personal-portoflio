import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts, tutorials, and stories about web development, design, and technology.",
  openGraph: {
    title: "Blog | Syahrul Kurniawan",
    description: "Read my thoughts, tutorials, and stories about web development, design, and technology.",
    url: "https://syahrulkurniawan.com/blog",
    siteName: "Syahrul Kurniawan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Syahrul Kurniawan",
    description: "Read my thoughts, tutorials, and stories about web development, design, and technology.",
  },
};

export default function BlogListingPage() {
  return <BlogClient />;
}
