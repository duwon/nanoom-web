<template>
  <div>
    <RecordeList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RecordeList from 'src/components/bible/RecordeList.vue'

export default defineComponent({
  name: 'BibleWritePage',
  components: {
    RecordeList
  },
  setup () {
    return {
    }
  },
  data () {
    return {
    }
  }
})
</script>
