import { createRouter, createWebHistory } from 'vue-router'
import BasicLayout from '../views/layouts/BasicLayout.vue'
const MainPage = () => import('../views/core/butter-components/MainPage.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BasicLayout,
      children: [
        {
          path: '/',
          component: () => import('../views/home/HomeView.vue'),
        },
        {
          path: 'about',
          component: MainPage,
          children: [
            {
              path: "facilities-location", component: MainPage
            },
            {
              path: "facilities-location/:location", component: MainPage
            },
            {
              path: "success-rate", component: MainPage
            },
            {
              path: "referring-providers", component: MainPage
            },
            {
              path: "providers", component: MainPage
            },
            {
              path: "fertility-doctors/:doctor", component: MainPage
            },
            {
              path: "Physicians", component: MainPage
            }
          ]
        },
        {
          path: 'fertility',
          component: MainPage,
          children: [
            { path: "ivf", component: MainPage },
            { path: "genetic-screening", component: MainPage },
            { path: "elective-egg-freezing", component: MainPage },
            { path: "modified-natural-ivf", component: MainPage },
            { path: "micromanipulation", component: MainPage },
            { path: "iui", component: MainPage },
            { path: "fertility-medications", component: MainPage },
            { path: "minimally-invasive-robotic-surgery", component: MainPage },
            { path: "miscarriage", component: MainPage },
            { path: "genetic-testing", component: MainPage },
            { path: "hsg", component: MainPage },
            { path: "fertility-preservation-women", component: MainPage },
          ]
        },
        {
          path: 'infertility',
          component: MainPage,
          children: [
            { path: 'female', component: MainPage },
            { path: 'male', component: MainPage },
            { path: 'testing', component: MainPage },
          ]
        },
        {
          path: 'patient',
          component: MainPage,
          children: [
            { path: 'faq', component: MainPage },
            { path: 'telemedicine-consultation', component: MainPage },
          ]
        },
        {
          path: 'finance',
          component: MainPage,
          children: [
            { path: 'insurance', component: MainPage },
          ]
        },
        {
          path: 'egg-donation',
          component: MainPage,
          children: [
            { path: 'crm-egg-bank', component: MainPage },
            { path: 'gestational-carrier', component: MainPage },
            { path: 'eggdonor', component: MainPage },
          ]
        },
        {
          path: 'blog',
          component: MainPage
        },
        {
          path: 'providers',
          component: MainPage
        },
        {
          path: 'referring-providers',
          component: MainPage
        },
        {
          path: 'fertility-preservation-men',
          component: MainPage
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
    },
    // {
    //   path: '/:pathMatch(.*)*', redirect: '/', sensitive: true
    // }

  ]
})
// router.beforeEach((to, from, next) => {
//   console.log(to);
//   next()
// })
export default router
