import type { Component } from 'vue'

export interface Profile {
  name: string
  role: string
  avatar: string
  description: string
}

export interface Experience {
  id: number
  company?: string
  startDate: string
  endDate?: string | null
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
