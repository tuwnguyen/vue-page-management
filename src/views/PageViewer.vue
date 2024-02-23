<template>
  <div id="content" class="container">
    <h1 class="title-color">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<script>
import { watch, computed, ref } from 'vue';
import { useStore, mapGetters } from "vuex"
export default {
  props: ['index'],
  setup(props) {
    const store = useStore()
    const page = ref(getSinglePage(props.index))
    
    watch(() => props.index, (newIndex, oldIndex) => {
      page.value = getSinglePage(newIndex)
    })

    function getSinglePage(index) {
      const getPage = computed(() => {
        return (_idx) => {
          return store.getters['pages/getSinglePage'](_idx)
        }
      }).value

      return getPage(index)
    }
    return {
      page,
    }
  },
}

</script>
<style scoped>
  .title-color {
    color: blue;
  }
</style>