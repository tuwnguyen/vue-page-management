<template>
  {{ route.params.index }}
  {{ props.index }}
</template>

<script setup>
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const props = defineProps(['index'])
</script>