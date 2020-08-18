<template>
  <div
    id="background"
    :style="{
      'background-image': 'url(' + require(`../assets/images/${image}`) + ')',
    }"
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
    </div>
  </div>
</template>

<script>
export default {
  name: "backgroundImage",
  props: {
    image: String,
  },
};
</script>

<style scoped>
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
</style>
