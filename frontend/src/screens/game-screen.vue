<template>
  <div id="content">
    <background-image image="1920.jpg" />

    <p id="t">Muscle miner {{this.$store.state.clicks}}</p>

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

export default {
  components: {
    backgroundImage
  },
  methods: {
    clickMethod() {
      this.$store.commit("increment");
      this.show = !this.show;
      this.animation = !this.animation;
    }
  },
  data() {
    return {
      myImage: "../assets/images/original-1.png",
      strength: 1,
      show: false
    };
  }
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
</style>