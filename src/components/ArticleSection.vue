<template>
    <div>
        <img :src="result.fields.thumbnail"/>
        <div class="content">
          <router-link  v-bind:to="'/NewsArticle/'+ result.id">
            <h3>{{result.webTitle}}</h3>
          </router-link>
          <p>{{result.fields.trailText}}</p>
          
        </div>
    </div>
</template>
<script>
export default {
    name: "ArticleSection",
    props: ['result'],
    data() {
        return{
   
        }
  }
}
</script>
<style>
.content{
    margin: 0 30px;
}
 img{
    width: 100%;
   
} 
a{
    color: black;
}

</style>
