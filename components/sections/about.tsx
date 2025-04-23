"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/lib/data";

export default function About() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-[95%] h-[400px] md:w-full overflow-hidden rounded-lg">
              <Image
                src="/about.jpg"
                alt="Developer portrait"
                fill
                className="object-cover object-top w-5/6"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6  h-full w-[90%] right-[2%] md:-right-6 md:w-full border-4 top-[5%] border-primary rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-left"
          >
            <h3 className="text-2xl font-bold">
              Software Developer & Problem Solver
            </h3>
            <p className="text-muted-foreground">
              I'm a passionate software developer with over 4 years of
              experience creating web applications and digital experiences. I
              specialize in JavaScript, React, and modern frontend technologies,
              with a strong foundation in backend development.
            </p>
            <p className="text-muted-foreground">
              My approach combines technical expertise with creative
              problem-solving to build intuitive, efficient, and scalable
              solutions. I'm constantly learning and exploring new technologies
              to stay at the forefront of web development.
            </p>
            <div className="pt-4">
              <Button asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10">
            Experience Timeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-sm font-medium text-primary">
                      {exp.year}
                    </p>
                    <h4 className="text-xl font-bold mt-2">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {exp.company}
                    </p>
                    <p className="mt-4 text-muted-foreground">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
