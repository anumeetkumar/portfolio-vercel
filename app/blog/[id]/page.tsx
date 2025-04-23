import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { blogPosts } from "@/lib/blogData";
import { Metadata } from 'next';

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.id);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || ""],
      images: [
        {
          url: post.image || '/placeholder.svg',
          width: 800,
          height: 400,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image || '/placeholder.svg'],
    },
  };
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
      </Button>

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <User className="mr-1 h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden mb-8">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div 
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
