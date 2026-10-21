
import './App.css'

const tecnologias = [
  'Java',
  'Kotlin',
  'Spring Boot',
  'React',
  'TypeScript',
  'PostgreSQL',
  'Docker',
  'Git',
]

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#inicio">
          &lt;DevPortfolio /&gt;
        </a>

        <nav aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <span className="eyebrow">
            DESARROLLO DE SOFTWARE · IA · AUTOMATIZACIÓN
          </span>

          <h1>
            Construyo soluciones digitales
            <span> que generan valor.</span>
          </h1>

          <p>
            Soy desarrollador de software enfocado en
            aplicaciones web, sistemas backend e
            integración de inteligencia artificial.
          </p>

          <div className="actions">
            <a className="button primary" href="#proyectos">
              Ver mis proyectos
            </a>

            <a className="button secondary" href="#contacto">
              Trabajemos juntos
            </a>
          </div>
        </section>

        <section id="sobre-mi" className="section">
          <h2>Sobre mí</h2>
          <p>
            Me apasiona desarrollar aplicaciones,
            resolver problemas y crear herramientas
            que faciliten el trabajo de personas
            y empresas.
          </p>
        </section>

        <section id="tecnologias" className="section">
          <h2>Mi stack tecnológico</h2>

          <div className="tech-grid">
            {tecnologias.map((tecnologia) => (
              <div className="tech-card" key={tecnologia}>
                {tecnologia}
              </div>
            ))}
          </div>
        </section>

        <section id="proyectos" className="section">
          <h2>Proyectos destacados</h2>
          <p>
            Próximamente mostraremos mis proyectos,
            tecnologías y resultados.
          </p>
        </section>

        <section id="servicios" className="section">
          <h2>Servicios</h2>
          <p>
            Desarrollo web, APIs REST, integración
            de inteligencia artificial y automatización.
          </p>
        </section>

        <section id="contacto" className="section">
          <h2>¿Trabajamos juntos?</h2>
          <p>
            Disponible para oportunidades laborales
            y colaboraciones profesionales.
          </p>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} DevPortfolio.
        Todos los derechos reservados.
      </footer>
    </div>
  )
}

export default App
