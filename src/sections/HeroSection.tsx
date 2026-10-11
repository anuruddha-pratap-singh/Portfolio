import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio'

export function HeroSection() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__inner page-width">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--light"><span>01</span> Developer in practice</p>
          <h1 id="hero-title">Curious mind.<br /><span>Considered code.</span></h1>
          <p className="hero__intro">
            I’m Anuruddha — a computer science student learning through problem solving, full-stack practice, and useful projects.
          </p>
          <div className="hero__meta">
            <span className="availability-mark" aria-hidden="true" />
            <span>B.Tech CSE (AI)</span>
            <span className="hero__meta-divider" aria-hidden="true">/</span>
            <span>Learning through building</span>
          </div>
          <div className="hero__actions">
            <a className="button button--light" href="#projects">
              Explore selected work <ArrowDownRight size={17} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a className="hero__text-link" href={profile.github} target="_blank" rel="noreferrer">
              GitHub profile <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
          <p className="hero__index">Personal portfolio / Selected work</p>
        </div>

        <div className="hero__visual">
          <div className="hero__image-frame">
            <img
              className="hero__image"
              src="/images/anuruddha-portrait.png"
              alt="Portrait of Anuruddha wearing a black shirt with his arms crossed."
              fetchPriority="high"
              decoding="async"
            />
            <div className="hero__image-caption"><span>ANURUDDHA PRATAP SINGH KUSHWAH</span><span>01 / 02</span></div>
          </div>
          <div className="hero__vertical-note" aria-hidden="true">LEARN TECH BY BUILDING IT</div>
          <div className="hero__visual-index" aria-hidden="true">A—01</div>
        </div>
        <a className="hero__scroll" href="#about" aria-label="Scroll to about section">
          <span>Scroll to explore</span><ArrowDownRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
