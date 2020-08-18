<template>
  <div class="start">
    <particles-bg type="color" :bg="true" />
    <particles-bg type="custom" :config="config" :bg="true" />

    <h1 class="wordart">MUSCLE MINER</h1>

    <div class="container">
      <div class="button-class">
        <button v-if="!isNew" @click="$router.push('game')">Continue</button>
        <div v-if="collapse" class="spaces">
          <input v-model="userName" placeholder="Type your name" />
          <input type="button" value="OK" @click="addUser()" />
        </div>
        <div v-else class="spaces">
          <button @click="newGame()">New Game</button>
        </div>

        <div class="spaces">
          <button @click="$router.push('highscore')">Highscore</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";

import face from "../assets/images/face.png";

export default {
  name: "start",
  components: {
    ParticlesBg,
  },
  created() {
    console.log("before", this.$store.state);

    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      console.log(user);
      this.isNew = false;
      this.$store.commit("setStateObj", user);
      console.log("after", this.$store.state);
    }
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
        random: 15,
      },
      userName: "",
      collapse: false,
      isNew: true,
    };
  },
  methods: {
    newGame() {
      this.collapse = true;
    },
    addUser() {
      localStorage.setItem("user", null);
      this.$store.commit("resetState");
      fetch(`http://localhost:3000/${this.userName}`, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result.lastID);
          this.$store.commit("setId", result.lastID);
          this.$router.push("game");
        });
    },
  },
};
</script>

<style scoped>
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
