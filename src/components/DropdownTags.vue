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
      <div
        class="checkbox-wrapper"
        :style="checkedBackground(tag)"
        v-for="(tag, index) in tags"
        :key="index"
        @click="emitTagsChange(tag)"
      >
        <input
          class="checkbox"
          :name="tag"
          type="checkbox"
          :value="tag"
          :checked="localSelectedTags.includes(tag)"
        />
        <label :for="tag">{{ tag }}</label>
      </div>
      <div
        :v-if="!checked"
        class="special-checkbox checkbox-wrapper"
        @click="toggleSpecialCheckbox"
      >
        <input
          class="checkbox"
          name="other"
          type="checkbox"
          v-model="checked"
        />
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
    toggleSpecialCheckbox() {
      if (!this.checked) {
        this.checked = true;
      }
    },
    emitTagsChange(tag) {
      const isSelected = this.localSelectedTags.includes(tag);
      if (!isSelected) {
        this.localSelectedTags.push(tag);
      } else {
        this.localSelectedTags = this.localSelectedTags.filter(el => el != tag);
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
    },
    checkedBackground(tag) {
      if (this.localSelectedTags.includes(tag)) {
        return "background-color: rgba(0,0,0,.1)";
      }
      return "";
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
  align-items: center;
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
  background-color: white;
  z-index: 1;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  scrollbar-width: none;
  max-height: 350px;
  width: 450px;
}

.list::-webkit-scrollbar {
  display: none;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox {
  padding: 5px;
  margin: 15px 20px;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.special-checkbox .placeholder {
  opacity: 50%;
}

.special-checkbox .checkbox-text {
  padding-left: 10px;
  background: none;
  border: 1px solid black;
  border-radius: 6px;
  outline: none;
  width: 180px;
  height: 30px;
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
