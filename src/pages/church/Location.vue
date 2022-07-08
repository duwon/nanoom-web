<template>
  <div class="q-ma-xl text-h3 text-bold text-center col-12">
    오시는 길
  </div>

  <div class="q-mt-xl col-md-7 col-sm-10 col-xs-12">
    약도
  </div>

  <div class="q-mt-xl col-md-7 col-sm-10 col-xs-12">
    주차
  </div>

  <div class="q-mt-xl col-md-7 col-sm-10 col-xs-12">
    <location />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import location from 'src/components/DaumMapComponent.vue'

export default defineComponent({
  name: 'LocationPage',
  components: {
    location
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
