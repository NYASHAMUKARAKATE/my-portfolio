import { SectionHeading } from "@/components/ui/SectionHeading"
import { BlogGrid } from "./BlogGrid"

async function getPosts() {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/posts/", {
      next: { revalidate: 3600 },
    })
    
    if (!res.ok) {
      throw new Error("Failed to fetch posts")
    }
    
    const data = await res.json()
    return data.results || []
  } catch (error) {
    console.error("Error fetching posts:", error)
    return []
  }
}

export async function Blog() {
  const posts = await getPosts()

  return (
    <section id="blog" className="py-20 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Writing" 
          subtitle="Thoughts on software engineering, architecture, and technology." 
        />
        
        {posts.length > 0 ? (
          <BlogGrid posts={posts} />
        ) : (
          <div className="text-center py-12 text-muted-foreground border border-dashed border-border rounded-2xl bg-card">
            <p className="text-lg font-medium">No posts published yet.</p>
            <p className="text-sm mt-2">Write your first article in the Django admin panel.</p>
          </div>
        )}
      </div>
    </section>
  )
}
