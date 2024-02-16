<template>
    <nav-bar
      :pages="pages"
      :active-page="activePage"
    >
    </nav-bar>

    <page-viewer
      :page="pages[activePage]">
    </page-viewer>

    <create-page
      @page-created="pageCreated"
    ></create-page>
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
    this.$bus.$on('navbarLinkActived', (index) => {
      this.activePage = index
    })
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