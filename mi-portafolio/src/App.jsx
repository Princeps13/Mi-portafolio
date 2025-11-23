import HeroSection from "./components/hero-section"
import ProjectsSection from "./components/projects-section"

function App() {
  return (
    <main className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
      <HeroSection />
      <ProjectsSection />
    </main>
  )
}

export default App