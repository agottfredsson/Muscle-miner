<template>
  <div id="content">
    <background-image image="1920.jpg" />

    <p id="t">Muscle miner {{this.$store.state.clicks}}</p>
    <Shop id="shop"></Shop>
    <div id="gameWindow">
      <div v-if="animation" style="cursor: pointer">
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
  padding-top: 50px;
}

#content {
  display: flex;
  justify-content: center;
}

#gameWindow {
  position: fixed;
  bottom: 0px;
}

#image {
  height: 50vh;
}
#shop {
  right: 120px;
}
</style>