const pagesKey = 'pages';

let pageJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pageJson);

function save() {
  localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
}

export default {
  getAllPages() {
    return pagesStore;
  },

  getSinglePage(index) {
    return pagesStore[index];
  },

  editPage(index, page) {
    pagesStore[index] = page;
    save();
  },

  createPage(page) {
    pagesStore.push(page);
    save();
  },

  delPage(index) {
    pagesStore.splice(index, 1);
    save();
  },
};
