export const about: {
  name: string
  role: string
  experience: string
  tagline: string
  description: string
  location: string
  email: string
  resumeUrl: string
  socialLinks: { github: string; linkedin: string }
}

export const skills: { title: string; skills: string[] }[]

export const projects: {
  id: number
  title: string
  role: string
  category: string
  description: string
  responsibilities: string[]
  technologies: string[]
  featured: boolean
}[]

export const workExperience: {
  id: number
  company: string
  role: string
  employmentType: string
  startDate: string
  endDate: string
  current: boolean
  description: string
  responsibilities: string[]
  technologies: string[]
}[]
