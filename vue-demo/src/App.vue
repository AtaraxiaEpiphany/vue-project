<!-- 
Usually, when we need to pass data from the parent to a child component, we use props.
However, imagine the case where we have a large component tree,
and a deeply nested component needs something from a distant ancestor component.
With only props, we would have to pass the same prop across the entire parent chain.
 -->

<script setup>

import { ref, provide } from 'vue';
import Child_1 from './components/Child_1.vue'
const input = ref('Some message passed to descendant component...')
provide('message', input)

</script>

<template>
	<div>
		<input v-model="input">
		<Child_1 />
	</div>
</template>
<style></style>
