<template>
  <div>
    <div id="searchBar">
      <img src alt="Lupa" />
      <input type="text" @keydown.enter="submitSearch" placeholder="Buscar por oportunidades..." />
    </div>
    <div class="card" v-for="(result, index) in results" :key="index">
      <div>
        <p>Titulo: {{result.title}}</p>
        <p>Autor: {{result.author}}</p>
        <p>{{result.desc}}</p>
        <button>Saiba Mais</button>
      </div>
      <div>
        
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
// @ == v-on:
export default {
  name: "Home",
  data: () => ({
    results: [{
      title: "Inter",
      author: "Guerrero",
      desc: "fasdf",
      tags: []
    }, 
    {
      title: "AIFjaoi",
      author: "lorem",
      desc: "ipsum",
      tags: []
    }]
  }),
  methods: {
    submitSearch() {
      console.log("Thiago Otário");
    }
  }
};
</script>
<style scoped>

  .card {
    border: 1px solid red;
    margin-top: 10px;
    display: flex;
    
  }
</style>
