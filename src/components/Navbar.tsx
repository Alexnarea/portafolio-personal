
const enlaces = [
  { nombre: 'Inicio', href: '#inicio' },
  { nombre: 'Sobre mí', href: '#sobre-mi' },
  { nombre: 'Tecnologías', href: '#tecnologias' },
  { nombre: 'Proyectos', href: '#proyectos' },
  { nombre: 'Servicios', href: '#servicios' },
  { nombre: 'Contacto', href: '#contacto' },
]

function Navbar() {
  return (
    <header className="navbar">
      <a className="logo" href="#inicio">
        AN<span>.</span>
      </a>

      <nav aria-label="Navegación principal">
        {enlaces.map((enlace) => (
          <a key={enlace.href} href={enlace.href}>
            {enlace.nombre}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
