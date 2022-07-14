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

  <div class="q-mt-xl bg-section full-width row justify-center">
    <div class="col-md-7 col-sm-10 col-xs-11">
      <div class="q-col-gutter-sm row items-start justify-center">
        <q-btn
          v-for="list in banner"
          :key="list.name"
          class="col-md-2 col-sm-3 col-xs-4"
          :to="list.link"
          flat
        >
          <q-img
            :src="list.img"
          />
          <div
            class="q-pt-sm text-center banner-font"
            style="font-size:20px"
          >
            {{ list.name }}
          </div>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import slide from 'src/components/SlideComponent.vue'
import broadcast from 'src/components/youtube/Broadcast.vue'
import sermon from 'src/components/youtube/PlaylistSermon.vue'

import { useRouter } from 'vue-router'

const banner = [
  { name: '교회소개', img: require('../../assets/images/banner/church.png'), des: '..', link: 'about' },
  { name: '예배시간', img: require('../../assets/images/banner/bible.png'), des: '예배를 통한 회복이 있는 교회..', link: 'worshiptime' },
  { name: '담임목사', img: require('../../assets/images/banner/teacher.png'), des: '..', link: '/greeting' },
  { name: '섬기는분', img: require('../../assets/images/banner/prayer.png'), des: '..', link: '/people' },
  { name: '주일학교', img: require('../../assets/images/banner/children.png'), des: '..', link: '/edu/children' },
  { name: '오시는길', img: require('../../assets/images/banner/search.png'), des: '..', link: '/edu/location' }
]

export default defineComponent({
  name: 'TestPage',
  components: {
    slide,
    broadcast,
    sermon

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
  background: #333 url('../../assets/images/banner/wheat-g7645581f9_1920.jpg') 50% 0 no-repeat fixed

</style>
