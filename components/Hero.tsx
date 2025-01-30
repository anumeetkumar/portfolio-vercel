"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-background"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-600/10" />
        <div className="absolute inset-0 bg-grid-pattern" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-600/30 dark:from-blue-500/20 dark:to-purple-600/20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-52 h-52 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20"
          >
            <img
              src="/profile.webp"
              alt="Anumeet Kumar - Front-End Developer"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <h1 className="text-5xl font-bold mb-4">Anumeet Kumar</h1>
          <h2 className="text-2xl text-muted-foreground mb-8">
            Experienced Front-End Developer
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-muted-foreground">
            Specializing in React.js, Next.js, Svelte, TypeScript, and
            JavaScript. Building modern, responsive, and user-friendly web
            applications.
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <motion.a
              href="https://www.linkedin.com/in/anumeet-kumar/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-[#0077B5] text-white px-4 py-2 rounded-md"
            >
              <Linkedin size={20} />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/anumeetkumar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-[#333] text-white px-4 py-2 rounded-md dark:bg-white dark:text-[#333]"
            >
              <Github size={20} />
              GitHub
            </motion.a>
          </div>

          <Button asChild>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
