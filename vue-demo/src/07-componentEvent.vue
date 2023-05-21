

<script setup>
import Child from './components/Child.vue'
const emitEvent = (str, num) => {
	alert(str)
	console.log(`num in parent ==> `, num);
}
</script>

<template>
	<div>
		<h2>Parent Component</h2>
		<Child @callback="emitEvent"></Child>
	</div>
</template>

<style scoped>
h2 {
	text-align: center;
}

div {
	background-color: chartreuse;
}
</style>