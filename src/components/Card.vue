<template>
  <div class="card box">
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

    <button class="btn-more-info" @click="modal(opportunity.id)">
      Saiba Mais
    </button>
  </div>
</template>

<script>
export default {
  props: ["opportunity", "modal"],
};
</script>

<style scoped>
.box {
  display: flex;
  padding: 10px;
  background-color: #9ad8f2;
  border-radius: 4px;
}

.tag {
  background-color: aquamarine;
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

.btn-more-info {
  background-image: linear-gradient(to right, #673ab7, #4b2a80);
  margin-top: 1rem;
  cursor: pointer;
  border: none;
  width: 30%;
  align-self: flex-end;
  color: white;
  border-radius: 4px;
  height: 2.4rem;
}
</style>
