<!-- pass args to parent component -->
<script setup>
/*
a parent component referencing a child component using <script setup> won't be able to access anything 
unless the child component chooses to expose a public interface using the defineExpose macro.
 */
import { ref } from 'vue';
const cnt = ref(0)
const emit = defineEmits({
    // No validation
    click: null,

    // Validate  event
    callback: (str, num) => {
        if (typeof num === 'number') {
            return true
        } else {
            alert(`num must be a Number!`)
            return false
        }
    }
})
const cb = () => {
    cnt.value++
    emit('callback', `some args passed by child component...`, cnt.value)
    // emit('callback', `test validation...`, cnt.value + '####')
}
defineExpose({
    cnt,
    cb
})


console.log(`emit ==> `, emit);
</script>

<template>
    <h2>Child Component</h2>
    <h2>{{ cnt }}</h2>
    <button @click="cb">click to pass args to parent component</button>
</template>

<style scoped>
h2 {
    text-align: center;
}
</style>