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
<script setup>
  import { ref, inject, computed, watch } from 'vue';
  import { useStore } from "vuex"
  import { useRouter } from 'vue-router';
  
  const store = useStore()
  const bus = inject('$bus')
  const router = useRouter()

  const pageTitle = ref('')
  const content = ref('')
  const linkText = ref('')
  const published = ref(true)

  const isFormInValid = computed(() => !pageTitle.value || !content.value || !linkText.value)

  watch(pageTitle, (newTitle, oldTitle) => {
      if(linkText.value === oldTitle) {
        linkText.value = newTitle
      }
    }
  )
  function submitForm() {
    let page = {
      pageTitle: pageTitle.value,
      content: content.value,
      link: {
        text: linkText.value,
      },
      published: published.value,
    }
    store.dispatch('pages/createPage', {page})
    
    bus.$emit('page-created')
    router.push('/pages')
  }
</script>