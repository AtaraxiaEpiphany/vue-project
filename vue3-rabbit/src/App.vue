<script setup>
// import { storeToRefs } from 'pinia'
// import { useCounterStore } from '@/stores/counter'
// const countStore = useCounterStore()
// const { count } = storeToRefs(countStore)
// const increase = () => {
//   count.value++
// }
</script>

<template>
  <!-- <h1>countStore.count:{{ countStore.count }}</h1>
  <h1>reactive count:{{ count }}</h1>
  <button @click="countStore.increment">Increase plain</button>
  <button @click="count++">Increase reactive</button> -->
  <RouterView />
</template>

<style scoped></style>
