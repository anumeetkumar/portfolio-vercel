import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ArrowRight } from "lucide-react";
import { education, experiences } from "@/lib/data";

export const metadata = {
  title: "About Me | Anumeet Kumar - Experienced Software Developer",
  description:
    "Senior software developer with extensive experience in React, Next.js, and modern web technologies. Specializing in building scalable enterprise solutions.",
};

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          About Me
        </h1>
        <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          Learn more about my background, experience, and the journey that led
          me to where I am today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative">
          <div className="relative w-[95%] h-[400px] md:w-full overflow-hidden rounded-lg cursor-pointer">
            <Image
              src="/full-img.jpg"
              alt="Developer portrait"
              fill
              className="object-cover object-top w-5/6 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute -bottom-6  h-full w-[90%] right-[2%] md:-right-6 md:w-full border-4 top-[5%] border-primary rounded-lg -z-10"></div>
        </div>

        <div className="space-y-6 text-left">
          <h2 className="text-3xl font-bold">Anumeet</h2>
          <h3 className="text-xl font-medium text-primary">
            Software Developer & Problem Solver
          </h3>

          <p className="text-muted-foreground">
            I'm a passionate software developer with over 4 years of experience
            creating web applications and digital experiences. I specialize in
            JavaScript, React, and modern frontend technologies, with a strong
            foundation in backend development.
          </p>

          <p className="text-muted-foreground">
            My journey in software development began during my university years,
            where I discovered my passion for creating intuitive and efficient
            digital solutions. Since then, I've worked with startups, agencies,
            and enterprise companies, building everything from simple websites
            to complex web applications.
          </p>

          <p className="text-muted-foreground">
            My approach combines technical expertise with creative
            problem-solving to build intuitive, efficient, and scalable
            solutions. I'm constantly learning and exploring new technologies to
            stay at the forefront of web development.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild>
              <Link href="file/AnumeetKumarResume.pdf" target="_blank">
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
        <h2 className="text-3xl font-bold text-center mb-10">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mt-2 md:mt-0">
                    {exp.year}
                  </p>
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
        <h2 className="text-3xl font-bold text-center mb-10">
          Education & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="h-full transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-primary">{edu.year}</p>
                <h3 className="text-xl font-bold mt-2">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {edu.institution}
                </p>
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
            I believe in creating software that not only meets technical
            requirements but also provides an exceptional user experience. My
            development philosophy centers around these core principles:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">User-Centered</h3>
              <p className="text-muted-foreground">
                I prioritize the end-user in every decision, creating intuitive
                interfaces and smooth experiences.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Quality Code</h3>
              <p className="text-muted-foreground">
                I write clean, maintainable, and well-tested code that stands
                the test of time.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-muted-foreground">
                I'm constantly exploring new technologies and methodologies to
                improve my craft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
