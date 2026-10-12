type SectionHeadingProps = {
  id: string
  index: string
  label: string
  title: string
  intro?: string
  inverse?: boolean
}

export function SectionHeading({ id, index, label, title, intro, inverse = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading${inverse ? ' section-heading--inverse' : ''}`} data-reveal>
      <p className="eyebrow"><span>{index}</span>{label}</p>
      <h2 id={id}>{title}</h2>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </div>
  )
}
