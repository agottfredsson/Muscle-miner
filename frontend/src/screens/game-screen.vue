<template>
  <div id="content">
    <background-image v-if="this.$store.state.trueclicks <= 20" image="2776.jpg" />
    <background-image v-if="this.$store.state.trueclicks >= 20" image="background-2.png" />
    <background-image v-if="this.$store.state.trueclicks >= 40" image="background-3.jpg" />
    <background-image v-if="this.$store.state.trueclicks === 60" image="background-4-black.jpg" />
    <background-image v-if="this.$store.state.trueclicks >= 61" image="background-4x2.png" />
    <background-image v-if="this.$store.state.trueclicks >= 62" image="background-golds.jpg" />

    <div id="shop">
      <Shop></Shop>
      <timer></timer>
    </div>



    <div id="gameWindow">
      <div id="enterBtn" v-if="this.$store.state.trueclicks === 61">
        <b-button @click="clickMethod()" id="enterGymBtn" type="is-dark" size="is-large">Enter Gym</b-button>
      </div>
      <div class="toggle" v-if="this.$store.state.trueclicks === 60">
        <b-button @click="clickMethod()" id="advanceBtn" type="is-dark">Head over to Gold's Gym</b-button>
      </div>

      <div v-else>
        <transition name="slide-fade">
          <p id="indicator" v-if="!animation">+{{ this.$store.state.strength }} lbs</p>
        </transition>
        <transition name="slide-fade">
          <p id="yougo" v-if="!animation">{{beefCake()}}{{this.hurray}}</p>
        </transition>
        <div v-if="show" style="cursor: pointer">
          <img id="image" :src="getImgUrl(1)" @click="clickMethod()" />
        </div>
        <div v-else style="cursor: pointer">
          <img id="image" :src="getImgUrl(0)" @click="clickMethod()" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>


import backgroundImage from "../components/background.vue";
import Shop from "../components/Shop.vue";
import timer from "../components/timer.vue";

export default {
  components: {
    backgroundImage,
    Shop,
    timer
  },
  methods: {
    
    beefCake() {
      switch(this.$store.state.trueclicks) {
  case 5:
    this.hurray = "You BEEFCAKE bro!"
    break;
  case 10:
    this.hurray = "You BEEFCAKE bro!"
    break;
  case 20:
    this.hurray = "You BEEFCAKE bro!"
    break;
  case 30:
    this.hurray = "Dayum look at those GLUTES!"
    break;
  default:
    this.hurray = null
    console.log(this.$store.state.clicks + " score")
    console.log(this.$store.state.trueclicks + " true clicks")
}
    },
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },

    levelup() {
      switch (this.$store.state.trueclicks) {
        case 19:
          this.$store.commit("changeStrength", 5);
          this.$store.commit("levelBonus", 100);

          this.$buefy.dialog.alert({
            title: "LEVEL UP!",
            type: "is-dark",
            message:
              "<b>You gained a lot of muscles.</b> 💪💪<br> You are now too strong for that old gym.",
            confirmText: "Cool!"
          });

          break;
        case 39:
          this.$store.commit("changeStrength", 10);
          this.$store.commit("levelBonus", 200);

          this.$buefy.dialog.alert({
            title: "LEVEL UP!",
            type: "is-dark",
            message:
              "<b>You're moving up in this world, Muscle Beach is the place for you now. ",
            confirmText: "Nice!"
          });
          break;

        default:
      }
    },

    getImgUrl(x) {
      return require("../assets/images" +
        this.images[this.$store.state.userState][x]);
    },
    clickMethod() {
      this.show = !this.show;

      if (this.$store.state.audio) {
        if (this.sound === 0 || this.sound === 8) {
          if (this.sound === 8) {
            this.sound = 0;
          }
          this.playSound(
            "http://freesoundeffect.net/sites/default/files/weight-put-on-barbell-3-sound-effect-99734498.mp3"
          );
        }
        if (this.sound === 5) {
          this.playSound(
            "http://soundbible.com/mp3/Zombie Moan-SoundBible.com-565291980.mp3"
          );
        }
        this.sound++;
      }

      if (!this.show) {
        this.levelup();
        this.$store.commit("increment");
        const webSocket = new WebSocket("ws://localhost:3000");

        const obj = {
          score: this.$store.state.clicks,
          id: this.$store.state.userId,
          trueclicks: this.$store.state.trueclicks,
          eff: this.$store.state.eff
        };

        webSocket.addEventListener("open", () => {
          webSocket.send(JSON.stringify(obj));
        });
        this.animation = false;
        setTimeout(() => {
          this.animation = true;
        }, 250);
        // console.log(this.$store.state);
        localStorage.setItem("user", JSON.stringify(this.$store.state));
      }
    }
  },
  data() {
    return {
      myImage: "../assets/images/original-1.png",
      strength: 1,
      show: false,
      sound: 0,
      animation: true,
      backgroundImages: [["/background-2.jpg"], ["/1920.jpg"]],
      images: [
        ["/original-1.png", "/original-2.png"],
        ["/glasses-1.png", "/glasses-2.png"],
        ["/glasses-vac-1.png", "/glasses-vac-2.png"],
        ["/glasses-chain-1.png", "/glasses-chain-2.png"],
        ["/glasses-chain-vac-1.png", "/glasses-chain-vac-2.png"],
        ["/chain-1.png", "/chain-2.png"],
        ["/vac-chain-1.png", "/vac-chain-2.png"],
        ["/vac-1.png", "/vac-2.png"]
      ],
      hurray: null,
      toggle: false
    };
  }
};
</script>

<style scoped>
#gif {
  height: 350px;
  width: 400px;
}
#yougo {
  color: blueviolet;
  font-size: 100px;
}
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
.bounce-enter-active {
  animation: bounce-in 1.5s;
}
.bounce-leave-active {
  animation: bounce-in 1.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  90% {
    transform: scale(1);
  }
}
#advanceBtn {
  margin-bottom: 200px;
}
</style>
