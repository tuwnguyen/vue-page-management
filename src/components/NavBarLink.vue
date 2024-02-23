<template>
  <li>
    <router-link
      :to="`/${props.index}`"
      class="nav-link"
      active-class="active emphasize"
      aria-current="page"
      :title="`This redirect to ${props.page.link.text} page`"
    >
      {{props.page.link.text}}
    </router-link>
  </li>
</template>
<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    index: Number,
    page: Object,
    isActive: Boolean
  })
</script>
<style scoped>

</style>