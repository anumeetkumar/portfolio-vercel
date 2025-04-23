import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, User } from "lucide-react"
import { blogPosts } from "@/lib/data"


export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <User className="mr-1 h-4 w-4" />
              {/* {post.author} */}
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

        <div className="prose dark:prose-invert max-w-none">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("# ")) {
              return (
                <h1 key={i} className="text-3xl font-bold mt-8 mb-4">
                  {paragraph.substring(2)}
                </h1>
              )
            } else if (paragraph.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-bold mt-6 mb-3">
                  {paragraph.substring(3)}
                </h2>
              )
            } else if (paragraph.startsWith("### ")) {
              return (
                <h3 key={i} className="text-xl font-bold mt-5 mb-2">
                  {paragraph.substring(4)}
                </h3>
              )
            } else if (paragraph.startsWith("- ")) {
              return (
                <ul key={i} className="list-disc pl-5 my-4">
                  {paragraph.split("\n").map((item, j) => (
                    <li key={j} className="mb-1">
                      {item.substring(2)}
                    </li>
                  ))}
                </ul>
              )
            } else if (paragraph.startsWith("```")) {
              const language = paragraph.split("\n")[0].substring(3)
              const code = paragraph.split("\n").slice(1, -1).join("\n")
              return (
                <pre key={i} className="bg-muted p-4 rounded-lg overflow-x-auto my-4">
                  <code>{code}</code>
                </pre>
              )
            } else {
              return (
                <p key={i} className="my-4">
                  {paragraph}
                </p>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
