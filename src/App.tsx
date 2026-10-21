import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import About from './components/About'
import TechStack from './components/TechStack'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <About />

        <TechStack />

        <Projects />

        <Services />

        <Contact />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Alexis Narea.
        Todos los derechos reservados.
      </footer>
    </div>
  )
}

export default App
