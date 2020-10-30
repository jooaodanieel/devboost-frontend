<template>
  <div id="app">
    <Tabs />
    <router-view />
    
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
export default {
  components: {
    Tabs,  
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
</style>
