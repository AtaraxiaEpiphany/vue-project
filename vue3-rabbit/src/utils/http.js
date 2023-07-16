import axios from "axios"
import { useUserStore } from "@/stores/user"
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
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
    return Promise.reject(error)
})
export default httpInstance