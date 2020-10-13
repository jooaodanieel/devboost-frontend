<template>
  <div class="new">
    <div class="form">
      <form>
        <div class="checkbox-field" v-for="(tag,index) in tags" :key="index">
          <input :name="tag" type="checkbox" :value="tag" v-model="selectedTags"/>
          <label :for="tag">{{tag}}</label>
        </div>
        <div class="input-field" >
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
          <textarea
            name="description"
            type="text"
            v-model="description"
          /><br />
        </div>
      </form>
      <div class="buttons">
        <button type="button" @click="registerOpportunities">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    title: "",
    author: "Em construção",
    summary: "",
    description: "",
    image: undefined,
    imgSrc: "",
    tags: ["Emprego","IC","Bolsa","Monitoria"],
    selectedTags: []
  }),
  methods: {
    async registerOpportunities() {
      console.log("Title:", this.title);
      console.log("Author:", this.author);
      console.log("Description:", this.description);

      const response = await axios.post("http://localhost:3000/opportunities", {
        title: this.title,
        author: this.author,
        description: this.description,
        summary: this.summary,
        tags: this.selectedTags
      });

      console.log("RESPONSE: ", response.data);
    },
    handleChange(evt) {
      this.image = evt.target.files[0];
      this.imgSrc = URL.createObjectURL(this.image);
    }
  }
};
</script>

<style scoped>
.new {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form {
  background-color: #9ad8f2;
  margin: 50px auto;
  padding: 20px;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
}

.form form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 65%;
}

.input-field {
  display: flex;
  width: 65%;
  flex-direction: column;
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

.imgPreview {
  max-width: 400px;
  max-height: 400px;
}
</style>
