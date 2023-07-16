import axios from "axios"
import { useUserStore } from "@/stores/user"
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
/**
 * Warn:inject() can only be used inside setup() or functional components.
 */
// import { useRouter } from 'vue-router'
import router from "@/router"
//Axios instance
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})
// Add a request interceptor
httpInstance.interceptors.request.use(config => {
    // Do something before request is sent
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, error => {
    // Do something with request error
    return Promise.reject(error);
})

// Add a response interceptor
httpInstance.interceptors.response.use(response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
}, error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    ElMessage({
        type: 'error',
        message: error.response.data.message
    })
    /**
     * Deal 401 token.
     */
    console.log(`Error response ==> `, error)
    if (error.response.status === 401) {
        const userStore = useUserStore()
        router.push('/login')
        userStore.clearInfo()
    }
    return Promise.reject(error)
})
export default httpInstance