import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <svg className="hero-circuit" viewBox="0 0 1400 720" preserveAspectRatio="none" aria-hidden="true">
        <path className="hero-circuit__trace hero-circuit__trace--one" d="M-30 500h220l80-80h150l75-75h150l90-90h190" />
        <path className="hero-circuit__trace hero-circuit__trace--two" d="M760 -30v110l-65 65v145l-82 82v150l-88 88v150" />
        <path className="hero-circuit__trace hero-circuit__trace--three" d="M1430 330h-150l-72 72h-132l-90 90h-102" />
        <circle className="hero-circuit__node hero-circuit__node--one" cx="190" cy="500" r="4" />
        <circle className="hero-circuit__node hero-circuit__node--two" cx="835" cy="390" r="4" />
        <circle className="hero-circuit__node hero-circuit__node--three" cx="1150" cy="492" r="4" />
      </svg>
      <div className="hero__inner page-width">
        <div className="hero__copy" data-reveal>
          <p className="eyebrow eyebrow--light"><span className="status-led" aria-hidden="true" />ENGINEER PROFILE <span className="eyebrow__divider">/</span> 01</p>
          <h1 id="hero-title">Systems thinker.<br /><span>Software builder.</span></h1>
          <p className="hero__intro">
            I’m Anuruddha, a computer science student exploring how thoughtful software connects interfaces, algorithms, and the systems underneath.
          </p>
          <div className="hero__meta">
            <span className="hero__tag">B.Tech CSE <i>·</i> AI</span>
            <span className="hero__tag">Learning in public</span>
          </div>
          <div className="hero__actions">
            <a className="button button--accent" href="#projects">
              Explore selected work <ArrowDownRight size={17} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a className="button button--outline" href="#contact">
              Start a conversation <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
          <div className="hero__footline"><span>FOCUS</span><span>WEB SYSTEMS · DSA · SOFTWARE DESIGN</span></div>
        </div>

        <figure className="hero__visual" data-reveal>
          <img
            className="hero__image"
            src="/images/anuruddha-hero-cutout.webp"
            alt="Anuruddha wearing a black shirt with his arms crossed."
            fetchPriority="high"
            decoding="async"
          />
        </figure>
        <a className="hero__scroll" href="#about" aria-label="Scroll to about section">
          <span className="hero__scroll-line" aria-hidden="true" /><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
