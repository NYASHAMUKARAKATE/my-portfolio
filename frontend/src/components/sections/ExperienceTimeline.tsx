"use client"

import { motion } from "framer-motion"

type ExperienceItem = {
  id: number
  job_title: string
  company: string
  location: string
  start_date: string
  end_date: string | null
  description: string
  is_current: boolean
}

interface ExperienceTimelineProps {
  experience: ExperienceItem[]
}

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <div className="relative mt-12 pl-4 md:pl-0">
      {/* Vertical Line */}
      <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-12">
        {experience.map((item, index) => {
          const isEven = index % 2 === 0
          
          return (
            <div key={item.id} className="relative flex flex-col md:flex-row items-start">
              
              {/* Desktop Empty Space (Left or Right) */}
              <div className={`hidden md:block w-1/2 ${isEven ? 'pr-12 text-right' : 'order-last pl-12 text-left'}`}>
                {isEven ? (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                  >
                    <ExperienceCard item={item} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                  >
                    <ExperienceCard item={item} />
                  </motion.div>
                )}
              </div>

              {/* Mobile Card (Always on right of line) */}
              <div className="md:hidden w-full pl-8 relative">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                >
                  <ExperienceCard item={item} />
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full bg-primary ring-4 ring-background border-2 border-primary shadow-[0_0_15px_rgba(99,102,241,0.5)]"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const startDate = new Date(item.start_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  const endDate = item.is_current ? 'Present' : item.end_date ? new Date(item.end_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : ''
  
  return (
    <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      <h3 className="text-xl font-bold text-foreground">{item.job_title}</h3>
      <h4 className="text-lg font-medium text-primary mt-1">{item.company}</h4>
      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground font-medium">
        <span>{startDate} - {endDate}</span>
        {item.location && (
          <>
            <span>•</span>
            <span>{item.location}</span>
          </>
        )}
      </div>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        {item.description}
      </p>
    </div>
  )
}
