<template>
  <div>
    <v-select
      :value="store.variantCountry"
      @update:modelValue="updateCountry"
      :items="listCountry"
      clearable
      label="Filter by country"
    />

    <v-select
      :value="store.variantScore"
      @update:modelValue="updateScore"
      :items="listScore"
      clearable
      label="Filter by score"
    />
  </div>
</template>

<script setup>

  import { useAppStore } from '@/store/app'

  const store = useAppStore()

  defineProps({
    listCountry: {
      type: Array,
      default: () => []
    },
    listScore: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: String,
      default: ''
    },
  })


  function updateCountry(event) {
    store.chooseCountry(event)
  }


  function updateScore(event) {
    store.chooseScore(event)
  }


</script>
