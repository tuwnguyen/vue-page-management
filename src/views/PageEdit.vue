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
          v-model="page.link.text">
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
        class="btn btn-primary me-2"
        @click.prevent="submit"
      >
        Edit
      </button>
      <button
        class="btn btn-secondary me-2"
        @click.prevent="goToPageList"
      >
        Cancel
      </button>
      <button
        class="btn btn-danger"
        @click.prevent="delPage"
      >
        Delete
      </button>
    </div>
  </form>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import { inject, ref, computed } from 'vue';
  import { useStore } from 'vuex'
  
  const router = useRouter()
  const store = useStore()
  const { index } = defineProps(['index'])
  const page = ref({})
  
  const pageGetter = computed(() => store.getters['pages/getSinglePage'](index)).value
  // const pageGetter = store.getters['pages/getSinglePage'](index)
  page.value = {...pageGetter, link: { ...pageGetter.link}}
  
  const bus  = inject('$bus')

  function submit() {
    store.dispatch('pages/editPage', {index, page: page.value})
    // bus.$emit('page-updated')
    goToPageList()
  }

  function delPage() {
    store.dispatch('pages/delPage', {index})
    // bus.$emit('page-deleted')
    goToPageList()
  }

  function goToPageList() {
    router.push({path: `/pages`})
  }
</script>