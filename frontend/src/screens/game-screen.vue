<template>
  <div class="game">
    <h1>Muscle miner</h1>
    <div id="pics">
      <div v-if="animation">
        <img id="pic" src="../assets/images/4.jpg" @click="meme()" />
      </div>
      <div v-else>
        <img id="pic" src="../assets/images/3.jpg" @click="meme()" />
      </div>
    </div>
    <Shop></Shop>
  </div>
</template>


<script>
import Shop from "../components/Shop.vue";
export default {
  components: {
    Shop,
  },
  methods: {
    meme() {
      this.animation = !this.animation;

      const webSocket = new WebSocket("ws://localhost:3000");

      webSocket.addEventListener("open", () => {
        webSocket.send("YOYO");
      });
    },
  },
  data() {
    return {
      myImage: "../assets/images/3.jpg",
      animation: false,
    };
  },
};
</script>



<style  scoped>
#button {
  width: 100px;
  height: 20px;
}

#pic {
  height: 400px;
  width: 400px;
}
#pic2 {
  height: 400px;
  width: 400px;
}
</style>