// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    variantCountry: '',
    variantScore: ''
  }),
  actions: {
    chooseCountry(payload) {
      this.variantCountry = payload
    },
    chooseScore(payload) {
      this.variantScore = payload
    },
  },
})
