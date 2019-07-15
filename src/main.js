import Vue from 'vue'
import firebase from 'firebase'
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

var firebaseConfig = {
  apiKey: "AIzaSyA-37yyjzGUSSU0UP0sYLNJb4R8OTK4vp4",
  authDomain: "news-app-2c25e.firebaseapp.com",
  databaseURL: "https://news-app-2c25e.firebaseio.com",
  projectId: "news-app-2c25e",
  storageBucket: "",
  messagingSenderId: "845576841648",
  appId: "1:845576841648:web:70bbfd9175dc23fb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(VueAwesomeSwiper, /* { default global options } */ )

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')