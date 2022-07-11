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
import { useRouter } from 'vue-router'

const banner = [
  { name: '교회소개', img: 'http://placeimg.com/100/100/any', des: '..', link: 'about' },
  { name: '예배시간', img: 'http://placeimg.com/101/101/any', des: '예배를 통한 회복이 있는 교회..', link: 'worshiptime' },
  { name: '담임목사', img: 'http://placeimg.com/102/102/any', des: '..', link: '' },
  { name: '섬기는 분', img: 'http://placeimg.com/103/103/any', des: '..', link: '' },
  { name: '주일학교', img: 'http://placeimg.com/104/104/any', des: '..', link: '' }
]

export default defineComponent({
  name: 'TestPage',
  components: {
    slide,
    broadcast,
    sermon,
    location
  },
  setup () {
    const router = useRouter()
    return {
      banner,
      linkTo (linkUrl:string) {
        router.push(linkUrl)
      }
    }
  },
  data () {
    return {
    }
  }
})
</script>

<style lang="sass" scoped>
@import url(//fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap)

$banner-size: 400

@media (min-width:320px) and (max-width:768px)
  $banner-size: (map-get($sizes, "sm") - 0.02) !default

.banner-box
  background-color: grey
  min-width: 200px
  margin-bottom: 1px

.banner-font
  font-family: 'Black Han Sans', sans-serif
  font-size: 2rem
  color: white

.bg-section
  padding: 100px 0px 50px 0px
  position: relative
  background: #333 url('https://placeimg.com/2000/1000/nature') 50% 0 no-repeat fixed

</style>
