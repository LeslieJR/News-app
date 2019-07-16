<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>
<script>
import firebase from "firebase";
import firebaseui from "firebaseui";
// import { config } from "../helpers/firebaseConfig";
// var firebaseConfig = {
//   apiKey: "AIzaSyA-37yyjzGUSSU0UP0sYLNJb4R8OTK4vp4",
//   authDomain: "news-app-2c25e.firebaseapp.com",
//   databaseURL: "https://news-app-2c25e.firebaseio.com",
//   projectId: "news-app-2c25e",
//   storageBucket: "",
//   messagingSenderId: "845576841648",
//   appId: "1:845576841648:web:70bbfd9175dc23fb"
// };
export default {
  name: "Auth",
  mounted() {
    var uiConfig = {
      signInSuccessUrl: "/",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ]
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>