<template>
  <div id="content" class="container">
    <h1 class="title-color">Page title</h1>
    <p>{{$route.params.index}}</p>
  </div>
</template>
<script>
export default {
  created() {
    
  }
}
</script>
<style scoped>
  .title-color {
    color: blue;
  }
</style>