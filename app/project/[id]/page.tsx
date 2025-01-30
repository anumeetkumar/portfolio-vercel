"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Github, Globe } from "lucide-react"
import { useEffect } from "react"

const projects = {
  "e-commerce-platform": {
    title: "E-commerce Platform",
    description:
      "A full-featured online store built with Next.js and TypeScript. This project demonstrates advanced state management, API integration, and responsive design principles.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    link: "#",
    github: "#",
    images: ["/placeholder.svg?height=400&width=600"],
    features: [
      "User authentication and authorization",
      "Product catalog with filtering and search",
      "Shopping cart functionality",
      "Secure payment processing",
      "Order management system",
    ],
  },
  "task-management": {
    title: "Task Management App",
    description:
      "A Svelte-based application for managing tasks and projects. Features real-time updates and collaborative functionality.",
    tech: ["Svelte", "JavaScript", "CSS3"],
    link: "#",
    github: "#",
    images: ["/placeholder.svg?height=400&width=600"],
    features: [
      "Real-time task updates",
      "Project organization",
      "Team collaboration tools",
      "Progress tracking",
      "Priority management",
    ],
  },
  "weather-dashboard": {
    title: "Weather Dashboard",
    description:
      "A React application that displays weather information using external APIs. Includes location-based forecasts and interactive weather maps.",
    tech: ["React", "JavaScript", "API Integration"],
    link: "#",
    github: "#",
    images: ["/placeholder.svg?height=400&width=600"],
    features: [
      "Location-based weather data",
      "5-day forecast",
      "Interactive weather maps",
      "Temperature unit conversion",
      "Weather alerts",
    ],
  },
}

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id as string
  const project = projects[projectId as keyof typeof projects]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/#projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{project.description}</p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-2 mb-6">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex gap-4">
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              {project.images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="rounded-lg shadow-lg mb-4 w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

