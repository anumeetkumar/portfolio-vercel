"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

// This would typically come from a database or API

const categories = [
  { id: "all", name: "All Projects" },
  { id: "fullstack", name: "Full Stack" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "mobile", name: "Mobile" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          My Projects
        </h1>
        <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          A collection of my work across web development, mobile applications,
          and more. Each project represents a unique challenge and solution.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className="min-w-[100px]"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <Card className="h-full overflow-hidden group">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                {project?.github && (
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                )}

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

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-xl font-medium mb-2">No projects found</h3>
          <p className="text-muted-foreground">
            Try selecting a different category
          </p>
        </div>
      )}

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Project Development Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="h-full">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Discovery</h3>
              <p className="text-sm text-muted-foreground">
                Understanding requirements, research, and planning the project
                scope and architecture.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Design</h3>
              <p className="text-sm text-muted-foreground">
                Creating wireframes, mockups, and prototypes to visualize the
                user interface and experience.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Development</h3>
              <p className="text-sm text-muted-foreground">
                Writing clean, maintainable code with a focus on performance,
                security, and best practices.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Deployment</h3>
              <p className="text-sm text-muted-foreground">
                Testing, optimization, and launching the project with ongoing
                support and maintenance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
