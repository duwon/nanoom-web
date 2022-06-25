<template>
  <div v-if="displayItem">
    <q-item
      style="min-height: 80px, max-width: 350px"
    >
      <q-item-section>
        <q-item-label
          lines="1"
        >
          {{ recorde.title }}
        </q-item-label>
        <q-item-label
          caption
          lines="3"
        >
          {{ recorde.memo }}
        </q-item-label>
        <q-item-label
          caption
          lines="2"
        >
          {{ date.formatDate(recorde.createdAt, 'YYYY-MM-DD HH:mm:ss') }}
        </q-item-label>
        <q-item-label
          caption
        />
      </q-item-section>
      <q-item-section
        side
      >
        <q-btn
          round
          color="secondary"
          :href="downloadUrl(date.formatDate(recorde.createdAt, 'YYYYMMDD') , recorde.savedFilename, recorde.filename)"
        >
          <q-avatar
            icon="download"
            size="32px"
          />
        </q-btn>
      </q-item-section>
      <q-item-section
        side
      >
        <q-btn
          round
          color="primary"
          @click="confirm = true"
        >
          <q-avatar
            icon="delete"
            size="32px"
          />
        </q-btn>

        <q-dialog
          v-model="confirm"
          persistent
        >
          <q-card>
            <q-card-section class="row items-center">
              <q-avatar
                icon="mdi-delete"
                color="primary"
                text-color="white"
              />
              <span class="q-ml-sm">게시물을 삭제 할까요?</span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn
                v-close-popup
                flat
                label="예"
                color="primary"
                @click="deleteBible"
              />
              <q-btn
                v-close-popup
                flat
                label="아니오"
                color="primary"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-item-section>
    </q-item>
    <PlayAudio
      :audio-src-url="date.formatDate(recorde.createdAt, 'YYYYMMDD') + '/' + recorde.savedFilename"
    />
    <q-separator
      spaced
      inset
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, ref } from 'vue'
import { date } from 'quasar'
import { QueryDocumentSnapshot } from 'firebase/firestore'
import { BibleRecorde, deleteBibleRecord } from 'src/models/Bible'
import { downloadUrl } from 'src/boot/fileserver'
import PlayAudio from './PlayAudio.vue'

const props = defineProps<{
  item: QueryDocumentSnapshot<BibleRecorde>
}>()

const recorde = computed(() => props.item.data())

function deleteBible () {
  deleteBibleRecord(props.item.data())
    .then((response) => {
      // 응답 처리
      displayItem.value = false
      console.log(response)
    })
}

const confirm = ref(false)
const displayItem = ref(true)

</script>
