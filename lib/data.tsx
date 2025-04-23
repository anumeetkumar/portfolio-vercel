import { Code, Database, Server, Palette, Wrench, BrainCircuit } from "lucide-react"

export const experiences = [
    {
      year: "Nov,2024 - Present",
      title: "Senior Frontend Developer",
      company: "Clousor Technologies",
      description: "Leading frontend development for enterprise applications using React and TypeScript.",
      responsibilities: [
        "Architected and implemented scalable frontend solutions for enterprise clients",
        "Led a team of 5 frontend developers, providing mentorship and code reviews",
        "Implemented CI/CD pipelines and testing strategies that reduced deployment issues by 40%",
        "Collaborated with UX designers to create intuitive user interfaces for complex applications",
      ],
    },
    {
      year: "May,2022 - Nov,2024",
      title: "Senior Frontend Developer",
      company: "Ellocent Labs",
      description: "Developed and maintained web applications using React,Next.js,Tailwindcss",
      responsibilities: [
        "Built RESTful APIs and microservices using Node.js and Express",
        "Developed responsive frontend interfaces with React and Redux",
        "Implemented authentication and authorization systems using JWT and OAuth",
        "Optimized database queries and implemented caching strategies",
      ],
    },
    {
      year: "May,2022 - Apr,2023",
      title: "Junior Web Developer",
      company: "Ellocent Labs",
      description: "Created responsive websites and implemented UI designs using HTML, CSS, and JavaScript.",
      responsibilities: [
        "Converted design mockups into responsive websites using HTML5, CSS3, and JavaScript",
        "Implemented WordPress themes and plugins for client websites",
        "Optimized website performance and SEO",
        "Collaborated with designers to ensure pixel-perfect implementation",
      ],
    },
  ]

  export const education = [
    {
      year: "2019 - 2022",
      degree: "Bachelor of Science in Information Technology",
      institution: "GNA University,Phagwara",
      description: "Graduated with honors, specializing in web development and software engineering.",
    },
    {
      year: "2022-2024",
      degree: "Masters in Computer Application",
      institution: "Manglayatan University,Aligarh",
      description: "Completed intensive training on advanced React patterns and state management.",
    },
  ]

  export const skillCategories = [
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
          level: 80,
          description: "Event loop, streams, async programming, and performance optimization",
        },
        { name: "Express.js", level: 80, description: "Middleware, routing, error handling, and API development" },
        { name: "RESTful APIs", level: 85, description: "API design, versioning, documentation, and best practices" },
        { name: "GraphQL", level: 60, description: "Schema design, resolvers, Apollo Server, and client integration" },
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      description: "Designing and optimizing database schemas, queries, and data storage solutions.",
      skills: [
        {
          name: "Prisma Client",
          level: 80,
          description: "Schema design, aggregation pipeline, indexing, and performance tuning",
        },
        {
          name: "PostgreSQL",
          level: 75,
          description: "Relational design, complex queries, indexing, and optimization",
        },
        { name: "MySQL", level: 70, description: "ACID transactions, stored procedures, and database administration" },
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
        // {
        //   name: "CI/CD",
        //   level: 70,
        //   description: "Automated testing, deployment pipelines, and continuous integration",
        // },
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
        // { name: "Adobe XD", level: 70, description: "Wireframing, interactive prototypes, and design handoff" },
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




  export const projects = [
    {
      id: "project-1",
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
      category: "fullstack",
    },
    {
      id: "project-2",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
      category: "frontend",
    },
    {
      id: "project-3",
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "OpenWeather API", "Chart.js"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
      category: "frontend",
    },
    {
      id: "project-4",
      title: "Social Media Analytics",
      description: "A dashboard for tracking and analyzing social media performance across multiple platforms.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Vue.js", "Express", "D3.js", "Social APIs"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
      category: "fullstack",
    },
    {
      id: "project-5",
      title: "Fitness Tracker",
      description: "A mobile-responsive application for tracking workouts, nutrition, and fitness goals.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React Native", "GraphQL", "MongoDB"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
      category: "mobile",
    },
    {
      id: "project-6",
      title: "Recipe Finder",
      description: "An application that helps users find recipes based on available ingredients and dietary preferences.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["JavaScript", "Spoonacular API", "Bootstrap"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
      category: "frontend",
    },
    {
      id: "project-7",
      title: "Personal Finance API",
      description: "A RESTful API for tracking personal finances, expenses, and generating reports.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
      category: "backend",
    },
    {
      id: "project-8",
      title: "Real-time Chat Application",
      description: "A chat application with real-time messaging, user presence, and file sharing.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Socket.io", "Express", "MongoDB"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
      category: "fullstack",
    },
    {
      id: "project-9",
      title: "Content Management System",
      description: "A headless CMS for managing digital content with a customizable API.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Node.js", "GraphQL", "MongoDB", "React"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
      category: "fullstack",
    },
  ]