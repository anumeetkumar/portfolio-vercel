"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: "project-1",
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
    },
    {
      id: "project-2",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
    },
    {
      id: "project-3",
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "OpenWeather API", "Chart.js"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
    },
    {
      id: "project-4",
      title: "Social Media Analytics",
      description: "A dashboard for tracking and analyzing social media performance across multiple platforms.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Vue.js", "Express", "D3.js", "Social APIs"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
    },
    {
      id: "project-5",
      title: "Fitness Tracker",
      description: "A mobile-responsive application for tracking workouts, nutrition, and fitness goals.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React Native", "GraphQL", "MongoDB"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
    },
    {
      id: "project-6",
      title: "Recipe Finder",
      description:
        "An application that helps users find recipes based on available ingredients and dietary preferences.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["JavaScript", "Spoonacular API", "Bootstrap"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  // Filter featured projects for initial display
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
            <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto">
              Here are some of my recent projects. Each one was built to solve a specific problem or explore new
              technologies.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={project.id} variants={item}>
              <Card className="h-full overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href={`/projects/${project.id}`}>
                      View Details <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
