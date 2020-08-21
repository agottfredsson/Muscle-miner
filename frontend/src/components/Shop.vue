<template>
  <div class="container">
    <img id="shopLogo" src="../assets/images/shopping-cart.png" @click="isHidden = !isHidden" />
    <div v-if="isHidden">
      <div>
        <img id="gif" src="../assets/gifs/anton.gif" />
      </div>
      <div class="columns is-mobile">
        <div class="column is-one-quarter is-offset-3">
          <img id="image" src="../assets/images/energy-drink.png" />
          <div id="textArea">
            <h1>Drink</h1>
            <p>Do you even drink bro?</p>
          </div>
          <div>
            <p class="coins">{{this.drink}}</p>
            <img id="logo" @click="shopBTN(drink)" src="../assets/images/coin-logo.png" />
          </div>
        </div>
        <div class="column is-one-quarter is-offset-0">
          <img id="image" src="../assets/images/syringe.png" />
          <div id="textArea">
            <h1>Syringe</h1>
            <p>The heavy shit!!</p>
          </div>
          <div>
            <p class="coins">{{this.syringe}}</p>
            <img id="logo" @click="shopBTN(syringe)" src="../assets/images/coin-logo.png" />
          </div>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-one-quarter is-offset-3">
          <img id="image" src="../assets/images/glasses.png" />
          <div id="textArea">
            <h1>Sunglasses</h1>
            <p>Protect those eyes</p>
          </div>
          <div>
            <p class="coins">{{this.sunGlasses}}</p>
            <img id="logo" @click="shopBTN(sunGlasses)" src="../assets/images/coin-logo.png" />
          </div>
        </div>
        <div class="column is-half is-3 is-offset-0">
          <img id="image" src="../assets/images/chain.png" />
          <div id="textArea">
            <h1>Gold Chain</h1>
            <p>Just epiq</p>
          </div>
          <div>
            <p class="coins">{{this.goldChain}}</p>
            <img id="logo" @click="shopBTN(goldChain)" src="../assets/images/coin-logo.png" />
          </div>
        </div>
      </div>
    </div>
    <div id="buyText">
      <transition name="slide-fade">
        <p id="yougo" v-if="!animation">
          <span>{{this.hurray}}</span>
        </p>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "Shop",
  data() {
    return {
      isHidden: false,
      drink: 1,
      bar: 2,
      syringe: 3,
      sunGlasses: 4,
      bandana: 5,
      goldChain: 6,
      animation: true,
    };
  },

  methods: {
    hide() {
      console.log("hiden");
    },
    beefCake(textInfo) {
      this.hurray = textInfo;

      this.animation = false;
      setTimeout(() => {
        this.animation = true;
      }, 500);
    },
    shopBTN(value) {
      console.log("shop button", value);
      switch (value) {
        case this.drink:
          if (this.$store.state.coins < this.drink) {
            break;
          }
          this.$store.commit("coinValue", this.drink);
          this.$store.commit("changeStrength", 1);
          this.beefCake("DAMN! THATS GOOD!");
          break;
        case this.bar:
          if (this.$store.state.coins < this.bar) {
            break;
          }
          this.$store.commit("coinValue", this.bar);
          this.$store.commit("changeStrength", 2);
          this.beefCake("AAAHHHHH STRENGTH!!");
          break;
        case this.syringe:
          if (
            this.$store.state.userState === 7 ||
            this.$store.state.userState === 6 ||
            this.$store.state.userState === 2 ||
            this.$store.state.userState === 4
          ) {
            this.beefCake("ONE NEEDLE IS ENOUGH!");
            break;
          }
          if (
            this.$store.state.coins === 0 ||
            this.$store.state.coins < this.syringe
          ) {
            this.beefCake("NO MÖNEY!");
            break;
          }
          this.$store.commit("coinValue", this.syringe);
          this.$store.commit("changeStrength", 5);

          switch (this.$store.state.userState) {
            case 0:
              this.$store.commit("changeUserState", 7);
              break;
            case 1:
              this.$store.commit("changeUserState", 2);
              break;
            case 3:
              this.$store.commit("changeUserState", 4);
              break;
            case 5:
              this.$store.commit("changeUserState", 6);
              break;
            default:
              break;
          }
          break;

        case this.sunGlasses:
          if (
            this.$store.state.userState === 1 ||
            this.$store.state.userState === 2 ||
            this.$store.state.userState === 3 ||
            this.$store.state.userState === 4
          ) {
            this.beefCake("ANOTHER ONE?! NO!");
            break;
          }
          if (
            this.$store.state.coins === 0 ||
            this.$store.state.coins < this.sunGlasses
          ) {
            this.beefCake("NO MÖNEY!");
            break;
          }
          this.$store.commit("coinValue", this.sunGlasses);

          switch (this.$store.state.userState) {
            case 0:
              this.$store.commit("changeUserState", 1);
              break;
            case 5:
              this.$store.commit("changeUserState", 3);
              break;
            case 6:
              this.$store.commit("changeUserState", 4);
              break;
            case 7:
              this.$store.commit("changeUserState", 2);
              break;
            default:
              break;
          }
          break;

        case this.goldChain:
          if (
            this.$store.state.userState === 5 ||
            this.$store.state.userState === 3 ||
            this.$store.state.userState === 4 ||
            this.$store.state.userState === 6
          ) {
            this.beefCake("MORE GOLD? NO BRO!");
            break;
          }
          if (
            this.$store.state.coins === 0 ||
            this.$store.state.coins < this.goldChain
          ) {
            this.beefCake("NO MÖNEY!");
            break;
          }
          this.$store.commit("coinValue", this.goldChain);

          switch (this.$store.state.userState) {
            case 0:
              this.$store.commit("changeUserState", 5);
              break;
            case 1:
              this.$store.commit("changeUserState", 3);
              break;
            case 2:
              this.$store.commit("changeUserState", 4);
              break;
            case 7:
              this.$store.commit("changeUserState", 6);
              break;
            default:
              break;
          }
          break;
      }
    },
  },
};
</script>

<style scoped>
#logo {
  width: 65px;
}

.columns {
  margin-top: 0px;
  column-gap: 10px;
  width: 600px;
}
.column {
  border: solid 1px;
  background-color: lightgoldenrodyellow;
  margin-top: -8px;
}
.column h1 {
  font-weight: bold;
}
.coins {
  position: relative;
  color: black;
  font-size: 1.5rem;
  align-self: center;
}
#image {
  width: 50px;
  margin-right: 250px;
}
#shopLogo {
  height: 80px;
  width: 80px;
}
#shopLogo:hover {
  transform: scale(1.3);
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
#yougo {
  color: blueviolet;
  font-size: 40px;
  text-align: center;
}
#buyText {
  position: relative;
  z-index: 1;
  bottom: 500px;
}
#yougo span {
  background-color: white;
}
#gif {
  height: 250px;
}
</style>
