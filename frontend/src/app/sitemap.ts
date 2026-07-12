import type { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://my-portfolio-tau-eight-55.vercel.app"

  // Fetch all posts for dynamic sitemap generation
  let posts: any[] = []
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"}/api/posts/`)
    if (res.ok) {
      const data = await res.json()
      posts = data.results || []
    }
  } catch (error) {
    console.error("Error fetching posts for sitemap:", error)
  }

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.published_at),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...postEntries,
  ]
}
