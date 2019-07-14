<template>
<v-container v-if="this.article" class="scroll-y">
  <router-link
    v-if="$routerHistory.hasPrevious()"
    :to="{ path: $routerHistory.previous().path }">
   <v-icon large>arrow_back</v-icon>
</router-link>
  <img :src="article.fields.thumbnail" alt="">
  <div class="text">
    <h2>{{article.fields.headline}}</h2>
    <p>{{article.fields.trailText}}</p>
    <v-btn v-on:click="isHidden = !isHidden">Show More</v-btn>
          <p v-if="!isHidden">{{article.fields.bodyText}}</p>
   
  </div>
   <v-btn
    v-scroll="onScroll"
    v-show="fab"
    fab
    fixed
    bottom
    right
    
    @click="toTop">
    <v-icon>keyboard_arrow_up</v-icon>
  </v-btn>
</v-container>
    
</template>
<script>

export default {
    name:'newsarticle',
    props: ["id"],
    methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  },
  data(){
   return{
    fab: false,
    title:"newsarticle",
    article: null,
    isHidden: true
   
  }},
  created(){
  fetch(`https://content.guardianapis.com/${this.id}?show-fields=all&show-elements=all&api-key=985386ca-6d17-4226-a910-3c35ab40e042`)
  .then((response)=>{
          return response.json();})
  .then( (json)=>{
        this.article = json.response.content;
       })}
}
</script>
<style scoped>

h2{
  margin-bottom: 15px;
 
}
p{
  text-align: justify;
}
img{
  width:100%;
}
.v-btn--bottom:not(.v-btn--absolute) {
    bottom: 0px;
}

</style>
