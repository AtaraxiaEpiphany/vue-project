import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Deatail from '@/views/Detail/index.vue'
import CartList from '@/views/Cart/index.vue'
// Define some routes
// Each route should map to a component.
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      //Default Home Component
      {
        path: '',
        component: Home
      },
      {
        path: 'category/:id',
        component: Category
      },
      {
        path: 'category/sub/:id',
        component: SubCategory
      },
      {
        path: 'detail/:id',
        component: Deatail
      },
      {
        path: 'cartlist',
        component: CartList
      },
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),

  routes,

  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
