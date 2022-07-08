<template>
  <div class="shadow-5 q-mt-md col-12">
    <slide />
  </div>
  <div class="q-mt-xl col-md-7 col-sm-10 col-xs-12">
    <div
      class="shadow-5  q-mt-md"
    >
      <broadcast />
    </div>
  </div>

  <div class="q-mt-xl col-md-7 col-sm-10 col-xs-12">
    <div
      class=" text-bold text-h4"
    >
      SERMON
    </div>
    <div
      class="shadow-5  q-mt-md"
    >
      <sermon />
    </div>
  </div>

  <div class="q-mt-xl col-md-7 col-sm-10 col-xs-12">
    <div
      class="text-bold text-h4"
    >
      LOCATION
    </div>
    <div
      class="shadow-5 q-mt-md"
    >
      <location />
    </div>

    <div
      padding
      class="text-h5 q-ma-lg col-12 text-center q-pb-xl"
    >
      나눔의 교회의 홈페이지 방문을 환영합니다.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import slide from 'src/components/SlideComponent.vue'
import broadcast from 'src/components/youtube/Broadcast.vue'
import sermon from 'src/components/youtube/PlaylistSermon.vue'
import location from 'src/components/DaumMapComponent.vue'

export default defineComponent({
  name: 'TestPage',
  components: {
    slide,
    broadcast,
    sermon,
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

<style>
  .app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1024px
  }

</style>
