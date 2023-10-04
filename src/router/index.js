import { createRouter, createWebHistory } from 'vue-router'
import BasicLayout from '../views/layouts/BasicLayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BasicLayout,
      children:[
        {
          path: '/',
          component: () => import('../views/home/HomeView.vue')
        },
        {
          path: 'about',
          component: () => import('../views/core/butter-components/ButterMainPage.vue')
        },
        {
          path: 'fertility',
          component: () => import('../views/core/butter-components/ButterMainPage.vue')
        },
        {
          path: 'infertility',
          component: () => import('../views/core/butter-components/ButterMainPage.vue')
        },
        {
          path: 'patient',
          component: () => import('../views/core/butter-components/ButterMainPage.vue')
        },
        {
          path: 'finance',
          component: () => import('../views/core/butter-components/ButterMainPage.vue')
        },
        {
          path: 'egg-donation',
          component: () => import('../views/core/butter-components/ButterMainPage.vue')
        },
        {
          path: 'blog',
          component: () => import('../views/core/butter-components/ButterMainPage.vue')
        },
        // {
        //   path: 'privacy-policy',
        //   component: ButterPolicyComponent
        // },
        // {
        //   path: 'terms-conditions',
        //   component: ButterPolicyComponent
        // },
        // {
        //   path: 'providers',
        //   component: ProvidersComponent,
        // },
        // {
        //   path: 'referring-providers',
        //   component: ReferringProvidersComponent,
        // },
      ]
    }
    
  ]
})

export default router
