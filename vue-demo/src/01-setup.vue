<!-- <script>
export default {
	setup() {
		console.log(`setup...`);
		const message = 'this is a message.'
		const showMessage = ()=>{
			console.log(`message ==> ${message}`);
		}
		return{
			message,
			showMessage,
		}
	},
	beforeCreate() {
		console.log(`before create..`);
	}
}
</script> -->
<!-- ######语法糖 -->

<script setup>
const message = 'this is a message.'
const showMessage = () => {
	console.log(`message ==> ${message}`);
}
</script>

<template>
	<div>
		{{ message }}
		<button @click="showMessage">log</button>
	</div>
</template>

<style scoped></style>