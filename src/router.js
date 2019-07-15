import Vue from 'vue'
import Router from 'vue-router'
import VueRouterBackButton, {
  routerHistory,
  writeHistory
} from 'vue-router-back-button'

Vue.use(Router)
Vue.use(routerHistory)


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/section/:sectionName/:subsection',
      props: true,
      name: 'section',
      component: () => import('./views/Section.vue')
    },
    {
      path: '/newsarticle/:id(.*)',
      props: true, //this is important!
      name: 'newsarticle',
      component: () => import('./views/NewsArticle.vue')
    }

  ]
})

Vue.use(VueRouterBackButton, {
  router,
  ignoreRoutesWithSameName: 'true'
})

router.afterEach(writeHistory)

export default router