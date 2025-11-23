import ProfileImage from "./profile-image"
import ActionButtons from "./action-buttons"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-8">
          <ProfileImage src="/professional-developer-portrait.png" alt="Mi foto profesional" />
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent leading-tight">
            Hola, soy [Tu Nombre]
          </h1>

          <p className="text-xl md:text-2xl text-blue-300 font-medium">Desarrollador Full Stack</p>

          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Apasionado por crear experiencias web excepcionales. Especializado en React, Node.js y diseño de interfaces
            modernas. Me encanta transformar ideas en soluciones digitales innovadoras y funcionales.
          </p>
        </div>

        <div className="pt-8">
          <ActionButtons />
        </div>
      </div>
    </section>
  )
}