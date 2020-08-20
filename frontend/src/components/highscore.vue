
<template>

      <div>
        <ul id="topscore" v-for="(user) in this.database" :key="user.userId">
              <li id="topScoreElement">
                  <p id="name">Player: {{user.name}}</p> <p id="score">Lifted: {{user.score}} LBS  </p>
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
            fetch("http://localhost:3000/topscore")
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
                
            }
          },    
      }
</script>




<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

  div{
      font-family: 'Audiowide', cursive;
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
</style>