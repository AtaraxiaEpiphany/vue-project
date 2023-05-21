<!-- 
   In order to extract properties from the store while keeping its reactivity,
 you need to use storeToRefs()
 -->
<script setup>
import { useStudentStore, useCounterStore } from './stores/counter'
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'
const counterStore = useCounterStore()
const studentStore = useStudentStore()


const { count } = counterStore
count // will be aways 0

const { student } = storeToRefs(studentStore)
/**
 * state: is aways a ref.
 * ref()s become state properties
 */
console.log(`student extracted by storeToRefs ==> `, student)
// ObjectRefImpl...

console.log(reactive({
  test: 'test'
}));
//proxy object


</script>
<template>
  <div>
    <p>
      Counter store count: {{ counterStore.count }}
    </p>
    <p>
      Count extracted directly:{{ count }}
    </p>
    <p>
      Age extracted by storeToRefs:{{ student.age }}
    </p>
    <button @click="() => { counterStore.increment(); studentStore.grow() }">Increment Count and Age</button>
  </div>
</template>
<style scoped></style>