<template>
  <q-form
    class="q-gutter-md"
    @submit="onSubmit"
    @reset="onReset"
  >
    <q-card>
      <q-card-section>
        <q-input
          v-model="title"
          filled
          label="제목"
          hint="제목을 입력하세요"
          lazy-rules
          :rules="[ existRule ]"
        />

        <q-input
          v-model="content"
          filled
          type="textarea"
          label="내용"
          hint="내용을 입력하세요"
          lazy-rules
          :rules="[ existRule ]"
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

  <q-card class="">
    <editor />

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
</template>

<script defalt lang="ts">
import { ref, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import editor from './EditorComponent.vue'
import { Post, setPost } from 'src/models/Post'

export default defineComponent({
  name: 'PostWriteComponent',
  components: { editor },
  setup () {
    const title = ref('')
    const content = ref('')
    const router = useRouter()

    return {
      title,
      content,

      async onSubmit () {
        await setPost(new Post(title.value, content.value))
        await router.push('/list')
      },

      onReset () {
        title.value = ''
        content.value = ''
      },

      existRule (val: string) {
        if ((val && val.length > 0) || (val === '글자를 입력하세요')) {
          return true
        } else {
          return false
        }
      }
    }
  }
})
</script>
