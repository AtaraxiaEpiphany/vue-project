
<script setup>
import { inject } from 'vue'

const message = inject('message')


// `value` will be "default value"
// if no data matching "message" was provided
const value = inject('message', 'default value')

</script>

<template>
    <p>
        Message to grand child:
    </p>
    <p>
        {{ message }}
    </p>
    <p>Defalut inject value:</p>
    <p>{{ value }}</p>
</template>

<style scoped>
p {
    background-color: yellowgreen;
}
</style>