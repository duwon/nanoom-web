<template>
  <q-item-label>
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
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { directUrl } from 'src/boot/fileserver'

defineProps<{
  audioSrcUrl:string
}>()

</script>
