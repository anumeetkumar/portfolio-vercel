"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Server, Palette, Wrench, BrainCircuit } from "lucide-react"

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState("frontend")

  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Code className="h-5 w-5" />,
      description: "Building responsive, accessible, and performant user interfaces with modern web technologies.",
      skills: [
        {
          name: "HTML5/CSS3",
          level: 90,
          description: "Semantic markup, CSS Grid, Flexbox, animations, and responsive design",
        },
        { name: "JavaScript (ES6+)", level: 85, description: "Promises, async/await, modules, and modern JS features" },
        { name: "TypeScript", level: 80, description: "Type safety, interfaces, generics, and advanced type features" },
        {
          name: "React.js",
          level: 90,
          description: "Hooks, context, custom hooks, performance optimization, and state management",
        },
        {
          name: "Next.js",
          level: 85,
          description: "Server components, app router, API routes, and SSR/SSG strategies",
        },
        {
          name: "Tailwind CSS",
          level: 90,
          description: "Utility-first styling, custom configurations, and responsive design",
        },
        {
          name: "Framer Motion",
          level: 75,
          description: "Animations, transitions, gestures, and interactive UI elements",
        },
        { name: "Redux", level: 80, description: "State management, middleware, Redux Toolkit, and async actions" },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      description: "Developing robust server-side applications, APIs, and services to power web applications.",
      skills: [
        {
          name: "Node.js",
          level: 85,
          description: "Event loop, streams, async programming, and performance optimization",
        },
        { name: "Express.js", level: 80, description: "Middleware, routing, error handling, and API development" },
        { name: "Python", level: 70, description: "Django, Flask, data processing, and automation scripts" },
        { name: "Django", level: 65, description: "ORM, admin interface, authentication, and REST framework" },
        { name: "RESTful APIs", level: 85, description: "API design, versioning, documentation, and best practices" },
        { name: "GraphQL", level: 75, description: "Schema design, resolvers, Apollo Server, and client integration" },
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      description: "Designing and optimizing database schemas, queries, and data storage solutions.",
      skills: [
        {
          name: "MongoDB",
          level: 80,
          description: "Schema design, aggregation pipeline, indexing, and performance tuning",
        },
        {
          name: "PostgreSQL",
          level: 75,
          description: "Relational design, complex queries, indexing, and optimization",
        },
        { name: "MySQL", level: 70, description: "ACID transactions, stored procedures, and database administration" },
        {
          name: "Firebase",
          level: 85,
          description: "Firestore, real-time database, authentication, and cloud functions",
        },
        { name: "Redis", level: 65, description: "Caching strategies, pub/sub, data structures, and performance" },
      ],
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <Wrench className="h-5 w-5" />,
      description: "Implementing CI/CD pipelines, containerization, and cloud infrastructure management.",
      skills: [
        {
          name: "Git/GitHub",
          level: 90,
          description: "Version control, branching strategies, PR workflows, and GitHub Actions",
        },
        {
          name: "Docker",
          level: 75,
          description: "Containerization, Docker Compose, multi-stage builds, and optimization",
        },
        {
          name: "CI/CD",
          level: 70,
          description: "Automated testing, deployment pipelines, and continuous integration",
        },
        { name: "AWS", level: 65, description: "EC2, S3, Lambda, CloudFront, and serverless architecture" },
        { name: "Vercel", level: 85, description: "Deployment, preview environments, edge functions, and analytics" },
      ],
    },
    {
      id: "design",
      name: "Design",
      icon: <Palette className="h-5 w-5" />,
      description: "Creating visually appealing and user-friendly interfaces with design tools and principles.",
      skills: [
        { name: "Figma", level: 80, description: "UI design, prototyping, components, and design systems" },
        { name: "Adobe XD", level: 70, description: "Wireframing, interactive prototypes, and design handoff" },
        {
          name: "UI/UX Principles",
          level: 75,
          description: "User research, information architecture, and usability testing",
        },
        {
          name: "Responsive Design",
          level: 90,
          description: "Mobile-first approach, adaptive layouts, and cross-device compatibility",
        },
      ],
    },
    {
      id: "other",
      name: "Other",
      icon: <BrainCircuit className="h-5 w-5" />,
      description: "Additional skills and competencies that contribute to successful software development.",
      skills: [
        { name: "Testing (Jest, RTL)", level: 75, description: "Unit testing, integration testing, mocking, and TDD" },
        {
          name: "Agile/Scrum",
          level: 80,
          description: "Sprint planning, daily standups, retrospectives, and user stories",
        },
        {
          name: "Problem Solving",
          level: 90,
          description: "Analytical thinking, debugging, and algorithmic solutions",
        },
        { name: "Technical Writing", level: 75, description: "Documentation, API specs, and knowledge sharing" },
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

  const selectedCategoryData = skillCategories.find((category) => category.id === selectedCategory)

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h1>
        <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          I've developed a diverse set of skills throughout my career. Here's a comprehensive overview of my technical
          expertise.
        </p>
      </div>

      <Tabs defaultValue="frontend" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
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

        {selectedCategoryData && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2">{selectedCategoryData.name} Development</h2>
            <p className="text-muted-foreground mb-8">{selectedCategoryData.description}</p>
          </div>
        )}

        {skillCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 gap-6">
              {category.skills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{skill.description}</p>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <motion.div
                              className="bg-primary h-2.5 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            ></motion.div>
                          </div>
                        </div>
                        <div className="w-16 text-right">
                          <span className="text-lg font-bold">{skill.level}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">My Learning Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Current Focus</h3>
            <Card className="h-full">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Web3 and Blockchain Development</p>
                      <p className="text-sm text-muted-foreground">
                        Learning Solidity, smart contracts, and dApp development
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Advanced TypeScript Patterns</p>
                      <p className="text-sm text-muted-foreground">
                        Mastering generics, conditional types, and type inference
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Serverless Architecture</p>
                      <p className="text-sm text-muted-foreground">
                        Building scalable applications with AWS Lambda and Vercel Edge Functions
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Learning Resources</h3>
            <Card className="h-full">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Online Platforms</p>
                      <p className="text-sm text-muted-foreground">Frontend Masters, Udemy, Coursera, and egghead.io</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Technical Books</p>
                      <p className="text-sm text-muted-foreground">
                        Regularly reading software development books and publications
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Open Source Contributions</p>
                      <p className="text-sm text-muted-foreground">Learning by contributing to open source projects</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
