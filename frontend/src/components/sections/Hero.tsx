"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
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
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -z-10 animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping" />
            Available for new opportunities
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Building software that <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              makes an impact.
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            I'm a full-stack engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently focused on building accessible, human-centered products.
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
