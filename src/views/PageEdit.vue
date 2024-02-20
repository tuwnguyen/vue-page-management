<template>
  <h4>Edit {{ page.pageTitle }}: </h4>
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
          v-model="page.pageTitle"
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
          v-model="page.content"
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
          v-model="page.linkText">
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Link URL
          </label>
          <input 
          type="text" 
          class="form-control"
          v-model="page.linkURL">
        </div>
        <div class="row mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="page.published">
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
        @click.prevent="submit"
      >
        Edit
      </button>
      <button
        class="btn btn-secondary"
        @click.prevent="goToPageList"
      >
        Cancel
      </button>
    </div>
  </form>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import { inject } from 'vue';

  
  const router = useRouter()
  const { index } = defineProps(['index'])

  const bus  = inject('$bus')
  const pages = inject('$pages')
  const page = pages.getSinglePage(index)

  function submit() {
    pages.editPage(index, page)
    bus.$emit('page-updated')
    goToPageList()
  }

  function goToPageList() {
    router.push({path: `/pages`})
  }
</script>