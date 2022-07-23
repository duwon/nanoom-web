<template>
  <DocumentsWrite />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import DocumentsWrite from 'src/components/bbs/DocumentsWrite.vue'

export default defineComponent({
  name: 'AdminIndexPage',
  components: {
    DocumentsWrite
  },
  setup () {
    return {
    }
  }
})

</script>

<style lang="sass" scoped>

</style>
