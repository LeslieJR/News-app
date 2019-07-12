<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app class="blue-grey">
          <v-list>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            no-action
            >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title class="white--text">{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>            
            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.title">
              <v-list-tile-content>
                <router-link :to='subItem.route'><v-list-tile-title class="white--text">{{ subItem.title }}</v-list-tile-title></router-link>
              </v-list-tile-content>
            </v-list-tile>            
          </v-list-group>
        </v-list>
        <v-divider></v-divider>
        <v-list-tile>
                <v-list-tile-content>
                  <router-link :to="'/jobs'"><v-list-tile-title class="white--text">Job Opportunities</v-list-tile-title></router-link>
                  
                </v-list-tile-content>
              </v-list-tile>
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase"></v-toolbar-title>
  
    </v-toolbar>
    
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data () {
    return {
      drawer: false,
      
      items: [
        {         
          title: 'News',
          items: [
            { title: 'Latest News', route:'/' },
          ]
        },
        {
         
          title: 'Sport',
          items: [
            { title: 'Tennis', route:'/section/sport/tennis' },
            { title: 'Football', route:'/section/sport/football' },
            { title: 'Basket',route:'/section/sport/basket' },
            { title: 'Cricket',route:'/section/sport/cricket' },
          ]
        },
        {
          title: 'Culture',
          items: [
            { title: 'Film', route:'/section/culture/film' },
            { title: 'Music', route:'/section/culture/music' },
            { title: 'Games', route:'/section/culture/games' },
            { title: 'Books', route:'/section/culture/books' }
          ]
        },
        {title: 'Tech',
        items: 
            [
              { title: 'Technology', route:'/section/tech/technology' }
              ]
        },
        {
          title: 'Lifestyle',
          items: [
            { title: 'Fashion',route:'/section/lifeandstyle/fashion' },
            { title: 'Food' ,route:'/section/lifeandstyle/food'}
          ]
        },
        {
          title: 'Travel',
          items: [
            { title: 'Travel in Europe',route:'/section/travel/europe' },
            {title: 'Travel in the UK' ,route:'/section/travel/uk'}
            
          ]
        },
        
        
      ]
    }
  }
}
</script>
<style>
a{
  text-decoration: none;
}
p{
  text-align: justify;
}
body{
  font-family: 'Roboto Condensed', sans-serif;
}
</style>
