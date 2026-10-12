import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/portfolio'

type ProjectCardProps = {
  project: Project
}

function ProjectArtwork({ project }: ProjectCardProps) {
  if (project.visual === 'algorithms') {
    return (
      <div className="project-artwork project-artwork--algorithms" aria-hidden="true">
        <div className="artwork-topline"><span>PROCESS MAP / ILLUSTRATIVE</span><span>01—03</span></div>
        <svg className="artwork-circuit" viewBox="0 0 500 180" preserveAspectRatio="none">
          <path d="M0 105h110l28-28h90l22 22h90l25-25h135" />
          <path d="M145 77V35h88l18 18h68" />
          <path d="M295 99v48h75l20-20h110" />
          <circle cx="110" cy="105" r="4" /><circle cx="256" cy="53" r="4" /><circle cx="390" cy="127" r="4" />
        </svg>
        <div className="algorithm-list">
          <span><i>01</i> understand the input <b>read</b></span>
          <span><i>02</i> choose a structure <b>model</b></span>
          <span><i>03</i> test the idea <b>refine</b></span>
        </div>
        <div className="artwork-coordinate">JAVA · DATA STRUCTURES · ALGORITHMS</div>
      </div>
    )
  }

  return (
    <div className="project-artwork project-artwork--web" aria-hidden="true">
      <div className="artwork-topline"><span>CONCEPT MAP / ILLUSTRATIVE</span><span>02—03</span></div>
      <svg className="artwork-circuit" viewBox="0 0 500 180" preserveAspectRatio="none">
        <path d="M0 88h88l25 24h73l20-20h96l30-30h168" />
        <path d="M112 112v36h70l24-24h95" />
        <path d="M302 62V27h94l24 24h79" />
        <circle cx="88" cy="88" r="4" /><circle cx="302" cy="62" r="4" /><circle cx="301" cy="124" r="4" />
      </svg>
      <div className="web-map">
        <span className="web-map__node">UI<br /><b>React</b></span>
        <span className="web-map__line" />
        <span className="web-map__node web-map__node--react">APP<br /><b>Node.js</b></span>
        <span className="web-map__line" />
        <span className="web-map__node web-map__node--data">DATA<br /><b>MongoDB</b></span>
      </div>
      <div className="artwork-coordinate">INTERFACE → LOGIC → PERSISTENCE</div>
    </div>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card" data-reveal>
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
