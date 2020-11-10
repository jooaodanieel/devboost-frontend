<template>
  <div class="new">
    <div class="form">
      <div class="heading">
        <header>
          <h1>Cadastrar nova oportunidade</h1>
        </header>
      </div>
      <div class="content">
        <Form
          :tags="tags"
          @post="registerOpportunities"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Form from "@/components/Form.vue";

export default {
  components: {
    Form
  },
  data: () => ({
    tags: []
  }),
  methods: {
    async registerOpportunities(e) {
      console.log("Title:", e.title);
      console.log("Author:", e.author);
      console.log("Description:", e.description);

      const response = await axios.post("http://localhost:3000/opportunities", {
        title: e.title,
        author: "Em construção",
        description: e.description,
        summary: e.summary,
        tags: e.tags
      });

      console.log("RESPONSE: ", response);
    },
    handleChange(evt) {
      this.image = evt.target.files[0];
      this.imgSrc = URL.createObjectURL(this.image);
    }
  },
  async beforeMount() {
    const response = await axios.get(
      "http://localhost:3000/opportunities/tags"
    );
    const body = response.data;
    this.tags = body.tags;
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
  border-radius: 10px;
}

.form .heading {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.form .content {
  display: flex;
  justify-content: space-evenly;
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
