import httpInstance from '@/utils/http'

export function getHomeBanner(params = {}) {
    /**
     * Default is 1
     */
    const { distributionSite = '1' } = params
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}

export function getHomeNew() {
    return httpInstance({
        url: 'home/new'
    })
}

export function getHomeHot() {
    return httpInstance({
        url: 'home/hot'
    })
}

export function getHomeProduct() {
    return httpInstance({
        url: 'home/goods'
    })
}