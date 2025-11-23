import ProfileImage from "./profile-image"
import ActionButtons from "./action-buttons"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <ProfileImage />

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
              Hola, soy <span className="text-primary">Tu Nombre</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-3 font-mono">Desarrollador Full Stack</p>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8 max-w-2xl text-pretty">
              Apasionado por crear experiencias web excepcionales y soluciones innovadoras. Especializado en React,
              Next.js y tecnologías modernas. Me encanta transformar ideas en productos digitales que impactan
              positivamente a los usuarios.
            </p>

            <ActionButtons />
          </div>
        </div>
      </div>
    </section>
  )
}