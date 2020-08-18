import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clicks: 0,
    userId: null,
    coins: 0,
    userState: 0,
    strength: 1,
  },
  mutations: {
    increment(state) {
      //setInterval(function () { state.coins += 5; }, 3000);
      state.clicks += state.strength;
      state.coins += 5;
    },
    coinValue(state, value) {
      state.coins -= value;
    },
    setId(state, id) {
      state.userId = id;
    },
    changeStrength(state, value) {
      state.strength += value;
    },
    changeUserState(state, value) {
      state.userState = value;
    },
  },
  actions: {},
  modules: {},
});
