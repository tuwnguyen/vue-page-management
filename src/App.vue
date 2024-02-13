<template>
    <nav-bar
      :pages="pages"
      :active-page="activePage"
      :nav-link-click="(index) => activePage = index">
    </nav-bar>

    <page-viewer
      :page="pages[activePage]">
    </page-viewer>
</template>
<script>
import NavBar from './components/NavBar.vue';
import PageViewer from './components/PageViewer.vue';

export default {
  components: {
    NavBar,
    PageViewer
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
    }
  }
}
</script>
<style>
  
</style>