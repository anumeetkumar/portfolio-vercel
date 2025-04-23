import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, ArrowRight } from "lucide-react"

export const metadata = {
  title: "About Me | DevPortfolio",
  description: "Learn more about my background, experience, and skills as a software developer",
}

export default function AboutPage() {
  const experiences = [
    {
      year: "2022 - Present",
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      description: "Leading frontend development for enterprise applications using React and TypeScript.",
      responsibilities: [
        "Architected and implemented scalable frontend solutions for enterprise clients",
        "Led a team of 5 frontend developers, providing mentorship and code reviews",
        "Implemented CI/CD pipelines and testing strategies that reduced deployment issues by 40%",
        "Collaborated with UX designers to create intuitive user interfaces for complex applications",
      ],
    },
    {
      year: "2020 - 2022",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed and maintained web applications using React, Node.js, and MongoDB.",
      responsibilities: [
        "Built RESTful APIs and microservices using Node.js and Express",
        "Developed responsive frontend interfaces with React and Redux",
        "Implemented authentication and authorization systems using JWT and OAuth",
        "Optimized database queries and implemented caching strategies",
      ],
    },
    {
      year: "2018 - 2020",
      title: "Junior Web Developer",
      company: "Creative Web Agency",
      description: "Created responsive websites and implemented UI designs using HTML, CSS, and JavaScript.",
      responsibilities: [
        "Converted design mockups into responsive websites using HTML5, CSS3, and JavaScript",
        "Implemented WordPress themes and plugins for client websites",
        "Optimized website performance and SEO",
        "Collaborated with designers to ensure pixel-perfect implementation",
      ],
    },
  ]

  const education = [
    {
      year: "2014 - 2018",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      description: "Graduated with honors, specializing in web development and software engineering.",
    },
    {
      year: "2020",
      degree: "Advanced React and Redux Certification",
      institution: "Frontend Masters",
      description: "Completed intensive training on advanced React patterns and state management.",
    },
    {
      year: "2021",
      degree: "AWS Certified Developer - Associate",
      institution: "Amazon Web Services",
      description: "Certification in developing and maintaining applications on the AWS platform.",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
        <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          Learn more about my background, experience, and the journey that led me to where I am today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative">
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="Developer portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -right-6 h-full w-full border-4 border-primary rounded-lg -z-10"></div>
        </div>

        <div className="space-y-6 text-left">
          <h2 className="text-3xl font-bold">Alex Chen</h2>
          <h3 className="text-xl font-medium text-primary">Software Developer & Problem Solver</h3>

          <p className="text-muted-foreground">
            I'm a passionate software developer with over 5 years of experience creating web applications and digital
            experiences. I specialize in JavaScript, React, and modern frontend technologies, with a strong foundation
            in backend development.
          </p>

          <p className="text-muted-foreground">
            My journey in software development began during my university years, where I discovered my passion for
            creating intuitive and efficient digital solutions. Since then, I've worked with startups, agencies, and
            enterprise companies, building everything from simple websites to complex web applications.
          </p>

          <p className="text-muted-foreground">
            My approach combines technical expertise with creative problem-solving to build intuitive, efficient, and
            scalable solutions. I'm constantly learning and exploring new technologies to stay at the forefront of web
            development.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild>
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mt-2 md:mt-0">{exp.year}</p>
                </div>
                <p className="mb-4">{exp.description}</p>
                <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-muted-foreground">
                      {resp}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Education & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="h-full transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-primary">{edu.year}</p>
                <h3 className="text-xl font-bold mt-2">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                <p className="mt-4 text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">My Approach</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-4">
            I believe in creating software that not only meets technical requirements but also provides an exceptional
            user experience. My development philosophy centers around these core principles:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">User-Centered</h3>
              <p className="text-muted-foreground">
                I prioritize the end-user in every decision, creating intuitive interfaces and smooth experiences.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Quality Code</h3>
              <p className="text-muted-foreground">
                I write clean, maintainable, and well-tested code that stands the test of time.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-muted-foreground">
                I'm constantly exploring new technologies and methodologies to improve my craft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
