<template>
  <div class="signup">
    <p>Let's create a new account!</p>
    <v-flex>
      <v-text-field
        name="email"
        type="email"
        v-model="email"
        placeholder="Email"
      ></v-text-field>
    </v-flex>
    <v-flex>
      <v-text-field
        name="password"
        type="password"
        v-model="password"
        placeholder="Password"
      ></v-text-field>
    </v-flex>

    <v-btn>Sign up</v-btn>
    <span>or go back to <router-link to="/login">Login</router-link></span>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "signup",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signup() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
    }
  }
};
</script>
<style scoped>
.signup {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
  border: 1px solid solid;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
