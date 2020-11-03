<template>
  <div class="tabs">
    <!-- <a :class="underline[0]" id="home" @click="redirect">Ver Oportunidades</a>
    <a :class="underline[1]" id="newOpportunity" @click="redirect"
      >Cadastar oportunidades</a
    > -->
    <router-link to="/" id="home" active-class="item-selected">Ver oportunidade</router-link>
    <router-link to="/opportunities/new" id="newOpportunity" active-class="item-selected">Cadastar oportunidades</router-link>
  </div>
</template>
<script>
// import router from 'vue-router';

export default {
  data: () => ({
    path: "",
  }),
  methods: {
    redirect(e) {
      const id = e.target.id;
      if (id == "home" && this.path != "Home") {
        this.$router.push("/");
        this.path = "Home";
      } else if (id == "newOpportunity" && this.path != "new_opportunities") {
        this.$router.push("/opportunities/new");
        this.path = "new_opportunities";
      }
    }
  },
  computed: {
    underline() {
      const path = this.$router.currentRoute;
      console.log(path);
      // if (this.path == "Home") {
      //   return ["item-selected", ""];
      // } else if (this.path == "new_opportunities") {
      //   return ["", "item-selected"];
      // }
      return "";
    }
  }
};
</script>
<style scoped>
.tabs {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}
.tabs a {
  background: none;
  outline: none;
  border: none;
  font-size: 20px;
  padding: 5px;
  text-decoration: none;
  cursor: pointer;
  opacity: 70%;
}
.item-selected {
  color: #0049e5;
  font-weight: bold;
  border-bottom: 5px solid #0049e5;
  opacity: 100%;
}

.router-link-active {
  background-color: black;
}
</style>
