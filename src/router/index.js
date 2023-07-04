import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/main_page.vue'
import Join from '../components/join_page.vue'
import Login from '../components/login_page.vue'
import Add from '../components/add_page.vue'
import Detail from '../components/detail_page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main_page',
    component: Main
  },
  {
    path: '/join',
    name: 'join_page',
    component: Join
  },
  {
    path: '/login',
    name: 'login_page',
    component: Login
  },
  {
    path: '/add',
    name: 'add_page',
    component: Add
  },
  {
    path: '/detail',
    name: 'detail_page',
    component: Detail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
