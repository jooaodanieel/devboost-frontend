<template>
  <div>
    <div class="modal" @click="modal" v-if="showModal">
      <transition name="modal">
        <div id="modal-container" @click.stop class="container">
          <div class="content">
            <div class="header">
              <img src="" alt="image" />
              <div class="text">
                <div class="title">{{ filtered[focus].title }}</div>
                <div class="author">{{ filtered[focus].author }}</div>
                <div class="summary">{{ filtered[focus].summary }}</div>
                <div class="contacts">Numero do Mota: (32)98993-9439</div>
              </div>
            </div>
            <div class="description">{{ filtered[focus].description }}</div>
            <div class="about">SOBRE ILE {{ filtered[focus].author }}</div>
          </div>

          <div class="buttons">
            <div class="upper">
              <button class="quit" @click="modal">X</button>
              <div class="tags">
                <div
                  class="tag"
                  v-for="(tag, index) in filtered[focus].tags"
                  :key="index"
                >
                  {{ tag }}
                </div>
              </div>
            </div>
            <button class="add-favorites">FAVORITAR</button>
          </div>
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
    filtered: [],
    title: "",
    description: "",
    author: "",
    focus: 0,
  }),
  methods: {
    modal(opportunityID) {
      this.showModal = !this.showModal;
      if (this.showModal) {
        this.focus = this.filtered.findIndex(item => item.id == opportunityID);
        console.log(this.filtered[this.focus]);
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

.modal .container {
  display: flex;
  z-index: 2;
  justify-content: space-around;
  width: 70%;
  height: 70%;
  border-radius: 6px;
  background-color: lightblue;
  padding: 1rem;
}

.modal .container .content {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.modal .container .content .header {
  width: 100%;
  height: 35%;
  display: flex;
}

.modal .container .content .header .text {
  width: 80%;
  height: 100%;
}

.modal .container .content .header img {
  width: 20%;
  height: 100%;
}

.modal .container .content .description {
  width: 100%;
  height: 45%;
}

.modal .container .content .about {
  width: 100%;
  height: 20%;
}

.modal .container .buttons {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.modal .container .buttons .upper {
  display: flex;
  flex-direction: column;
}

.modal .container .buttons .quit {
  width: 20%;
  align-self: flex-end;
  cursor: pointer;
  border: none;
  background-color: inherit;
  border-radius: 4px;
  font-size: large;
}

.modal .container .buttons .tags {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
}

.modal .container .buttons .tags .tag {
  width: 85%;
  font-size: 0.9rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: solid red;
  background-color: yellow;
}

.modal .container .buttons .add-favorites {
  width: 100%;
  background-image: linear-gradient(to right, #673ab7, #4b2a80);
  margin: 1rem 0;
  padding: 1rem;
  cursor: pointer;
  border: none;
  color: white;
  border-radius: 4px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}
</style>
