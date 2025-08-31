<template>
  <header>
    <h1>{{ profile.name }}</h1>
    <div class="subtitle">{{ t(profile.role) }}</div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Profile } from '@/types/portfolio'

interface Props {
  profile: Profile
}

defineProps<Props>()
const { t } = useI18n()
</script>
