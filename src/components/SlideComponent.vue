<template>
  <q-carousel
    v-model="slide"
    animated
    navigation
    navigation-position="top"
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
        <div class="text-h3" />
        <div class="text-subtitle1">
          {{ slidedata.subtitle }}
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SlideComponent',
  components: {
  },
  setup () {
    return {
      slide: ref('first'),
      autoplay: ref(true)
    }
  },
  data () {
    return {
      slideData: [
        { title: 'first', subtitle: '말씀 선포', img: require('../assets/images/nanoom1.jpg') },
        { title: 'second', subtitle: '찬양', img: require('../assets/images/nanoom2.jpg') },
        { title: 'third', subtitle: '찬양', img: require('../assets/images/nanoom3.jpg') },
        { title: 'forth', subtitle: '체육대회', img: require('../assets/images/nanoom4.jpg') }
      ]
    }
  }
})
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding-bottom: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
