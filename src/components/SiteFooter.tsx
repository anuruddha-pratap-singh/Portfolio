import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="page-width site-footer__inner">
        <a className="site-footer__brand" href="#home">
          <span className="wordmark__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none"><path d="M5 24V8h9l5 5h8M5 16h9l5 5h8" /><circle cx="5" cy="8" r="1.5" /><circle cx="27" cy="13" r="1.5" /><circle cx="27" cy="21" r="1.5" /></svg>
          </span>
          <span>{profile.name}</span>
        </a>
        <p className="site-footer__signoff">Built with care. Still learning.</p>
        <div className="site-footer__links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
          <a href={`mailto:${profile.email}`}>Email <ArrowUpRight size={13} aria-hidden="true" /></a>
        </div>
        <span className="site-footer__year">© {year}</span>
      </div>
    </footer>
  )
}
