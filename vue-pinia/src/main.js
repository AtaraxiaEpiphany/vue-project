import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
/*
Create a pinia instance (the root store) 
and pass it to the app as a plugin:
*/
app.use(pinia)
app.mount('#app')