<template>
  <div class="box">
    <img src="https://svgsilh.com/png-512/1093184.png" alt="Lupa" />
    <input
      v-on:keyup.enter="$emit('input', query)"
      type="text"
      :placeholder="placeholder"
      v-model="query"
    />
    <div class="arrow" v-if="hasArrow">
      <button>
        <ArrowDown v-if="refinedSearch" />
        <ArrowUp v-else />
      </button>
    </div>
  </div>
</template>

<script>
import ArrowUp from "@/components/icons/DropdownTags/ArrowUp.vue";
import ArrowDown from "@/components/icons/DropdownTags/ArrowDown.vue";

export default {
  components: {
    ArrowUp,
    ArrowDown
  },
  props: { placeholder: String, hasArrow: { type: Boolean, default: false } },
  data: () => ({
    query: "",
    refinedSearch: false
  })
};
</script>

<style scoped>
.arrow button {
  width: 1rem;
  cursor: pointer;
  border: none;
  margin: none;
  outline: none;
  background: inherit;
}
.box {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #9ad8f2;
  width: 100%;
  border-radius: 4px;
}

input {
  border: none;
  background: inherit;
  outline: none;
  margin: 0px 10px;
}

img {
  width: 1rem;
  height: 1rem;
}
</style>
