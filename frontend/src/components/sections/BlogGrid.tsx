"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

type Post = {
  id: number
  title: string
  slug: string
  content: string // We will use this to generate a short excerpt
  published_at: string
}

interface BlogGridProps {
  posts: Post[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {posts.map((post, index) => {
        const date = new Date(post.published_at).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })

        // Generate a simple excerpt from the markdown/content
        const excerpt = post.content.replace(/<[^>]*>?/gm, '').substring(0, 150) + "..."

        return (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group block"
          >
            <Link href={`/blog/${post.slug}`} className="block h-full bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-muted-foreground/30 transition-all flex flex-col">
              <time className="text-sm font-medium text-muted-foreground mb-4 block">
                {date}
              </time>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                {excerpt}
              </p>
              <div className="mt-6 flex items-center text-primary font-medium text-sm group-hover:underline">
                Read Article
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}
