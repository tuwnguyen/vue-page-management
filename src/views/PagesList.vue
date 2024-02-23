<template>
  <h4>List pages</h4>
  <div class="text-end">
    <router-link 
      to="/pages/create"
      class="btn btn-primary btn-sm"
    >New Page</router-link>
  </div>
  <table class="table table-hover table-bordered">
    <thead>
      <tr>
        <th>Title</th>
        <th>Link Text</th>
        <th>Published?</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(page, index) in pages"
        :key="index"
        @click="goToPage(index)"
      >
        <td>{{ page.pageTitle }}</td>
        <td>{{ page.link.text }}</td>
        <td>{{ page.published ? 'Yes': 'No' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>

import { computed } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const pages = computed(() => store.getters['pages/pages']).value
    function goToPage(index) {
      router.push({path: `pages/${index}/edit`})
    }

    return {
      pages,
      goToPage,
    }
  },

}
</script>

<style scoped>
.table.table-hover tr:hover {
  cursor: pointer;
}
</style>