<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Audiowide', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
