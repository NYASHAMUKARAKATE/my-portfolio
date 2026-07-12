"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

import { ThemeToggle } from "@/components/ui/ThemeToggle"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              Nyasha<span className="text-primary">Mukarakate</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 border-l border-border pl-4">
                <Link href="https://github.com/NYASHAMUKARAKATE" target="_blank" className="text-muted-foreground hover:text-foreground" aria-label="GitHub Profile">
                  <FaGithub className="w-5 h-5" />
                </Link>
                <Link href="https://linkedin.com/in/nyasha-mukarakate/" target="_blank" className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn Profile">
                  <FaLinkedin className="w-5 h-5" />
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-6 px-3 pt-4 mt-2 border-t border-border">
                <Link href="https://github.com/NYASHAMUKARAKATE" target="_blank" className="text-muted-foreground hover:text-foreground" aria-label="GitHub Profile">
                  <FaGithub className="w-6 h-6" />
                </Link>
                <Link href="https://linkedin.com/in/nyasha-mukarakate/" target="_blank" className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn Profile">
                  <FaLinkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
