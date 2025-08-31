<template>
  <div class="social-links">
    <a
      v-for="social in socials"
      :key="social.name"
      :href="social.url"
      :title="social.name"
      :aria-label="social.name"
      class="social-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <component v-if="typeof social.icon !== 'string'" :is="social.icon" />
      <i v-else :class="social.icon"></i>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { SocialLink } from '@/types/portfolio'

interface Props {
  socials: SocialLink[]
}

defineProps<Props>()
</script>
