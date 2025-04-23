import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/blogData"

// This would typically come from a database, CMS, or API


export default function BlogPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h1>
        <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          Thoughts, tutorials, and insights about web development and software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="h-full overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
              </Link>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button asChild variant="ghost" className="p-0 h-auto font-medium">
                <Link href={`/blog/${post.id}`} className="flex items-center">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button variant="outline">Load More</Button>
      </div>
    </div>
  )
}
