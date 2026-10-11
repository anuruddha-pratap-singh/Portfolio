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
          index="02"
          label="Selected repositories"
          title="Work in progress. Work in public."
          intro="A small selection from my GitHub, chosen for the ideas and engineering fundamentals behind each repository."
        />
        <div className="project-toolbar">
          <p><span className="project-count">{String(visibleProjects.length).padStart(2, '0')}</span> repositories</p>
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
        <p className="projects-note">Descriptions and technologies are based on repository READMEs and contents. No demo links are shown when a live demo is not available.</p>
      </div>
    </section>
  )
}
