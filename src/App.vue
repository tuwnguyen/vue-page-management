<template>
    <nav-bar></nav-bar>

    <router-view/>
</template>
<script>
import NavBar from './components/NavBar.vue';
import { useStore } from "vuex"
export default {
  components: {
    NavBar,
  },
  setup() {
    const store = useStore()
    store.dispatch('pages/getAllPages')
  },
}
</script>
<style>
  
</style>