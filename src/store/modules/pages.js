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
    setPages(commit);
  },

  editPage({ commit }, { index, page }) {
    data.editPage(index, page);
    setPages(commit);
  },

  createPage({ commit }, { page }) {
    data.createPage(page);
    setPages(commit);
  },

  delPage({ commit }, { index }) {
    data.delPage(index);
    setPages(commit);
  },
};

function setPages(commit) {
  const pages = data.getAllPages();
  commit('setPages', { pages });
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
