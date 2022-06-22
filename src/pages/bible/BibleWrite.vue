<template>
  <div>
    <RecordeWrite />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RecordeWrite from 'src/components/bible/RecordeWrite.vue'

export default defineComponent({
  name: 'BibleWritePage',
  components: {
    RecordeWrite
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
