<template>
  <div
    class="card box"
    v-for="(opportunity, index) in filteredOpportunities"
    :key="index"
  >
    <div class="card-container">
      <div class="opportunity-info">
        <p>Titulo: {{ opportunity.title }}</p>
        <p>Autor: {{ opportunity.author }}</p>
        <p>{{ opportunity.description }}</p>
      </div>

      <div class="tags-container">
        <div class="tag" v-for="(tag, index) in opportunity.tags" :key="index">
          {{ tag }}
        </div>
      </div>
    </div>

    <button class="btn-more-info">Saiba Mais</button>
  </div>
</template>

<script>
export default {
  props: ["filling"],
  data: {
    filteredOpportunities,
  },
};
</script>

<style>
.box {
  display: flex;
  padding: 10px;
  background-color: #9ad8f2;
  border-radius: 4px;
}

.card {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.card-container {
  display: flex;
  justify-content: space-between;
}
</style>