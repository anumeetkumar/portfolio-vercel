import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

// This would typically come from a database or API

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="text-xl text-muted-foreground mb-4">
              {project.description}
            </p>
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
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
            {project?.github && (
              <Button asChild variant="outline">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> View Code
                </Link>
              </Button>
            )}
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
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
