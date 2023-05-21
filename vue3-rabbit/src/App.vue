<script setup>
// import HelloWorld from '@/components/HelloWorld.vue'
import { getCategoryAPI } from './apis/testApi'
getCategoryAPI().then(resp => {
  console.log(`resp ==> `, resp)
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
