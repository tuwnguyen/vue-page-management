<template>
    <nav-bar
      :pages="pages"
      :active-page="activePage"
      :nav-link-click="(index) => activePage = index">
    </nav-bar>

    <create-page
      @page-created="pageCreated"
    ></create-page>
    <!-- <page-viewer
      :page="pages[activePage]">
    </page-viewer> -->
</template>
<script>
import NavBar from './components/NavBar.vue';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';

export default {
  components: {
    NavBar,
    PageViewer,
    CreatePage,
  },
  data() {
    return {
      activePage: 0,
      pages:[],
    }
  },
  created() {
    this.getPages()
  },
  methods: {
    async getPages() {
      const res = await fetch('pages.json')
      const data = await res.json()
      this.pages = data
    },
    pageCreated(pageObj) {
      this.pages.push(pageObj)
    }
  }
}
</script>
<style>
  
</style>