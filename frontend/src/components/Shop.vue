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
        <div class="column is-one-quarter is-offset-3">
          <img id="image" src="../assets/images/bar.png" />
          <div id="textArea">
            <h1>Bandana</h1>
            <p>Why not?!</p>
          </div>
          <b-button @click="shopBTN(bandana)" type="is-warning">{{this.bandana}} coins</b-button>
        </div>
        <div class="column is-one-quarter">
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
      drink: 5,
      bar: 200,
      syringe: 5,
      sunGlasses: 5,
      bandana: 200,
      goldChain: 5000,
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
          if (this.$store.state.coins < this.syringe) {
            break;
          }
          this.$store.commit("coinValue", this.syringe);
          this.$store.commit("changeUserState", 7);
          break;
        case this.sunGlasses:
          if (this.$store.state.coins < this.sunGlasses) {
            break;
          }
          this.$store.commit("coinValue", this.sunGlasses);

          break;
        case this.bandana:
          if (this.$store.state.coins < this.bandana) {
            break;
          }
          this.$store.commit("coinValue", this.bandana);
          break;
        case this.goldChain:
          if (this.$store.state.coins < this.goldChain) {
            break;
          }
          this.$store.commit("coinValue", this.goldChain);
          break;
        default:
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