import Link from "next/link"
import { Button } from "@/components/ui/button"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import BlogPreview from "@/components/sections/blog-preview"
import Contact from "@/components/sections/contact"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Hero />

      <div className="relative">
        <About />
        <div className="absolute bottom-8 left-1/2  transform -translate-x-1/2">
          <Button asChild variant="outline" className="">
            <Link href="/about" className="flex items-center gap-2">
              Learn More About Me <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative">
        <Skills />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button asChild variant="outline">
            <Link href="/skills" className="flex items-center gap-2">
              View All Skills <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative">
        <Projects />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button asChild variant="outline">
            <Link href="/projects" className="flex items-center gap-2">
              Explore All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <BlogPreview />
      <Contact />
    </div>
  )
}
