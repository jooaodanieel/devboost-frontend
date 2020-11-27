<template>
  <div>
    <Modal :content="focus" v-if="showModal" @closeModal="modal" />
    <section class="mainContent">
      <div class="upperSearchBars generalSearchBar box">
        <img src="https://svgsilh.com/png-512/1093184.png" alt="Lupa" />
        <input
          v-on:keyup.enter="submitSearch"
          type="text"
          v-model="general"
          placeholder="Procurar oportunidade"
        />
        <button @click="openAdvancedSearch" class="arrowButton">
          <img :src="setAdvancedSearchImage" alt="Seta" />
        </button>
      </div>

      <div v-if="showAdvancedSearch" style="width: 100%;">
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
import upArrow from "@/assets/uparrow.png";
import downArrow from "@/assets/downarrow.png";

// @ == v-on:
export default {
  name: "Home",
  components: {
    Card,
    Modal
  },
  data: () => ({
    showModal: false,
    showAdvancedSearch: false,
    filtered: [],
    general: "",
    title: "",
    description: "",
    author: "",
    focus: {}
  }),
  methods: {
    modal(opportunityID) {
      this.showModal = !this.showModal;
      if (this.showModal) {
        const index = this.filtered.findIndex(item => item.id == opportunityID);
        this.focus = this.filtered[index];
      }
    },
    openAdvancedSearch() {
      this.showAdvancedSearch = !this.showAdvancedSearch;
    },
    async submitSearch() {
      const response = await axios.get("http://localhost:3000/opportunities", {
        params: {
          general: this.general,
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
    },
    setAdvancedSearchImage() {
      return this.showAdvancedSearch ? upArrow : downArrow;
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

.arrowButton {
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 5px;
}

.upperSearchBars {
  display: flex;
  width: 100%;
  margin: 10px 0px;
}

.generalSearchBar {
  margin-bottom: 1px;
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
