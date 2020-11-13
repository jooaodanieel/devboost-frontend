<template>
  <div class="dropdown">
    <div class="wrapper" style="background: orange">
      <div class="display">
        <div class="tag" v-for="(tag, index) in tags" :key="index">
          {{ tag }}
        </div>
      </div>
      <div>
        button
      </div>
    </div>
    <div class="list">
      <div v-for="(tag, index) in tags" :key="index">
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tags"]
};
</script>

<style scoped>
.wrapper {
  display: flex;
}

.dropdown {
  background-color: green !important;
  width: 100%;
}

.display {
  display: flex;
  align-items: center;
  flex: 1;
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
  background-color: blue;
  z-index: 1;
  height: 1em;
  width: 20em;
}
</style>
