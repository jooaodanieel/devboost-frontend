<template>
  <div>
    <form>
      <label for="title">Title: </label>
      <input name="title" type="text" v-model="title" /><br />
      <label for="author">Author: </label>
      <input name="author" type="text" v-model="author" /><br />
      <label for="description">Description:</label>
      <input name="description" type="text" v-model="description" /><br />
      <button type="button" @click="registerOpportunities">
        Register
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    title: "",
    author: "",
    description: ""
  }),
  methods: {
    async registerOpportunities() {
      console.log("Title:", this.title);
      console.log("Author:", this.author);
      console.log("Description:", this.description);

      const response = await axios.post("http://localhost:3000/opportunities", {
        title: this.title,
        author: this.author,
        description: this.description
      });

      console.log("RESPONSE: ", response.data);
    }
  }
};
</script>

<style></style>
