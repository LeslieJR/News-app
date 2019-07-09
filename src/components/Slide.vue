<template>
    <swiper-slide>
          <div class="image" v-bind:style="{ backgroundImage: 'url(' + article.fields.thumbnail + ')'}">
              <div class="content">
                  <div class="title">
                      <router-link v-bind:to="'/NewsArticle/'+ article.id"><h2>{{article.fields.headline}}</h2></router-link>
                  </div>
                  <!-- <div class="text">
                    <p>{{article.fields.bodyText}}</p>
                  </div> -->
              </div>
          </div>
        </swiper-slide>
</template>
<script>
import 'swiper/dist/css/swiper.css'


export default {
    name: "Slide",
    props: ['article'] 
}
</script>
<style>
.image{
    padding: 0 50px;
    height: 250px;
    background-size: contain;
    display: flex;
    /* flex-direction: column;
    justify-content: space-around; */
}
.content{
    background-color:rgba(193, 209, 209, 0.4);
    height: 60px;
    width: 300px;
    margin-top: 70px;
}
</style>
