import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";

export default function App() {
  return (
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
  );
}