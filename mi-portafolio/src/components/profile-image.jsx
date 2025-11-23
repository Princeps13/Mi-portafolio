export default function ProfileImage({ src, alt = "Foto de perfil" }) {
    return (
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
        <div className="relative">
          <img
            src={src || "/placeholder.svg"}
            alt={alt}
            className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
          />
        </div>
      </div>
    )
  }