import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Hero from './components/Hero'
import AmbientInk from './components/AmbientInk'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

function SinglePagePortfolio() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)]">
      <AmbientInk />
      <div className="noise-overlay" />
      <Navbar sections={sections} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<SinglePagePortfolio />} />
    </Routes>
  )
}
