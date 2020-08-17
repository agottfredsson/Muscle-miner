<template>
<div id="content">

  <background-image image='1920.jpg'/>

  <h1 id="t">Muscle miner {{clicks}}</h1>


  

    <div id="gameWindow"> 

     

      <div v-if="animation" style="cursor: pointer">
        <img id="image" src="../assets/images/original-2.png" @click="meme()" />
      </div>
      <div v-else style="cursor: pointer">
        <img id="image" src="../assets/images/original-1.png"  @click="meme()" />
      </div>
    </div>

  </div>
</template>


<script>
import backgroundImage from "../components/background.vue"


export default {
  components: {
    backgroundImage,
 
  },
  methods: {
    
    meme() {
     this.show = !this.show;
      this.animation = !this.animation;
      this.clicks ++;
     
    },
  },
  data() {
    return {
      myImage: '../assets/images/original-1.png',
      clicks: 0,
      strength: 1,
      show: false,
     
     
     
    };
  },
};
</script>



<style scoped>


#t {
  position: relative;
  color: white;
  font-size: 4rem;
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