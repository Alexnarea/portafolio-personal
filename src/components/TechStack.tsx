
type Categoria = {
  icono: string
  nombre: string
  descripcion: string
  tecnologias: string[]
}

const categorias: Categoria[] = [
  {
    icono: '⚙️',
    nombre: 'Backend',
    descripcion: 'Desarrollo de APIs y servicios.',
    tecnologias: ['Java', 'Kotlin', 'Spring Boot'],
  },
  {
    icono: '💻',
    nombre: 'Frontend',
    descripcion: 'Interfaces web modernas.',
    tecnologias: ['React', 'TypeScript', 'Vite'],
  },
  {
    icono: '🗄️',
    nombre: 'Bases de datos',
    descripcion: 'Persistencia y gestión de datos.',
    tecnologias: ['PostgreSQL', 'SQL', 'Neon'],
  },
  {
    icono: '🛡️',
    nombre: 'Ciberseguridad',
    descripcion: 'Buenas prácticas de seguridad.',
    tecnologias: [
      'Autenticación',
      'Control de accesos',
      'Auditoría',
    ],
  },
  {
    icono: '🤖',
    nombre: 'IA y automatización',
    descripcion: 'Integración de soluciones inteligentes.',
    tecnologias: [
      'Modelos de IA',
      'Integración de APIs',
      'Automatización',
    ],
  },
  {
    icono: '🔧',
    nombre: 'DevOps y herramientas',
    descripcion: 'Herramientas de desarrollo.',
    tecnologias: ['Git', 'GitHub', 'Docker'],
  },
  {
    icono: '🧪',
    nombre: 'QA y Testing',
    descripcion: 'Validación y calidad del software.',
    tecnologias: [
      'Pruebas funcionales',
      'Regresión',
      'Revisión técnica',
    ],
  },
  {
    icono: '📋',
    nombre: 'Gestión ágil',
    descripcion: 'Coordinación de proyectos TICs.',
    tecnologias: [
      'Scrum',
      'Sprints',
      'Seguimiento de tareas',
    ],
  },
]

function TechStack() {
  return (
    <section id="tecnologias" className="section">
      <span className="section-label">
        MIS HERRAMIENTAS
      </span>

      <h2>Stack tecnológico</h2>

      <p>
        Tecnologías, herramientas y metodologías
        que utilizo para desarrollar y coordinar
        proyectos de software.
      </p>

      <div className="stack-grid">
        {categorias.map((categoria) => (
          <article
            className="stack-card"
            key={categoria.nombre}
          >
            <div className="stack-icon" aria-hidden="true">
              {categoria.icono}
            </div>

            <h3>{categoria.nombre}</h3>
            <p>{categoria.descripcion}</p>

            <div className="stack-tags">
              {categoria.tecnologias.map((tecnologia) => (
                <span key={tecnologia}>
                  {tecnologia}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TechStack
