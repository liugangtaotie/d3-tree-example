import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home',
      redirect: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/main',
      name: 'main',
      component: MainView,
    },
    {
      path: '/example',
      name: 'example',
      // route level code-splitting
      // this generates a separate chunk (example.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VueTreeExample.vue'),
    },
  ],
})

export default router
