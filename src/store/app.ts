// Utilities
import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('app', {
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
