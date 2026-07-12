"use client"

import * as React from "react"
import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground mb-6">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2" />
            Available for new opportunities
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
            Architecting scalable systems & <br className="hidden sm:block" />
            enterprise software.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            I'm a Computer Science student at NUST and Technical Lead specializing in Python, Java, and TypeScript. I build robust, portfolio-grade solutions tailored for corporate and enterprise sectors.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Download className="mr-2 w-4 h-4 transition-transform group-hover:-translate-y-1" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
