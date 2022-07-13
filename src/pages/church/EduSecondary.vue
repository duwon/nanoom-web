<template>
  <div class="q-ma-xl text-h3 text-bold text-center col-12">
    {{ content.subject }}
  </div>
  <div
    class="text-h5 q-ma-lg col-md-7 col-sm-10 col-xs-12"
    style="max-width:1024px;"
  >
    <q-img
      :src="content.img"
      :ratio="16/9"
    >
      <div
        class="desktop-only bg-light-green-6 absolute-bottom text-center"
        style="font-size: 100%"
      >
        {{ content.slogan }}
      </div>
    </q-img>

    <div
      class="mobile-only q-mt-md bg-light-green-6 text-center"
      style="font-size: 100%"
    >
      {{ content.slogan }}
    </div>

    <div class="q-pa-md" />
    <div class="q-col-gutter-md justify-center">
      <div
        class="col-md-5 col-sm-5 col-xs-11 q-ma-md  text-weight-bold"
      >
        <q-icon
          name="mdi-book-clock"
          size="32px"
          color="secondary"
        />
        예배시간 : {{ content.time }}
      </div>

      <div class="col-md-5 col-sm-5 col-xs-11 q-ma-md text-weight-bold">
        <q-icon
          name="mdi-book-marker"
          size="32px"
          color="secondary"
        />
        장소 : {{ content.location }}
      </div>

      <div class="col-md-5 col-sm-5 col-xs-11 q-ma-md ">
        <div class="row text-weight-bold items-center">
          <q-icon
            name="mdi-account-tie"
            size="32px"
            color="primary"
          />
          섬기는 분
        </div>
        <div class="q-ml-lg text-h6 q-mt-sm">
          <div
            v-for="list in content.serving"
            :key="list.title"
          >
            {{ list.title }} : {{ list.name }}
          </div>
        </div>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="col-md-5 col-sm-5 col-xs-11 q-mb-md text-weight-bold">
        <q-icon
          name="photo"
          size="32px"
          color="orange-5"
        />
        활동 사진
      </div>
      <div class="q-col-gutter-md row items-start">
        <div
          v-for="photo in content.activityImg"
          :key="photo.title"
          class="col-md-4 col-sm-6 col-xs-11"
        >
          <q-img
            :src="photo.src"
            :ratio="4/3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const content = {
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

export default defineComponent({
  name: 'EducationPage',
  components: {

  },
  setup () {
    return {
      content
    }
  },
  data () {
    return {
    }
  }
})
</script>
