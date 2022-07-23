<template>
  <div class="q-pa-md q-gutter-sm">
    <q-card
      class="q-pa-xs text-center"
      style="max-width: 100px"
    >
      {{ category }}
    </q-card>
    <q-input
      v-model="subject"
      filled
      label="제목"
      lazy-rules
      :rules="[ ruleTitle ]"
    />
    <q-input
      v-model="contents"
      filled
      type="textarea"
      label="내용"
      lazy-rules
      class="mobile-only"
    />

    <Editor
      @update="editorUpdated"
    />

    <div>
      <q-btn
        label="쓰기"
        type="submit"
        color="primary"
        @click="onSubmit"
      />
      <q-btn
        label="취소"
        type="cancel"
        color="primary"
        flat
        class="q-ml-sm"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { insertBoardAPI } from 'src/api/board'
import Editor from './editor/EditorComponents.vue'

export default defineComponent({
  name: 'UserListPage',
  components: {
    Editor
  },
  setup () {
    const router = useRouter()
    const category = ref()
    const subject = ref('')
    const contents = ref('')

    return {
      subject,
      contents,
      category,
      ruleTitle,

      async onSubmit () {
        // contents?.value = editor.value?.getHTML()
        insertBoardAPI(category.value, {
          subject: subject.value,
          contents: contents.value
        })
          .then((response) => {
            // 응답 처리
            console.log(response.data.results)
            router.push('/board/' + category.value)
          })
          .catch((error) => {
            // 예외 처리
            console.log(error)
          })
      },

      editorUpdated (editorContent: string) {
        contents.value = editorContent
      }

    }
  },
  created () {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.category = this.$route.params.category
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

<style lang="sass" scoped>

</style>
