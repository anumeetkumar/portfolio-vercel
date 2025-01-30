"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  { name: "React.js", level: "Expert" },
  { name: "Next.js", level: "Advanced" },
  { name: "Svelte", level: "Intermediate" },
  { name: "TypeScript", level: "Advanced" },
  { name: "JavaScript", level: "Expert" },
  { name: "HTML/CSS", level: "Expert" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-200 text-blue-800">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      className="flex h-2 mb-4 overflow-hidden rounded bg-blue-200"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    >
                      <div
                        style={{
                          width: skill.level === "Expert" ? "100%" : skill.level === "Advanced" ? "80%" : "60%",
                        }}
                        className="flex flex-col justify-center rounded bg-blue-500"
                      />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

