<template>
  <div
    id="background"
    :style="{ 'background-image': 'url(' + require(`../assets/images/${image}`) + ')',}"
  >
    <div id="logoContent">
      <div id="logoContainer">
        <img id="logo" src="../assets/images/weight-logo.png" />
        <p class="logoText">{{ this.$store.state.clicks }} lbs</p>
      </div>
      <div id="logoContainer">
        <img id="logo" src="../assets/images/coin-logo.png" />
        <p class="logoText">{{ this.$store.state.coins }}</p>
      </div>
      <div id="logoContainer">
        <section class="progressbar">
          <p class="logoText"></p>
        </section>
      </div>
      <img
        id="gif"
        v-if="this.$store.state.trueclicks === 60"
        src="../assets/gifs/cyrilleanton.gif"
      />

      <volume-2-icon
        v-if="this.$store.state.audio"
        size="2x"
        class="custom-class"
        @click="toggleAudio()"
      ></volume-2-icon>
      <volume-x-icon v-else size="2x" class="custom-class" @click="toggleAudio()"></volume-x-icon>
    </div>
  </div>
</template>

<script>
import { Volume2Icon, VolumeXIcon } from "vue-feather-icons";
export default {
  name: "backgroundImage",
  props: {
    image: String
  },
  components: {
    Volume2Icon,
    VolumeXIcon
  },
  methods: {
    toggleAudio() {
      this.$store.commit("changeAudio");
    }
  }
};
</script>

<style scoped>
#gif {
  height: 400px;
}

#background {
  height: 100vh;
  width: 100vw;
  background-size: cover;
  position: absolute;
}
#logo {
  height: 60px;
  width: 60px;
}
#logoContainer {
  display: flex;
}

.logoText {
  color: white;
  align-self: center;
  margin-top: 12px;
  font-size: 22px;
}

.progressbar {
  padding-left: 10px;
  margin-top: 10px;
  height: 100px;
  width: 100px;
}
.custom-class {
  position: absolute;
  right: 10px;
  top: 10px;
  color: white;
  cursor: pointer;
}
</style>
