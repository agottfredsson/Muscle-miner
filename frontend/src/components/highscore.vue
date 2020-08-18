
<template>

  <AutoScroll>

      <div>{{users[0]}}</div>
      <div>{{users[1]}}</div>
      <div>{{users[2]}}</div>
        
  </AutoScroll>
    
</template>




<script>

    import Vue from 'vue'
    import AutoScroll from 'vue-autoscroll-list'
    Vue.use(AutoScroll)

    

    export default {
        name: "highscore",

        created() {
            fetch("http://localhost:3000/")
            .then((response) => response.json())
            .then((result) => {
                
                this.database = result
                console.log(this.database)

            });
    },
          methods: 
          {
            createHighscoreArray(){
                
                
            }

            },
        
          data(){
            return{
                database : [],
                users :[]
            }

        },
          
}


</script>




<style scoped>




</style>