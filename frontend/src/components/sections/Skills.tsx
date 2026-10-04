import { SectionHeading } from "@/components/ui/SectionHeading"
import { SkillsGrid } from "./SkillsGrid"
import { Badge } from "@/components/ui/Badge"
import { Award } from "lucide-react"

const STATIC_SKILLS = [
  { id: 1, name: "React", category: "frontend", proficiency: 0 },
  { id: 2, name: "TypeScript", category: "frontend", proficiency: 0 },
  { id: 5, name: "Flutter", category: "frontend", proficiency: 0 },
  { id: 6, name: "HTML/CSS", category: "frontend", proficiency: 0 },
  { id: 7, name: "JavaScript", category: "frontend", proficiency: 0 },
  { id: 8, name: "Python", category: "backend", proficiency: 0 },
  { id: 10, name: "FastAPI", category: "backend", proficiency: 0 },
  { id: 11, name: "Java", category: "backend", proficiency: 0 },
  { id: 12, name: "Spring Boot", category: "backend", proficiency: 0 },
  { id: 13, name: "PostgreSQL", category: "backend", proficiency: 0 },
  { id: 15, name: "Git", category: "tools", proficiency: 0 },
  { id: 17, name: "Postman", category: "tools", proficiency: 0 },
];

const CERTIFICATIONS = [
  "Responsive Web Design",
  "Python"
];

export function Skills() {
  const skills = STATIC_SKILLS;

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Arsenal" subtitle="The tools and technologies I use to bring ideas to life." />
        
        {skills.length > 0 ? (
          <SkillsGrid skills={skills} />
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No skills data available.
          </div>
        )}

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Certifications
          </h3>
          <div className="flex flex-wrap gap-4">
            {CERTIFICATIONS.map((cert) => (
              <Badge key={cert} variant="outline" className="text-sm px-4 py-2 border-primary/50 text-foreground bg-background shadow-sm">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
