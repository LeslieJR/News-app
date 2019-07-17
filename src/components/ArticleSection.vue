<template>
  <div class="flex">
    <img class="thumbnail" :src="result.fields.thumbnail" />
    <div class="content">
      <router-link v-bind:to="'/NewsArticle/' + result.id">
        <h2 class="webtitle">{{ result.webTitle }}</h2>
      </router-link>
      <p class="trailtext">{{ result.fields.trailText }}</p>
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
h2 {
  font-size: 12px;
}
</style>
