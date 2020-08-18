<template>
  <div class="start">
    <particles-bg type="color" :bg="true" />
    <particles-bg type="custom" :config="config" :bg="true" />

    <h1 class="wordart">MUSCLE MINER</h1>
    <div class="inputbox">
      <input v-model="userName" placeholder="Type your name" />
      <input type="button" value="OK" @click="addUser()" />
    </div>

    <div class="container">
      <div class="button-class">
        <button @click="$router.push('game')">Play Game</button>
        <div class="spaces">
          <button @click="$router.push('highscore')">Highscore</button>
        </div>
        <div id="topscore"> 
        <highscore></highscore>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
import highscore from "../components/highscore.vue";

import face from "../assets/images/face.png";

export default {
  name: "start",
  components: {
    ParticlesBg,
    highscore
  },
  data: function() {
    return {
      config: {
        num: [1, 20],
        rps: 2,
        radius: [5, 40],
        life: [1, 10],
        v: [2, 3],
        tha: [-10, -100],
        body: face,
        alpha: [1, 0],
        scale: [0.1, 0.4],
        position: "all",
        cross: "dead",
        random: 15
      },
      userName: ""
    };
  },
  methods: {
    addUser() {
      fetch(`http://localhost:3000/${this.userName}`, {
        method: "POST"
      })
        .then(response => response.json())
        .then(result => {
          console.log(result.lastID);
          this.$store.commit("setId", result.lastID);
        });
    }
  }
};
</script>

<style scoped>

#topscore{
  margin-top: 15px;
}

.inputbox {
  margin-top: 60px;
}

.container {
  display: flex;
  justify-content: center;
}
.wordart {
  margin-top: 70px;
  transform: scaleY(1.5) skewY(-8deg) rotateZ(-3deg) translateZ(0);
  font-size: 90px;
  font-family: Impact, sans-serif;
  color: transparent;
  background: linear-gradient(to bottom left, #fee601, #fee601 15%, #fe4201);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-shadow: 1px 0 0 #d4af37, 0 1px 0 #c14d00, 2px 1px 0.35px #813300,
    1px 2px 0.35px #d4af37, 3px 2px 0.35px #813300, 2px 3px 0.35px #c14d00,
    4px 3px 0.35px #813300, 3px 4px 0.35px #c14d00, 5px 4px 0.35px #813300,
    4px 5px 0.35px #c14d00, 6px 5px 0.35px #813300, 5px 6px 0.35px #c14d00,
    7px 6px 0.35px #813300, 6px 7px 0.35px #c14d00;
}

.button-class {
  margin-top: 40px;
}

.spaces {
  margin-top: 10px;
}
</style>




