<template>
  <div class="container">
    <b-button type="is-info" @click="isHidden = !isHidden">Shop</b-button>

    <div v-if="isHidden">
      <div class="columns is-mobile">
        <div class="column is-one-quarter is-offset-3">
          <h1>Drink</h1>
          <b-button @click="onClick(drink)" type="is-warning">10 coins</b-button>
        </div>
        <div class="column is-one-quarter">
          <h1>Protein Bar</h1>
          <b-button @click="onClick(bar)" type="is-warning">10 coins</b-button>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-one-quarter is-offset-3">
          <h1>Syringe</h1>
          <b-button @click="onClick(syringe)" type="is-warning">10 coins</b-button>
        </div>
        <div class="column is-one-quarter">
          <h1>Sunglasses</h1>
          <b-button @click="onClick(sunGlasses)" type="is-warning">10 coins</b-button>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-one-quarter is-offset-3">
          <h1>Bandana</h1>
          <b-button @click="onClick(bandana)" type="is-warning">10 coins</b-button>
        </div>
        <div class="column is-one-quarter">
          <h1>Gold Chain</h1>
          <b-button @click="onClick(goldChain)" type="is-warning">10 coins</b-button>
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
      drink: "drink",
      bar: "protein bar",
      syringe: "syringe",
      sunGlasses: "sunglasses",
      bandana: "bandana",
      goldChain: "gold chain",
    };
  },
  methods: {
    onClick(value) {
      alert(value);
    },
  },
};
</script>

<style scoped>
.columns {
  margin-top: 20px;
  column-gap: 10px;
}
.column {
  border: solid 1px;
  background-color: lightgoldenrodyellow;
}
.column h1 {
  font-weight: bold;
}
</style>