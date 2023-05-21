import { defineStore } from 'pinia'
import { getCategoryApi } from '@/apis/layout'
import { ref, computed } from 'vue'
export const useCategoryStore = defineStore('category', () => {

    const categoryList = ref([])
    const getCategory = () => {
        getCategoryApi().then(resp => {
            console.log(`resp ==> `, resp);
            categoryList.value = resp.result
        })
    }
    return {
        categoryList,
        getCategory,
    }
})