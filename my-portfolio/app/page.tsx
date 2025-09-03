import { Button } from "@/components/ui/button"
import { Download, Eye, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"

const socialLinks = [
  {
    href: "https://github.com/joshua-commits",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/oluwakorededayo-babatunde",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:oluwakorededayo.babatunde@gmail.com",
    icon: Mail,
    label: "Email",
  },
] as const

const projects = [
   {
    title: "Crypto Price Tracker",
    description: "Track real-time cryptocurrency prices and visualise using Power BI",
    image: "/crypto.png?height=400&width=600",
    link: "https://github.com/joshua-commits/CryptoPriceTracker",
    liveLink: "https",
    tags: ["FastAPI", "PostgreSQL", "Power BI", "Docker", "SqlAlchemy"],
  },

  {
    title: "DevOps Project",
    description: "DevOps project using Azure and Terraform to deploy a web app.",
    image: "/devops.png?height=400&width=600",
    link: "https://github.com/joshua-commits/DevOpsProject",
    liveLink: "https",
    tags: ["Azure", "Terraform", "Python Flask", "Docker", "Bash"],
  },
  

  {
    title: "Next.js + Tailwind Portfolio",
    description: "Static site built with Next.js to showcase my work and career goals.",
    image: "/portfolio.png?height=400&width=600",
    link: "https://github.com/joshua-commits/korededayobabatundeportfolio",
    liveLink: "#",
    tags: ["Next.js", "TailwindCSS", "TypeScript", "Vercel"],
  },
  
] as const

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-2.5">
          <Link className="flex items-center space-x-2 transition-colors hover:text-foreground/80" href="/">
            <span className="hidden font-bold sm:inline-block text-lg">korededayobabatunde</span>
          </Link>
          <div className="flex items-center space-x-4">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#about"
                className="transition-colors hover:text-foreground/80 hover:underline underline-offset-4"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="transition-colors hover:text-foreground/80 hover:underline underline-offset-4"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="transition-colors hover:text-foreground/80 hover:underline underline-offset-4"
              >
                Contact
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 animate-fade-in">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-balance">
                  Oluwakorede Dayo Babatunde
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-balance">
                Final-year Computer Science student aspiring to become a Solution Architect or Business Analyst. Passionate about designing cloud-native solutions and bridging the gap between technical teams and business goals. Skilled in AWS, Python, and Agile methodologies, with hands-on experience in cross-functional team projects. Currently seeking junior-level roles to apply both my technical acumen and stakeholder-focused mindset to real-world systems.
                </p>
              </div>
              <div className="flex space-x-4 pt-4">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <Link key={label} href={href} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:scale-105 transition-transform bg-transparent"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{label}</span>
                    </Button>
                  </Link>
                ))}
                </div>
                <div className="flex space-x-4 pt-4">
                <Button variant="outline" size="lg" className="hover:scale-105 transition-transform bg-transparent">
                  <Eye className="h-4 w-4" />
                  <a href="/OluwakoredeDayo-Babatunde-CV.pdf" target="_blank">
                    <span>View Resume</span>
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="hover:scale-105 transition-transform bg-transparent">
                  <Download className="h-4 w-4" />
                  <a href="/OluwakoredeDayo-Babatunde-CV.pdf" download>
                    <span>Download Resume</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>


        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-balance">
              Featured Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Suspense key={project.title} fallback={<div className="h-96 bg-muted animate-pulse rounded-lg" />}>
                  <ProjectCard {...project} />
                </Suspense>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-balance">
              Tech Stack
            </h2>
            <Suspense fallback={<div className="h-64 bg-muted animate-pulse rounded-lg" />}>
              <TechStack />
            </Suspense>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-balance">
                Get in Touch
              </h2>
              <Suspense fallback={<div className="h-96 bg-muted animate-pulse rounded-lg" />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} korededayobabatunde. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
              href="https://v0.dev/community/portfolio-tTtFFRzz9j6"
            >
              Template adapted from V0.dev
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
