import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { loginAPI } from '@/apis/user'
import { mergeCartList } from '@/apis/cart'
import { useCartStore } from '@/stores/cart'

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const cartStore = useCartStore()
    const getUserInfo = async ({ account, password }) => {
        const resp = await loginAPI({ account, password })
        userInfo.value = resp.result
        await mergeCartList(cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.select,
                count: item.count
            }
        }))
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