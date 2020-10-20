<template>
  <div>
    <section class="mainContent">
      <div class="upperSearchBars">
        <div class="titleSearchBar box">
          <img src="https://svgsilh.com/png-512/1093184.png" alt="Lupa" />
          <input
            v-on:keyup.enter="submitSearch"
            type="text"
            v-model="title"
            placeholder="Buscar pelo título..."
          />
        </div>
        <div class="authorSearchBar box">
          <img src="https://svgsilh.com/png-512/1093184.png" alt="Lupa" />
          <input
            v-on:keyup.enter="submitSearch"
            type="text"
            v-model="author"
            placeholder="Buscar por autor..."
          />
        </div>
      </div>
      <div class="descriptionSearchBar box">
        <img src="https://svgsilh.com/png-512/1093184.png" alt="Lupa" />
        <textarea
          v-on:keydown.enter.prevent="submitSearch"
          type="text"
          v-model="description"
          placeholder="Buscar pela descrição..."
        />
      </div>

      <div
        class="card box"
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
    </section>
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
    author: ""
  }),
  methods: {
    async submitSearch() {
      const response = await axios.get("http://localhost:3000/opportunities", {
        params: {
          title: this.title,
          description: this.description,
          author: this.author
        }
      });
      this.filtered = response.data.opportunities;
    }
  },
  computed: {
    filteredOpportunities() {
      return this.filtered;
    }
  },
  async created() {
    const response = await axios.get("http://localhost:3000/opportunities");
    const body = await response.data;
    this.filtered = body.opportunities;
  }
};
</script>
<style scoped>

.mainContent {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.card-container {
  display: flex;
  justify-content: space-between;
}

.box {
  display: flex;
  padding: 10px;
  background-color: #9ad8f2;
  border-radius: 4px;
}

.tag {
  background-color: aquamarine;
}

.upperSearchBars input {
  padding-left: 10px;
  border: none;
  outline: none;
  background-color: inherit;
  width: 100%;
}

.btn-more-info {
  background-color: blueviolet;
  width: 30%;
  align-self: flex-end;
}

.upperSearchBars {
  display: flex;
  width: 100%;
  margin: 20px 0px;
}

.titleSearchBar {
  width: 100%;
  background-color: #9ad8f2;
  margin-right: 20px;
}

.authorSearchBar {
  width: 100%;
  background-color: #9ad8f2;
}

.descriptionSearchBar {
  width: 100%;
  background-color: #9ad8f2;
}

textarea {
  padding-left: 10px;
  border: none;
  background-color: inherit;
  outline: none;
  width: 97%;
  resize: none;
}

.mainContent img {
  height: 1rem;
}
</style>
