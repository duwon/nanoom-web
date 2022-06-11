<template>
  <div class="shadow-5">
    <q-carousel
      v-model="slide"
      animated
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        v-for="slidedata in slideData"
        :key="slidedata.title"
        :name="slidedata.title"
        :img-src="slidedata.img"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">
            {{ slidedata.title }}
          </div>
          <div class="text-subtitle1">
            {{ slidedata.subtitle }}
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
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
  >
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
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import sermon from 'src/components/SermonYoutubeComponet.vue'
import location from 'src/components/DaumMapComponent.vue'

export default defineComponent({
  name: 'TestPage',
  components: {
    sermon,
    location
  },
  setup () {
    return {
      slide: ref('first'),
      autoplay: ref(true)
    }
  },
  data () {
    return {
      animal: 'monkey',
      food: '바나나',
      imageSrc: 'https://placeimg.com/100/100/animal',
      googleURL: 'https://google.com',
      slideData: [
        { title: 'first', subtitle: 'Mountains', img: 'https://cdn.quasar.dev/img/mountains.jpg' },
        { title: 'second', subtitle: 'Famous City', img: 'https://cdn.quasar.dev/img/parallax1.jpg' },
        { title: 'third', subtitle: 'Famous Bridge', img: 'https://cdn.quasar.dev/img/parallax2.jpg' }
      ]
    }
  }
})
</script>

<style>
  app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
