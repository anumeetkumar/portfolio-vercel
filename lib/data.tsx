import {
  Code,
  Database,
  Server,
  Palette,
  Wrench,
  BrainCircuit,
} from "lucide-react";
import Minaos from "@/lib/assets/images/projects/minaos.webp";
import Minaos1 from "@/lib/assets/images/projects/minaos-1.webp";
import Minaos2 from "@/lib/assets/images/projects/minaos-2.webp";
import Minaos3 from "@/lib/assets/images/projects/minaos-3.webp";
import Memantra from "@/lib/assets/images/projects/memantra.webp";
import Memantra1 from "@/lib/assets/images/projects/memantra-1.webp";
import Memantra2 from "@/lib/assets/images/projects/memantra-2.webp";
import Memantra3 from "@/lib/assets/images/projects/memantra-3.webp";
import Psychowaves from "@/lib/assets/images/projects/psychowaves.webp";
import Psychowaves1 from "@/lib/assets/images/projects/psyco-1.webp";
import Psychowaves2 from "@/lib/assets/images/projects/psyco-2.webp";
import Psychowaves3 from "@/lib/assets/images/projects/psyco-3.webp";
import Ringtonez from "@/lib/assets/images/projects/ringtonez.webp";
import Ringtonez1 from "@/lib/assets/images/projects/ring-1.webp";
import Ringtonez2 from "@/lib/assets/images/projects/ring-2.webp";

export const experiences = [
  {
    year: "Nov,2024 - Present",
    title: "Senior Frontend Developer",
    company: "Clousor Technologies",
    description:
      "Leading frontend development for enterprise applications using React and TypeScript.",
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
    description:
      "Developed and maintained web applications using React,Next.js,Tailwindcss",
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
    description:
      "Created responsive websites and implemented UI designs using HTML, CSS, and JavaScript.",
    responsibilities: [
      "Converted design mockups into responsive websites using HTML5, CSS3, and JavaScript",
      "Implemented WordPress themes and plugins for client websites",
      "Optimized website performance and SEO",
      "Collaborated with designers to ensure pixel-perfect implementation",
    ],
  },
];

export const education = [
  {
    year: "2019 - 2022",
    degree: "Bachelor of Science in Information Technology",
    institution: "GNA University,Phagwara",
    description:
      "Graduated with honors, specializing in web development and software engineering.",
  },
  {
    year: "2022-2024",
    degree: "Masters in Computer Application",
    institution: "Manglayatan University,Aligarh",
    description:
      "Completed intensive training on advanced React patterns and state management.",
  },
];

