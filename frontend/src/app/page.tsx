import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Skills />
      <Experience />
    </div>
  );
}
