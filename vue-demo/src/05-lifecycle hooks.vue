<!-- Each Vue component instance goes through a series of initialization steps when it's created,  
	for example, it needs to set up data observation, compile the template, mount the instance to the DOM,
	and update the DOM when data changes
 Along the way, it also runs functions called lifecycle hooks,
  giving users the opportunity to add their own code at specific stages
 -->

<script setup>
import { ref, onMounted } from 'vue'

const el = ref()

onMounted(() => {
	console.log(`el ==> `, el)
	el.value // <div>
})
</script>

<template>
	<div ref="el">
		<p>
			<img src="https://vuejs.org/assets/lifecycle.16e4c08e.png" />
		</p>
	</div>
</template>

<style scoped></style>