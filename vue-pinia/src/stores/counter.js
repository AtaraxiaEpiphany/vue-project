// stores/counter.js
import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'

// mehtod 1:option store

export const useCounterStore = defineStore('counter', {
    state: () => {
        return { count: 0 }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            console.log(`this ==> `, this);
            this.count++
        },
    },
})

// methed 2:setup store
export const useStudentStore = defineStore('student', () => {
    const student = reactive({
        'first-name': 'zhang',
        'last-name': 'san',
        age: 18
    })
    const name = computed(() => {
        return student['first-name'] + student['last-name']
    })
    const grow = () => {
        student.age++
    }
    return {
        student,
        name,
        grow,
    }
})