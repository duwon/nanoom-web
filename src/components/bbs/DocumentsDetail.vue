
<template>
  <div class="q-gutter-md">
    <div class="row">
      <q-card
        class="q-pa-sm text-center self-center"
        style="min-width: 100px"
      >
        {{ documents.category }}
      </q-card>
      <q-space />
      <q-btn
        label="수정"
        type="modify"
        color="primary"
        @click="onModify"
      />
    </div>
    <div class="row items-center">
      <div class="q-pa-xs">
        <span class="text-h6 text-bold">{{ documents.subject }}</span>&nbsp;&nbsp;
        <span class="text-body1 text-orange-7">{{ documents.comments.length }}</span>
      </div>
      <q-space />
      <div class="q-pa-xs text-subtitle2 text-bold">
        <span class="q-mr-sm"> {{ date.formatDate(documents.created, 'YY-MM-DD HH:mm:ss') }} </span>
        <span class="q-mr-sm"> {{ documents.writer.displayName }} </span>
        <span> <q-icon name="mdi-eye" /> {{ documents.hits }} </span>
      </div>
    </div>
    <q-card>
      <q-card-section>
        <Editor
          :read-only="true"
          :initial-content="documents.contents"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { getBoardDetailAPI } from 'src/api/board'
import Editor from './editor/EditorComponents.vue'
import { date } from 'quasar'

export default defineComponent({
  name: 'UserListPage',
  components: {
    Editor
  },
  props: {
    id: {
      type: String,
      default: '62d910d08b49518cf595cfd4'
    }
  },
  setup () {
    const category = ref()
    const subject = ref('')
    const contents = ref('')
    // const _id = ref('62d910d08b49518cf595cfd4')
    const documents = ref({
      category: '',
      notice: false,
      group: '',
      writer: {
        email: '',
        displayName: ''
      },
      hits: 0,
      isComments: false,
      comments: [],
      subject: '',
      contents: '',
      isAttachment: false,
      attachment: [],
      created: Date.now
    })

    return {
      // _id,
      date,
      subject,
      contents,
      category,
      ruleTitle,
      documents,

      onModify () {
        console.log('modify')
      }

    }
  },
  created () {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.id,
      () => {
        getBoardDetailAPI(this.id, {})
          .then((response) => {
          // 응답 처리
            this.documents = response.data.results[0]
          })
          .catch((error) => {
          // 예외 처리
            console.log(error)
          })
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  }
})

function ruleTitle (val: string) {
  if ((val && val.length > 0) || (val === '글자를 입력하세요')) {
    return true
  } else {
    return false
  }
}
</script>
