export default function ProjectsSection() {
    const projects = [
      {
        title: "E-commerce Platform",
        description:
          "Plataforma de comercio electrónico completa con pasarela de pagos, gestión de inventario y panel de administración.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        link: "#",
      },
      {
        title: "Dashboard Analytics",
        description:
          "Dashboard interactivo para visualización de datos en tiempo real con gráficos y métricas personalizables.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Chart.js"],
        link: "#",
      },
      {
        title: "App Móvil Social",
        description: "Aplicación móvil tipo red social con chat en tiempo real, notificaciones push y sistema de likes.",
        tech: ["React Native", "Firebase", "Redux", "Socket.io"],
        link: "#",
      },
    ]
  
    return (
      <section id="proyectos" className="min-h-screen px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Mis <span className="text-primary">Proyectos</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Algunos de los proyectos en los que he trabajado
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1 text-primary hover:text-accent transition-colors text-sm font-medium"
                >
                  Ver proyecto →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  