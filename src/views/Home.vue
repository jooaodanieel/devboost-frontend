<template>
  <div>
    <div class="modal" @click="showModal = false" v-if="showModal">
      <transition name="modal">
        <div id="modal-container" @click.stop class="modal-container">
          <div class="modal-content">
            <div class="modal-header"></div>
            <div class="modal-description"></div>
            <div class="modal-about"></div>
          </div>
          <div class="modal-buttons"></div>
        </div>
      </transition>
    </div>
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

// @ == v-on:
export default {
  name: "Home",
  components: {
    Card,
  },
  data: () => ({
    showModal: false,
    opportunities: [],
    filtered: [],
    title: "",
    description: "",
    author: "",
  }),
  methods: {
    modal() {
      this.showModal = true;
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

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-container {
  display: flex;
  z-index: 2;
  justify-content: space-around;
  width: 70%;
  height: 70%;
  border-radius: 6px;
  background-color: lightblue;
  padding: 1rem;
}

.modal-content {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.modal-buttons {
  width: 20%;
  height: 100%;
}

.modal-header {
  width: 100%;
  height: 35%;
}

.modal-description {
  width: 100%;
  height: 45%;
}

.modal-about {
  width: 100%;
  height: 20%;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-header {
  display: flex;
  justify-content: flex-start;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

.modal-header img {
  margin: 1rem;
}

.btn-favorite {
  background-image: linear-gradient(to right, #673ab7, #4b2a80);
  margin: 1rem;
  cursor: pointer;
  border: none;
  width: 30%;
  align-self: flex-end;
  color: white;
  border-radius: 4px;
  height: 2.4rem;
}
</style>
