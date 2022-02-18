import { createRouter, createWebHistory } from 'vue-router'

import FormPage from '@/components/pages/FormPage'
import PreviewPage from '@/components/pages/PreviewPage'

const routes = [
  {
    path: '/',
    component: FormPage,
  },
  {
    path: '/preview',
    component: PreviewPage,
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router
