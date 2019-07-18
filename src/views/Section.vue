<template>
  <div v-if="this.results">
    <router-link
      v-if="$routerHistory.hasPrevious()"
      :to="{ path: $routerHistory.previous().path }"
    >
      <v-icon large class="arrow">arrow_back</v-icon>
    </router-link>
    <div class="subsection">
      <h1>{{ subsection }}</h1>
    </div>
    <ArticleSection
      v-for="result in results"
      :key="result.id"
      :result="result"
    ></ArticleSection>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      fixed
      bottom
      right
      @click="toTop"
      class="top"
    >
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
  </div>
</template>

<script>
import ArticleSection from "../components/ArticleSection";
export default {
  components: { ArticleSection },
  props: ["sectionName", "subsection"],
  data() {
    return {
      results: null,
      fab: false
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  },
  created() {
    console.log(this.subsection, this.sectionName);

    fetch(
      `https://content.guardianapis.com/search?q=${this.subsection}&section=${this.sectionName}&show-fields=all&show-elements=all&order-by=newest&api-key=985386ca-6d17-4226-a910-3c35ab40e042`
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.results = json.response.results;
      });
  },
  watch: {
    subsection: function() {
      fetch(
        `http://content.guardianapis.com/search?q=${this.sectionName}&section=${this.subsection}&show-fields=all&show-elements=all&order-by=newest&api-key=985386ca-6d17-4226-a910-3c35ab40e042`
      )
        .then(response => {
          return response.json();
        })
        .then(json => {
          this.results = json.response.results;
        });
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.subsection {
  background-color: black;
  /* border-top: 2px solid black;
  border-bottom: 2px solid black; */
}
h1 {
  color: white;
  text-align: -webkit-center;
  text-transform: capitalize;
  padding: 0 20px;
  font-size: 40px;
}
.flex {
  border-bottom: 1px solid black;
}
.top {
  height: 35px;
  width: 35px;
  right: 0px;
  bottom: 4px;
}
.v-message {
  min-height: 0px;
}
.subsection {
  position: inherit;
}
.arrow {
  position: absolute;
  font-size: 36px;
  color: white;
  top: 12px;
  left: 10px;
}
@media (orientation: landscape) {
  h1 {
    font-size: 30px;
  }
  .top {
    right: 18px;
  }
  .arrow {
    font-size: 36px;
    color: white;
    position: absolute;
    top: 5px;
  }
  .subsection {
    position: inherit;
  }
}
</style>

