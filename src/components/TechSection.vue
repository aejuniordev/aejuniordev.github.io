<template>
  <section class="section">
    <div class="section-title">{{ t('nav.technologies') }}</div>
    <div class="tech-list">
      <span v-for="(tech, index) in technologies" :key="`tech-${index}`" class="tech-item">
        {{ tech }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Props {
  technologies: string[]
}

defineProps<Props>()
const { t } = useI18n()
</script>
