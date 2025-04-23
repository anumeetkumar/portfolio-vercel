"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import ParticlesBackground from "@/components/particles-background"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              <span className="text-primary">Hello, I'm</span> Anumeet
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">Software Developer</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-muted-foreground"
          >
            I build exceptional digital experiences with modern technologies. Specializing in creating responsive,
            user-friendly applications with clean code and innovative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button asChild size="lg">
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex space-x-4 mt-8"
          >
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/anumeetkumar/anumeetkumar" target="_blank" rel="noopener noreferrer">
                <Github className="h-10 w-10 scale-150" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/anumeet-kumar/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-8 w-8 scale-150" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            {/* <Button variant="ghost" size="icon" asChild>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button> */}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
          }}
        >
          <Link href="#about" className="flex items-center justify-center w-10 h-10 rounded-full border">
            <ArrowRight className="h-4 w-4 rotate-90" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
