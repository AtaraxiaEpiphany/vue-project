import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([])
    const addCart = (goods) => {
        const item = cartList.value.find((item) =>
            goods.skuId === item.skuId
        )
        // console.log(`item ==> `, item);
        if (item) {
            item.count += goods.count
        } else {
            cartList.value.push(goods)
        }
    }
    const deleteCart = (id) => {
        cartList.value = cartList.value.filter((item) => item.skuId !== id)
    }

    const cartCount = computed(() => {
        return cartList.value.reduce((accumulator, current) => {
            return accumulator + current.count
        }, 0)
    })

    const cartPrice = computed(() => {
        return cartList.value.reduce((accumulator, current) => {
            return accumulator + current.count * current.price
        }, 0)
    })
    return {
        cartList,
        addCart,
        deleteCart,
        cartCount,
        cartPrice,
    }
}, {
    persist: true
})