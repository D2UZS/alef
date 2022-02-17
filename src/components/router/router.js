import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/components/pages/MainPage'
import ProductPage from '@/components/pages/ProductPage'

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/product/:id',
    component: ProductPage,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router
