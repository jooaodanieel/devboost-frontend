<template>
  <div class="tabs">
    <router-link
      to="/"
      tag="button"
      id="home"
      exact-active-class="item-selected"
      >Ver oportunidade</router-link
    >
    <router-link
      to="/opportunities/new"
      tag="button"
      id="newOpportunity"
      exact-active-class="item-selected"
      >Cadastar oportunidades</router-link
    >
  </div>
</template>
<script>
export default {
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
.tabs * {
  background: none;
  outline: none;
  border: none;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  opacity: 70%;
}
.item-selected {
  color: #0049e5;
  font-weight: bold;
  opacity: 100%;
}

.item-selected:after {
  content: "";
  display: block;
  margin: 0 auto;
  padding: 2px;
  width: 70%;
  border-bottom: 3px solid #0049e5;
}
</style>
