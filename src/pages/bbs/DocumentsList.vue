<template>
  <DocumentsList />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import DocumentsList from 'src/components/bbs/DocumentsList.vue'

export default defineComponent({
  name: 'AdminIndexPage',
  components: {
    DocumentsList
  },
  setup () {
    return {
    }
  }
})

</script>

<style lang="sass" scoped>

</style>
