import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/"],
    },
    // Replace this URL when deploying to production
    sitemap: "https://your-production-domain.com/sitemap.xml",
  }
}
