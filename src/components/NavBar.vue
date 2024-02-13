<template>
    <nav 
    class="navbar navbar-expand-lg"
    :class="[`navbar-${theme}`, `bg-${theme}`, `navbar navbar-expand-lg`]"
    >
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="(page, index) in pages" class="navItem" :key="index">
            <nav-bar-link
            :page="page"
            :isActive="index === activePage"
            @click.prevent="navLinkClick(index)">
            </nav-bar-link>
          </li>
        </ul>
      </div>
      <form class="d-flex">
        <button
        class="btn btn-primary"
        @click.prevent="changeTheme()"
        >Toggle</button>
      </form>
    </nav>
</template>
<script>
import NavBarLink from './NavBarLink.vue'
export default {
  components: {
    NavBarLink
  },
  props: [
    `pages`,
    `activePage`,
    `nav-link-click`,
  ],
  data() {
    return {
      theme: `dark`
    }
  },
  methods: {
    changeTheme() {
      let theme = 'dark'
      if(theme === this.theme) {
        theme = 'light'
      }
      this.theme = theme
    }
  }
}
</script>
<style>
  
</style>