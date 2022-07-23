<template>
  <div
    class="q-mt-xl col-md-7 col-sm-10 col-xs-12"
    style="max-width: 720px"
  >
    <DocumentsDetail :id="documentsId" />
    <DocumentsList />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import DocumentsDetail from 'src/components/bbs/DocumentsDetail.vue'
import DocumentsList from 'src/components/bbs/DocumentsList.vue'

export default defineComponent({
  name: 'AdminIndexPage',
  components: {
    DocumentsList,
    DocumentsDetail
  },
  setup () {
    const documentsId = ref()
    return {
      documentsId
    }
  },
  created () {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.documentsId = this.$route.params.id
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  }
})

</script>

<style lang="sass" scoped>

</style>
