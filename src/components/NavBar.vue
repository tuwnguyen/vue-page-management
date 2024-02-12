<template>
    <nav 
    class="navbar navbar-expand-lg"
    :class="[`navbar-${theme}`, `bg-${theme}`, `navbar navbar-expand-lg`]"
    >
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="(page, index) in pages" class="navItem" :key="index">
            <a 
            class="nav-link"
            :class="{active: index === activePage}"
            :href="page.link.url"
            :title="`This redirect to ${page.link.text} page`"
            @click.prevent="navLinkClick(index)">
            {{page.link.text}}</a>
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
export default {
  props: [
    `pages`,
    `activePage`,
    `nav-link-click`,
  ],
  data() {
    return {
      theme: `light`
    }
  },
  methods: {
    changeTheme() {
      let theme = 'light'
      if(theme === this.theme) {
        theme = 'dark'
      }
      this.theme = theme
    }
  }
}
</script>
<style>
  
</style>