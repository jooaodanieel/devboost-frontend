<template>
  <div class="dropdown">
    <div class="wrapper" style="background: orange">
      <div class="display">
        <div class="tag" v-for="(tag, index) in selectedTags" :key="index">
          {{ tag }}
        </div>
      </div>
      <button type="button" @click="toggleList">
        button
      </button>
    </div>
    <div v-if="visibleList" class="list">
      <div v-for="(tag, index) in tags" :key="index">
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tags", "selectedTags"],
  data: () => ({
    visibleList: false,
    selectedTags: [],
  }),
  methods: {
    toggleList(){
      this.visibleList = !this.visibleList;
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}

.dropdown {
  background-color: green !important;
  width: 450px;
}

.display {
  display: flex;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  overflow: auto;
  font-size: 12px;
}

.tag {
  margin: 3px;
  padding: 2px 4px;
  background-color: rgb(202, 193, 193);
  border-radius: 10px;
}

.list {
  position: absolute;
  background-color: rgb(202, 193, 193);
  z-index: 1;
  overflow-y: scroll;
  height: 150px;
  width: 450px;
}
</style>
