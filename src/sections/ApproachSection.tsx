import { SectionHeading } from '../components/SectionHeading'
import { principles, projects } from '../data/portfolio'

const journey = [
  { number: '01', label: 'STUDY', title: 'B.Tech CSE · AI', principle: principles[0], href: undefined },
  { number: '02', label: 'PROBLEM SOLVING', title: 'Java · LeetCode Solutions', principle: principles[1], href: projects[0].repository },
  { number: '03', label: 'WEB ENGINEERING', title: 'Web Development · Semester 3', principle: principles[2], href: projects[1].repository },
]

export function ApproachSection() {
  return (
    <section className="section approach-section" id="approach" aria-labelledby="approach-title">
      <div className="page-width">
        <SectionHeading
          id="approach-title"
          index="04"
          label="Engineering journey"
          title="The work keeps building on itself."
          intro="A path grounded in current study and public practice—from computer science foundations to working through real code."
          inverse
        />
        <ol className="journey-list" data-reveal>
          {journey.map((step) => (
            <li className="journey-step" key={step.number}>
              <span className="journey-step__number">{step.number}</span>
              <div className="journey-step__identity">
                <p className="journey-step__label">{step.label}</p>
                <h3>{step.title}</h3>
              </div>
              <div className="journey-step__practice">
                <span>{step.principle.title}</span>
                <p>{step.principle.copy}</p>
              </div>
              {step.href ? <a className="journey-step__link" href={step.href} target="_blank" rel="noreferrer" aria-label={`View ${step.title} repository`}>↗</a> : <span className="journey-step__link journey-step__link--muted" aria-hidden="true">·</span>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
