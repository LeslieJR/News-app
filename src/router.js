import Vue from 'vue'
import Router from 'vue-router'
import auth from './auth'
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
      path: '*',
      redirect: '/home'
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('./views/Auth.vue'),

    },
    {
      path: '/supportchat',
      name: 'supportchat',
      component: () => import('./views/SupportChat.vue'),
      meta: {
        requiresAuth: true
      }
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
    },


  ]
})

Vue.use(VueRouterBackButton, {
  router,
  ignoreRoutesWithSameName: 'true'
})

router.afterEach(writeHistory)

export default router
router.beforeEach((to, from, next) => {
  console.log(from.path, to.path)
  let currentUser = auth.user()
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('/auth')
  else next()
})