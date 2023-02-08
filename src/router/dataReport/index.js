
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/pc',
    name: 'pc',
    component: () => import(/* webpackChunkName: "pc" */ '../../pages/dataReport/pc.vue')
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: () => import(/* webpackChunkName: "mobile" */ '../../pages/dataReport/mobile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/data-report',
  routes
})

export default router
