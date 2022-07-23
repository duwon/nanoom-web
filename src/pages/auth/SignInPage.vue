<template>
  <div>
    <q-form
      class="q-gutter-md"
      @submit="addUser"
    >
      <q-card>
        <q-card-section class="bg-teal text-white">
          <div class="text-h5 q-pb-md">
            회원가입
          </div>
        </q-card-section>
        <q-card-section>
          <q-input
            v-model="userEmail"
            filled
            label=" E-mail"
            lazy-rules
            :rules="[ ruleTitle ]"
            class="q-pa-xs"
          />
          <q-input
            v-model="userEmail"
            filled
            label=" 비밀번호"
            lazy-rules
            :rules="[ ruleTitle ]"
            class="q-pa-xs"
          />
          <q-input
            v-model="userEmail"
            filled
            label=" 비밀번호 확인"
            lazy-rules
            :rules="[ ruleTitle ]"
            class="q-pa-xs"
          />
          <q-input
            v-model="userName"
            filled
            label=" 이름"

            lazy-rules
            :rules="[ ruleTitle ]"
            class="q-pa-xs"
          />
          <q-input
            v-model="userPhoneNumber"
            filled
            label=" 전화번호"
            hint="### - #### - ####"
            fill-mask
            lazy-rules
            class="q-pa-xs"
          />
        </q-card-section>
        <q-card-section>
          <q-select
            v-model="userTitle"
            filled
            use-input
            hide-selected
            fill-input
            input-debounce="0"
            :options="userTitleOption"
            label="직분"

            new-value-mode="add"
            :rules="[ ruleTitle ]"
            class="q-pa-xs"
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
        </q-card-section>

        <q-card-actions class="q-pa-md">
          <q-btn
            label="회원가입"
            type="submit"
            color="primary"
            class="full-width q-pa-md text-h6"
          />
        </q-card-actions>
      </q-card>
    </q-form>
  </div>
</template>

<script defalt lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

const stringOptions = [
  '미등록',
  '교역자',
  '장로',
  '안수집사',
  '권사',
  '서리집사',
  '평신도'
]

export default defineComponent({
  name: 'SignInPage',
  components: {

  },
  setup () {
    const userTitleOption = ref(stringOptions)
    const router = useRouter()

    const userName = ref('')
    const userTitle = ref('')
    const userNickname = ref('')
    const userEmail = ref('')
    const userPhoneNumber = ref('')
    return {
      userTitleOption,
      userName,
      userTitle,
      userNickname,
      userEmail,
      userPhoneNumber,

      async addUser () {
        console.log('addUser')
        router.push('/bible/list')
      },

      ruleTitle (val: string) {
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
