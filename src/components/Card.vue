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

    <button class="btn-more-info" @click="modal()">Saiba Mais</button>
  </div>
</template>

<script>
export default {
  props: ["opportunity", "modal"],
  methods: {
    showOpportunity() {
      if (this.modal) this.modal();
    },
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
  background-color: blueviolet;
  margin-top: 1rem;
  border: none;
  width: 30%;
  align-self: flex-end;
  color: white;
  border-radius: 4px;
  height: 2.4rem;
}
</style>
