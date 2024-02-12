<template>
    <NavBar
      :pages="pages"
      :active-page="activePage"
      :nav-link-click="(index) => activePage = index">
    </NavBar>

    <PageViewer
      :page="pages[activePage]">
    </PageViewer>
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
          pages: [
            {
              link: {text:'Home', url: 'index.html'},
              pageTitle: 'Home Page',
              content: 'This is the home page content',
            },
            {
              link: {text:'About', url: 'about.html'},
              pageTitle: 'About Page',
              content: 'This is the About page content',
            },
            {
              link: {text:'Contact', url: 'contact.html'},
              pageTitle: 'Contact Page',
              content: 'This is the Contact page content',
            },
          ],
        }
      }
}
</script>
<style>
  
</style>