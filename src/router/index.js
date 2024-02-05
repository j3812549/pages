import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Layout/index.vue')
    },
    {
      path: '/vuekeepcachescrollhooks',
      name: 'VueKeepCacheScrollHooks',
      redirect: '/vuekeepcachescrollhooks/a',
      component: () => import('@/views/VueKeepCacheScrollHooks/index.vue'),
      children: [
        {
          path: '/vuekeepcachescrollhooks/a',
          name: 'VueKeepCacheScrollHooks-a',
          component: () => import('@/views/VueKeepCacheScrollHooks/a.vue'),
        },
        {
          path: '/vuekeepcachescrollhooks/b',
          name: 'VueKeepCacheScrollHooks-b',
          component: () => import('@/views/VueKeepCacheScrollHooks/b.vue'),
        }
      ]
    }
  ]
})

export default router
