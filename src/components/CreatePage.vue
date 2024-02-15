<template>
    <form class="container mb-3" action="">
      <div class="row">
        <div class="col-md-8">
          <div class="mb-3">
            <label class="form-label" for="">
              Title
            </label>
            <input 
            type="text" 
            class="form-control"
            v-model="pageTitle"
            >
          </div>
          <div class="mb-3">
            <label class="form-label" for="">
              Content
            </label>
            <textarea 
            type="text"
            rows="5" 
            class="form-control"
            v-model="content"
            ></textarea>
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="" class="form-label">
              Link Text
            </label>
            <input 
            type="text" 
            class="form-control"
            v-model="linkText">
          </div>
          <div class="mb-3">
            <label for="" class="form-label">
              Link URL
            </label>
            <input 
            type="text" 
            class="form-control"
            v-model="linkURL">
          </div>
          <div class="row mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="published">
              <label class="form-check-label" for="gridCheck1">
                Published
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <button 
        class="btn btn-primary"
        :disabled="isFormInValid"
        @click.prevent="submitForm"
        >
          Create Page
        </button>
      </div>
    </form>
    
</template>
<script>
export default {
  props: ['pageCreated'],
  data() {
    return {
      pageTitle: '',
      content:'',
      linkText: '',
      linkURL: '',
      published: true,
    }
  },
  computed: {
    isFormInValid() {
      if(!this.pageTitle || !this.content || !this.linkURL || !this.linkText) return true
      return false
    }
  },
  methods: {
    submitForm() {
      this.pageCreated({
        pageTitle: this.pageTitle,
        content: this.content,
        link: {
          text: this.linkText,
          url: this.linkURL,
        },
        published: this.published
      })
      this.pageTitle= ''
      this.content= ''
      this.linkText= ''
      this.linkURL= ''
      this.published= true
    }
  }
}
</script>
<style scoped>
  
</style>