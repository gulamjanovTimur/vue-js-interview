<template>
  <v-card
    class="mx-auto"
    max-width="450"
  >
    <div
      v-for="item in list"
      :key="item.id"
      class="item"
    >
    <v-avatar
      @click="handleShowAddress(item.id)"
      :src="item.prependAvatar"
      class="avatar"
    >
      <v-img
        :src="item.prependAvatar"
        :alt="item.title"
      ></v-img>
    </v-avatar>
      <div v-html="item.subtitle"/>
      <span>{{ checkShowAddress(item.id) ? item.address : '' }}</span>
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
.avatar {
  cursor: pointer;
}
</style>
