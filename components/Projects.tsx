"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    id: "e-commerce-platform",
    title: "E-commerce Platform",
    description: "A full-featured online store built with Next.js and TypeScript.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "A Svelte-based application for managing tasks and projects.",
    tech: ["Svelte", "JavaScript", "CSS3"],
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A React application that displays weather information using external APIs.",
    tech: ["React", "JavaScript", "API Integration"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild>
                    <Link href={`/project/${project.id}`}>
                      <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        View Details
                      </motion.span>
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

