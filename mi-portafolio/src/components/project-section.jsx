import { CodeBracketIcon, GlobeAltIcon, SparklesIcon } from "@heroicons/react/24/outline"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Plataforma de comercio electrónico con carrito de compras, pagos integrados y panel de administración.",
      tech: ["React", "Node.js", "MongoDB"],
      icon: GlobeAltIcon,
    },
    {
      id: 2,
      title: "Task Manager App",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.",
      tech: ["React", "Firebase", "Tailwind"],
      icon: CodeBracketIcon,
    },
    {
      id: 3,
      title: "Portfolio Generator",
      description: "Herramienta para crear portafolios personalizados con plantillas prediseñadas.",
      tech: ["Next.js", "TypeScript", "CSS"],
      icon: SparklesIcon,
    },
  ]

  return (
    <section id="proyectos" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">Mis Proyectos</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado recientemente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <div
                key={project.id}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-3">{project.title}</h3>

                  <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

  