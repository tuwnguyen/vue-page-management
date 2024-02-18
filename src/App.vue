<template>
    <nav-bar></nav-bar>

    <router-view></router-view>
    <!-- <page-viewer
      :page="pages[activePage]">
    </page-viewer>

    <create-page
      @page-created="pageCreated"
    ></create-page> -->
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
  methods: {
    pageCreated(pageObj) {
      this.pages.push(pageObj)
    }
  }
}
</script>
<style>
  
</style>