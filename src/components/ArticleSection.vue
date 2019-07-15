<template>
  <div class="flex">
    <img :src="result.fields.thumbnail" />
    <div class="content">
      <router-link v-bind:to="'/NewsArticle/' + result.id">
        <h3>{{ result.webTitle }}</h3>
      </router-link>
      <p>{{ result.fields.trailText }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArticleSection",
  props: ["result"],
  data() {
    return {};
  }
};
</script>
<style scoped>
.flex {
  display: flex;
  padding: 10px;
}
.content {
  margin: 0 30px;
}
img {
  width: 40%;
  height: 40%;
}
a {
  color: black;
  font-size: 12px;
}
p {
  font-size: 10px;
}
</style>
