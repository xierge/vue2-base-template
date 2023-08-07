import Vue from "vue";
import Vuex from "vuex";

import goods from "./modules/goods";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    increment(state) {
      const fetchData = async () => {
        state.count++;
      };
      fetchData();
    },
    decreament(state) {
      state.count--;
    },
  },
  actions: {
    action_increment(context) {
      setTimeout(() => {
        context.commit("increment");
      }, 2000);
    },
  },
  modules: {
    goods,
  },
});
