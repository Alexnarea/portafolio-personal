
type Servicio = {
  icono: string
  titulo: string
  descripcion: string
  beneficios: string[]
}

const servicios: Servicio[] = [
  {
    icono: '💻',
    titulo: 'Desarrollo de software',
    descripcion:
      'Desarrollo de aplicaciones web y soluciones ' +
      'personalizadas para negocios y emprendedores.',
    beneficios: [
      'Aplicaciones web',
      'Sistemas administrativos',
      'Soluciones a medida',
    ],
  },
  {
    icono: '🔗',
    titulo: 'APIs e integraciones',
    descripcion:
      'Diseño e integración de APIs para conectar ' +
      'aplicaciones, servicios y bases de datos.',
    beneficios: [
      'APIs REST',
      'Integración de servicios',
      'Backend con Spring Boot',
    ],
  },
  {
    icono: '🤖',
    titulo: 'Integración de IA',
    descripcion:
      'Incorporación de inteligencia artificial ' +
      'en aplicaciones y procesos digitales.',
    beneficios: [
      'Integración de modelos de IA',
      'Asistentes inteligentes',
      'Herramientas con IA',
    ],
  },
  {
    icono: '⚙️',
    titulo: 'Automatización',
    descripcion:
      'Soluciones para reducir tareas repetitivas ' +
      'y mejorar procesos mediante tecnología.',
    beneficios: [
      'Automatización de tareas',
      'Conexión entre plataformas',
      'Optimización de procesos',
    ],
  },
]

function Services() {
  return (
    <section id="servicios" className="section">
      <span className="section-label">
        SOLUCIONES IANCH
      </span>

      <h2>Servicios profesionales</h2>

      <p>
        A través de IANCH desarrollo soluciones
        tecnológicas enfocadas en software,
        inteligencia artificial y automatización.
      </p>

      <div className="services-grid">
        {servicios.map((servicio) => (
          <article
            className="service-card"
            key={servicio.titulo}
          >
            <div className="service-icon" aria-hidden="true">
              {servicio.icono}
            </div>

            <h3>{servicio.titulo}</h3>
            <p>{servicio.descripcion}</p>

            <ul>
              {servicio.beneficios.map((beneficio) => (
                <li key={beneficio}>
                  {beneficio}
                </li>
              ))}
            </ul>

            <a href="#contacto" className="service-link">
              Consultar servicio →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
