import { defineStore, storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { delCartAPI, findNewCartListAPI, insertCartAPI } from '@/apis/cart'


export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    const cartList = ref([])

    const updateNewList = async () => {
        const resp = await findNewCartListAPI()
        cartList.value = resp.result
    }
    const addCart = async (goods) => {
        if (isLogin.value) {
            const { skuId, count } = goods
            insertCartAPI({ skuId, count })
            updateNewList()
        } else {
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
    }
    const deleteCart = async (id) => {
        if (isLogin) {
            delCartAPI([id])
            updateNewList()
        } else {
            cartList.value = cartList.value.filter((item) => item.skuId !== id)
        }
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

    const singleCheck = (skuId, selected) => {
        const item = cartList.value.find((item) =>
            skuId === item.skuId
        )
        item.select = selected
    }

    const isAll = computed(() => {
        return cartList.value.length > 0 && cartList.value.every((item) => item.select === true)
    })

    const selectAll = (selected) => {
        cartList.value.forEach(item => item.select = selected)
    }

    const selectedCount = computed(() => {
        return cartList.value
            .filter(item => item.select)
            .reduce((previous, current) => {
                return previous + current.count
            }, 0)
    })

    const selectedPrice = computed(() => {
        return cartList.value
            .filter(item => item.select)
            .reduce((previous, current) => {
                return previous + current.count * current.price
            }, 0)
    })

    const clearCartList = () => {
        cartList.value = []
    }

    return {
        cartList,
        addCart,
        deleteCart,
        cartCount,
        cartPrice,
        singleCheck,
        isAll,
        selectAll,
        selectedCount,
        selectedPrice,
        clearCartList,
        updateNewList,
    }
}, {
    persist: true
})