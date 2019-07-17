<template>
  <div>
    <router-link
      v-if="$routerHistory.hasPrevious()"
      :to="{ path: $routerHistory.previous().path }"
    >
      <v-icon large>arrow_back</v-icon>
    </router-link>
    <h1 class="sigin">Sign in</h1>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import auth from "../auth";

export default {
  name: "auth",
  mounted() {
    auth.authForm("#firebaseui-auth-container");
  }
};
</script>

<style>
</style>
