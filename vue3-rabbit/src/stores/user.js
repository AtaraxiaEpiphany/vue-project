import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { loginAPI } from '@/apis/user'
import { useCartStore } from '@/stores/cart'

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const cartStore = useCartStore()
    const getUserInfo = async ({ account, password }) => {
        const resp = await loginAPI({ account, password })
        userInfo.value = resp.result
        cartStore.updateNewList()
    }
    const clearInfo = () => {
        userInfo.value = {}
        cartStore.clearCartList()
    }
    return {
        userInfo,
        getUserInfo,
        clearInfo,
    }
}, {
    /**
     * Add the persist option to the store you want to be persisted:
     */
    persist: true,
})