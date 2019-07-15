<template>

<v-container v-if="response" >
    <v-card> 
 
      <v-text-field class='input'
                    v-model="inputText"
                    
              placeholder="City Name"
                    prepend-inner-icon="search"

                    v-on:keyup.enter="input(inputText)">
      </v-text-field>

      <v-data-table
    :headers="headers" hide-headers
    :items="items"
    hide-actions
  >
      <template v-slot:items="props" >
      <tr>
          <td>{{ props.item.Location }}</td>
          <td>{{ props.item.Temperature }}ºC</td>
          <td><img :src="props.item.Icon"></td>
      </tr>
      <!-- <tr>
          <td>{{ props.item.Description }}</td>
          
      </tr> -->
      </template>
      </v-data-table>
   
    <!-- <div>
        
        <p>{{city}}</p>
        <button @click="getInfo()">Click Me</button>
        </div> -->
    
    </v-card>

</v-container>
</template>
<script>
export default {
    data() {
        return {
            response: null,
            
            inputText:"",
            
            error: '',
            lat:'',
            lon:'',
            headers: [
        { text: "Location",sortable: false, value: "Location" },
        { text: "Temperature", sortable: false, value: "Temperature" },
        { text: "Description", sortable: false, value: "Description" },
        // { text: "Icon", sortable: false, value: "Icon" }
            ]
    }},
    created() {
        // call the method 'getCoodinates' which before finishing call the 'getCity' function which finallycalls the 'input' function
        this.getCoordinates();
    },
     methods:{
         input(city){
            fetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&APPID=bfce8269b6c00387911952a335344255`).then((response)=>{
                return response.json();
                }).then((json)=>{
                    this.response=json
                    this.inputText=''
                    })
      },
        //getCoordinates we access the lat and lon data of the user (current position) and then reverse geolocation to get the city name (by calling 'getCity' function)
        getCoordinates() {	
            
            let that = this;	
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=> {
        that.lat = position.coords.latitude;
        that.lon = position.coords.longitude;
        that.getCity();
    })}
   
	},
        getCity(){
            fetch(`https://eu1.locationiq.com/v1/reverse.php?key=8ed4ccfddf4744&lat=${this.lat}&lon=${this.lon}&format=json`)
            .then((response)=>response.json())
            .then(
                 (response) => {
                
                this.inputText=response.address.city;
                this.input(this.inputText)
  })
    }
    },
    // created(){
    //     this.getCoordinates;
    //      console.log(this.lon,this.lat)
    
  computed: {
        items() {return [{Location: this.response.list[0].name,Temperature: this.response.list[0].main.temp,Description: this.response.list[0].weather[0].description,Icon: `http://openweathermap.org/img/wn/${this.response.list[0].weather[0].icon}@2x.png`}]
            },
        

    
  
}}

</script>
<style scoped>
.input{
    width: 150px;
    }
.input,
table{
    margin-left: 20px;
}
.v-table__overflow {
    width: 90%;
}
v-input__control{
    height: 30px;
}
table.v-table tbody td{
    font-size: 19px;
    font-weight: 400;
}
child, table.v-table tbody td:not(:first-child){
    padding: 0 10px;
}



</style>