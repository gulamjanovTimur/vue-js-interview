<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col
          cols="12"
          md="4"
      >
        <FilterComponent
          :listCountry="listCountry"
          :listScore="listScore"
        />

      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <Users v-if="!isLoading" :list="users"/>
        <div class="loader" v-else>
          <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
        </div>


      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import Users from '@/components/UsersList.vue';
  import FilterComponent from '@/components/Filter.vue';
  import { ref, watch } from 'vue'
  import usersJSON from '@/assets/users.json'
  import { useFiltersStore } from '@/store/app'

  const store = useFiltersStore()


  const listCountry = ref(
    [
      'russia',
      'usa',
    ]
  )
  const listScore = ref(
    [
      '> 20',
      '< 10',
    ]
  )

  const isLoading = ref(false)

  const users = ref()

  Promise.resolve(usersJSON).then(async (res) => {
    isLoading.value = true
    await new Promise(resolve => setTimeout(resolve, 1000));
    users.value = res
    isLoading.value = false
  })


  watch(store, () => {
    Promise.resolve(usersJSON).then( async (res) => {
      isLoading.value = true
      await new Promise(resolve => setTimeout(resolve, 1000));
      users.value = filterUsers(res)
      isLoading.value = false
    })
  })

  function filterUsers(data) {
    return data.filter(el => {
      let result = true
      if (store.variantScore === '> 20') {
        result = Number(el.score) > 20
        if(!(Number(el.score) > 20)) return false
      } else if (store.variantScore === '< 10') {
        result = Number(el.score) < 10
        if(!(Number(el.score) < 10)) return false
      } else {
        result = true
      }

      if (store.variantCountry === 'russia') {
        result = el.country === 'russia'
      } else if (store.variantCountry === 'usa') {
        result = el.country === 'usa'
      } else {
        result = true
      }

      return result
    })
  }

</script>

<style lang="scss">
.loader {
  display: flex;
  justify-content: center
}
</style>
