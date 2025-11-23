import { ArrowTopRightOnSquareIcon, CodeBracketSquareIcon } from "@heroicons/react/24/outline"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/modern-ecommerce-dashboard.png",
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      image: "/task-management-interface.png",
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Portfolio CMS",
      description: "Sistema de gestión de contenidos para portafolios con editor visual y temas personalizables.",
      tech: ["React", "Express", "MySQL", "AWS"],
      image: "/cms-portfolio-builder.jpg",
      link: "#",
      github: "#",
    },
  ]

  return (
    <section id="projects" className="relative min-h-screen bg-slate-950 px-6 py-20">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proyectos
            <span className="text-blue-500">.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Algunos de mis trabajos más recientes donde aplico las mejores prácticas y tecnologías modernas.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20"
            >
              {/* Imagen */}
              <div className="relative h-48 overflow-hidden bg-slate-800">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
              </div>

              {/* Contenido */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-400 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    Ver Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg border border-slate-700 hover:border-blue-600 transition-colors"
                  >
                    <CodeBracketSquareIcon className="w-4 h-4" />
                    Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
