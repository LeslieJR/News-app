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
  border: 2px solid white;
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
  font-size: 28px;
  text-shadow: 4px 2px black;
  padding-top: 22%;
}
@media (orientation: landscape) {
  .title {
    margin: 10% 16%;
  }
  .image {
    border: 0px;
    height: 320px;
    background-size: inherit;
  }
  .date {
    height: 60px;
  }
}
</style>
