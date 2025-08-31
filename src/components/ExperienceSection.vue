<template>
  <div>
    <!-- Work Experience -->
    <section class="section" v-if="workExperiences.length > 0">
      <div class="section-title">{{ t('experience.work') }}</div>
      <div
        v-for="exp in workExperiences"
        :key="exp.id"
        class="experience-item"
        @mouseenter="hoveredId = exp.id"
        @mouseleave="hoveredId = null"
      >
        <div class="experience-header">
          <span class="experience-title">{{ t(`experience.${exp.id}.title`) }}</span>
          <span class="experience-company" v-if="exp.company">@ {{ exp.company }}</span>
        </div>
        <div class="experience-period">
          {{ formatDate(exp.startDate) }} —
          {{ exp.endDate ? formatDate(exp.endDate) : t('experience.present') }}
        </div>
        <Transition name="slide">
          <div v-if="hoveredId === exp.id" class="experience-description">
            {{ t(`experience.${exp.id}.description`) }}
          </div>
        </Transition>
      </div>
    </section>

    <!-- Education -->
    <section class="section" v-if="educationExperiences.length > 0">
      <div class="section-title">{{ t('experience.education') }}</div>
      <div
        v-for="exp in educationExperiences"
        :key="exp.id"
        class="experience-item"
        @mouseenter="hoveredId = exp.id"
        @mouseleave="hoveredId = null"
      >
        <div class="experience-header">
          <span class="experience-title">{{ t(`experience.${exp.id}.title`) }}</span>
          <span class="experience-company" v-if="exp.company">@ {{ exp.company }}</span>
        </div>
        <div class="experience-period">
          {{ formatDate(exp.startDate) }} —
          {{ exp.endDate ? formatDate(exp.endDate) : t('experience.present') }}
        </div>
        <Transition name="slide">
          <div v-if="hoveredId === exp.id" class="experience-description">
            {{ t(`experience.${exp.id}.description`) }}
          </div>
        </Transition>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Experience } from '@/types/portfolio'

interface Props {
  experiences: Experience[]
}

const props = defineProps<Props>()
const { t } = useI18n()
const hoveredId = ref<number | null>(null)

const workExperiences = computed(() => props.experiences.filter((exp) => exp.type === 'work'))

const educationExperiences = computed(() =>
  props.experiences.filter((exp) => exp.type === 'education'),
)

const formatDate = (dateStr: string): string => {
  const [year, month] = dateStr.split('-')
  const monthNames = [
    t('months.jan'),
    t('months.feb'),
    t('months.mar'),
    t('months.apr'),
    t('months.may'),
    t('months.jun'),
    t('months.jul'),
    t('months.aug'),
    t('months.sep'),
    t('months.oct'),
    t('months.nov'),
    t('months.dec'),
  ]
  const monthIndex = parseInt(month, 10) - 1
  return `${monthNames[monthIndex]} ${year}`
}
</script>
