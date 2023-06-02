<template>
  <v-card
    class="mx-auto"
    max-width="450"
  >

    <div
      v-for="item in list"
      :key="item.id"
      item-props
      lines="three"
      class="item"
    >
    <v-avatar @click="handleShowAddress(item.id)" :src="item.prependAvatar">
      <v-img
        :src="item.prependAvatar"
        alt="John"
      ></v-img>
      </v-avatar>
      <div v-html="item.subtitle"/>
      {{ checkShowAddress(item.id) ? item.address : '' }}
    </div>
  </v-card>
</template>

<script setup>
  import { ref } from 'vue'

  defineProps({
    list: {
      type: Array,
      default: () => []
    }
  })

  const showedIds = ref([])

  function handleShowAddress(id) {
    if (showedIds.value.includes(id)) {
      showedIds.value = showedIds.value.filter(el => el !== id)
    } else {
      showedIds.value.push(id)
    }
  }

  function checkShowAddress(id) {
    return showedIds.value.includes(id)
  }

</script>

<style lang="scss">
.item {
  padding: 15px;
}
</style>
