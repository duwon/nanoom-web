<template>
  <q-form
    v-if="isSigned"
    class="q-pt-md"
    @submit="onSubmit"
    @reset="onReset"
  >
    <q-card>
      <q-card-section class="bg-primary text-white shadow-2 text-center text-h5">
        성경 읽기 올리기
      </q-card-section>
      <q-card-section class="row">
        <q-select
          v-model="sermonTitle"
          filled
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          :options="options"
          label="성경"
          hint="성경을 선택하세요"
          class="col-6"
          :rules="[ ruleTitle ]"
          @filter="filterFn"
        >
          <template #no-option>
            <q-item>
              <q-item-section class="text-grey">
                No results
              </q-item-section>
            </q-item>
          </template>
        </q-select>

        <q-input
          v-model="sermonChapter"
          filled
          label="장"
          hint="장을 입력하세요"
          lazy-rules
          :rules="[ ruleTitle ]"
          class="col-6  q-pl-sm"
        />
        <q-input
          v-model="content"
          filled
          type="textarea"
          label="메모"
          hint="내용을 입력하세요"
          lazy-rules
          class="col-12"
        />
      </q-card-section>
      <q-card-section>
        <q-file
          v-model="file"
          name="AudioFile"
          accept="audio/*"
          color="grey-3"
          outlined
          label-color="orange"
          label="성경 읽기 음성파일"
          max-file-size="50000000"
          :rules="[ ruleUplpadFile ]"
        >
          <template #append>
            <q-icon
              name="attachment"
              color="orange"
            />
          </template>
        </q-file>
        <q-linear-progress
          v-if="isUploading"
          indeterminate
        />
      </q-card-section>
      <q-card-actions>
        <q-space />
        <div>
          <q-btn
            label="Submit"
            type="submit"
            color="primary"
          />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-form>
  <q-page-sticky
    v-if="isSigned"
    position="bottom-right"
    :offset="[18, 18]"
  >
    <q-btn
      round
      color="green"
      icon="list"
      to="/bible/list"
    />
  </q-page-sticky>
  <div
    v-if="!isSigned"
    class="q-ma-md"
  >
    로그인 하세요.
  </div>
</template>

<script defalt lang="ts">
import { ref, defineComponent } from 'vue'
import { date } from 'quasar'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { BibleRecorde, setBibleRecorde } from 'src/models/Bible'
import { isSigned, nanoomUser } from 'src/composables/useAuth'
import { uploadUrl } from 'src/boot/fileserver'

const stringOptions = [
  '창세기',
  '출애굽기',
  '레위기',
  '민수기',
  '신명기',
  '여호수아서',
  '사사기',
  '룻기',
  '사무엘상',
  '사무엘하',
  '열왕기상',
  '열왕기하',
  '역대기상',
  '역대기하',
  '에스라서',
  '느헤미야서',
  '에스더서',
  '욥기',
  '시편',
  '잠언',
  '전도서',
  '아가',
  '이사야서',
  '예레미야서',
  '예레미야애가',
  '에스겔서',
  '다니엘서',
  '호세아서',
  '요엘서',
  '아모스서',
  '오바댜서',
  '요나서',
  '미가',
  '나훔서',
  '하박국서',
  '스바냐서',
  '학개서',
  '스가랴서',
  '말라기',
  '마태복음',
  '마가복음',
  '누가복음',
  '요한복음',
  '사도행전',
  '로마서',
  '고린도전서',
  '고린도후서',
  '갈라디아서',
  '에베소서',
  '빌립보서',
  '골로새서',
  '데살로니가전서',
  '데살로니가후서',
  '디모데전서',
  '디모데후서',
  '디도서',
  '빌레몬서',
  '히브리서',
  '야고보서',
  '베드로전서',
  '베드로후서',
  '요한1서',
  '요한2서',
  '요한3서',
  '유다서',
  '요한계시록'
]

export default defineComponent({
  name: 'RecordWriteComponent',
  components: { },
  setup () {
    const title = ref('')
    const content = ref('')
    const filename = ref('')
    const newFilename = ref('')
    const file = ref(null)
    const user = ref(nanoomUser)
    const router = useRouter()
    const options = ref(stringOptions)
    const sermonTitle = ref(null)
    const sermonChapter = ref('')
    const isUploading = ref(false)

    return {
      title,
      content,
      filename,
      newFilename,
      file,
      user,
      isSigned,
      sermonTitle,
      sermonChapter,
      options,
      uploadUrl,
      isUploading,

      // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-unused-vars
      filterFn (val:string, update:Function, abort:Function) {
        update(() => {
          options.value = stringOptions.filter(v => v.search(val) > -1)
          console.log(val)
        })
      },

      async onSubmit (evt: Event) {
        const formData = evt.target instanceof HTMLFormElement ? new FormData(evt.target) : new FormData()
        title.value = sermonTitle.value + ' ' + sermonChapter.value

        const files = formData.get('AudioFile')
        if (files instanceof File) {
          filename.value = files.name
        }

        isUploading.value = true
        await axios.post(uploadUrl + '/' + date.formatDate(Date(), 'YYYYMMDD'), formData, {

          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then((response) => {
            // 응답 처리
            // console.log(response.data.AudioFile)
            newFilename.value = response.data.AudioFile.newFilename
            setBibleRecorde(new BibleRecorde(user.value?.email || '', user.value?.name || '', title.value, content.value, filename.value, newFilename.value))
            router.push('/bible/list')
          })
          .catch((error) => {
            // 예외 처리
            isUploading.value = false
            console.log(error)
          })
      },

      onReset () {
        title.value = ''
        content.value = ''
      },

      ruleTitle (val: string) {
        if ((val && val.length > 0) || (val === '글자를 입력하세요')) {
          return true
        } else {
          return false
        }
      },

      ruleUplpadFile (val: File) {
        if (val && val.name.length > 4) {
          return true
        } else {
          return false
        }
      }
    }
  }
})
</script>
