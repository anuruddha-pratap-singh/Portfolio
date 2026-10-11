import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="page-width site-footer__inner">
        <a className="site-footer__brand" href="#home">
          <span className="wordmark__mark">a<span>.</span></span>
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
