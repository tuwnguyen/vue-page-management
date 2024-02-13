<template>
  <div class="container mb-3">
    <form action="">
      <div class="mb-3">
        <lavel class="form-label" for="">
          Page Title
        </lavel>
        <input 
        type="text" 
        class="form-control"
        v-model="pageTitle"
        >
      </div>
      <div class="mb-3">
        <lavel class="form-label" for="">
          Page Content
        </lavel>
        <textarea 
        type="text"
        rows="5" 
        class="form-control"
        v-model="content"
        ></textarea>
      </div>
      <div class="mb-3">
        <button 
        class="btn btn-primary"
        @click.prevent="pageCreated({pageTitle, content})"
        >
          Create Page
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: ['pageCreated'],
  data() {
    return {
      pageTitle: '',
      content:''
    }
  }
}
</script>
<style scoped>
  
</style>