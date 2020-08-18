<template>
  <div id="content">
    <background-image image="2776.jpg" />

    <div id="shop">
      <Shop></Shop>
    </div>
    <div id="gameWindow">
      <transition name="slide-fade">
        <p id="indicator" v-if="!animation">
          +{{ this.$store.state.strength }} lbs
        </p>
      </transition>

      <div v-if="show" style="cursor: pointer">
        <img id="image" :src="getImgUrl(1)" @click="clickMethod()" />
      </div>
      <div v-else style="cursor: pointer">
        <img id="image" :src="getImgUrl(0)" @click="clickMethod()" />
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
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    getImgUrl(x) {
      return require("../assets/images" +
        this.images[this.$store.state.userState][x]);
    },
    clickMethod() {
      this.show = !this.show;
      console.log("sound", this.sound);

      if (this.sound === 0 || this.sound === 8) {
        if (this.sound === 8) {
          this.sound = 0;
        }
        this.playSound(
          "http://freesoundeffect.net/sites/default/files/weight-put-on-barbell-3-sound-effect-99734498.mp3"
        );
      }
      if (this.sound === 4) {
        this.playSound(
          "http://soundbible.com/mp3/Zombie Moan-SoundBible.com-565291980.mp3"
        );
      }
      this.sound++;

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
      sound: 0,
      animation: true,
      images: [
        ["/original-1.png", "/original-2.png"],
        ["/glasses-1.png", "/glasses-2.png"],
        ["/glasses-vac-1.png", "/glasses-vac-2.png"],
        ["/glasses-chain-1.png", "/glasses-chain-2.png"],
        ["/glasses-chain-vac-1.png", "/glasses-chain-vac-2.png"],
        ["/chain-1.png", "/chain-2.png"],
        ["/vac-chain-1.png", "/vac-chain-2.png"],
        ["/vac-1.png", "/vac-2.png"],
      ],
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

#logo {
  height: 80px;
  width: 80px;
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
