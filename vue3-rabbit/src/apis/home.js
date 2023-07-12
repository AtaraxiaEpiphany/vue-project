import httpInstance from '@/utils/http'

export function getHomeBanner() {
    return httpInstance({
        url: '/home/banner'
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