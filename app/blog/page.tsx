import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"

// This would typically come from a database, CMS, or API
const blogPosts = [
  {
    id: "post-1",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    content: "Full content would go here...",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 15, 2023",
    readTime: "5 min read",
    category: "CSS",
  },
  {
    id: "post-2",
    title: "State Management in React: Context API vs. Redux",
    excerpt: "A comparison of different state management approaches in React applications.",
    content: "Full content would go here...",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 28, 2023",
    readTime: "8 min read",
    category: "React",
  },
  {
    id: "post-3",
    title: "Getting Started with Next.js and TypeScript",
    excerpt: "A comprehensive guide to setting up a new project with Next.js and TypeScript.",
    content: "Full content would go here...",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 12, 2023",
    readTime: "6 min read",
    category: "Next.js",
  },
  {
    id: "post-4",
    title: "Optimizing Performance in React Applications",
    excerpt:
      "Learn techniques to improve the performance of your React applications and provide a better user experience.",
    content: "Full content would go here...",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 5, 2022",
    readTime: "7 min read",
    category: "Performance",
  },
  {
    id: "post-5",
    title: "Introduction to GraphQL with Apollo Client",
    excerpt: "Discover how GraphQL can simplify your API requests and make your frontend code more efficient.",
    content: "Full content would go here...",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 18, 2022",
    readTime: "9 min read",
    category: "GraphQL",
  },
  {
    id: "post-6",
    title: "Building Accessible Web Applications",
    excerpt:
      "Best practices for creating web applications that are accessible to all users, including those with disabilities.",
    content: "Full content would go here...",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 22, 2022",
    readTime: "6 min read",
    category: "Accessibility",
  },
]

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
              <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
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
