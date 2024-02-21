import { createStore, createLogger } from 'vuex';

export default createStore({
  strict: true,

  state() {
    return {
      count: 0,
    };
  },

  getters: {
    count: (state) => state.count,
  },

  mutations: {
    increment(state) {
      state.count++;
    },
  },

  actions: {
    increment(context) {
      context.commit('increment');
    },
  },
});
