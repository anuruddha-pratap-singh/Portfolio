import { useMemo, useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectCard } from '../components/ProjectCard'
import { projects, type ProjectCategory } from '../data/portfolio'

type Filter = 'all' | ProjectCategory

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All work' },
  { value: 'web', label: 'Web engineering' },
  { value: 'algorithms', label: 'Problem solving' },
]

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>('all')
  const visibleProjects = useMemo(
    () => projects.filter((project) => filter === 'all' || project.category === filter),
    [filter],
  )

  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="page-width">
        <SectionHeading
          id="projects-title"
          index="02"
          label="Selected repositories"
          title="Small systems. Real learning."
          intro="Two working threads from my public GitHub: algorithm practice and web engineering fundamentals."
        />
        <div className="project-toolbar" data-reveal>
          <p><span className="project-count">{String(visibleProjects.length).padStart(2, '0')}</span> REPOSITORIES IN VIEW</p>
          <div className="filter-list" role="group" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item.value}
                className={`filter-button${filter === item.value ? ' filter-button--active' : ''}`}
                type="button"
                aria-pressed={filter === item.value}
                onClick={() => setFilter(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="projects-grid" aria-live="polite">
          {visibleProjects.map((project) => <ProjectCard key={project.number} project={project} />)}
        </div>
        <p className="projects-note" data-reveal>Descriptions and technologies are based on repository READMEs and contents. No demo links are shown where a live demo has not been verified.</p>
      </div>
    </section>
  )
}
