import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clicks: 0,
    trueclicks: 0,
    eff:0,
    userId: null,
    coins: 0,
    userState: 0,
    strength: 1,
    audio: true,
    totalTime:0,
  },
  mutations: {
    increment(state) {
      //setInterval(function () { state.coins += 5; }, 3000);
      state.clicks += state.strength;
      state.trueclicks ++;
      state.eff = Math.ceil(state.totalTime) + Math.ceil(state.strength)
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
    changeAudio(state) {
      state.audio = !state.audio;
    },
    resetState(state) {
      state.clicks = 0;
      state.trueclicks = 0;
      state.userId = null;
      state.coins = 0;
      state.userState = 0;
      state.strength = 1;
      state.audio = true;
      
    },
    setStateObj(state, obj) {
      state.clicks = obj.clicks;
      state.trueclicks = obj.trueclicks;
      state.userId = obj.userId;
      state.coins = obj.coins;
      state.userState = obj.userState;
      state.strength = obj.strength;
      state.audio = obj.audio;
      state.eff = obj.eff;
    },
  },
  actions: {},
  modules: {},
});
