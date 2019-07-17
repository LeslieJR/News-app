<template>
  <swiper-slide>
    <div
      class="image"
      v-bind:style="{
        backgroundImage: 'url(' + article.fields.thumbnail + ')'
      }"
    >
      <div class="content">
        <div class="title">
          <router-link v-bind:to="'/NewsArticle/' + article.id"
            ><h1>{{ article.fields.headline }}</h1></router-link
          >
        </div>
      </div>
    </div>
  </swiper-slide>
</template>
<script>
import "swiper/dist/css/swiper.css";

export default {
  name: "Slide",
  props: ["article"]
};
</script>
<style scoped>
.image {
  padding: 0 50px;
  height: 225px;
  background-size: contain;
  display: flex;
  background-position-x: center;
  /* background-image: linear-gradient(
    rgba(170, 195, 198, 0.3),
    rgba(82, 56, 93, 0.4)
  ); */
  /* flex-direction: column;
    justify-content: space-around; */
}
a {
  color: white;
}
h1 {
  font-size: 22px;
  margin-right: 15px;
  margin-left: 15px;
}
.title h1 {
  font-size: 25px;
  padding: 14% 0px;
}
</style>
