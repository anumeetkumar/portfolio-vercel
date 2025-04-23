"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Server, Palette, Wrench, BrainCircuit } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "HTML5/CSS3", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 75 },
        { name: "Redux", level: 80 },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 70 },
        { name: "Django", level: 65 },
        { name: "RESTful APIs", level: 85 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "Firebase", level: 85 },
        { name: "Redis", level: 65 },
      ],
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <Wrench className="h-5 w-5" />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Vercel", level: 85 },
      ],
    },
    {
      id: "design",
      name: "Design",
      icon: <Palette className="h-5 w-5" />,
      skills: [
        { name: "Figma", level: 80 },
        { name: "Adobe XD", level: 70 },
        { name: "UI/UX Principles", level: 75 },
        { name: "Responsive Design", level: 90 },
      ],
    },
    {
      id: "other",
      name: "Other",
      icon: <BrainCircuit className="h-5 w-5" />,
      skills: [
        { name: "Testing (Jest, RTL)", level: 75 },
        { name: "Agile/Scrum", level: 80 },
        { name: "Problem Solving", level: 90 },
        { name: "Technical Writing", level: 75 },
      ],
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

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
            <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          </motion.div>
        </div>

        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden md:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {category.skills.map((skill, index) => (
                  <motion.div key={index} variants={item}>
                    <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <motion.div
                            className="bg-primary h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          ></motion.div>
                        </div>
                        <p className="text-right text-sm text-muted-foreground mt-1">{skill.level}%</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
