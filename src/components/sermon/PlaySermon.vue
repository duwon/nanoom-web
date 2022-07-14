<template>
  <div>
    <q-video
      :ratio="16/9"
      :src="'https://www.youtube.com/embed/' + videoSermon.Id.value"
    />
  </div>
</template>

<script defalt lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import youtube from 'src/config/youtubeconfig'

export default defineComponent({
  name: 'YoutubeBroadcast',
  components: { },
  setup () {
    const videoSermon = ({
      title: ref(''),
      Id: ref(''),
      des: ref('')
    })

    onMounted(() => {
      const newUrl = youtube.url + 'playlistItems?part=snippet&playlistId=' + youtube.playlistId + '&key=' + youtube.key + '&maxResults=50&pageToken=' // newUrl 수정
      fetch(newUrl, { // fetch함수를 통한 비동기 통신
        method: 'GET'
      })
        .then(res => res.json()).then((res2) => { // json()을 통해 사용 가능한 데이터로 변환
          videoSermon.title.value = res2.items[0].snippet.title
          videoSermon.Id.value = res2.items[0].snippet.resourceId.videoId
          videoSermon.des.value = res2.items[0].snippet.description
        })
    })

    return {
      videoSermon
    }
  }
})
</script>
