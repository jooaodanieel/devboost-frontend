<template>
  <transition name="modal">
    <div class="modal" @click="close">
      <div class="container" id="modal-container" @click.stop>
        <div class="content">
          <div class="header">
            <img src="" alt="image" />
            <div class="text">
              <div class="title">{{ content.title }}</div>
              <div class="author">{{ content.author }}</div>
              <div class="summary">{{ content.summary }}</div>
              <div class="contacts">Numero do Mota: (32)98993-9439</div>
            </div>
          </div>
          <div class="description">{{ content.description }}</div>
          <div class="about">SOBRE {{ content.author }}</div>
        </div>

        <div class="buttons">
          <div class="upper">
            <button class="quit" @click="close">X</button>
            <div class="tags">
              <div
                class="tag"
                v-for="(tag, index) in content.tags"
                :key="index"
              >
                {{ tag }}
              </div>
            </div>
          </div>
          <button class="add-favorites">FAVORITAR</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["content"],
  methods: {
    close() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal .container {
  display: flex;
  z-index: 2;
  justify-content: space-around;
  width: 70%;
  height: 70%;
  border-radius: 6px;
  background-color: lightblue;
  padding: 1rem;
  transition: all 0.3s ease;
}

.modal .container .content {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.modal .container .content .header {
  width: 100%;
  height: 35%;
  display: flex;
}

.modal .container .content .header .text {
  width: 80%;
  height: 100%;
}

.modal .container .content .header img {
  width: 20%;
  height: 100%;
}

.modal .container .content .description {
  width: 100%;
  height: 45%;
}

.modal .container .content .about {
  width: 100%;
  height: 20%;
}

.modal .container .buttons {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.modal .container .buttons .upper {
  display: flex;
  flex-direction: column;
}

.modal .container .buttons .quit {
  width: 20%;
  align-self: flex-end;
  cursor: pointer;
  border: none;
  background-color: inherit;
  border-radius: 4px;
  font-size: large;
}

.modal .container .buttons .tags {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
}

.modal .container .buttons .tags .tag {
  width: 85%;
  font-size: 0.9rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: solid red;
  background-color: yellow;
}

.modal .container .buttons .add-favorites {
  width: 100%;
  background-image: linear-gradient(to right, #673ab7, #4b2a80);
  margin: 1rem 0;
  padding: 1rem;
  cursor: pointer;
  border: none;
  color: white;
  border-radius: 4px;
}

.modal-enter {
  opacity: 0;
}

.modal-enter .container,
.modal-leave-active .container {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.modal-leave-active {
  opacity: 0;
}
</style>