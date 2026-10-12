import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/portfolio'

export function AboutSection() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="page-width">
        <SectionHeading
          id="about-title"
          index="01"
          label="System profile"
          title="Build to understand the system."
          intro="My path into software is hands-on: make an idea concrete, learn from the edges, and improve the next version."
        />
        <div className="about-grid" data-reveal>
          <figure className="about-photo">
            <img
              src="/images/anuruddha-hoodie-board.webp"
              alt="Anuruddha wearing a gray hoodie against a dark circuit-inspired studio background."
              loading="lazy"
              decoding="async"
            />
            <figcaption><span>IDENTITY / ANURUDDHA</span><span>PROFILE IMAGE / 02</span></figcaption>
            <span className="about-photo__corner" aria-hidden="true">APS</span>
          </figure>
          <div className="about-copy">
            <p className="about-copy__lead">
              I’m interested in the full path from a clear interface to the data and logic that make it work.
            </p>
            <p>
              My public repositories document that practice: Java problem solving alongside frontend and full-stack coursework. I like tracing how each part of an application fits together, from a small interaction to the structure behind it.
            </p>
            <p>
              I’m studying Computer Science (AI) and building a strong foundation in web development, data structures, and software design.
            </p>
            <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <dl className="profile-specs">
              <div><dt>Study</dt><dd>B.Tech CSE · AI</dd></div>
              <div><dt>Practice</dt><dd>Java · React · Node.js</dd></div>
              <div><dt>Approach</dt><dd>Build · inspect · refine</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
