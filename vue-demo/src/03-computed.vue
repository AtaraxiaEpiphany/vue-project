<!-- 
Takes a getter function and returns a *readonly* reactive ref object for the returned value from the getter.
It can also take an object with get and set functions to create a writable ref object.
 -->
<script setup>
import { ref, computed } from 'vue';
const count = ref(1)
const plusOne = computed({
	get: () => count.value + 1,
	set: (val) => {
		count.value = val - 1
	}
})
// Most of time, we should avoid modifying the computed value.
plusOne.value = 1 // coount.value = 0
console.log(`count ==> `, count.value) // 0
console.log(`plusOne ==> `, plusOne.value) // 1
</script>

<template></template>

<style></style>