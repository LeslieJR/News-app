import Vue from 'vue'
import auth from './auth'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll)
// require styles
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;



Vue.use(VueAwesomeSwiper, /* { default global options } */ )

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate() {
    auth.init(this)
  },
  render: h => h(App)
}).$mount('#app')