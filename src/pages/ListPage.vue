
<script lang="ts">
import { defineComponent } from 'vue'
import PostListcomponent from 'src/components/board/PostList.vue'

export default defineComponent({
  name: 'PostListePage',
  components: { PostListcomponent },
  setup () {
    return { }
  }
})
</script>

<template>
  <q-page padding>
    <PostListcomponent />
  </q-page>
</template>
