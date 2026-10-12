import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/portfolio'

export function SkillsSection() {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="page-width">
        <SectionHeading
          id="skills-title"
          index="03"
          label="Engineering toolkit"
          title="The pieces I’m learning to connect."
          intro="Grouped from the languages and technologies represented in my coursework and repositories—not ranked by made-up percentages."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-group" key={group.title} data-reveal>
              <p className="skill-group__number"><span>0{index + 1}</span><i aria-hidden="true" /></p>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="skills-footnote" data-reveal><span aria-hidden="true">↳</span> Tools are listed as areas of practice, not a claim of expert-level experience.</p>
      </div>
    </section>
  )
}
