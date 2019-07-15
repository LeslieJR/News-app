import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyA-37yyjzGUSSU0UP0sYLNJb4R8OTK4vp4",
  authDomain: "news-app-2c25e.firebaseapp.com",
  databaseURL: "https://news-app-2c25e.firebaseio.com",
  projectId: "news-app-2c25e",
  storageBucket: "",
  messagingSenderId: "845576841648",
  appId: "1:845576841648:web:70bbfd9175dc23fb"
};

const app = firebase.initializeApp(firebaseConfig);
Vue.use(Vuex)
const state = {
  app
}
export default new Vuex.Store({
  state
})