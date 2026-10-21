
type Proyecto = {
  nombre: string
  categoria: string
  descripcion: string
  objetivo: string
  funcionalidades: string[]
  tecnologias: string[]
  estado: string
  participacion: string
  redes?: {
    nombre: string
    url: string
  }[]
}

const proyectos: Proyecto[] = [
  {
    nombre: 'API Monitor Lab',
    categoria: 'Backend y APIs',
    descripcion:
      'Proyecto de aprendizaje orientado al desarrollo ' +
      'de una plataforma para supervisar servicios web ' +
      'y APIs REST.',
    objetivo:
      'Construir una herramienta que permita comprobar ' +
      'la disponibilidad de servicios, registrar ' +
      'resultados y facilitar la detección de fallos.',
    funcionalidades: [
      'Endpoint de salud implementado',
      'Backend desarrollado con Spring Boot',
      'Monitoreo y registro de resultados planificados',
    ],
    tecnologias: [
      'Java',
      'Spring Boot',
      'Maven',
      'REST API',
    ],
    estado: 'En desarrollo',
    participacion: 'Desarrollo y aprendizaje práctico',
  },
  {
    nombre: 'Local AI Studio',
    categoria: 'Inteligencia Artificial',
    descripcion:
      'Aplicación experimental para explorar el uso ' +
      'de modelos de inteligencia artificial locales ' +
      'mediante una interfaz web.',
    objetivo:
      'Desarrollar un entorno donde sea posible ' +
      'interactuar con herramientas de IA y explorar ' +
      'su integración en aplicaciones de software.',
    funcionalidades: [
      'Interfaz web con React',
      'Desarrollo con TypeScript',
      'Integración y pruebas de IA local en progreso',
    ],
    tecnologias: [
      'React',
      'TypeScript',
      'Vite',
      'IA local',
    ],
    estado: 'En desarrollo',
    participacion: 'Desarrollo y experimentación',
  },
  {
    nombre: 'Pronosticador Deportivo',
    categoria: 'Datos y Backend',
    descripcion:
      'Sistema experimental de análisis de datos ' +
      'deportivos, con procesos de validación, ' +
      'auditoría e integración de APIs.',
    objetivo:
      'Investigar métodos de procesamiento y ' +
      'evaluación de datos deportivos mediante ' +
      'procedimientos reproducibles y verificables.',
    funcionalidades: [
      'Integración de fuentes de datos deportivos',
      'Validaciones y pruebas automatizadas',
      'Auditoría y control de calidad de datos',
    ],
    tecnologias: [
      'TypeScript',
      'PostgreSQL',
      'APIs REST',
      'Testing',
    ],
    estado: 'Investigación',
    participacion: 'Coordinación y revisión técnica',
  },
  {
    nombre: 'IANCH',
    categoria: 'Marca digital y tecnología',
    descripcion:
      'Marca personal y comercial enfocada en ' +
      'desarrollo de software, inteligencia artificial, ' +
      'automatización y divulgación tecnológica.',
    objetivo:
      'Acercar la tecnología a emprendedores, ' +
      'empresas y estudiantes mediante contenido ' +
      'educativo y soluciones digitales.',
    funcionalidades: [
      'Contenido educativo sobre IA y programación',
      'Divulgación de herramientas tecnológicas',
      'Presentación de servicios digitales',
    ],
    tecnologias: [
      'Software',
      'Inteligencia Artificial',
      'Automatización',
      'Marketing digital',
    ],
    estado: 'En desarrollo',
    
    participacion: 'Fundador y responsable de la marca',
    redes: [
      {
        nombre: 'Instagram',
        url: 'https://www.instagram.com/ianch.digital/',
      },
      {
        nombre: 'TikTok',
        url: 'https://www.tiktok.com/@ianch.digital',
      },
      {
        nombre: 'Facebook',
        url: 'https://www.facebook.com/ianch.digital',
      },
      {
        nombre: 'LinkedIn',
        url: 'https://www.linkedin.com/company/ianch/about/?viewAsMember=true',
      },
    ],
  },

]

function Projects() {
  return (
    <section id="proyectos" className="section">
      <span className="section-label">
        PORTAFOLIO
      </span>

      <h2>Proyectos destacados</h2>

      <p>
        Conoce algunos de mis proyectos de software,
        inteligencia artificial, análisis de datos
        y emprendimiento tecnológico.
      </p>

      <div className="projects-grid">
        {proyectos.map((proyecto) => (
          <article
            className="project-card"
            key={proyecto.nombre}
          >
            <div className="project-top">
              <span className="project-category">
                {proyecto.categoria}
              </span>

              <span className="project-status">
                {proyecto.estado}
              </span>
            </div>

            <h3>{proyecto.nombre}</h3>

            <p>{proyecto.descripcion}</p>

            <h4>¿Para qué sirve?</h4>
            <p>{proyecto.objetivo}</p>

            <h4>Características</h4>
            <ul className="project-features">
              {proyecto.funcionalidades.map(
                (funcionalidad) => (
                  <li key={funcionalidad}>
                    {funcionalidad}
                  </li>
                )
              )}
            </ul>

            <h4>Tecnologías utilizadas</h4>

            <div className="project-tech">
              {proyecto.tecnologias.map(
                (tecnologia) => (
                  <span key={tecnologia}>
                    {tecnologia}
                  </span>
                )
              )}
            </div>

            <div className="project-role">
              <span>Mi participación</span>
              <strong>
                {proyecto.participacion}
              </strong>
            </div>

            
{proyecto.redes && proyecto.redes.length > 0 && (
  <div className="project-socials">
    <h4>Conecta con IANCH</h4>

    <div className="project-social-links">
      {proyecto.redes.map((red) => (
        <a
          key={red.nombre}
          href={red.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visitar ${red.nombre} de IANCH`}
        >
          {red.nombre} ↗
        </a>
      ))}
    </div>
  </div>
)}

          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
