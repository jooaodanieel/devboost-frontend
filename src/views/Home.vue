<template>
  <div>
    <Modal :content="focus" v-if="showModal" @closeModal="modal" />
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
      <Card
        v-for="(opportunity, index) in filteredOpportunities"
        :key="index"
        :opportunity="opportunity"
        :modal="modal"
      />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";
import Modal from "@/components/Modal.vue";

// @ == v-on:
export default {
  name: "Home",
  components: {
    Card,
    Modal,
  },
  data: () => ({
    showModal: false,
    filtered: [],
    title: "",
    description: "",
    author: "",
    focus: {},
  }),
  methods: {
    modal(opportunityID) {
      this.showModal = !this.showModal;
      if (this.showModal) {
        const index = this.filtered.findIndex(
          (item) => item.id == opportunityID
        );
        this.focus = this.filtered[index];
      }
    },
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
.mainContent {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box {
  display: flex;
  padding: 10px;
  background-color: #9ad8f2;
  border-radius: 4px;
}

.upperSearchBars input {
  padding-left: 10px;
  border: none;
  outline: none;
  background-color: inherit;
  width: 100%;
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
