/*
 * @Author: your name
 * @Date: 2021-12-31 23:32:17
 * @LastEditTime: 2022-01-15 13:28:51
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /d3-tree-example/src/router/index.ts
 */
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
      path: '/tree-one',
      name: 'tree-one',
      // route level code-splitting
      // this generates a separate chunk (example.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TreeExample/tree-one.vue'),
    },
    {
      path: '/tree-two',
      name: 'tree-two',
      // route level code-splitting
      // this generates a separate chunk (example.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TreeExample/tree-one.vue'),
    },
    {
      path: '/demoOne',
      name: 'demoOne',
      // route level code-splitting
      // this generates a separate chunk (example.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DemoOne.vue'),
    },
  ],
})

export default router
