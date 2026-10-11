export const profile = {
  name: 'Anuruddha Pratap Singh Kushwah',
  shortName: 'Anuruddha',
  role: 'Computer Science · B.Tech CSE (AI)',
  email: 'anuruddhapratap245@gmail.com',
  github: 'https://github.com/anuruddha-pratap-singh',
  linkedin: 'https://www.linkedin.com/in/anuruddha-pratap/',
  x: 'https://x.com/Anuruddha_PS',
  leetcode: 'https://leetcode.com/u/anuruddha-pratap/',
} as const

export type ProjectCategory = 'algorithms' | 'web'

export type Project = {
  number: string
  name: string
  description: string
  category: ProjectCategory
  categoryLabel: string
  technologies: string[]
  repository: string
  status: string
  visual: 'algorithms' | 'web'
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'LeetCode Solutions',
    description:
      'A growing collection of accepted Java solutions, organized by problem and shared as a record of my data structures and algorithms practice.',
    category: 'algorithms',
    categoryLabel: 'Problem solving',
    technologies: ['Java', 'Data structures', 'Algorithms'],
    repository: 'https://github.com/anuruddha-pratap-singh/Leetcode_Solutions',
    status: 'Updated regularly',
    visual: 'algorithms',
  },
  {
    number: '02',
    name: 'Web Development · Semester 3',
    description:
      'Coursework and practice spanning HTML, CSS and JavaScript, with React concepts and MERN backend fundamentals collected in one place.',
    category: 'web',
    categoryLabel: 'Web engineering',
    technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
    repository: 'https://github.com/anuruddha-pratap-singh/Web_Development',
    status: 'Learning repository',
    visual: 'web',
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Vite', 'Responsive CSS', 'React Router'],
  },
  {
    title: 'Backend & data',
    items: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
  },
  {
    title: 'Foundations',
    items: ['Data structures', 'Algorithms', 'Object-oriented design', 'REST APIs'],
  },
] as const

export const principles = [
  {
    number: '01',
    title: 'Learn by building',
    copy: 'Small implementations turn unfamiliar concepts into things I can reason about and improve.',
  },
  {
    number: '02',
    title: 'Keep the work visible',
    copy: 'Public repositories make it easier to revisit decisions, track progress, and share what I am learning.',
  },
  {
    number: '03',
    title: 'Make the details count',
    copy: 'Readable code, useful feedback, and accessible interfaces are part of a feature—not finishing touches.',
  },
] as const
