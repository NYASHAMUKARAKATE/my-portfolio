"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/Badge"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Link from "next/link"

type Project = {
  id: number
  title: string
  slug: string
  description: string
  image: string | null
  github_url: string
  live_url: string
  technologies: string // Assuming CSV or similar based on typical simple Django setups
  is_featured: boolean
}

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
        >
          {/* Project Image */}
          <div className="aspect-video w-full bg-muted overflow-hidden relative border-b border-border">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-medium">
                No Image Provided
              </div>
            )}
            
            {/* Links Overlay */}
            <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
              {project.github_url && (
                <Link 
                  href={project.github_url} 
                  target="_blank"
                  className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform"
                >
                  <FaGithub className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              )}
              {project.live_url && (
                <Link 
                  href={project.live_url} 
                  target="_blank"
                  className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                  <span className="sr-only">Live Demo</span>
                </Link>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
            <p className="mt-2 text-muted-foreground line-clamp-3 text-sm flex-1 leading-relaxed">
              {project.description}
            </p>
            
            {/* Technologies */}
            {project.technologies && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.split(',').map((tech) => (
                  <Badge key={tech.trim()} variant="secondary" className="text-xs">
                    {tech.trim()}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
