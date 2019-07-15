<template>
  <div v-if="this.results">
    <router-link
      v-if="$routerHistory.hasPrevious()"
      :to="{ path: $routerHistory.previous().path }"
    >
      <v-icon large>arrow_back</v-icon>
    </router-link>
    <h1>{{ sectionName }}/{{ subsection }}</h1>
    <ArticleSection
      v-for="result in results"
      :key="result.id"
      :result="result"
    ></ArticleSection>
  </div>
</template>

<script>
import ArticleSection from "../components/ArticleSection";
export default {
  components: { ArticleSection },
  props: ["sectionName", "subsection"],
  data() {
    return {
      results: null
    };
  },
  created() {
    console.log(this.subsection, this.sectionName);

    fetch(
      `http://content.guardianapis.com/search?q=${this.subsection}&section=${this.sectionName}&show-fields=all&show-elements=all&order-by=newest&api-key=985386ca-6d17-4226-a910-3c35ab40e042`
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
        `http://content.guardianapis.com/search?q=${this.subsection}&section=${this.sectionName}&show-fields=all&show-elements=all&order-by=newest&api-key=985386ca-6d17-4226-a910-3c35ab40e042`
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
h1 {
  padding-left: 10px;
  text-transform: capitalize;
}
</style>

