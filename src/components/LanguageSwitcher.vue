<template>
  <div class="language-switcher">
    <!-- Desktop version (unchanged) -->
    <div class="desktop-switcher">
      <button
        v-for="lang in languages"
        :key="lang.code"
        @click="changeLanguage(lang.code)"
        :class="{ active: locale === lang.code }"
        type="button"
        class="lang-btn"
      >
        {{ lang.label }}
      </button>
    </div>

    <!-- Mobile: Dropdown -->
    <div class="mobile-switcher">
      <button
        @click="showDropdown = !showDropdown"
        class="mobile-toggle"
        type="button"
      >
        <i class="fas fa-globe"></i>
        {{ currentLanguage.label }}
        <i class="fas fa-chevron-down" :class="{ rotated: showDropdown }"></i>
      </button>

      <Transition name="dropdown">
        <div v-if="showDropdown" class="dropdown-menu">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="selectLanguage(lang.code)"
            :class="{ active: locale === lang.code }"
            class="dropdown-item"
            type="button"
          >
            {{ lang.label }}
          </button>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const showDropdown = ref(false)

const languages = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' }
]

const currentLanguage = computed(() =>
  languages.find(lang => lang.code === locale.value) || languages[0]
)

const changeLanguage = (lang: string) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}

const selectLanguage = (lang: string) => {
  changeLanguage(lang)
  showDropdown.value = false
}
</script>
