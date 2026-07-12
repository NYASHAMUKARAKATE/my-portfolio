import { SectionHeading } from "@/components/ui/SectionHeading"
import { ProjectsGrid } from "./ProjectsGrid"

async function getProjects() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"}/api/projects/`, {
      next: { revalidate: 3600 },
    })
    
    if (!res.ok) {
      throw new Error("Failed to fetch projects")
    }
    
    const data = await res.json()
    return data.results || []
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}

export async function Projects() {
  const projects = await getProjects()

  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my best work, showcasing architecture, code quality, and problem-solving." 
        />
        
        {projects.length > 0 ? (
          <ProjectsGrid projects={projects} />
        ) : (
          <div className="text-center py-12 text-muted-foreground border border-dashed border-border rounded-2xl bg-muted/20">
            <p className="text-lg font-medium">No projects found.</p>
            <p className="text-sm mt-2">Add your first project in the Django admin panel.</p>
          </div>
        )}
      </div>
    </section>
  )
}
