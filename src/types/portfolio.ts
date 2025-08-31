import type { Component } from 'vue'

export interface Profile {
  name: string
  role: string
  description: string
}

export interface Experience {
  id: number
  // title: string
  company?: string
  startDate: string
  endDate?: string | null
  // description: string
  type: 'work' | 'education'
}

export interface SocialLink {
  name: string
  url: string
  icon: string | Component
}

export interface PortfolioData {
  profile: Profile
  experiences: Experience[]
  technologies: string[]
  socials: SocialLink[]
}
