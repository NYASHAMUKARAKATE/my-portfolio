"use client"

import { SectionHeading } from "@/components/ui/SectionHeading"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 relative">
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
            <p className="text-lg leading-relaxed">
              I am a passionate software engineer with a deep love for building scalable, high-performance web applications. My journey started when I realized that writing code is the closest thing we have to a superpower—the ability to turn ideas into reality with just a keyboard.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              I specialize in the Python ecosystem and modern JavaScript frameworks, particularly Django and Next.js. I care deeply about user experience, clean architecture, and writing maintainable code that other developers love to read.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              When I'm not coding, you'll find me reading about system design, contributing to open-source projects, or exploring the latest advancements in web technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20 border border-primary/10 overflow-hidden relative">
              {/* Replace the div below with an actual next/image of yourself when you have one */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                <span className="text-xl font-medium">[ Your Photo Here ]</span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
