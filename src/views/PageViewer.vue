<template>
  <div id="content" class="container">
    <h1 class="title-color">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>
<script>
export default {
  props: ['index'],
  created() {
    this.page = this.$pages.getSinglePage(this.$route.params.index)

    // way to watch params to change the page
    // this.$watch(() => this.$route.params, (newParams, prevParams) => {
    //   this.page = this.$pages.getSinglePage(newParams.index)
    // })
  },
  data() {
    return {
      page: {},
    }
  },
  watch: {
    index(newIndex, prevIndex) {
      this.page = this.$pages.getSinglePage(newIndex)
    }
  }
}
</script>
<style scoped>
  .title-color {
    color: blue;
  }
</style>