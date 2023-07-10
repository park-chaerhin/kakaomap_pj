import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'main_page',
      component: () => import('../components/main_page.vue')
    },
    {
      path: '/join',
      name: 'join_page',
      component: () => import('../components/join_page.vue')
    },
    {
      path: '/login',
      name: 'login_page',
      component: () => import('../components/login_page.vue')
    },
    {
      path: '/add',
      name: 'add_page',
      component: () => import('../components/add_page.vue')
      ,
      /*
      인증결과가 true여야 등록페이지 갈 수 있어
      -> 비정상적 접근 : 로그인 페이지로 유도 (router.beforeEach()에 정의)
      meta: {bAuth: true}  
      */
    },
  ]

  const router = new VueRouter({
    routes
  })


export default router
