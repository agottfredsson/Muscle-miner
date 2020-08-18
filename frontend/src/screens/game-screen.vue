<template>
  <div id="content">
    <background-image image="2776.jpg" />
    <div id="shop">
      <p id="t">Muscles gained: {{ this.$store.state.clicks }}lbs</p>
      <Shop></Shop>
    </div>
    <div id="gameWindow">
      <transition name="slide-fade">
        <p id="indicator" v-if="!animation">+1 lbs</p>
      </transition>

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
      this.show = !this.show;

      if (!this.show) {
        this.$store.commit("increment");
        const webSocket = new WebSocket("ws://localhost:3000");

        const obj = {
          score: this.$store.state.clicks,
          id: this.$store.state.userId,
        };

        webSocket.addEventListener("open", () => {
          webSocket.send(JSON.stringify(obj));
        });
        this.animation = false;
        setTimeout(() => {
          this.animation = true;
        }, 250);
      }
    },
  },
  data() {
    return {
      myImage: "../assets/images/original-1.png",
      strength: 1,
      show: false,
      animation: true,
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

#indicator {
  font-size: 22px;
  color: white;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
