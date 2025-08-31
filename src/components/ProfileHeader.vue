<template>
  <header class="profile-header">
    <div class="profile-pic-container">
      <img v-if="profile.avatar" :src="profile.avatar" :alt="profile.name" class="profile-pic" />
      <div v-else class="profile-pic-placeholder">
        <i class="fas fa-user"></i>
      </div>
    </div>
    <div class="profile-info">
      <h1>{{ profile.name }}</h1>
      <div class="subtitle">{{ t(profile.role) }}</div>
    </div>
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
