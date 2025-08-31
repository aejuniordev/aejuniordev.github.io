<template>
  <section class="section">
    <div class="section-title">{{ t('about.title') }}</div>
    <p class="description">{{ t(description) }}</p>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
interface Props {
  description: string
}

defineProps<Props>()
const { t } = useI18n()
</script>
