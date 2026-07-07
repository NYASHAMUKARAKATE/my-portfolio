import Link from "next/link"
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Nyasha<span className="text-primary">Mukarakate</span>
          </Link>
          <p className="text-muted-foreground text-sm mt-2">
            Building digital products, brands, and experience.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <Link href="https://github.com/NYASHAMUKARAKATE" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="sr-only">GitHub</span>
            <FaGithub className="w-6 h-6" />
          </Link>
          <Link href="https://linkedin.com/in/nyasha-mukarakate" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-6 h-6" />
          </Link>
          <Link href="mailto:mukarakatenyasha34@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-border/50 text-center md:text-left text-sm text-muted-foreground flex flex-col md:flex-row justify-between">
        <p>&copy; {new Date().getFullYear()} Nyasha Mukarakate. All rights reserved. | +263 789 964 673</p>
        <p className="mt-2 md:mt-0">Designed with Next.js & Tailwind</p>
      </div>
    </footer>
  )
}
