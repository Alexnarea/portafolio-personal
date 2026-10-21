
const contacto = {
  email: 'narealexis@gmail.com',
  github: 'https://github.com/Alexnarea',
  linkedin:
    'https://www.linkedin.com/in/luis-narea-chuisaca-bb3b3a301/',
}

function Contact() {
  const asunto = encodeURIComponent(
    'Contacto desde mi portafolio'
  )

  const mensaje = encodeURIComponent(
    'Hola Alexis, me gustaría conversar sobre un proyecto u oportunidad laboral.'
  )

  const correoUrl =
    `mailto:${contacto.email}?subject=${asunto}&body=${mensaje}`

  return (
    <section
      id="contacto"
      className="section contact-section"
    >
      <span className="section-label">
        CONTACTO
      </span>

      <h2>¿Construimos algo juntos?</h2>

      <p>
        Estoy disponible para oportunidades laborales,
        proyectos de desarrollo de software,
        integraciones de inteligencia artificial
        y automatización de procesos.
      </p>

      <div className="contact-actions">
        <a
          className="button primary"
          href={correoUrl}
        >
          Enviar correo
        </a>

        <a
          className="button secondary"
          href="/cv/Alexis_Narea_CV.pdf"
          download="Alexis_Narea_CV.pdf"
        >
          Descargar CV
        </a>
      </div>

      <div className="contact-links">
        <a
          href={contacto.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>

        <a
          href={contacto.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  )
}

export default Contact
