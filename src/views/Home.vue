<template>
<div>
      <weather></weather>
      <!-- swiper -->
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
   name: 'carrousel',
   components: {
   swiper,
   slide,
   weather
 },
  created(){
    fetch("https://content.guardianapis.com/search?&order-by=newest&show-fields=headline,thumbnail&api-key=985386ca-6d17-4226-a910-3c35ab40e042",{
      headers: {
        "Content-Type": "application/json"
      }
    })
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
<style>

.swiper-slide{
    margin-top: 50px;
}
.subtitle{
    margin-left:50px;
}
h1{
margin-top: 30%;
background-color: rgba(49, 60, 90,0.5);
text-align: left; 
}





</style>
