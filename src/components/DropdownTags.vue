<template>
  <div class="dropdown">
    <div class="wrapper">
      <div class="display">
        <div class="tag" v-for="(tag, index) in selectedTags" :key="index">
          {{ tag }}
        </div>
      </div>
      <span class="select">
        <div class="svg" @click="toggleList">
          <ArrowUpSvg v-if="visibleList" />
          <ArrowDownSvg v-else />
        </div>
      </span>
    </div>
    <div v-if="visibleList" class="list">
      <div v-for="(tag, index) in tags" :key="index">
        <input
          :name="tag"
          type="checkbox"
          :value="tag"
          :checked="localSelectedTags.includes(tag)"
          @click="emitTagsChange"
        />
        <label :for="tag">{{ tag }}</label>
      </div>
      <div class="checkbox-field">
        <input name="other" v-model="checked" type="checkbox" />
        <label class="placeholder" v-if="!checked" for="other">Outro</label>
        <input
          :style="inputHidden"
          class="checkbox-text"
          type="text"
          @keydown.enter="createCheckbox"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ArrowUpSvg from "@/components/icons/DropdownTags/ArrowUp.vue";
import ArrowDownSvg from "@/components/icons/DropdownTags/ArrowDown.vue";

export default {
  props: ["tags", "selectedTags"],
  components: {
    ArrowUpSvg,
    ArrowDownSvg
  },
  data: () => ({
    visibleList: false,
    localSelectedTags: [],
    checked: false
  }),
  methods: {
    toggleList() {
      this.visibleList = !this.visibleList;
    },
    emitTagsChange(e) {
      const tag = e.target;
      const isSelected = this.localSelectedTags.includes(tag.value);
      if (!isSelected) {
        this.localSelectedTags.push(e.target.value);
      } else {
        this.localSelectedTags = this.localSelectedTags.filter(
          el => el != e.target.value
        );
      }
      this.$emit("update", this.localSelectedTags);
    },
    createCheckbox(e) {
      const newTag = e.target.value;
      if (!this.tags.includes(newTag)) {
        const newTags = this.tags;
        newTags.push(newTag);
        this.localSelectedTags.push(e.target.value);

        this.$emit("update", this.localSelectedTags);
        this.$emit("createTag", newTags);
      }
      e.target.value = "";
      e.target.checked = false;
      this.checked = false;
    }
  },
  computed: {
    inputHidden() {
      if (this.checked) {
        return "display: inline";
      }
      return "display: none";
    }
  },
  mounted() {
    this.localSelectedTags = this.selectedTags;
  }
};
</script>

<style scoped>
.dropdown {
  width: 450px;
}

.wrapper {
  min-height: 28px;
  display: flex;
  background-color: white;
}

.display {
  display: flex;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  overflow: auto;
  font-size: 12px;
}

.dropdown::after {
  content: "";
  display: block;
  width: 100%;
  border-bottom: 3px solid #0049e5;
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
  max-height: 150px;
  width: 450px;
}

.checkbox-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 10px 5px 0;
}

.checkbox-field label {
  margin: 0 3px;
}

.checkbox-field .placeholder {
  opacity: 50%;
}

.checkbox-field .checkbox-text {
  margin-left: 3px;
  padding-left: 5px;
  background: none;
  border: 1px solid black;
  outline: none;
  width: 100px;
  height: 25px;
  border-radius: 6px;
}

.select {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}

.svg {
  width: 15px;
}
</style>
