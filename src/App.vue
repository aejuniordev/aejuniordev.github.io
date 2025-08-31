<template>
  <div class="container">
    <LanguageSwitcher />
    <ProfileHeader :profile="data.profile" />
    <AboutSection :description="data.profile.description" />
    <ExperienceSection :experiences="data.experiences" />
    <TechSection :technologies="data.technologies" />
    <SocialLinks :socials="data.socials" />
  </div>
</template>

<script setup lang="ts">
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import ProfileHeader from '@/components/ProfileHeader.vue'
import AboutSection from '@/components/AboutSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import TechSection from '@/components/TechSection.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import { portfolioData } from '@/data/portfolio'

const data = portfolioData
</script>
