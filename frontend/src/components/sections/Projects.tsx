import { SectionHeading } from "@/components/ui/SectionHeading"
import { ProjectsGrid } from "./ProjectsGrid"

const STATIC_PROJECTS = [
  {
    id: 1,
    title: "Java Development Repository",
    slug: "java-development-repository",
    description: "A monorepo containing various Java projects, demonstrating concepts ranging from standard Object-Oriented console applications to full-stack Spring Boot REST APIs. Includes Queueless (a Smart Queue Management system) and NyashaMoney Bank.",
    image: null,
    github_url: "https://github.com/NYASHAMUKARAKATE/java_dev",
    live_url: "",
    tech_stack: ["Java", "Spring Boot", "REST API", "JavaScript", "HTML/CSS"],
    is_featured: true
  },
  {
    id: 2,
    title: "To-Do App",
    slug: "to-do-app",
    description: "A fast and secure full-stack To-Do application built with a Python FastAPI backend and a React/TypeScript frontend. Features secure JWT authentication, task management, and a modern dark theme with glassmorphism effects.",
    image: null,
    github_url: "https://github.com/NYASHAMUKARAKATE/to_do_app",
    live_url: "",
    tech_stack: ["Python", "FastAPI", "React", "TypeScript", "JWT"],
    is_featured: true
  },
  {
    id: 3,
    title: "LocalConnect",
    slug: "localconnect",
    description: "A community commerce platform connecting residents with local shops, facilitated by ambassadors. Features a FastAPI backend and a React/Vite frontend.",
    image: null,
    github_url: "https://github.com/NYASHAMUKARAKATE/LocalConnect",
    live_url: "",
    tech_stack: ["Python", "FastAPI", "React", "Node.js", "Vite"],
    is_featured: true
  },
  {
    id: 4,
    title: "Campus News",
    slug: "campus-news",
    description: "A modern, high-performance Flutter application designed to keep students informed. It serves as a centralized hub for real-time campus updates, featuring categorized content, smart search, offline bookmarks, and a dedicated admin dashboard.",
    image: null,
    github_url: "https://github.com/Musawenkosi-Moyo/Campus-News",
    live_url: "",
    tech_stack: ["Flutter", "Dart", "Firebase", "Riverpod", "Firestore"],
    is_featured: true
  }
];

export function Projects() {
  const projects = STATIC_PROJECTS;

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
            <p className="text-sm mt-2">Add your first project.</p>
          </div>
        )}
      </div>
    </section>
  )
}
