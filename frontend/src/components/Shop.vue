<template>
  <div class="container">
    <b-button type="is-primary" @click="isHidden = !isHidden">Shop</b-button>

    <div v-if="!isHidden">
      <div class="columns is-mobile">
        <div class="column is-one-quarter is-offset-3">
          <h1>Drink</h1>
          <b-button type="is-warning">10 coins</b-button>
        </div>
        <div class="column is-one-quarter">
          <h1>Protein Bar</h1>
          <b-button type="is-warning">10 coins</b-button>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-one-quarter is-offset-3">
          <h1>Syringe</h1>
          <b-button type="is-warning">10 coins</b-button>
        </div>
        <div class="column is-one-quarter">
          <h1>Sunglasses</h1>
          <b-button type="is-warning">10 coins</b-button>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-one-quarter is-offset-3">
          <h1>Bandana</h1>
          <b-button type="is-warning">10 coins</b-button>
        </div>
        <div class="column is-one-quarter">
          <h1>Gold Chain</h1>
          <b-button type="is-warning">10 coins</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "side-drawer";
export default {
  name: "Shop",

  data() {
    return {
      isHidden: false,
    };
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
}
</style>