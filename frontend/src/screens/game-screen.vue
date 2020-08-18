<template>
  <div id="content">
    <background-image image="1920.jpg" />

    <div id="shop">
      <p id="t">Lifts: {{ this.$store.state.clicks }}</p>
      <Shop></Shop>
    </div>

    <div id="gameWindow">
      <div v-if="show" style="cursor: pointer">
        <img id="image" src="../assets/images/original-2.png" @click="clickMethod()" />
      </div>
      <div v-else style="cursor: pointer">
        <img id="image" src="../assets/images/original-1.png" @click="clickMethod()" />
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImage from "../components/background.vue";
import Shop from "../components/Shop.vue";
export default {
  components: {
    backgroundImage,
    Shop,
  },
  methods: {
    clickMethod() {
      this.$store.commit("increment");
      this.show = !this.show;
      this.animation = !this.animation;
      const webSocket = new WebSocket("ws://localhost:3000");

      webSocket.addEventListener("open", () => {
        webSocket.send(this.$store.state.clicks);
      });
    },
  },
  data() {
    return {
      myImage: "../assets/images/original-1.png",
      strength: 1,
      show: false,
    };
  },
};
</script>

<style scoped>
#t {
  position: relative;
  color: white;
  font-size: 2rem;
}

#content {
  display: flex;
  justify-content: center;
}

#gameWindow {
  position: absolute;
  bottom: 0px;
}

#image {
  height: 50vh;
}
#shop {
  position: relative;
  z-index: 1;
}
</style>
