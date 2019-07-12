<template>

<v-container v-if="response">
    <v-card>
        <div class="data">
        <v-text-field class='input'
                    v-model="inputText"
                    label="Search"
                    prepend-inner-icon="search"
                    >
        </v-text-field>
        <div class="items">
            <v-card-title>{{response.list[0].name}}</v-card-title>
            <v-card-text>{{response.list[0].main.temp}}ºC</v-card-text> 
            <div class="icon">
                <img :src="`http://openweathermap.org/img/wn/${response.list[0].weather[0].icon}@2x.png`">
                <p>{{response.list[0].weather[0].description}}</p>
            </div>
        </div>
        
        </div> 
   </v-card>
    
</v-container>
</template>
<script>
export default {
    data() {
        return {
            response: null,
            inputText:""
        }
    },
    created() {
         fetch('https://api.openweathermap.org/data/2.5/find?q=London,uk&units=metric&APPID=bfce8269b6c00387911952a335344255')
    .then((response)=>{
          return response.json();})
    .then((json)=>{
      this.response=json
      })
    },
    watch: {        
        inputText: function(){
             fetch(`https://api.openweathermap.org/data/2.5/find?q=${this.inputText}&units=metric&APPID=bfce8269b6c00387911952a335344255`)
    .then((response)=>{
          return response.json();})
    .then((json)=>{
      this.response=json
      })

        }
    }
}
</script>
<style>
.input{
    width: 150px;
}
.data{
    margin-left: 50px;
}
.items{
    display: flex;
    align-items: center;
}
</style>
