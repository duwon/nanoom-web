<template>
  <div class="shadow-5">
    <slide />
  </div>

  <br>
  <div class="shadow-5">
    <sermon />
  </div>

  <br>
  <div class="shadow-5">
    <location />
  </div>

  <q-page
    padding
    class="app"
  >
    <div>
      <h1> TEST PAGE </h1>
      <h2> {{ animal }} </h2>
      <h3> {{ animal }}은 {{ food }}을 좋아합니다.</h3>
      <img
        :src="imageSrc"
      >
      <hr>
      <input
        v-model="food"
        type="text"
      >
      <a
        :href="googleURL"
      >Google</a>
      <br>
      <h2 :class=" { red: food==='apple'}">
        원숭이는 {{ food }} 좋아한다.
      </h2>
      <h2 :class=" { blue: food==='rice'}">
        원숭이는 {{ food }} 좋아한다.
      </h2>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import slide from 'src/components/SlideComponent.vue'
import sermon from 'src/components/SermonYoutubeComponet.vue'
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
      animal: 'monkey',
      food: '바나나',
      imageSrc: 'https://placeimg.com/100/100/animal',
      googleURL: 'https://google.com'
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
