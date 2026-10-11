import { useCallback, useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { SiteHeader, type Theme } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { AboutSection } from './sections/AboutSection'
import { ApproachSection } from './sections/ApproachSection'
import { ContactSection } from './sections/ContactSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SkillsSection } from './sections/SkillsSection'

function getSavedTheme(): Theme {
  try {
    return window.localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

function App() {
  const [theme, setTheme] = useState<Theme>(getSavedTheme)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    if (themeColor) themeColor.content = theme === 'dark' ? '#111111' : '#f2f1ed'
    try {
      window.localStorage.setItem('portfolio-theme', theme)
    } catch {
      // Theme still works for this visit when storage is unavailable.
    }
  }, [theme])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'))
    const observer = new IntersectionObserver((entries) => {
      const current = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]
      if (current) setActiveSection(current.target.id)
    }, { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.1, 0.35, 0.65] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 700)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const toggleTheme = useCallback(() => setTheme((current) => current === 'light' ? 'dark' : 'light'), [])

  return (
    <div className={`site-shell site-shell--${theme}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader
        activeSection={activeSection}
        theme={theme}
        onThemeToggle={toggleTheme}
        menuOpen={menuOpen}
        onMenuToggle={toggleMenu}
        onNavigate={closeMenu}
      />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <SiteFooter />
      {showBackToTop && (
        <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUp size={17} aria-hidden="true" /></a>
      )}
    </div>
  )
}

export default App
