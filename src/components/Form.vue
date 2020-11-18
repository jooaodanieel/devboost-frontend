<template>
  <div>
    <form>
      <p>Tags:</p>
      <DropdownSelect
        :tags="tags"
        :selectedTags="selectedTags"
        @createTag="tags = $event"
        @update="selectedTags = $event"
      />
      <div class="input-field">
        <label for="image">Imagem </label>
        <input name="image" type="file" @change="handleChange" /> <br />
        <img v-if="image != undefined" class="imgPreview" :src="imgSrc" />
      </div>
      <div class="input-field">
        <label for="title">Título </label>
        <input name="title" type="text" v-model="title" /><br />
      </div>
      <div class="input-field">
        <label for="summary">Resumo </label>
        <textarea name="summary" type="text" v-model="summary" /><br />
      </div>
      <div class="input-field">
        <label for="description">Descrição</label>
        <textarea name="description" type="text" v-model="description" /><br />
      </div>
    </form>
    <div class="buttons">
      <button type="button" @click="postOpportunities">
        Cadastrar
      </button>
    </div>
  </div>
</template>

<script>
import DropdownSelect from "./DropdownTags.vue";

export default {
  props: ["tags"],
  components: {
    DropdownSelect
  },
  data: () => ({
    imageSrc: "",
    image: undefined,
    title: "",
    summary: "",
    description: "",
    selectedTags: []
  }),
  methods: {
    postOpportunities() {
      this.$emit("post", {
        title: this.title,
        description: this.description,
        summary: this.summary,
        tags: this.selectedTags
      });
    },
    handleChange(evt) {
      this.image = evt.target.files[0];
      this.imgSrc = URL.createObjectURL(this.image);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 65%;
}

.input-field {
  display: flex;
  width: 65%;
  flex-direction: column;
  margin-bottom: 10px;
}

.input-field input {
  border: none;
  border-radius: 6px;
  height: 2rem;
}

.input-field textarea {
  resize: vertical;
  border: none;
  height: 100px;
  min-height: 100px;
  max-height: 300px;
  border-radius: 6px;
}

.imgPreview {
  max-width: 400px;
  max-height: 400px;
}
.buttons {
  width: 25%;
  display: flex;
  align-items: flex-end;
  margin-bottom: 18px;
}
.buttons button {
  background-color: #673ab7;
  color: white;
  border: none;
  border-radius: 10px;
  width: 80%;
  height: 60px;
  font-size: 1.2rem;
  font-weight: 700;
  transition: 0.2s;
}

.buttons button:hover {
  background-color: #57309b;
}
</style>
