<template>
  <li>
    <router-link
      :to="`/${index}`"
      class="nav-link"
      active-class="active emphasize"
      aria-current="page"
      :title="`This redirect to ${page.link.text} page`"
    >
      {{page.link.text}}
    </router-link>
  </li>
</template>
<script>
export default {
  props: [
    'index',
    'page',
    'isActive',
  ],
}
</script>
<style scoped>

</style>