const ExternalLinkIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
)

const CodeBlockIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18-6-6 6-6" />
    <path d="m15 6 6 6-6 6" />
    <path d="m13.5 4.5-3 15" />
  </svg>
)

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80&sat=-50&exp=-10",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80&sat=-30&exp=-5",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Portfolio CMS",
    description: "Sistema de gestión de contenidos para portafolios con editor visual y temas personalizables.",
    tech: ["React", "Express", "MySQL", "AWS"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80&sat=-40&exp=-5",
    link: "#",
    github: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen bg-slate-950 px-6 py-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-200/80">Portafolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Proyectos<span className="text-blue-500">.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Algunos de mis trabajos más recientes donde aplico las mejores prácticas y tecnologías modernas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/20"
            >
              <div className="relative h-52 overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>

                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    Ver Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg border border-slate-700 hover:border-blue-600 transition-colors"
                  >
                    <CodeBlockIcon className="w-4 h-4" />
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
