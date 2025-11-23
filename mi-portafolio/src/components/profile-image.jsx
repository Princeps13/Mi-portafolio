export default function ProfileImage() {
    return (
      <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-2xl" />
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl">
          <img src="/professional-developer-portrait.png" alt="Foto de perfil" className="w-full h-full object-cover" />
        </div>
      </div>
    )
  }