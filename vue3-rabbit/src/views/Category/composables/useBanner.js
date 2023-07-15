/**
 * 通过use+业务名称封装业务逻辑,
 * 返回对象并在调用处结构赋值.
 */
import { onMounted, ref } from 'vue'
import { getHomeBanner } from '@/apis/home'
export function useBanner() {
    const bannerUrls = ref()
    const getBanner = async () => {
        const resp = await getHomeBanner({
            distributionSite: '2'
        })
        bannerUrls.value = resp.result
    }
    onMounted(() => {
        getBanner()
    })
    return {
        bannerUrls,
    }
}


