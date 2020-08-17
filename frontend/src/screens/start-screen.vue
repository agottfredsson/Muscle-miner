<template>
  <div class="start">
    <h1>START SCREEN</h1>

    <router-link to="/game">Play game</router-link>
    <input v-model="userName" placeholder="Type your name" />
    <input type="button" value="OK" @click="addUser()" />
  </div>
</template>

<script>
export default {
  name: "Start",
  components: {},
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    addUser() {
      fetch(`http://localhost:3000/${this.userName}`, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        });
    },
  },
};
</script>

<style scoped></style>
