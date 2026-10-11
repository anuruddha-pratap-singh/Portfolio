import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/portfolio'

type ProjectCardProps = {
  project: Project
}

function ProjectArtwork({ project }: ProjectCardProps) {
  if (project.visual === 'algorithms') {
    return (
      <div className="project-artwork project-artwork--algorithms" aria-hidden="true">
        <div className="artwork-topline"><span>JAVA / DSA</span><span>01—03</span></div>
        <div className="algorithm-list">
          <span><i>01</i> two sum <b>O(n)</b></span>
          <span><i>02</i> valid parentheses <b>stack</b></span>
          <span><i>03</i> climbing stairs <b>dp</b></span>
        </div>
        <div className="artwork-coordinate">PROBLEM SOLVING / IN PROGRESS</div>
      </div>
    )
  }

  return (
    <div className="project-artwork project-artwork--web" aria-hidden="true">
      <div className="artwork-topline"><span>WEBDEV / SEM 03</span><span>REACT + MERN</span></div>
      <div className="web-map">
        <span className="web-map__node web-map__node--react">react</span>
        <span className="web-map__line" />
        <span className="web-map__node">api</span>
        <span className="web-map__line" />
        <span className="web-map__node web-map__node--data">data</span>
      </div>
      <div className="artwork-coordinate">FUNDAMENTALS / PRACTICE / PROJECTS</div>
    </div>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <ProjectArtwork project={project} />
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.number} / {project.categoryLabel}</span>
          <span className="project-status"><span aria-hidden="true" />{project.status}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Technologies">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <a className="text-link project-card__link" href={project.repository} target="_blank" rel="noreferrer">
          View repository <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
          <span className="sr-only"> for {project.name}</span>
        </a>
      </div>
    </article>
  )
}
