import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

/**
 * import and registry directives
 */

import { lazyLoadPlugin } from '@/directives/index'
app.use(lazyLoadPlugin)


import { componentPlugin } from '@/components/index'
app.use(componentPlugin)

app.mount('#app')

