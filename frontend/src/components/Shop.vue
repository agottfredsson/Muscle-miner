<template>
  <div class="container">
    <p class="coins">Coins: {{this.$store.state.coins}}</p>
    <b-button type="is-info" @click="isHidden = !isHidden">Shop</b-button>

    <div v-if="isHidden">
      <div class="columns is-mobile">
        <div class="column is-one-quarter is-offset-3">
          <img id="image" src="../assets/images/energy-drink.png" />
          <div id="textArea">
            <h1>Drink</h1>
            <p>Do you even drink bro?</p>
            <br />
          </div>
          <b-button @click="shopBTN(drink)" type="is-warning">{{this.drink}} coins</b-button>
        </div>
        <div class="column is-one-quarter">
          <img id="image" src="../assets/images/bar.png" />
          <div id="textArea">
            <h1>Protein Bar</h1>
            <p>Protein is the key for every lift</p>
          </div>
          <b-button @click="shopBTN(bar)" type="is-warning">{{this.bar}} coins</b-button>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-one-quarter is-offset-3">
          <img id="image" src="../assets/images/syringe.png" />
          <div id="textArea">
            <h1>Syringe</h1>
            <p>The heavy shit</p>
            <br />
          </div>
          <b-button @click="shopBTN(syringe)" type="is-warning">{{this.syringe}} coins</b-button>
        </div>
        <div class="column is-one-quarter">
          <img id="image" src="../assets/images/glasses.png" />
          <div id="textArea">
            <h1>Sunglasses</h1>
            <p>Need to protect those eyes</p>
          </div>
          <b-button @click="shopBTN(sunGlasses)" type="is-warning">{{this.sunGlasses}} coins</b-button>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-half is-3 is-offset-3">
          <img id="image" src="../assets/images/chain.png" />
          <div id="textArea">
            <h1>Gold Chain</h1>
            <p>Just epiq</p>
          </div>
          <b-button @click="shopBTN(goldChain)" type="is-warning">{{this.goldChain}} coins</b-button>
        </div>
      </div>
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
    };
  },
  methods: {
    shopBTN(value) {
      switch (value) {
        case this.drink:
          if (this.$store.state.coins < this.drink) {
            break;
          }
          this.$store.commit("coinValue", this.drink);
          this.$store.commit("changeStrength", 1);
          break;
        case this.bar:
          if (this.$store.state.coins < this.bar) {
            break;
          }
          this.$store.commit("coinValue", this.bar);
          break;
        case this.syringe:
          if (
            this.$store.state.coins < this.syringe ||
            this.$store.state.userState === 7 ||
            this.$store.state.userState === 6 ||
            this.$store.state.userState === 2 ||
            this.$store.state.userState === 4
          ) {
            break;
          }
          this.$store.commit("coinValue", this.syringe);

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
            this.$store.state.coins < this.sunGlasses ||
            this.$store.state.userState === 1 ||
            this.$store.state.userState === 2 ||
            this.$store.state.userState === 3 ||
            this.$store.state.userState === 4
          ) {
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
            this.$store.state.coins < this.goldChain ||
            this.$store.state.userState === 5 ||
            this.$store.state.userState === 3 ||
            this.$store.state.userState === 4 ||
            this.$store.state.userState === 6
          ) {
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
.columns {
  margin-top: 10px;
  column-gap: 10px;
}
.column {
  border: solid 1px;
  background-color: lightgoldenrodyellow;
}
.column h1 {
  font-weight: bold;
}
.coins {
  position: relative;
  color: white;
  font-size: 2rem;
}
#image {
  width: 50px;
  margin-right: 250px;
}
</style>