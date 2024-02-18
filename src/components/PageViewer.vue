<template>
  <div id="content" class="container">
    <h1 class="title-color">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>
<script>
export default {
  created() {
    this.page = this.$pages.getSinglePage(this.$route.params.index)
  },
  data() {
    return {
      page: {},
    }
  }
}
</script>
<style scoped>
  .title-color {
    color: blue;
  }
</style>