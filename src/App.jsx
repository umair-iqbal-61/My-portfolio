import Navbar from "./components/Navbar";

import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Hero from "./components/home/Hero"
import Projects from "./components/projects/Projects"
import ScrollUp from "./components/scrollup/ScrollUp"
import Skills from "./components/skills/Skills"

function App() {

  return (
    <>
      <div style={{ background: "var(--color-bg)", minHeight: "100vh" }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollUp />
      </div>
    </>
  )
}

export default App
