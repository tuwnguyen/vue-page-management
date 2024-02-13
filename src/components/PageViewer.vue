<template>
  <div id="content" class="container">
    <h1 class="title-color">{{page.pageTitle}}</h1>
    <p>{{page.content}}</p>
  </div>
</template>
<script>
export default {
  props: {
    page: {
      type: Object,
      default(rawProps) {
        return {
          pageTitle: '',
          content: '',
        }
      }
    }
  },
}
</script>
<style scoped>
  .title-color {
    color: blue;
  }
</style>