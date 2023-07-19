
import httpInstance from "@/utils/http"

export const insertCartAPI = ({ skuId, count }) => {
    return httpInstance({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

export const findNewCartListAPI = () => {
    return httpInstance({
        url: 'member/cart',
    })
}

// 删除购物车
export const delCartAPI = (ids) => {
    return httpInstance({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}

export const mergeCartList = (data) => {
    return httpInstance({
        url: '/member/cart/merge',
        method: 'POST',
        data
    })

}