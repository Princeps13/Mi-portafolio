import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"

export default function Page() {
  return (
    <main className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <HeroSection />
      <ProjectsSection />
    </main>
  )
}