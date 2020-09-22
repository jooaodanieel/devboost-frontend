<template>
  <div>
    <div id="searchBar">
      <img src alt="Lupa" />
      <input
        type="text"
        @keydown.enter="submitSearch"
        placeholder="Buscar por oportunidades..."
      />
    </div>

    <div class="card" v-for="(result, index) in results" :key="index">
      <div class="card-container">
        <div class="opportunity-info">
          <p>Titulo: {{ result.title }}</p>
          <p>Autor: {{ result.author }}</p>
          <p>{{ result.desc }}</p>
        </div>

        <div class="tags-container">
          <div class="tag" v-for="(tag, index) in result.tags" :key="index">
            {{ tag }}
          </div>
        </div>
      </div>

      <button class="btn-more-info">Saiba Mais</button>
    </div>
    <div></div>
  </div>
</template>

<script>
// @ == v-on:
export default {
  name: "Home",
  data: () => ({
    results: [
      {
        title: "Inter",
        author: "Guerrero",
        desc: "fasdf",
        tags: ["Estágio", "IC"]
      },
      {
        title: "AIFjaoi",
        author: "lorem",
        desc: "ipsum",
        tags: ["IC", "Monitoria"]
      }
    ]
  }),
  methods: {
    submitSearch() {
      
    }
  },
  async created() {
    const { body } = await fetch(
      "https://my-json-server.typicode.com/jooaodanieel/db-devboost/oportunities"
    );
    console.log(await body.toString());
  }
};
</script>
<style scoped>
.card {
  border: 1px solid red;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.card-container {
  display: flex;
  justify-content: space-between;
}

.tag {
  background-color: aquamarine;
}

.btn-more-info {
  background-color: blueviolet;
  width: 300px;
  align-self: flex-end;
}
</style>
