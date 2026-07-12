import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nyasha Mukarakate",
    default: "Nyasha Mukarakate | Software Engineer Portfolio",
  },
  description: "Computer Science student at NUST & Technical Lead. Specializing in Python, Java, TypeScript, and architecting scalable enterprise systems.",
  keywords: ["Software Engineer", "Full Stack Developer", "Python", "Java", "TypeScript", "NUST", "Cloud Computing"],
  authors: [{ name: "Nyasha Mukarakate" }],
  creator: "Nyasha Mukarakate",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/NYASHAMUKARAKATE", // Replace with production URL when deployed
    title: "Nyasha Mukarakate | Software Engineer",
    description: "Computer Science student at NUST & Technical Lead. Specializing in Python, Java, and scalable enterprise systems.",
    siteName: "Nyasha Mukarakate Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyasha Mukarakate | Software Engineer",
    description: "Computer Science student at NUST & Technical Lead. Specializing in Python, Java, and scalable enterprise systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("antialiased", inter.variable)}>
      <body className="min-h-screen bg-background font-sans text-foreground flex flex-col relative">
        <Navbar />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
