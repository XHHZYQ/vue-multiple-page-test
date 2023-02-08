import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../../pages/index/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/index',
  routes
})

export default router
