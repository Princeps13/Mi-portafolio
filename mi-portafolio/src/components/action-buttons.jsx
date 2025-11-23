"use client"

import { ArrowDownTrayIcon, RocketLaunchIcon } from "@heroicons/react/24/outline"

export default function ActionButtons() {
  const handleDownloadCV = () => {
    // Aquí puedes poner la ruta de tu CV
    const link = document.createElement("a")
    link.href = "/cv.pdf"
    link.download = "mi-cv.pdf"
    link.click()
  }

  const handleViewProjects = () => {
    const projectsSection = document.getElementById("proyectos")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button
        onClick={handleDownloadCV}
        className="group relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 flex items-center gap-2"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transition-transform duration-300 group-hover:scale-110"></span>
        <ArrowDownTrayIcon className="w-5 h-5 relative z-10" />
        <span className="relative z-10">Descargar CV</span>
      </button>

      <button
        onClick={handleViewProjects}
        className="group px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-400 font-semibold rounded-lg transition-all duration-300 hover:bg-blue-500/10 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-2"
      >
        <RocketLaunchIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
        <span>Ver Proyectos</span>
      </button>
    </div>
  )
}

