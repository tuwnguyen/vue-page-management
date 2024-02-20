<template>
    <nav 
    class="navbar navbar-expand-lg"
    :class="[`navbar-${theme}`, `bg-${theme}`, `navbar navbar-expand-lg`]"
    >
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <nav-bar-link
              v-for="(page, index) in pagesPublished" class="navItem" :key="index"
              :page="page"
              :index="index">
            </nav-bar-link>
            <li>
              <router-link
                :to="`/pages`" 
                class="nav-link"
                active-class="active"
                aria-current="page"
              >
                Pages
              </router-link>
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
  inject:['$pages', '$bus'],
  created() {
    this.getThemeSetting()
    this.pages = this.$pages.getAllPages()

    this.$bus.$on('page-updated', () => {
      this.pages = [...this.$pages.getAllPages()]
    })

    this.$bus.$on('page-created', () => {
      this.pages = [...this.$pages.getAllPages()]
    })

    this.$bus.$on('page-deleted', () => {
      this.pages = [...this.$pages.getAllPages()]
    })
  },
  computed: {
    pagesPublished() {
      return this.pages.filter(p => p.published)
    }
  },
  data() {
    return {
      theme: `dark`,
      pages: []
    }
  },
  methods: {
    changeTheme() {
      let theme = 'dark'
      if(theme === this.theme) {
        theme = 'light'
      }
      this.theme = theme
      this.storeThemeSetting()
    },
    storeThemeSetting() {
      localStorage.setItem('theme', this.theme)
    },
    getThemeSetting() {
      let theme = localStorage.getItem('theme')
      if(theme) {
        this.theme = theme
      }
    }
  }
}
</script>
<style>
  
</style>