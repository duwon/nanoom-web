<template>
  <div
    v-for="item in RecordeList"
    :key="item.id"
    class="q-pt-sm q-gutter-sm"
  >
    <q-btn
      unelevated
      rounded
      color="primary"
    >
      {{ item.data().title }}

      <PlayAudio
        :audio-src-url="date.formatDate(item.data().createdAt, 'YYYYMMDD') + '/' + item.data().savedFilename"
        :size-small="true"
      />
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { date } from 'quasar'
import { QueryDocumentSnapshot } from 'firebase/firestore'
import { BibleRecorde } from 'src/models/Bible'
import PlayAudio from './PlayAudio.vue'

const props = defineProps<{
  items: QueryDocumentSnapshot<BibleRecorde[]>
}>()

const RecordeList = computed(() => props.items)

//   <q-dialog
//     v-model="dialogAudio"
//     full-width
//   >
//     <q-card>
//       <q-card-section>
//         <div class="text-bold text-center">
//           {{ item.data().title }}
//         </div>
//       </q-card-section>
//       <q-card-section class="q-pa-none">
//         <PlayAudio
//           :audio-src-url="date.formatDate(item.data().createdAt, 'YYYYMMDD') + '/' + item.data().savedFilename"
//         />
//       </q-card-section>
//     </q-card>
//   </q-dialog>
</script>
