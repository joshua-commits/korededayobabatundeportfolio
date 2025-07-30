import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TechCategory {
  category: string
  skills: readonly string[]
  color: "default" | "secondary" | "destructive" | "outline"
}

const technologies: readonly TechCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    color: "default",
  },
  {
    category: "Backend",
    skills: ["Node.js", "DynamoDB", "Python", "RESTful APIs", "GraphQL", "PostgreSQL"],
    color: "secondary",
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "AWS", "Vercel", "CI/CD", "Git", "Linux", "Terraform"],
    color: "outline",
  },
  {
    category: "Tools & Testing",
    skills: ["VS Code", "JUnit", "Figma", "Playwright", "FRET", "JIRA", "Confluence"],
    color: "destructive",
  },
] as const

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-4 text-balance">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <Badge
                key={skill}
                variant={tech.color}
                className="text-sm hover:scale-105 transition-transform cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
