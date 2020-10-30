<template>
  <div id="tabs">
          <button id="home" @click="redirect">Ver Oportunidades</button>
          <button id="newOpportunity" @click="redirect">Cadastar oportunidades</button>
  </div>
</template>

<script>

export default {
  methods: {
    redirect(e){
      const id = e.target.id
      if(id == "home"){
        this.$router.push("/")
      }
      else if(id == "newOpportunity"){
        this.$router.push("/opportunities/new")
      }
      console.log(id)
    }
  }
}
</script>
<style scoped>
    #tabs {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        margin-top: 20px;
    }
    #tabs button {
        background:none;
        outline: none;
        border: none;
    }
</style>

