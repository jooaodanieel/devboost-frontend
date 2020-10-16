<template>
  <div>
    <div class="upperSearchBars">
      <div class="titleSearchBar">
        <img src alt="Lupa" />
        <input
          v-on:keyup.enter="submitSearch"
          type="text"
          v-model="title"
          placeholder="Buscar pelo título..."
        />
      </div>
      <div class="authorSearchBar">
        <img src alt="Lupa" />
        <input
          v-on:keyup.enter="submitSearch"
          type="text"
          v-model="author"
          placeholder="Buscar por autor..."
        />
      </div>
    </div>
    <div class="descriptionSearchBar">
      <img src alt="Lupa" />
      <textarea
        v-on:keyup.enter.prevent
        v-on:keyup.enter="submitSearch"
        type="text"
        v-model="description"
        placeholder="Buscar pela descrição..."
      />
    </div>
    <div class="submitSearch">
      <button @click="submitSearch">Procurar</button>
    </div>

    <div
      class="card"
      v-for="(opportunity, index) in filteredOpportunities"
      :key="index"
    >
      <div class="card-container">
        <div class="opportunity-info">
          <p>Titulo: {{ opportunity.title }}</p>
          <p>Autor: {{ opportunity.author }}</p>
          <p>{{ opportunity.description }}</p>
        </div>

        <div class="tags-container">
          <div
            class="tag"
            v-for="(tag, index) in opportunity.tags"
            :key="index"
          >
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
import axios from "axios";

// @ == v-on:
export default {
  name: "Home",
  data: () => ({
    opportunities: [],
    filtered: [],
    title: "",
    description: "",
    author: "",
  }),
  methods: {
    async submitSearch() {
      const response = await axios.get("http://localhost:3000/opportunities", {
        params: {
          title: this.title,
          description: this.description,
          author: this.author,
        },
      });
      this.filtered = response.data.opportunities;
    },
  },
  computed: {
    filteredOpportunities() {
      return this.filtered;
    },
  },
  async created() {
    const response = await axios.get("http://localhost:3000/opportunities");
    const body = await response.data;
    this.filtered = body.opportunities;
  },
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

.upperSearchBars {
  display: flex;
  align-items: center;
}
</style>
