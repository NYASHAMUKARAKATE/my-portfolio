import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
