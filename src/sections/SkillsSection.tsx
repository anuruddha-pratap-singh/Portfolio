import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/portfolio'

export function SkillsSection() {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="page-width">
        <SectionHeading
          index="03"
          label="Tools & foundations"
          title="A toolkit still taking shape."
          intro="Grouped from the languages and technologies represented in my coursework and repositories—without made-up proficiency scores."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <p className="skill-group__number">0{index + 1}</p>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="skills-footnote"><span aria-hidden="true">+</span> Tools are listed as areas of practice, not a claim of expert-level experience.</p>
      </div>
    </section>
  )
}
