<template>
  <div class="start">
    <volume-2-icon
      v-if="audioPlay"
      size="2x"
      class="custom-class"
      @click="toggleAudio()"
    ></volume-2-icon>
    <volume-x-icon
      v-else
      size="2x"
      class="custom-class"
      @click="toggleAudio()"
    ></volume-x-icon>

    <particles-bg type="color" :bg="true" />
    <particles-bg type="custom" :config="config" :bg="true" />

    <router-link to="/"><p id="wordart">Top Dog!</p></router-link>
    
    <topdog id="topdog"></topdog>


    <div class="container">
      
        <span id="topscore"><highscore></highscore></span>
        
        
      </div>
    </div>
 
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
import highscore from "../components/highscore.vue";
import topdog from "../components/topdog.vue";
import { Volume2Icon, VolumeXIcon } from "vue-feather-icons";

export default {
  name: "start",
  components: {
    ParticlesBg,
    Volume2Icon,
    VolumeXIcon,
    highscore,
    topdog
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
        body: null,
        alpha: [1, 0],
        scale: [0.1, 0.4],
        position: "all",
        cross: "dead",
        random: 15,
      },
      userName: "",
      collapse: false,
      isNew: true,
      audioPlay: true,
      audio: null,
    };
  },
  methods: {

    playSound(sound) {
      if (sound) {
        this.audio = new Audio(sound);
        this.audio.play();
      }
    },
    toggleAudio() {
      this.audioPlay = !this.audioPlay;
      if (!this.audioPlay) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
    },
  },
};
</script>

<style scoped>

#topdog{
  margin-top: 1%;
}
#topscore {
  margin-top: 15px;
  margin-right: 10px;
}


.container {
  display: flex;
  justify-content: center;
}

#wordart {
 margin-top: 30px;
  font-size: 130px;
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
.custom-class {
  color: black;
  right: 30px;
  top: 30px;
  position: absolute;
  cursor: pointer;
}
</style>
