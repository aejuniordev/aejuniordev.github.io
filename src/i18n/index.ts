import { createI18n } from 'vue-i18n'
import pt from './locales/pt'
import en from './locales/en'

export type MessageSchema = typeof en

const i18n = createI18n<[MessageSchema], 'pt' | 'en'>({
  legacy: false,
  locale: localStorage.getItem('locale') || 'pt',
  fallbackLocale: 'pt',
  messages: {
    pt,
    en,
  },
})

export default i18n
