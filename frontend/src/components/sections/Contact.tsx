"use client"

import * as React from "react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Mail, Phone } from "lucide-react"

type FormState = "idle" | "loading" | "success" | "error"

export function Contact() {
  const [formState, setFormState] = React.useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = React.useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState("loading")

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || `${process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"}'"}/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json()
        const firstError = Object.values(data).flat()[0] as string
        throw new Error(firstError || "Something went wrong. Please try again.")
      }

      setFormState("success")
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.")
      setFormState("error")
    }
  }

  const inputClass = "w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to connect? My inbox is always open."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you're looking for a developer for your next project, want to discuss a technical challenge, or simply want to say hi — feel free to reach out.
            </p>

            <div className="space-y-4">
              <a href="mailto:mukarakatenyasha34@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-3 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">mukarakatenyasha34@gmail.com</p>
                </div>
              </a>

              <a href="tel:+263789964673" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-3 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+263 789 964 673</p>
                </div>
              </a>

              <a href="https://github.com/NYASHAMUKARAKATE" target="_blank" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-3 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                  <FaGithub className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium text-foreground">github.com/NYASHAMUKARAKATE</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/nyasha-mukarakate" target="_blank" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-3 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium text-foreground">linkedin.com/in/nyasha-mukarakate</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {formState === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 border border-border rounded-2xl bg-card">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                <Button onClick={() => setFormState("idle")} variant="outline" className="mt-6">Send another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-2xl p-8">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium mb-2">Name</label>
                  <input id="contact-name" name="name" type="text" required placeholder="Nyasha Mukarakate" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium mb-2">Email</label>
                  <input id="contact-email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea id="contact-message" name="message" required rows={5} placeholder="Tell me about your project..." className={inputClass} />
                </div>

                {formState === "error" && (
                  <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <Button type="submit" disabled={formState === "loading"} className="w-full group">
                  {formState === "loading" ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
