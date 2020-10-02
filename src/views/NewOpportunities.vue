<template>
  <div>
    <form action="">
      <label for=""></label>
      <input type="text" v-model="title"><br/>
      <label for=""></label>
      <input type="text" v-model="author"><br/>
      <label for=""></label>
      <input type="text" v-model="description"><br/>
    </form>
  </div>
</template>

<script>
export default {
  data:()=>({
    title: "",
    author: "",
    description: ""
  })
}
</script>

<style>

</style>