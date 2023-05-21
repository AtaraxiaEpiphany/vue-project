<!-- 
A Store (like Pinia) is an entity holding state and business logic that isn't bound to your Component tree.
In other words, it hosts global state.
It's a bit like a component that is always there and that everybody can read off and write to.
It has three concepts, the state, getters and actions 
and it's safe to assume these concepts are the equivalent of data, computed and methods in components.
 -->
<script setup>
import { mapStores } from 'pinia'
import { useCounterStore, useStudentStore } from './stores/counter';
const counter = useCounterStore()

console.log(`counter store ==> `, counter);

counter.count++
//with autocompletion
counter.$patch({ count: counter.count + 1 })
//or using an action instead
counter.increment()

console.log(`...mapStores ==> `, { ...mapStores(useCounterStore, useStudentStore) });

/**
 * useStudentStore
 */
const student = useStudentStore()
console.log(`student store ==> `, student);

student.grow()
console.log(`student ==> `, student.student);
console.log(`name ==> `, student.name)
</script>

<template>
  <div>
    Current Count:{{ counter.count }}
  </div>
</template>

<style scoped></style>
