<template>
  <div class="shadow-5 q-mt-md">
    <slide />
  </div>

  <div class="q-mt-xl text-bold text-h5">
    SERMON
  </div>
  <div class="shadow-5  q-mt-md">
    <sermon />
  </div>

  <div class="q-mt-xl text-bold text-h5">
    LOCATION
  </div>
  <div class="shadow-5 q-mt-md">
    <location />
  </div>

  <q-page
    padding
    class="text-h5 q-ma-lg"
  >
    나눔의 교회의 홈페이지 방문을 환영합니다.
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import slide from 'src/components/SlideComponent.vue'
import sermon from 'src/components/youtube/List.vue'
import location from 'src/components/DaumMapComponent.vue'

export default defineComponent({
  name: 'TestPage',
  components: {
    slide,
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
  .page {
    width: 1024px;
  }
  input {
  font-size:20px;
  }
  .orange {
  color: orange;
  }
  .red {
  color: red;
  }
  .blue {
  color: blue;
  }
  .not-good {
  text-decoration: line-through;
  }

</style>
