"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/Badge"

type Skill = {
  id: number
  name: string
  category: string
  proficiency: number
}

interface SkillsGridProps {
  skills: Skill[]
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  const categories = Array.from(new Set(skills.map((s) => s.category)))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {categories.map((category, catIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          className="bg-card rounded-xl p-6 border border-border shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-4 capitalize">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skills
              .filter((s) => s.category === category)
              .map((skill) => (
                <Badge key={skill.id} variant="secondary" className="text-sm px-3 py-1">
                  {skill.name}
                </Badge>
              ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
