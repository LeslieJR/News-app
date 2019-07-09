import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import ('./views/Home.vue')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: ()=> import ('./views/Jobs.vue')
    },
    {
      path: '/section',
      name: 'section',
      component: ()=> import ('./views/Section.vue')
    },
    {
      path: '/filtered-news',
      name: 'filtered-news',
      component: ()=> import ('./views/FilteredNews.vue')
    },
    {
      path: '/newsarticle/:id(.*)',
      props: true, //this is important!
      name: 'newsarticle',
      component: ()=> import ('./views/NewsArticle.vue')
    }
    
  ]
})
