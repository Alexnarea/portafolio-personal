
const especialidades = [
  'Desarrollo de software',
  'Inteligencia artificial',
  'Automatización de procesos',
  'Ciberseguridad',
  'QA y Testing',
  'Git y GitHub',
  'Docker',
  'Gestión ágil con Scrum',
]

function About() {
  return (
    <section id="sobre-mi" className="section about-section">
      <span className="section-label">
        CONOCE MI PERFIL
      </span>

      <h2>Sobre mí</h2>

      <div className="about-content">
        <div className="about-description">
          <h3>
            Desarrollo tecnología y coordino
            proyectos para transformar ideas
            en soluciones reales.
          </h3>

          <p>
            Soy Alexis Narea, desarrollador de software
            y Coordinador del Área de TICs, con
            experiencia en desarrollo de aplicaciones,
            sistemas backend e integraciones de
            inteligencia artificial.
          </p>

          <p>
            Trabajo con Java, Kotlin, Spring Boot,
            React, TypeScript y PostgreSQL.
            Utilizo Git, GitHub y Docker para
            organizar el desarrollo, gestionar
            versiones y trabajar con entornos
            de software.
          </p>

          <p>
            Tengo conocimientos en ciberseguridad,
            automatización de procesos y Quality
            Assurance (QA), incluyendo revisión
            técnica, pruebas, identificación de
            errores y seguimiento de correcciones.
          </p>

          <p>
            Como Coordinador del Área de TICs,
            utilizo Scrum para organizar tareas,
            planificar actividades, supervisar
            entregables y dar seguimiento al
            trabajo del equipo.
          </p>

          <p>
            También desarrollo IANCH, mi marca
            enfocada en software, inteligencia
            artificial, automatización y
            divulgación tecnológica.
          </p>
        </div>

        <div className="about-panel">
          <span className="about-panel-label">
            ÁREAS DE EXPERIENCIA
          </span>

          <div className="about-skills">
            {especialidades.map((especialidad) => (
              <span key={especialidad}>
                {especialidad}
              </span>
            ))}
          </div>

          <div className="about-role">
            <span>ROL PROFESIONAL</span>
            <strong>Coordinador TICs</strong>
            <p>
              Coordinación técnica, seguimiento
              de proyectos y gestión de tareas
              mediante Scrum.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
