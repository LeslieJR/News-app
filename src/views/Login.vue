<template>
  <div class="login">
    <h3>Sign In</h3>
    <v-flex>
      <v-text-field
        type="email"
        v-model="email"
        name="email"
        placeholder="email"
      ></v-text-field>
    </v-flex>
    <v-flex>
      <v-text-field
        type="password"
        v-model="password"
        name="password"
        placeholder="email"
      ></v-text-field>
    </v-flex>

    <v-btn v-on:click="login">Sign</v-btn>
    <p>or</p>
    <div class="social">
      <img src="../assets/google-sign-in.png" alt="google logo" />
      <v-btn class="social-button" v-on:click="socialLogin">
        Sign In with Google
      </v-btn>
    </div>

    <p>
      You don't have an account? You can
      <router-link to="/signup">create one</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password);
    },
    socialLogin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.replace("home");
        });
    }
  }
};
</script>
<style scoped>
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 50%;
  padding: 15px;
  border: 1px solid black;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
.social {
  display: flex;
}
.social-button {
  width: 150px;
  height: 40px;
  padding: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}
.social-button:active {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0, 0.1);
}
.social-button img {
  width: 150px;
  height: 40px;
}
img {
  width: 48px;
  height: 40px;
  align-self: flex-end;
}
</style>
