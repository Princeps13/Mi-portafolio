"use client"

import { ArrowDownTrayIcon, RocketLaunchIcon } from "@heroicons/react/24/outline"

export default function ActionButtons() {
  const handleDownloadCV = () => {
    // Aquí puedes poner la ruta a tu CV real
    const cvUrl = "/cv.pdf"
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = "CV-Tu-Nombre.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewProjects = () => {
    // Desplazamiento suave a la sección de proyectos
    const projectsSection = document.getElementById("proyectos")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <button
        onClick={handleDownloadCV}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
      >
        <ArrowDownTrayIcon className="w-5 h-5" />
        Descargar CV
      </button>

      <button
        onClick={handleViewProjects}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium transition-all hover:bg-secondary/80 hover:scale-105 border border-border"
      >
        <RocketLaunchIcon className="w-5 h-5" />
        Ver Proyectos
      </button>
    </div>
  )
}
