<template>
  <edu :edu="eduContent" />

  <div
    class="q-pa-md"
    style="max-width:1024px"
  >
    <div class="row justify-center q-gutter-sm">
      <q-intersection
        v-for="index in 60"
        :key="index"
        transition="scale"
        class="example-item"
      >
        <q-card class="q-ma-sm">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">

          <q-card-section>
            <div class="text-h6">
              Card #{{ index }}
            </div>
            <div class="text-subtitle2">
              by John Doe
            </div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import edu from 'src/components/church/EducationDisplay.vue'

const infant = {
  subject: '영아부',
  img: 'https://placeimg.com/1000/1000/nature',
  slogan: '표어 또는 주제 - 하나님깨 영광을 - ',
  time: '주일 오전 11시',
  location: '중1층 영아부실',
  serving: [
    { title: '지도', name: '송경미 전도사' },
    { title: '부장', name: '김진희 권사' },
    { title: '총무', name: '이선영 집사' },
    { title: '반주', name: '김정현 집사' }
  ],
  activityImg: [
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' }
  ]
}

const kindergarden = {
  subject: '유치부',
  img: 'https://placeimg.com/1000/1000/nature',
  slogan: '표어 또는 주제 - 하나님깨 영광을 - ',
  time: '주일 오전 11시',
  location: '4층 유치부실',
  serving: [
    { title: '지도', name: '정혜연 전도사' },
    { title: '부장', name: '홍은숙 권사' },
    { title: '총무', name: '구수진 집사' },
    { title: '서기', name: '김미애 집사' },
    { title: '반주', name: '나예은' }
  ],
  activityImg: [
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' }
  ]
}

const children = {
  subject: '아동부',
  img: 'https://placeimg.com/1000/1000/nature',
  slogan: '표어 또는 주제 - 하나님깨 영광을 - ',
  time: '주일 오전 11시',
  location: '4층 아동부실',
  serving: [
    { title: '지도', name: '유귀귀 목사' },
    { title: '부장', name: '최종범 안수집사' },
    { title: '총무', name: '박경미 집사' },
    { title: '회계', name: '김석정 집사' },
    { title: '서기', name: '한정옥 집사' },
    { title: '반주', name: '박재현 형제' }
  ],
  activityImg: [
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' }
  ]
}

const secondary = {
  subject: '중고등부',
  img: 'https://placeimg.com/1000/1000/nature',
  slogan: '표어 또는 주제 - 하나님깨 영광을 - ',
  time: '주일 오전 11시',
  location: '3층 중고등부실',
  serving: [
    { title: '지도', name: '송병주 전도사' },
    { title: '부장', name: '이명화 사모' },
    { title: '총무', name: '배경하 집사' },
    { title: '서기', name: '임미애 집사' },
    { title: '회계', name: '박연화 집사' },
    { title: '반주', name: '이예슬, 박서희, 이예찬' }
  ],
  activityImg: [
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' }
  ]
}

const youth = {
  subject: '청년부',
  img: 'https://placeimg.com/1000/1000/nature',
  slogan: '표어 또는 주제 - 하나님깨 영광을 - ',
  time: '주일 오후 1시',
  location: '본당',
  serving: [
    { title: '지도', name: '김상욱 목사' },
    { title: '부장', name: '이환 안수집사' },
    { title: '회장', name: '김윤정' },
    { title: '부회장', name: '유주영' },
    { title: '총무', name: '이상빈 정예원' }

  ],
  activityImg: [
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' }
  ]
}

export default defineComponent({
  components: {
    edu
  },
  setup () {
    const eduContent = ref(infant)
    return {
      eduContent
    }
  },
  created () {
    switch (this.$route.params.id) {
      case 'infant':
        this.eduContent = infant
        break

      case 'kindergarden':
        this.eduContent = kindergarden
        break

      case 'children':
        this.eduContent = children
        break

      case 'secondary':
        this.eduContent = secondary
        break

      case 'youth':
        this.eduContent = youth
        break
    }
  }
})

</script>

<style lang="sass" scoped>
.example-item
  height: 290px
  width: 300px
</style>
