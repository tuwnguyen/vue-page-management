import data from '@/data';

const state = () => ({
  pages: [],
});

const getters = {
  pages: (state) => state.pages,
  getSinglePage: (state) => (index) => {
    return state.pages[index];
  },
  getPublishedPages: (state) => state.pages.filter((page) => page.published),
};

const mutations = {
  setPages(state, { pages }) {
    state.pages = pages;
  },
};

const actions = {
  getAllPages({ commit }) {
    const pages = data.getAllPages();
    commit('setPages', { pages });
  },

  editPage({ commit }, { index, page }) {
    data.editPage(index, page);
    const pages = data.getAllPages();
    commit('setPages', { pages });
  },

  createPage({ commit }, { page }) {
    data.createPage(page);
    const pages = data.getAllPages();
    commit('setPages', { pages });
  },

  delPage({ commit }, { index }) {
    data.delPage(index);
    const pages = data.getAllPages();
    commit('setPages', { pages });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
