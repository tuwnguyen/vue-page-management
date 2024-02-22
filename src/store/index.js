import { createStore, createLogger } from 'vuex';
import { INCREASE } from './mutation-types';
export default createStore({
  strict: true,

  state() {
    return {
      count: 0,
    };
  },

  getters: {
    checkCount: (state) => (state.count ? true : false),
  },

  mutations: {
    [INCREASE](state, payload) {
      state.count += payload.amount;
    },
  },

  actions: {
    increase(context, payload) {
      context.commit('INCREASE', payload);
    },
  },
});
