const DownloadIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v12" />
    <path d="m6 12 6 6 6-6" />
    <path d="M4 21h16" />
  </svg>
)

const CodeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18-6-6 6-6" />
    <path d="m15 6 6 6-6 6" />
  </svg>
)

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "UI/UX",
]

export default function Hero() {
  const handleDownloadCV = () => {
    console.log("Descargando CV...")
  }

  const handleViewProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden px-6 py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(94,234,212,0.12),transparent_40%)]" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[920px] h-[920px] bg-blue-500/5 blur-3xl rounded-full" />
      <div className="absolute bottom-[-20%] right-10 w-[420px] h-[420px] bg-indigo-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-5xl w-full text-center space-y-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-blue-100">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Disponible para nuevos proyectos
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-60" />
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl shadow-blue-600/20">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-200/80">Desarrollador Full Stack</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Hola, soy <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Tu Nombre</span>
            </h1>
            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Apasionado por crear experiencias web excepcionales. Especializado en React, Node.js y diseño de interfaces modernas.
              Transformo ideas en productos digitales de alta calidad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={handleDownloadCV}
              className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/40 hover:shadow-blue-600/60 hover:scale-105 flex items-center justify-center gap-3"
            >
              <DownloadIcon className="w-5 h-5" />
              Descargar CV
            </button>

            <button
              onClick={handleViewProjects}
              className="group relative px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-300 border border-slate-800 hover:border-blue-500 flex items-center justify-center gap-3"
            >
              <CodeIcon className="w-5 h-5" />
              Ver Proyectos
            </button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-900/80 border border-slate-800 text-slate-300 rounded-lg text-sm font-medium hover:border-blue-500 hover:text-blue-200 transition-all duration-300"
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
