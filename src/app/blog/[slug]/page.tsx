import { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import BlogDetailClient from "./BlogDetailClient";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Syahrul Kurniawan",
    };
  }

  return {
    title: post.title,
    description: post.desc,
    openGraph: {
      title: `${post.title} | Syahrul Kurniawan`,
      description: post.desc,
      type: "article",
      images: post.image ? [post.image] : [],
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Syahrul Kurniawan`,
      description: post.desc,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-black text-white selection:bg-primary/30">
        <Navbar />
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-serif">Post not found</h1>
          <Link href="/blog">
            <Button className="mt-8 bg-white text-black hover:bg-gray-200">
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer showPhysics={false} />
      </main>
    );
  }

  return <BlogDetailClient post={post} />;
}
