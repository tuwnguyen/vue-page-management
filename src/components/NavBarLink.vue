<template>
  <li>
    <a 
      class="nav-link"
      :class="activeClasses"
      :href="page.link.url"
      :title="`This redirect to ${page.link.text} page`"
      @click.prevent="$bus.$emit('navbarLinkActived', index)">
      {{page.link.text}}
    </a>
  </li>
</template>
<script>
export default {
  props: [
    'index',
    'page',
    'isActive'
  ],
  computed: {
    activeClasses() {
      return {
        active: this.isActive,
        emphasize: this.isActive
      }
    }
  }
}
</script>
<style scoped>
  .emphasize {
    text-decoration: underline !important;
  }
</style>