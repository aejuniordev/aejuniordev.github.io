import type { PortfolioData } from '@/types/portfolio'

import IconGitHub from '@/components/icons/IconGitHub.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'
import IconXTwitter from '@/components/icons/IconXTwitter.vue'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Augusto E. Junior',
    role: 'profile.role',
    avatar: 'https://avatars.githubusercontent.com/u/42114221?v=4',
    description: 'about.description',
  },
  experiences: [
    // {
    //   id: 1,
    //   company: 'sample',
    //   startDate: '2022-03',
    //   endDate: '2022-04',
    //   type: 'work',
    // },
    // {
    //   id: 1,
    //   company: 'sample',
    //   startDate: '2018-01',
    //   endDate: null,
    //   type: 'education',
    // },
    {
      id: 2,
      company: 'JCM Consultores',
      startDate: '2023-10',
      endDate: null,
      type: 'work',
    },
    {
      id: 3,
      company: 'Skalena ®',
      startDate: '2022-05',
      endDate: '2023-03',
      type: 'work',
    },
    {
      id: 4,
      company: 'Universidade Federal do Oeste do Pará',
      startDate: '2018-01',
      endDate: null,
      type: 'education',
    },
  ],
  technologies: [
    'C#',
    'JavaScript',
    'TypeScript',
    'Python',
    'Dart',
    'SQL Server',
    'PostgreSQL',
    'SQLite',
    'MongoDB',
    'Git',
    'Docker',
  ],
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/aejuniordev',
      icon: IconGitHub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aejuniordev/',
      icon: IconLinkedIn,
    },
    {
      name: 'XTwitter',
      url: 'https://x.com/aejuniordev',
      icon: IconXTwitter,
    },
    {
      name: 'Email',
      url: 'mailto:hello@aejunior.dev',
      icon: IconEnvelope,
    },
  ],
}
