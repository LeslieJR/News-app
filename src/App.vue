<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      app
      class="teal lighten-4"
    >
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
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile v-for="subItem in item.items" :key="subItem.title">
            <v-list-tile-content>
              <router-link :to="subItem.route"
                ><v-list-tile-title class="black--text">{{
                  subItem.title
                }}</v-list-tile-title></router-link
              >
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
      <v-divider></v-divider>
      <v-list-tile>
        <v-list-tile-content>
          <router-link to="/auth"
            ><v-list-tile-title class="black--text"
              ><v-icon>lock</v-icon>
              Login
            </v-list-tile-title></router-link
          >
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile>
        <v-list-tile-content>
          <router-link to="/SupportChat"
            ><v-list-tile-title class="black--text"
              ><v-icon>chat</v-icon> Support Chat
            </v-list-tile-title></router-link
          >
        </v-list-tile-content>
      </v-list-tile>
    </v-navigation-drawer>
    <v-toolbar fixed app class="teal lighten-4">
      <v-toolbar-title>News</v-toolbar-title>
      <v-toolbar-side-icon
        fixed
        right
        class="black--text"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase"></v-toolbar-title>
    </v-toolbar>

    <v-content>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  methods: {},

  data() {
    return {
      drawer: false,

      items: [
        {
          title: "News",
          items: [{ title: "Latest News", route: "/" }]
        },
        {
          title: "Sport",
          items: [
            { title: "Tennis", route: "/section/sport/tennis" },
            { title: "Football", route: "/section/sport/football" },
            { title: "Basket", route: "/section/sport/basket" }
          ]
        },
        {
          title: "Culture",
          items: [
            { title: "Film", route: "/section/culture/film" },
            { title: "Music", route: "/section/culture/music" },
            { title: "Games", route: "/section/culture/games" },
            { title: "Books", route: "/section/culture/books" }
          ]
        },
        {
          title: "Lifestyle",
          items: [{ title: "Fashion", route: "/section/lifeandstyle/fashion" }]
        },
        {
          title: "Travel",
          items: [
            { title: "Travel in Europe", route: "/section/travel/europe" }
          ]
        }
      ]
    };
  }
};
</script>
<style>
a {
  text-decoration: none;
}
p {
  text-align: justify;
}
body {
  font-family: "Roboto Condensed", sans-serif;
}
.v-toolbar__title {
  font-size: 30px;
  font-weight: 500;
}
.v-navigation-drawer > .v-list:not(.v-list--dense) .v-list__tile {
  font-size: 22px;
}
.v-list__tile {
  height: 60px;
  font-size: 22px;
}
.v-toolbar__content .v-btn--icon {
  margin: 0;
}
</style>
