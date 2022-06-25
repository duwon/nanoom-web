<template>
  <q-item-label v-if="!sizeSmall">
    <audio controls>
      <source
        :src="directUrl(audioSrcUrl)"
        type="audio/mpeg"
        preload="metadata"
        controls
      >
      브라우저가 오디오 재생을 지원하지 않습니다.
    </audio>
  </q-item-label>
  <q-item-label v-if="sizeSmall">
    <q-btn
      round
      color="orange"
      class="q-ml-lg"
      size="10px"
      @click="playAudio(audioSrcUrl)"
    >
      <q-icon
        v-if="!isPlayingAudio"
        name="mdi-play"
      />
      <q-icon
        v-if="isPlayingAudio"
        name="mdi-pause"
      />
    </q-btn>
    <q-btn
      v-if="isPlayingAudio"
      round
      color="orange"
      class="q-ml-sm"
      size="10px"
      @click="playAudioFirst"
    >
      <q-icon

        name="mdi-page-first"
      />
    </q-btn>
  </q-item-label>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { directUrl } from 'src/boot/fileserver'

defineProps<{
  audioSrcUrl:string,
  sizeSmall:boolean
}>()

const audioModel = new Audio('')
const isPlayingAudio = ref(false)

function playAudio (audioSrc:string) {
  if (audioModel.src !== directUrl(audioSrc)) {
    audioModel.src = directUrl(audioSrc)
    audioModel.load()
    audioModel.play()
    isPlayingAudio.value = true
  } else {
    if (isPlayingAudio.value) {
      audioModel.pause()
      isPlayingAudio.value = false
    } else {
      audioModel.play()
      isPlayingAudio.value = true
    }
  }
}

function playAudioFirst () {
  audioModel.load()
  audioModel.play()
}

</script>
