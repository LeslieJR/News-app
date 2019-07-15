<template>
<div>
  <!-- weather component -->
  <weather></weather>
  <!-- headlines -->
  <h1 class="title">Breaking News</h1>
    <!-- swiper component -->
  <swiper :options="swiperOption">
    <slide v-for="article in articles" :key="article.id" :article='article'></slide>
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
    </swiper>
</div>
    
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper } from 'vue-awesome-swiper'

import weather from '../components/Weather'

import slide from '../components/Slide'
 export default {
   name: 'home',
   components: {
   swiper,
   slide,
   weather
 },
  created(){
    fetch("https://content.guardianapis.com/search?&order-by=newest&show-fields=headline,thumbnail&api-key=985386ca-6d17-4226-a910-3c35ab40e042"
    )
    .then((response)=>{
          return response.json();})
    .then( (json)=>{
        this.articles = json.response.results;
       });
},   
   data() {
     return {
        articles:null,
        swiperOption: {
          speed: 600,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
     }
   }}
 }
</script>
<style scoped>

.swiper-slide{
    margin-top: 50px;
}
.subtitle{
    margin-left:50px;
}
.title{
  margin: 0 25%;
}
.swiper-button-prev, .swiper-button-next {
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    margin-top: 0px;
    z-index: 10;
    cursor: pointer;
    background-size: 27px 44px;
    background-position: center;
    background-repeat: no-repeat;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 10px;
    left: 0;
    width: 100%;
}



</style>
