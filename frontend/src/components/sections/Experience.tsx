import { SectionHeading } from "@/components/ui/SectionHeading"
import { ExperienceTimeline } from "./ExperienceTimeline"

async function getExperience() {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/experience/", {
      next: { revalidate: 3600 },
    })
    
    if (!res.ok) {
      throw new Error("Failed to fetch experience")
    }
    
    const data = await res.json()
    return data.results || []
  } catch (error) {
    console.error("Error fetching experience:", error)
    return []
  }
}

export async function Experience() {
  const experience = await getExperience()

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey and academic milestones." 
          className="items-center text-center"
        />
        
        {experience.length > 0 ? (
          <ExperienceTimeline experience={experience} />
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No experience data available. Add some in the Django admin panel.
          </div>
        )}
      </div>
    </section>
  )
}
