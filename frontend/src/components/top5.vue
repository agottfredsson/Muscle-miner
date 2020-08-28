
<template>
  <div>
    <ul id="topscore" v-for="(user, index) in this.database" :key="user.userId">
             <li id="topScoreElement">
             <span class="wordart"> {{items[index]}} </span> <span id="name">Player: {{user.name}}</span> <p id="score">Lifted: {{user.score}} LBS </p> <p id="clicks">Clicks: {{user.trueclicks}}</p>  <p v-if="user.eff > 0" id="eff">BeastLevel: {{user.eff}}</p> 
      </li>
    </ul>
  </div>
</template>

<script>

    import Vue from 'vue'
    import AutoScroll from 'vue-autoscroll-list'
    Vue.use(AutoScroll)

    

    export default {    
        name: "highscore",

        created() {
            fetch("http://localhost:3000/top5")
            .then((response) => response.json())
            .then((result) => {
                this.database = result
                console.log(this.database)
            });
        },
          methods: 
            {

            },
        
          data(){
            return{
                database : [],
                users :[],
                items : [1,2,3,4,5]
                
            }
            }
             
      }
</script>




<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

  div{
      font-family: 'Audiowide', cursive;
      margin-top: 60px;
  }
  
  ul {
    background-color: rgba(192,77,249, 0.4);
    padding: 3px;
    border-radius: 10px;
    margin:0 0 7px 0; 
  }

  li{
      background-color: rgba(255,72,196, 0.7);
      padding: 3px;
      border-radius: 9px;
  }

  ul li{
      margin: 4px;
  }
  #name{
    font-size: 20px;
    
  }

.slide-fade-enter-active {
  transition: all 1.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
.wordart {
position: relative;
float: left;
left: 30px;
top: 15px;
 
  
  font-size: 30px;
  font-family: Impact, sans-serif;
  color: transparent;
  background: linear-gradient(to bottom left, #fee601, #fe4201);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-shadow: 1px 0 0 #d4af37, 0 1px 0 #c14d00, 2px 1px 0.35px #813300,
    1px 2px 0.35px #d4af37, 3px 2px 0.35px #813300, 2px 3px 0.35px #c14d00,
    4px 3px 0.35px #813300, 3px 4px 0.35px #c14d00, 5px 4px 0.35px #813300,
    4px 5px 0.35px #c14d00, 6px 5px 0.35px #813300, 5px 6px 0.35px #c14d00,
    7px 6px 0.35px #813300, 6px 7px 0.35px #c14d00;
}

</style>