<template>
<div class="wrapper" style="background: orange">
  <div class="display" >
    <div class="tag" v-for="(tag, index) in tags" :key="index">
      {{ tag }}
    </div>
  </div>
  <div>
    button
  </div>
</div>
  
</template>

<script>
export default{
  props: ["tags"]
}
</script>

<style scoped>
  .wrapper {
    display:flex;

  }
  .display {
    display:flex;
    align-items: center;
    flex:1;
    overflow:auto;
    font-size: 12px;
  }
  .tag {
    margin:3px;
    padding: 2px 4px;
    background-color:rgb(202, 193, 193);
    border-radius:10px;
  }
</style>
