<template>
  <v-app>
    <v-navigation-drawer enable-resize-watcher v-model="drawer" app class="blue-grey">
          <v-list>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            no-action>
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
    </v-navigation-drawer>
    <v-toolbar fixed app >
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
            { title: 'List Item', route:'/' }
          ]
        },
        {
         
          title: 'Sports',
          items: [
            { title: 'Soccer', route:'/section' },
            { title: 'Football', route:'/section' },
            { title: 'Basket',route:'/section' }
          ]
        },
        {
          
          title: 'Culture',
          items: [
            { title: 'List Item', route:'/section' }
          ]
        },
        {
         
          title: 'Music',
          items: [
            { title: 'List Item',route:'/section' }
          ]
        },
        {
          
          title: 'Lifestyle',
          items: [
            { title: 'List Item',route:'/jobs' }
          ]
        },
        
      ]
    }
  }
}
</script>
