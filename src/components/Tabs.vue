<template>
  <div id="tabs">
          <a :class="underline" id="home" @click="redirect">Ver Oportunidades</a>
          <a :class="underline" id="newOpportunity" @click="redirect">Cadastar oportunidades</a>
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
  },
  computed: {
    underline (e) {
      const path = this.$router.currentRoute.name
      if (path === "home" && e == "home" || path == "new_opportunities" && e == "newOpportunity")
        return "item-selected"
      console.log(path)
      return ""
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
    #tabs a {
        background:none;
        outline: none;
        border: none;
        font-size: 20px;
        padding: 5px;
        text-decoration: none;
        cursor: pointer;
        opacity: 70%; 
    }
    .item-selected {
        color : #0049E5;
        font-weight: bold;
        border-bottom: 5px solid #0049E5;
        opacity: 100%;
    }
</style>

