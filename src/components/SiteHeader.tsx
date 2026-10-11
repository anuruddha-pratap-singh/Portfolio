import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { profile } from '../data/portfolio'

export type Theme = 'light' | 'dark'

const navigation = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Toolkit' },
  { id: 'approach', label: 'Approach' },
  { id: 'contact', label: 'Contact' },
]

type SiteHeaderProps = {
  activeSection: string
  theme: Theme
  onThemeToggle: () => void
  menuOpen: boolean
  onMenuToggle: () => void
  onNavigate: () => void
}

export function SiteHeader({
  activeSection,
  theme,
  onThemeToggle,
  menuOpen,
  onMenuToggle,
  onNavigate,
}: SiteHeaderProps) {
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onMenuToggle()
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen, onMenuToggle])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="wordmark" href="#home" onClick={onNavigate} aria-label={`${profile.name}, home`}>
          <span className="wordmark__mark">a<span>.</span></span>
          <span className="wordmark__name">Anuruddha<br />Pratap Singh</span>
        </a>

        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? ' primary-navigation--open' : ''}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item, index) => (
            <a
              className="primary-navigation__link"
              href={`#${item.id}`}
              key={item.id}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={onNavigate}
            >
              <span className="primary-navigation__number">0{index + 1}</span>{item.label}
            </a>
          ))}
          <a className="primary-navigation__github" href={profile.github} target="_blank" rel="noreferrer" onClick={onNavigate}>
            GitHub <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </nav>

        <div className="site-header__actions">
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={17} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}
          </button>
          <button
            ref={menuButtonRef}
            className="icon-button menu-toggle"
            type="button"
            onClick={onMenuToggle}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
