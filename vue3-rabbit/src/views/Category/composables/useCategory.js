/**
 * 
 */
import { getCategoryApi } from '@/apis/category'
import { onMounted, ref } from 'vue'
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
export function useCategory() {
    const route = useRoute()
    const router = useRouter()
    const categoryData = ref({})
    const getCategory = async (id = route.params.id) => {
        const resp = await getCategoryApi(id)
        categoryData.value = resp.result
    }
    onMounted(() => {
        console.log(`route ==> `, route)
        console.log(`router ==> `, router)
        getCategory()
    })

    onBeforeRouteUpdate(async (to, from) => {
        getCategory(to.params.id)
    })

    return {
        categoryData,
        getCategory
    }
}