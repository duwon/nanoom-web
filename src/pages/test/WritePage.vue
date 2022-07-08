
<script lang="ts">
import { defineComponent } from 'vue'
import PostWriteComponent from 'src/components/board/PostWriteComponent.vue'

export default defineComponent({
  name: 'PostWritePage',
  components: { PostWriteComponent },
  setup () {
    return { }
  }
})
</script>

<template>
  <q-page padding>
    <PostWriteComponent />
  </q-page>
</template>
