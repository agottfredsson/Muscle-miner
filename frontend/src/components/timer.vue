<template>
   <div id="counter">{{min}} <span v-if="this.min > 0">:</span> {{timerCount}} </div>
</template>

<script>
    export default {
        data() {
            return {
                timerCount:1,
                min: null,
                totalTime: 0
            }
        },
        watch: {

            timerCount: {
                handler(value) {

                    if (value > 0) {
                        setTimeout(() => {
                          this.timerCount++;
                          this.totalTime++;
                          this.$store.state.totalTime ++
                        }, 1000);
                        console.log(this.$store.state.totalTime +    " STORE TOTAL TID")
                        console.log(this.timerCount)
                        console.log(this.min + "min")
                    }if(this.timerCount>59){
                        this.min++ 
                        this.timerCount = 0
                        
                      }

                },
                immediate: true 
            }

        }
    }

</script>

<style scoped>
  #counter{
    font-size: 60px;
    color: hotpink;
  }

</style>