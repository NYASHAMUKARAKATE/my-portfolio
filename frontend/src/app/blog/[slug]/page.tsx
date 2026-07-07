import { notFound } from "next/navigation"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { ArrowLeft } from "lucide-react"

async function getPost(slug: string) {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/posts/${slug}/`, {
      next: { revalidate: 60 }, // Revalidate every minute
    })

    if (!res.ok) {
      if (res.status === 404) return null
      throw new Error("Failed to fetch post")
    }

    return await res.json()
  } catch (error) {
    console.error("Error fetching post:", error)
    return null
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const date = new Date(post.published_at).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="/#blog" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8 group font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        <article>
          <header className="mb-12">
            <time className="text-primary font-medium mb-4 block">
              {date}
            </time>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  )
}
