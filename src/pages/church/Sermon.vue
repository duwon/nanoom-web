<template>
  <div class="q-ma-xl text-h3 text-bold text-center col-12">
    설교 영상
  </div>
  <div

    class="q-mt-xl col-md-7 col-sm-10 col-xs-12 "
    style="max-width: 1024px;"
  >
    <sermon />
  </div>

  <div
    v-if="false"
    class="q-mt-xl col-md-7 col-sm-10 col-xs-12 "
    style="max-width: 1024px;"
  >
    <div>
      <q-video
        :ratio="16/9"
        src="https://www.youtube.com/embed/sF3DtLStD6Q"
      />
    </div>

    <div class="q-col-gutter-sm row justify-center">
      <q-btn
        v-for="list in sermonList"
        :key="list.title"
        class="col-10"
      >
        {{ list.title }} - {{ list.preacher }}, {{ list.bible }}, {{ list.date }}
      </q-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import sermon from 'src/components/youtube/PlaylistSermon.vue'

const sermonList = [
  { title: '꿈대로 됩니다.', bible: '다니엘 7:13~22', preacher: '곽충환 목사', date: '2022-07-20', videoUrl: 'https://www.youtube.com/embed/sF3DtLStD6Q', youtubeId: 'sF3DtLStD6Q' },
  { title: '꿈대로 됩니다.', bible: '다니엘 7:13~22', preacher: '곽충환 목사', date: '2022-07-20', videoUrl: 'https://www.youtube.com/embed/sF3DtLStD6Q', youtubeId: 'sF3DtLStD6Q' },
  { title: '꿈대로 됩니다.', bible: '다니엘 7:13~22', preacher: '곽충환 목사', date: '2022-07-20', videoUrl: 'https://www.youtube.com/embed/sF3DtLStD6Q', youtubeId: 'sF3DtLStD6Q' },
  { title: '꿈대로 됩니다.', bible: '다니엘 7:13~22', preacher: '곽충환 목사', date: '2022-07-20', videoUrl: 'https://www.youtube.com/embed/sF3DtLStD6Q', youtubeId: 'sF3DtLStD6Q' },
  { title: '꿈대로 됩니다.', bible: '다니엘 7:13~22', preacher: '곽충환 목사', date: '2022-07-20', videoUrl: 'https://www.youtube.com/embed/sF3DtLStD6Q', youtubeId: 'sF3DtLStD6Q' },
  { title: '꿈대로 됩니다.', bible: '다니엘 7:13~22', preacher: '곽충환 목사', date: '2022-07-20', videoUrl: 'https://www.youtube.com/embed/sF3DtLStD6Q', youtubeId: 'sF3DtLStD6Q' },
  { title: '꿈대로 됩니다.', bible: '다니엘 7:13~22', preacher: '곽충환 목사', date: '2022-07-20', videoUrl: 'https://www.youtube.com/embed/sF3DtLStD6Q', youtubeId: 'sF3DtLStD6Q' },
  { title: '꿈대로 됩니다.', bible: '다니엘 7:13~22', preacher: '곽충환 목사', date: '2022-07-20', videoUrl: 'https://www.youtube.com/embed/sF3DtLStD6Q', youtubeId: 'sF3DtLStD6Q' },
  { title: '꿈대로 됩니다.', bible: '다니엘 7:13~22', preacher: '곽충환 목사', date: '2022-07-20', videoUrl: 'https://www.youtube.com/embed/sF3DtLStD6Q', youtubeId: 'sF3DtLStD6Q' },
  { title: '꿈대로 됩니다.', bible: '다니엘 7:13~22', preacher: '곽충환 목사', date: '2022-07-20', videoUrl: 'https://www.youtube.com/embed/sF3DtLStD6Q', youtubeId: 'sF3DtLStD6Q' }
]

export default defineComponent({
  name: 'SermonPage',
  components: {
    sermon
  },
  setup () {
    return {
      sermonList

    }
  },
  data () {
    return {
    }
  }
})
</script>
