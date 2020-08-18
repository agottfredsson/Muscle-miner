import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clicks: 0,
    userId: null,
    coins: 0,
    userState: 7,
  },
  mutations: {
    increment(state) {
      //setInterval(function () { state.coins += 5; }, 3000);
      state.clicks += 1;
      state.coins += 5;
    },
    setId(state, id) {
      state.userId = id;
    },
  },
  actions: {},
  modules: {},
});
