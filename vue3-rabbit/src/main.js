import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

const app = createApp(App)

/**
 * Register pinia plugin.
 */
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

/**
 * Import and registe directives
 */

import { lazyLoadPlugin } from '@/directives/index'
app.use(lazyLoadPlugin)


import { componentPlugin } from '@/components/index'
app.use(componentPlugin)

app.mount('#app')

