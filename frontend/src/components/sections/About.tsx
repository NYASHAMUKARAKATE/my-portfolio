"use client"

import { SectionHeading } from "@/components/ui/SectionHeading"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Who I am and what I do." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-invert max-w-none text-muted-foreground"
          >
            <p className="text-lg leading-relaxed font-medium text-foreground">
              Education & Leadership
            </p>
            <p className="text-base leading-relaxed mt-2">
              Pursuing a Bachelor of Science Honours in Computer Science at the National University of Science and Technology (NUST). I serve as the Head of the Cloud Computing department for a student technology club, and act as the lead architect coordinating a five-member development team.
            </p>
            <p className="text-base leading-relaxed mt-4">
              My core focus is developing expertise in systems administration and industrial automation tailored for corporate and enterprise sectors.
            </p>

            <p className="text-lg leading-relaxed font-medium text-foreground mt-8">
              Technical Expertise
            </p>
            <p className="text-base leading-relaxed mt-2">
              <strong>Languages & Frameworks:</strong> Proficient in Java, Python (Flask/FastAPI), TypeScript (React/Next.js), and Flutter for cross-platform mobile development.
            </p>
            <p className="text-base leading-relaxed mt-2">
              <strong>Data & Infrastructure:</strong> Experienced with PostgreSQL database design, cloud architectures, and full-stack integration.
            </p>
            <p className="text-base leading-relaxed mt-2">
              <strong>Development Philosophy:</strong> Heavily focused on creating robust, portfolio-grade, and scalable software solutions rather than entry-level or purely academic projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl border border-border overflow-hidden relative shadow-md bg-muted">
              <img 
                src="/my_pic.jpg" 
                alt="My Profile Picture" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/600x600?text=my_pic.jpg';
                }}
              />
            </div>
            {/* Subtle background block instead of glowing blur */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-muted -z-10 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