export const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: <Code className="h-5 w-5" />,
    description:
      "Building responsive, accessible, and performant user interfaces with modern web technologies.",
    skills: [
      {
        name: "HTML5/CSS3",
        level: 90,
        description:
          "Semantic markup, CSS Grid, Flexbox, animations, and responsive design",
      },
      {
        name: "JavaScript (ES6+)",
        level: 85,
        description: "Promises, async/await, modules, and modern JS features",
      },
      {
        name: "TypeScript",
        level: 80,
        description:
          "Type safety, interfaces, generics, and advanced type features",
      },
      {
        name: "React.js",
        level: 90,
        description:
          "Hooks, context, custom hooks, performance optimization, and state management",
      },
      {
        name: "Next.js",
        level: 85,
        description:
          "Server components, app router, API routes, and SSR/SSG strategies",
      },
      {
        name: "Tailwind CSS",
        level: 90,
        description:
          "Utility-first styling, custom configurations, and responsive design",
      },
      {
        name: "Framer Motion",
        level: 75,
        description:
          "Animations, transitions, gestures, and interactive UI elements",
      },
      {
        name: "Redux",
        level: 80,
        description:
          "State management, middleware, Redux Toolkit, and async actions",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    description:
      "Developing robust server-side applications, APIs, and services to power web applications.",
    skills: [
      {
        name: "Node.js",
        level: 80,
        description:
          "Event loop, streams, async programming, and performance optimization",
      },
      {
        name: "Express.js",
        level: 80,
        description: "Middleware, routing, error handling, and API development",
      },
      {
        name: "RESTful APIs",
        level: 85,
        description:
          "API design, versioning, documentation, and best practices",
      },
      {
        name: "GraphQL",
        level: 60,
        description:
          "Schema design, resolvers, Apollo Server, and client integration",
      },
    ],
  },
  {
    id: "database",
    name: "Database",
    icon: <Database className="h-5 w-5" />,
    description:
      "Designing and optimizing database schemas, queries, and data storage solutions.",
    skills: [
      {
        name: "Prisma Client",
        level: 80,
        description:
          "Schema design, aggregation pipeline, indexing, and performance tuning",
      },
      {
        name: "PostgreSQL",
        level: 75,
        description:
          "Relational design, complex queries, indexing, and optimization",
      },
      {
        name: "MySQL",
        level: 70,
        description:
          "ACID transactions, stored procedures, and database administration",
      },
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    icon: <Wrench className="h-5 w-5" />,
    description:
      "Implementing CI/CD pipelines, containerization, and cloud infrastructure management.",
    skills: [
      {
        name: "Git/GitHub",
        level: 90,
        description:
          "Version control, branching strategies, PR workflows, and GitHub Actions",
      },
      {
        name: "Docker",
        level: 75,
        description:
          "Containerization, Docker Compose, multi-stage builds, and optimization",
      },
      // {
      //   name: "CI/CD",
      //   level: 70,
      //   description: "Automated testing, deployment pipelines, and continuous integration",
      // },
      {
        name: "AWS",
        level: 65,
        description: "EC2, S3, Lambda, CloudFront, and serverless architecture",
      },
      {
        name: "Vercel",
        level: 85,
        description:
          "Deployment, preview environments, edge functions, and analytics",
      },
    ],
  },
  {
    id: "design",
    name: "Design",
    icon: <Palette className="h-5 w-5" />,
    description:
      "Creating visually appealing and user-friendly interfaces with design tools and principles.",
    skills: [
      {
        name: "Figma",
        level: 80,
        description: "UI design, prototyping, components, and design systems",
      },
      // { name: "Adobe XD", level: 70, description: "Wireframing, interactive prototypes, and design handoff" },
      {
        name: "UI/UX Principles",
        level: 75,
        description:
          "User research, information architecture, and usability testing",
      },
      {
        name: "Responsive Design",
        level: 90,
        description:
          "Mobile-first approach, adaptive layouts, and cross-device compatibility",
      },
    ],
  },
  {
    id: "other",
    name: "Other",
    icon: <BrainCircuit className="h-5 w-5" />,
    description:
      "Additional skills and competencies that contribute to successful software development.",
    skills: [
      {
        name: "Testing (Jest, RTL)",
        level: 75,
        description: "Unit testing, integration testing, mocking, and TDD",
      },
      {
        name: "Agile/Scrum",
        level: 80,
        description:
          "Sprint planning, daily standups, retrospectives, and user stories",
      },
      {
        name: "Problem Solving",
        level: 90,
        description:
          "Analytical thinking, debugging, and algorithmic solutions",
      },
      {
        name: "Technical Writing",
        level: 75,
        description: "Documentation, API specs, and knowledge sharing",
      },
    ],
  },
];

export const projects = [
  {
    id: "project-1",
    title:
      "Psychowaves – Simplifying Appointments & Learning for Mental Health Platform",
    description:
      "Developed a comprehensive website integrated with an advanced appointment booking system, enhancing user accessibility and operational efficiency.",
    longDescription:
      "Psychowaves is a mental health platform designed to simplify and modernize access to psychological services. The platform offers a wide range of behavioral and psychological services delivered by fully trained, qualified, and accredited professionals, including Psychologists, Psychotherapists, and Counselors. These services encompass individual assessments, therapy sessions, and psychological evaluations, all supported by standardized test materials and tools.\n\nThe system is built using modern web technologies with Svelte and TypeScript for the frontend, providing a highly responsive and interactive user interface. The backend is powered by a robust Prisma and Node.js stack, ensuring efficient data management and seamless integration. The appointment booking system allows users to effortlessly schedule sessions with practitioners based on availability, service type, and specialization.\n\nFeatures also include secure user authentication, detailed service browsing, user account management, and a structured admin panel for appointment oversight and data insights.",
    image: Psychowaves,
    gallery: [Psychowaves1, Psychowaves2, Psychowaves3],
    tags: [
      "Svelte",
      "TypeScript",
      "Prisma",
      "Node.js",
      "Mental Health",
      "Appointment Booking",
    ],
    demo: "https://www.psychowaves.org/",
    features: [
      "Advanced appointment booking system",
      "Secure user authentication and account management",
      "Professional profiles with service descriptions",
      "Psychological assessments and therapy scheduling",
      "Standardized test materials integration",
      "Admin dashboard for managing appointments and insights",
    ],
    category: "fullstack",
    featured: true,
    github: "",
  },
  {
    id: "project-2",
    title:
      "MeMantra Wellness – Diet Clinics with a Comprehensive CRM & HR Ecosystem",
    description:
      "Developed a website and custom CRM for a diet clinic, streamlining appointment management and enabling personalized diet plan delivery.",
    longDescription:
      "MeMantra Wellness is a holistic nutrition and wellness platform designed to empower individuals on their journey to better health. As a chain of Specialized Diet Clinics, MeMantra transforms health and wellness through evidence-based, personalized nutrition solutions.\n\nThe platform offers a complete ecosystem for clinic operations, featuring an online appointment system, personalized diet plan automation, and integrated communication tools including WhatsApp and video consultations. It also includes a custom-built CRM and HR management suite, enabling staff coordination, patient tracking, and operational efficiency.\n\nBuilt using Svelte and TypeScript, the platform delivers a modern, responsive experience for both clients and practitioners. Backend operations are powered by scalable services, ensuring secure data handling and streamlined workflows across the organization.",
    image: Memantra,
    gallery: [Memantra1, Memantra2, Memantra3],
    tags: [
      "Svelte",
      "TypeScript",
      "CRM",
      "HR Management",
      "Nutrition",
      "Appointments",
      "Wellness",
    ],
    demo: "https://www.memantra.com/", // Replace with actual link if different
    features: [
      "Online appointment system for diet consultations",
      "Custom CRM for client and case management",
      "Automated diet prescriptions and personalized plans",
      "WhatsApp and video consultation integration",
      "HR dashboard for staff scheduling and task management",
      "Secure data storage and communication workflows",
    ],
    category: "fullstack",
    featured: true,
  },
  {
    id: "project-4",
    title: "Minoas Rentals – Hassle-Free Car Rentals Across Crete Island",
    description:
      "Developed a car rental platform offering easy booking, premium service, and live trip monitoring for travelers across Crete.",
    longDescription:
      "Minoas Rentals is a Heraklion-based car rental company that offers reliable, premium-quality vehicles to travelers across Crete Island. With delivery and pickup services at Heraklion Airport, Chania Airport, and over 20 other locations, Minoas Rentals ensures convenience and flexibility for both tourists and business travelers.\n\nThe platform emphasizes a seamless rental experience through an intuitive booking system, premium vehicle maintenance, and professional support. Customers benefit from live trip monitoring, ensuring a safe and comfortable journey. The company also stands by its service with a refund guarantee and a commitment to customer satisfaction.\n\nWhether it's a vacation road trip or a business visit, Minoas Rentals offers top-tier services at attractive rates, making car rentals in Crete easy and dependable.",
    image: Minaos,
    gallery: [Minaos1, Minaos2, Minaos3],
    tags: [
      "Car Rental",
      "Travel",
      "Crete",
      "Heraklion",
      "Chania",
      "Customer Service",
      "Web Platform",
    ],
    demo: "https://www.minoasrentals.com/",
    features: [
      "Easy and fast rental booking process",
      "Premium-quality, regularly maintained cars",
      "Professional agents for travel assistance",
      "Engine safety with regular checks",
      "Refund guarantee if service expectations aren't met",
      "Live monitoring system for safety and comfort",
      "Multiple pickup and drop-off locations across Crete",
    ],
    category: "backend",
    featured: true,
  },
  {
    id: "project-3",
    title:
      "Ringtonez – Discover the Perfect Ringtone for Every Mood and Moment",
    description:
      "A modern and stylish platform for finding, previewing, and downloading ringtones that match every mood and moment.",
    longDescription:
      "Ringtonez is a vibrant and user-friendly web platform that allows users to search, explore, and download the perfect ringtones for their mobile devices. Whether you're looking for something fun, relaxing, or bold, Ringtonez provides a rich library of melodies to suit any occasion or personal style.\n\nThe frontend is built using Next.js and TypeScript, ensuring fast performance and SEO optimization. Tailwind CSS powers the sleek and responsive UI, making the experience seamless across devices. A powerful search functionality helps users quickly find their favorite tunes, while preview and download options make customization effortless.\n\n🎶 Unlock the perfect melody! 📲 Download your favorite ringtones today and let your phone sing with joy. 🎵",
    image: Ringtonez,
    gallery: [Ringtonez2, Ringtonez1],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Music",
      "Frontend",
      "Ringtones",
    ],
    demo: "https://www.ringtonez.in/",
    features: [
      "Intuitive ringtone search functionality",
      "Preview and download ringtones instantly",
      "Clean, responsive UI with Tailwind CSS",
      "SEO-optimized and fast with Next.js",
      "Extensive library of ringtones across genres",
      "Mobile-friendly design for on-the-go browsing",
    ],
    category: "frontend",
    featured: false,
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt:
      "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    content: "Full content would go here...",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 15, 2023",
    readTime: "5 min read",
    category: "CSS",
  },
  {
    id: "post-2",
    title: "State Management in React: Context API vs. Redux",
    excerpt:
      "A comparison of different state management approaches in React applications.",
    content: "Full content would go here...",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 28, 2023",
    readTime: "8 min read",
    category: "React",
  },
  {
    id: "post-3",
    title: "Getting Started with Next.js and TypeScript",
    excerpt:
      "A comprehensive guide to setting up a new project with Next.js and TypeScript.",
    content: "Full content would go here...",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 12, 2023",
    readTime: "6 min read",
    category: "Next.js",
  },
  {
    id: "post-4",
    title: "Optimizing Performance in React Applications",
    excerpt:
      "Learn techniques to improve the performance of your React applications and provide a better user experience.",
    content: "Full content would go here...",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 5, 2022",
    readTime: "7 min read",
    category: "Performance",
  },
  {
    id: "post-5",
    title: "Introduction to GraphQL with Apollo Client",
    excerpt:
      "Discover how GraphQL can simplify your API requests and make your frontend code more efficient.",
    content: "Full content would go here...",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 18, 2022",
    readTime: "9 min read",
    category: "GraphQL",
  },
  {
    id: "post-6",
    title: "Building Accessible Web Applications",
    excerpt:
      "Best practices for creating web applications that are accessible to all users, including those with disabilities.",
    content: "Full content would go here...",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 22, 2022",
    readTime: "6 min read",
    category: "Accessibility",
  },
];
