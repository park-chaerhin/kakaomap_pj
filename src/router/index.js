import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase/compat/app'

Vue.use(VueRouter)


const routes = [
    {
      path: '/',
      name: 'intro_page',
      component: () => import('../components/intro_page.vue')
    },
    {
      path: '/login',
      name: 'login_page',
      component: () => import('../components/login_page.vue')
    },
    {
      path: '/main',
      name: 'main_page',
      component: () => import('../components/main_page.vue')
    },
    {
      path: '/help',
      name: 'help_page',
      component: () => import('../components/help_page.vue'),
      // meta: {bAuth: true}
    },
    {
      path: '/add',
      name: 'add_page',
      component: () => import('../components/add_page.vue'),
        /*
        인증결과가 true여야 등록페이지 갈 수 있어
        -> 비정상적 접근 : 로그인 페이지로 유도 (router.beforeEach()에 정의)
        */
      // meta: {bAuth: true}  
    },
    {
      path: '/detail',
      name: 'detail_page',
      component: () => import('../components/detail_page.vue')
    },
  ]

  const router = new VueRouter({
    routes
  })

  // router.beforeEach((to, from, next) => {
  //   const bNeedAuth = to.matched.some(record => record.meta.bAuth)
  //   const bCheckAuth = firebase.auth().currentUser /// : 현재 사용자가 있냐?
  //   if(bNeedAuth && !bCheckAuth) { /// : 현재사용자가 인증페이지 데이터베이스에 없으면~
  //     next('/login') /// foreach 완료 이후 실행method = next 
  //   } else{ /// : 인증받은 사용자는 다음 라우터 주소로 이동~
  //     next()
  //   }
  // })
  
export default router
