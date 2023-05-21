<!-- Watches one or more reactive data sources and invokes a callback function when the sources change. -->
<script setup>
import { watch, ref, reactive } from 'vue'
const count = ref(0)
/*
options{
	immediate: trigger the callback immediately on watcher creation.
	(Old value will be undefined on the first call).
}
*/
watch(count, (newValue, oldValue) => {
	console.log(`new value ==> `, newValue, `old value ==> `, oldValue);
})
const increament = () => {
	count.value++
}

</script>

<template>
	<button @click="increament">+{{ count }}</button>
</template>

<style></style>