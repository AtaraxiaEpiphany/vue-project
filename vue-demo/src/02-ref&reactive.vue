<!-- 
	ref:Takes an inner value and returns a reactive and mutable ref object,
	which has a single property .value that points to the inner value.

	reactive:Returns a reactive proxy of the object.
 -->
<script setup>
import { ref, reactive, onMounted } from 'vue'

// reactive state
const count = ref(0)
const student = reactive({
	age: 18,
})

// functions that mutate state and trigger updates
function increment() {
	count.value++
	student.age++
}

// lifecycle hooks
onMounted(() => {
	console.log(`The initial count is ${count.value}.`)
	console.log(`count ==>  `, count)
	console.log(`student ==>  `, student)
})
</script>

<template>
	<div>
		<h2>Count is: {{ count }}
		</h2>
		<h2>Age is: {{ student.age }}</h2>
		<button @click="increment">increment</button>
	</div>
</template>