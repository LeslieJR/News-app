import Vue from 'vue'
import Router from 'vue-router'
import VueRouterBackButton, {
  routerHistory,
  writeHistory
} from 'vue-router-back-button'

import AuthSuccess from './components/AuthSuccess.vue';
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
      component: () => import('./views/Login.vue'),

    },
    {
      path: '/SupportChat',
      name: 'supportchat',
      component: () => import('./views/SupportChat.vue'),
      meta: {
        requiresAuth: true
      }
    },


    {
      path: '/success',
      component: AuthSuccess
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
    // {
    //   path: '/supportchat',
    //   name: 'supportchat',
    //   component: () => import('./views/SupportChat.vue'),
    //   meta: {
    //     protected: true
    //   }
    // }

  ]
})

Vue.use(VueRouterBackButton, {
  router,
  ignoreRoutesWithSameName: 'true'
})


// FALTAN COSAS!
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   if (requiresAuth ) {
//     next('/Login');
//   } else {
//     next();
//   }
// });

router.afterEach(writeHistory)

export default router