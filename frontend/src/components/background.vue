<template>
  <div
    id="background"
    :style="{'background-image': 'url(' + require(`../assets/images/${image}`) + ')'}"
  ></div>
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
</style>