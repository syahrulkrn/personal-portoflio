"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link as LinkIcon, Github, PlayCircle, Eye, Heart } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { processBlogContent } from "@/lib/blog-utils";
import { useMemo } from "react";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  const { processedContent, toc } = useMemo(() => {
    if (!post) return { processedContent: "", toc: [] };
    return processBlogContent(post.content);
  }, [post]);

  const readTime = useMemo(() => {
    if (!post) return 0;
    const words = post.content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    return Math.ceil(words / 200);
  }, [post]);

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

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-52 pb-24">
        {/* Header Section */}
        <div className="mb-16 border-b border-white/10">
          <h1 className="text-5xl font-serif font-bold mb-6 tracking-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-8 leading-relaxed">
            {post.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Featured Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5 mb-12">
              <Image
                src={post.image || "/syahrul-laptopan.jpeg"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Article Content */}
            <article
              className="prose prose-invert prose-lg max-w-none text-gray-300 prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </div>

          {/* Sidebar - Right Column */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-6">
               Contents
              </h3>

              <nav className="flex flex-col space-y-4">
                {toc.map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-gray-400 hover:text-primary transition-colors text-sm leading-relaxed block"
                  >
                    {item.title}
                  </Link>
                ))}

                {toc.length === 0 && (
                  <p className="text-sm text-gray-500 italic">
                    No sections available
                  </p>
                )}
              </nav>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-sm font-bold text-white mb-4">
                  Share this article
                </h4>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="w-8 h-8 rounded-full border-white/10 hover:bg-white/10"
                  >
                    <LinkIcon className="w-3 h-3" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="w-8 h-8 rounded-full border-white/10 hover:bg-white/10"
                  >
                    <Github className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer showPhysics={false} />
    </main>
  );
}
