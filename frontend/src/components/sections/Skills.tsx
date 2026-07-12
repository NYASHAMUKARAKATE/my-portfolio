import { SectionHeading } from "@/components/ui/SectionHeading"
import { SkillsGrid } from "./SkillsGrid"

async function getSkills() {
  try {
    // Next.js fetch with revalidation (cache for 1 hour)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || `${process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"}'"}/api/skills/", {
      next: { revalidate: 3600 },
    })
    
    if (!res.ok) {
      throw new Error("Failed to fetch skills")
    }
    
    const data = await res.json()
    // DRF returns paginated data by default in a 'results' array
    return data.results || []
  } catch (error) {
    console.error("Error fetching skills:", error)
    return []
  }
}

export async function Skills() {
  const skills = await getSkills()

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Arsenal" subtitle="The tools and technologies I use to bring ideas to life." />
        
        {skills.length > 0 ? (
          <SkillsGrid skills={skills} />
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No skills data available. Please ensure the backend API is running and data is populated.
          </div>
        )}
      </div>
    </section>
  )
}
