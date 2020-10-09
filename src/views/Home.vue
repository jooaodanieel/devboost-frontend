<template>
  <div>
    <div id="titleSearchBar">
      <img src alt="Lupa" />
      <input
        type="text"
        v-model="title"
        @keydown.enter="submitSearch"
        placeholder="Buscar pelo título..."
      />
    </div>
    <div id="authorSearchBar">
      <img src alt="Lupa" />
      <input
        type="text"
        v-model="author"
        @keydown.enter="submitSearch"
        placeholder="Buscar por autor..."
      />
    </div>
    <div id="descriptionSearchBar">
      <img src alt="Lupa" />
      <textarea
        type="text"
        v-model="description"
        @keydown.enter="submitSearch"
        placeholder="Buscar pela descrição..."
      />
    </div>

    <div class="card" v-for="(opportunity, index) in filteredOpportunities" :key="index">
      <div class="card-container">
        <div class="opportunity-info">
          <p>Titulo: {{ opportunity.title }}</p>
          <p>Autor: {{ opportunity.author }}</p>
          <p>{{ opportunity.description }}</p>
        </div>

        <div class="tags-container">
          <div class="tag" v-for="(tag, index) in opportunity.tags" :key="index">
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
    opportunities: [],
    filtered: [],
    input: ""
    

  }),
  methods: {
    submitSearch() {

      const filtered = this.opportunities.filter((opportunity) => {
        return opportunity.title.includes(this.input);
      });
      this.filtered = filtered;

    }
  },
  computed: {
    filteredOpportunities(){
        return this.filtered;
    }
  },
  async created() {
    const response = await fetch(
      "https://my-json-server.typicode.com/jooaodanieel/db-devboost/oportunities"
    );
    const body = await response.json();
    this.opportunities = body;
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
