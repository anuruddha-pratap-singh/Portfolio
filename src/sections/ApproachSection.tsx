import { SectionHeading } from '../components/SectionHeading'
import { principles } from '../data/portfolio'

export function ApproachSection() {
  return (
    <section className="section approach-section" id="approach" aria-labelledby="approach-title">
      <div className="page-width">
        <SectionHeading
          index="04"
          label="How I work"
          title="Good habits make good software easier to grow."
          inverse
        />
        <div className="principles-list">
          {principles.map((principle) => (
            <article className="principle-row" key={principle.number}>
              <span className="principle-row__number">{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
              <span className="principle-row__marker" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
