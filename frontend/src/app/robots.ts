import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/"],
    },
    sitemap: "https://my-portfolio-tau-eight-55.vercel.app/sitemap.xml",
  }
}
