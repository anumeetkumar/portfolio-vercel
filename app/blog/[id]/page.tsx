import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, User } from "lucide-react"

// This would typically come from a database, CMS, or API
const blogPosts = [
  {
    id: "post-1",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    content: `
# Building Responsive UIs with Tailwind CSS

Tailwind CSS has revolutionized the way developers approach UI design. Instead of writing custom CSS, Tailwind provides utility classes that can be composed to build any design directly in your markup.

## Why Tailwind CSS?

Tailwind CSS offers several advantages over traditional CSS frameworks:

- **No pre-designed components**: Unlike Bootstrap or Material UI, Tailwind doesn't come with pre-designed components. This gives you complete freedom to design your UI.
- **Highly customizable**: Tailwind can be customized to match your design system.
- **Responsive design made easy**: Tailwind's responsive modifiers make it simple to build responsive interfaces.
- **Smaller file sizes in production**: With PurgeCSS, Tailwind removes all unused CSS in production.

## Getting Started

First, install Tailwind CSS in your project:

\`\`\`bash
npm install tailwindcss
\`\`\`

Then, create a configuration file:

\`\`\`bash
npx tailwindcss init
\`\`\`

## Building a Responsive Card Component

Let's build a simple responsive card component using Tailwind CSS:

\`\`\`jsx
function Card({ title, description, imageUrl }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto md:mx-0">
      <img className="w-full" src={imageUrl || "/placeholder.svg"} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
}
\`\`\`

This card will be full-width on small screens and will have margins on medium screens and above.

## Responsive Design with Tailwind

Tailwind makes responsive design straightforward with its responsive modifiers:

- \`sm:\` for small screens (640px and up)
- \`md:\` for medium screens (768px and up)
- \`lg:\` for large screens (1024px and up)
- \`xl:\` for extra large screens (1280px and up)
- \`2xl:\` for 2x extra large screens (1536px and up)

For example, to create a grid that changes from 1 column on mobile to 2 columns on medium screens and 3 columns on large screens:

\`\`\`jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Grid items */}
</div>
\`\`\`

## Conclusion

Tailwind CSS provides a powerful set of tools for building responsive user interfaces. By using its utility classes and responsive modifiers, you can create complex layouts that work well on all screen sizes without writing custom CSS.

In future articles, we'll explore more advanced Tailwind features like custom animations, dark mode, and extending the default configuration.
    `,
    image: "/placeholder.svg?height=400&width=800",
    date: "March 15, 2023",
    readTime: "5 min read",
    author: "Alex Chen",
    category: "CSS",
  },
  {
    id: "post-2",
    title: "State Management in React: Context API vs. Redux",
    excerpt: "A comparison of different state management approaches in React applications.",
    content: "Full content would go here...",
    image: "/placeholder.svg?height=400&width=800",
    date: "February 28, 2023",
    readTime: "8 min read",
    author: "Alex Chen",
    category: "React",
  },
  {
    id: "post-3",
    title: "Getting Started with Next.js and TypeScript",
    excerpt: "A comprehensive guide to setting up a new project with Next.js and TypeScript.",
    content: "Full content would go here...",
    image: "/placeholder.svg?height=400&width=800",
    date: "January 12, 2023",
    readTime: "6 min read",
    author: "Alex Chen",
    category: "Next.js",
  },
]

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
