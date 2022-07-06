<template>
  <div
    v-if="videoLive.online.value"
  >
    <q-video
      :ratio="16/9"
      :src="'https://www.youtube.com/embed/' + videoLive.Id.value"
    />
  </div>
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
  name: 'YoutubeList',
  components: { },
  setup () {
    const videoLive = ({
      online: ref(false),
      Id: ref('')
    })
    const videoSermon = ({
      title: ref(''),
      Id: ref(''),
      des: ref('')
    })

    onMounted(() => {
      let newUrl = youtube.url + 'playlistItems?part=snippet&playlistId=' + youtube.playlistId + '&key=' + youtube.key + '&maxResults=50&pageToken=' // newUrl 수정
      fetch(newUrl, { // fetch함수를 통한 비동기 통신
        method: 'GET'
      })
        .then(res => res.json()).then((res2) => { // json()을 통해 사용 가능한 데이터로 변환
          console.log(res2.items[0])
          videoSermon.title.value = res2.items[0].snippet.title
          videoSermon.Id.value = res2.items[0].snippet.resourceId.videoId
          videoSermon.des.value = res2.items[0].snippet.description
        })

      newUrl = youtube.url + 'search?part=snippet&order=date&channelId=' + youtube.channelId + '&key=' + youtube.key // newUrl 수정
      fetch(newUrl, { // fetch함수를 통한 비동기 통신
        method: 'GET'
      })
        .then(res => res.json()).then((res2) => { // json()을 통해 사용 가능한 데이터로 변환
          console.log(res2)
          if (res2.items[0].snippet.liveBroadcastContent === 'live') { // 생방송 중인 데이터가 있으면
            videoLive.online.value = true
            videoLive.Id.value = res2.items[0].id.videoId
          }
        })
    })

    return {
      videoLive,
      videoSermon,

      getSermonList () { // [테스트] 클릭시 호출 함수 -> 실제 API통신함
        const newUrl = youtube.url + 'playlistItems?part=snippet&playlistId=' + youtube.playlistId + '&key=' + youtube.key + '&maxResults=50&pageToken=' // newUrl 수정
        fetch(newUrl, { // fetch함수를 통한 비동기 통신
          method: 'GET'
        })
          .then(res => res.json()).then((res2) => { // json()을 통해 사용 가능한 데이터로 변환
            console.log(res2.items[0])
            videoSermon.title.value = res2.items[0].snippet.title
            videoSermon.Id.value = res2.items[0].snippet.resourceId.videoId
            videoSermon.des.value = res2.items[0].snippet.description
          })
      },

      getLiveList () { // [테스트] 클릭시 호출 함수 -> 실제 API통신함
        const newUrl = youtube.url + 'search?part=snippet&order=date&channelId=' + youtube.channelId + '&key=' + youtube.key // newUrl 수정
        fetch(newUrl, { // fetch함수를 통한 비동기 통신
          method: 'GET'
        })
          .then(res => res.json()).then((res2) => { // json()을 통해 사용 가능한 데이터로 변환
            console.log(res2)
            if (res2.items[0].snippet.liveBroadcastContent === 'live') { // 생방송 중인 데이터가 있으면
              videoLive.online.value = true
              videoLive.Id.value = res2.items[0].id.videoId

              // console.log(res2.items[0].snippet.title) // title 출력
              // console.log(videoLive.Id.value) // vidoeID 출력
            } else {
              // console.log('none')
            }
          })
        //        console.log(loadYoutubeList)
      }
    }
  }
})
</script>
