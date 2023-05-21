<!-- 
It allows us to obtain a direct reference 
to a specific DOM element or child component instance after it's mounted.
 -->
<script setup>
import { ref, onMounted } from 'vue'
import Child from './components/Child.vue';

// declare a ref to hold the element reference
// the name must match template ref value
const input = ref(null)
const list = ref([
	'j', 'y', 'y'
])

/*When ref is used inside v-for,
the corresponding ref should contain an Array value,
which will be populated with the elements after mount. */
const itemRefs = ref([])
const child = ref(null)
onMounted(() => {
	input.value.value = `set input value...`
	console.log(`input ==> `, input);
	console.log(`itemRefs ==> `, itemRefs);
	console.log(`child vlue ==> `, child);
	console.log(`set cnt value to 666...`);
	child.value.cnt = 666
})
</script>

<template>
	<div>
		<input ref="input" />
		<ul>
			<li v-for="item in list" ref="itemRefs">
				{{ item }}
			</li>
		</ul>
		<Child ref="child" />
	</div>
</template>