<template>
  <div class="game">
    <h1>Muscle miner</h1>



    <div v-if="animation">
      <img id="pic" src="../assets/images/4.jpg" @click="meme()" />
    </div>
    <div v-else>
      <img id="pic" src="../assets/images/3.jpg"  @click="meme()" />
    </div>


    
  </div>
</template>


<script>
export default {
  components: {
    
  },
  methods: {
    meme() {
      this.animation = !this.animation;
    }
  },
  data() {
    return {
      myImage: '../assets/images/3.jpg',
      animation: false
    };
  },
};
</script>



<style scoped>

#button {
  width: 100px;
  height: 20px;
}

#pic {
  height: 400px;
  width: 400px;
}
#pic2 {
  height: 400px;
  width: 400px;
}
</style>