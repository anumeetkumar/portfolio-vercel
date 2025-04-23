import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

// This would typically come from a database or API
const projects = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    longDescription:
      "This e-commerce platform provides businesses with a complete solution for selling products online. It includes features such as product catalog management, shopping cart functionality, secure checkout process, payment processing integration, order management, and customer accounts.\n\nThe frontend is built with React and uses Redux for state management. The backend is powered by Node.js and Express, with MongoDB as the database. Stripe is integrated for payment processing, ensuring secure transactions.",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
    github: "https://github.com",
    demo: "https://example.com",
    features: [
      "Product catalog with categories and search",
      "Shopping cart and checkout process",
      "Secure payment processing with Stripe",
      "User authentication and account management",
      "Order history and tracking",
      "Admin dashboard for inventory management",
    ],
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    longDescription:
      "This task management application helps teams organize and track their work efficiently. It provides a collaborative environment where team members can create, assign, and monitor tasks in real-time. The application supports multiple workspaces, allowing organizations to separate projects or departments.\n\nBuilt with Next.js and TypeScript for type safety, the application uses Firebase for real-time database functionality and authentication. Tailwind CSS is used for styling, providing a clean and responsive user interface.",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "React", "Firestore"],
    github: "https://github.com",
    demo: "https://example.com",
    features: [
      "Task creation, assignment, and status tracking",
      "Real-time updates and notifications",
      "Team workspaces and collaboration",
      "File attachments and comments",
      "Due dates and priority settings",
      "Customizable workflows and labels",
    ],
  },
  {
    id: "project-3",
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
    longDescription:
      "This weather dashboard provides users with comprehensive weather information for any location worldwide. It displays current conditions as well as forecasted data for the upcoming days. Users can save multiple locations for quick access and view detailed metrics such as temperature, humidity, wind speed, and precipitation probability.\n\nThe application is built with React and uses the OpenWeather API to fetch weather data. Chart.js is integrated to visualize temperature trends and other metrics over time, making it easier for users to understand weather patterns.",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["React", "OpenWeather API", "Chart.js", "CSS Grid", "Axios", "LocalStorage"],
    github: "https://github.com",
    demo: "https://example.com",
    features: [
      "Current weather conditions display",
      "5-day weather forecast",
      "Location search and favorites",
      "Interactive weather maps",
      "Temperature and precipitation charts",
      "Responsive design for all devices",
    ],
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/#projects">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{project.title}</h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="text-xl text-muted-foreground mb-4">{project.description}</p>
            {project.longDescription.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View Code
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg overflow-hidden border">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {project.gallery.map((image, i) => (
              <div key={i} className="rounded-lg overflow-hidden border">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${i + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
