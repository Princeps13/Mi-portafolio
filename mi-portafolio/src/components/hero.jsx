"use client"

import { ArrowDownTrayIcon, CodeBracketIcon } from "@heroicons/react/24/outline"

export default function Hero() {
  const handleDownloadCV = () => {
    // Aquí se descargará el CV
    console.log("Descargando CV...")
  }

  const handleViewProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-slate-950" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl w-full">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Foto de perfil */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300" />
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl">
              <img src="/images/pexels-photo-220453.jpeg" alt="Foto de perfil" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Texto principal */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Tu Nombre
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 font-medium">Desarrollador Full Stack</p>

            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Apasionado por crear experiencias web excepcionales. Especializado en React, Node.js y diseño de
              interfaces modernas. Transformo ideas en productos digitales de alta calidad.
            </p>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handleDownloadCV}
              className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/50 hover:shadow-blue-600/70 hover:scale-105 flex items-center justify-center gap-3"
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
              Descargar CV
            </button>

            <button
              onClick={handleViewProjects}
              className="group relative px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all duration-300 border-2 border-slate-700 hover:border-blue-600 flex items-center justify-center gap-3"
            >
              <CodeBracketIcon className="w-5 h-5" />
              Ver Proyectos
            </button>
          </div>

          {/* Tecnologías */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {["React", "Node.js", "TypeScript", "Tailwind", "Next.js"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-400 rounded-lg text-sm font-medium hover:border-blue-600 hover:text-blue-400 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
