<template>
  <div
    v-if="videoLive.online.value"
  >
    <q-video
      :ratio="16/9"
      :src="'https://www.youtube.com/embed/' + videoLive.Id.value"
    />
  </div>
</template>

<script defalt lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import youtube from 'src/config/youtubeconfig'

export default defineComponent({
  name: 'YoutubeListSermon',
  components: { },
  setup () {
    const videoLive = ({
      online: ref(false),
      Id: ref('')
    })

    onMounted(() => {
      const newUrl = youtube.url + 'search?part=snippet&order=date&channelId=' + youtube.channelId + '&key=' + youtube.key // newUrl 수정
      fetch(newUrl, { // fetch함수를 통한 비동기 통신
        method: 'GET'
      })
        .then(res => res.json()).then((res2) => { // json()을 통해 사용 가능한 데이터로 변환
          if (res2.items[0].snippet.liveBroadcastContent === 'live') { // 생방송 중인 데이터가 있으면
            videoLive.online.value = true
            videoLive.Id.value = res2.items[0].id.videoId
          }
        })
    })

    return {
      videoLive
    }
  }
})
</script>
