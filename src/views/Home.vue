<template>
  <div class="home">
    <!-- headlines -->
    <div class="subsection">
      <h1>Breaking News</h1>
    </div>
    <!-- swiper component -->
    <swiper :options="swiperOption">
      <slide
        v-for="article in articles"
        :key="article.id"
        :article="article"
      ></slide>
      <div
        class="swiper-pagination swiper-pagination-white"
        slot="pagination"
      ></div>
      <div
        class="swiper-button-prev swiper-button-black"
        slot="button-prev"
      ></div>
      <div
        class="swiper-button-next swiper-button-black"
        slot="button-next"
      ></div>
    </swiper>
    <!-- weather component -->
    <weather></weather>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper } from "vue-awesome-swiper";

import weather from "../components/Weather";

import slide from "../components/Slide";
export default {
  name: "home",
  components: {
    swiper,
    slide,
    weather
  },
  created() {
    fetch(
      "https://content.guardianapis.com/search?&order-by=newest&show-fields=headline,thumbnail&api-key=985386ca-6d17-4226-a910-3c35ab40e042"
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.articles = json.response.results;
      });
  },
  data() {
    return {
      articles: null,
      swiperOption: {
        speed: 600,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>
<style scoped>
/*.swiper-slide {
  margin-top: 50px;
}*/
.subsection {
  display: flex;
  justify-content: center;
  background-color: black;
}
/*.subtitle {
  margin-left: 50px;
}*/
h1 {
  color: white;
  font-size: -webkit-xxx-large;
}

/*.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  width: 27px;
  height: 44px;
  margin-top: 0px;
  z-index: 10;
  cursor: pointer;
  color: aqua;
  background-size: 27px 44px;
  background-position: center;
  background-repeat: no-repeat;
}*/
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 10px;
  left: 0;
  width: 100%;
}
.home {
  height: 100vh;
  /* background-image: url("https://wallpaperplay.com/walls/full/3/3/e/38927.jpg"); */
}
@media (orientation: landscape) {
  .swiper-button-prev {
    left: 30px;
  }
  .swiper-button-next {
    right: 30px;
  }
  .home {
    height: 140vh;
    /* background-image: url("https://wallpaperplay.com/walls/full/3/3/e/38927.jpg"); */
  }
  .swiper-container-horizontal > .swiper-pagination-bullets[data-v-fae5bece] {
    bottom: 25px;
    left: 0;
    width: 100%;
  }
  .swiper-slide[data-v-fae5bece] {
    margin-top: 30px;
  }
}
</style>
