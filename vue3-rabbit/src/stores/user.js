import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { loginAPI } from '@/apis/user'
import { useInfiniteScroll } from '@vueuse/core'
export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const getUserInfo = async ({ account, password }) => {
        const resp = await loginAPI({ account, password })
        userInfo.value = resp.result
    }
    return {
        userInfo,
        getUserInfo,
    }
}, {
    /**
     * Add the persist option to the store you want to be persisted:
     */
    persist: true,
})