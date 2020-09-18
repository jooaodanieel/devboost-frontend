<template>
  <div>
    <div class="searchBar">
      <img src alt="Lupa" />
      <input type="text" @keydown.enter="submitSearch" placeholder="Buscar por oportunidades..." />
    </div>
    <div v-for="(result, index) in results" :key="index">
      <p>{{result}}</p>
    </div>
  </div>
</template>

<script>
// @ == v-on:
export default {
  name: "Home",
  data: () => ({
    results: ["Erick", "Guerrero"]
  }),
  methods: {
    submitSearch() {
      console.log("Erick Otário");
    }
  }
};
</script>
<style scoped>
.searchBar {
  width: 500px;
}
</style>
