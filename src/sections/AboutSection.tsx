import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/portfolio'

export function AboutSection() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="page-width">
        <SectionHeading
          index="01"
          label="A little about me"
          title="Learning the craft, one build at a time."
          intro="I’m drawn to the space between solid engineering and interfaces that feel clear to use."
        />
        <div className="about-grid">
          <div className="about-copy">
            <p className="about-copy__lead">
              Most of my progress comes from doing the work: understanding an idea, building a small version, and returning to it until it makes sense.
            </p>
            <p>
              My public repositories reflect that process — Java problem solving alongside frontend and full-stack coursework. I enjoy exploring how each part of an application fits together, from the first interaction to the data behind it.
            </p>
            <p>
              I’m studying Computer Science (AI) and building a strong foundation in web development, data structures, and software design.
            </p>
            <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              Find me on LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <figure className="about-photo">
            <img
              src="/images/anuruddha-hoodie.png"
              alt="Anuruddha wearing glasses and a gray hoodie."
              loading="lazy"
              decoding="async"
            />
            <figcaption><span>PERSONAL PORTRAIT</span><span>02 / 02</span></figcaption>
          </figure>
          <div className="about-aside">
            <span className="about-aside__line" aria-hidden="true" />
            <p className="eyebrow"><span>Based on</span> verified profile details</p>
            <p className="about-aside__degree">Computer Science<br /><span>B.Tech CSE (AI)</span></p>
            <p className="about-aside__caption">A learner first, with a focus on practical software and the fundamentals underneath it.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
