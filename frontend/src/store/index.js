import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clicks: 0,
    userId: null,
    userState: 7,
  },
  mutations: {
    increment(state) {
      state.clicks += 1;
    },
    setId(state, id) {
      state.userId = id;
    },
  },
  actions: {},
  modules: {},
});
