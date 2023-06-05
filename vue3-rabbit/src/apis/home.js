import httpInstance from '@/utils/http'

export function getHomeBanner(){
    return httpInstance({
        url:'/home/banner'
    })
}