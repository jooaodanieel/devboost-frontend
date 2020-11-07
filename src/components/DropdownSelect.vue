<template>
  <div style="background: blue">
    <div v-for="(tag, index) in tags" :key="index">
      {{ tag }}
    </div>
    adfsdafsfdagsdasgdfbagf
  </div>
</template>

<script>
export default{
  props: ["tags"]
}
</script>

<style scoped>
  
</style>
