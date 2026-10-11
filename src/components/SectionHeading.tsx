type SectionHeadingProps = {
  index: string
  label: string
  title: string
  intro?: string
  inverse?: boolean
}

export function SectionHeading({ index, label, title, intro, inverse = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading${inverse ? ' section-heading--inverse' : ''}`}>
      <p className="eyebrow"><span>{index}</span>{label}</p>
      <h2>{title}</h2>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </div>
  )
}
