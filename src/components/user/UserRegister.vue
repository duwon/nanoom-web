<template>
  <q-form
    v-if="!nanoomUser && firebaseUser"
    class="q-gutter-md"
    @submit="addData"
  >
    <q-card>
      <q-card-section class="bg-teal text-white">
        <div class="text-h5 q-pb-md">
          회원가입
        </div>
        <div class="text-subtitle2">
          이름과 직분을 입력하세요.
        </div>
      </q-card-section>
      <q-input
        v-model="userName"
        filled
        label=" 이름"
        hint="이름을 입력하세요"
        lazy-rules
        :rules="[ ruleTitle ]"
        class="q-pa-md"
      />
      <q-card-section class="row">
        <q-select
          v-model="userTitle"
          filled
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          :options="userTitleOption"
          label="직분"
          hint="직분을 선택하세요"
          new-value-mode="add"
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
      </q-card-section>

      <q-input
        v-model="userNickname"
        filled
        label=" 닉네임"
        lazy-rules
        :rules="[ ruleTitle ]"
        class="q-pa-md"
        readonly
      />

      <q-input
        v-model="userEmail"
        filled
        label=" E-mail"
        lazy-rules
        :rules="[ ruleTitle ]"
        class="q-pa-md"
        readonly
      />
      <q-input
        v-model="userPhoneNumber"
        filled
        label=" 전화번호"
        lazy-rules
        class="q-pa-md"
      />

      <q-card-actions>
        <q-space />
        <div>
          <q-btn
            label="회원가입"
            type="submit"
            color="primary"
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-form>

  <div
    v-if="nanoomUser"
    class="q-ma-md"
  >
    <q-card class="my-card">
      <q-card-section class="bg-teal text-white">
        <div class="text-h5 q-pb-md">
          회원가입
        </div>
        <div class="text-subtitle2">
          이미 나눔의교회 교인입니다. 다른 페이지로 이동하세요.
        </div>
      </q-card-section>
    </q-card>
  </div>

  <div
    v-if="!firebaseUser"
    class="q-ma-md"
  >
    <q-card class="my-card">
      <q-card-section class="bg-teal text-white">
        <div class="text-h5 q-pb-md">
          회원가입
        </div>
        <div class="text-subtitle2">
          구글 인증을 사용합니다. <br>아래의 링크를 통해 구글 인증을 진행하세요.
        </div>
      </q-card-section>

      <q-card-actions
        vertical
        align="center"
      >
        <q-btn
          flat
          @click="signInWithRedirect(auth, provider)"
        >
          <img src="https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png">
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script defalt lang="ts">
import { ref, defineComponent } from 'vue'
import { QueryDocumentSnapshot } from 'firebase/firestore'
import { firebaseUser, isSigned, useAuth, nanoomUser } from 'src/composables/useAuth'
import { UserList, getUser, addUser } from 'src/models/User'
import { useRouter } from 'vue-router'

import { auth } from 'src/boot/firebase'
import {
  GoogleAuthProvider, signInWithRedirect
} from 'firebase/auth'

const stringOptions = [
  '교역자',
  '장로',
  '안수집사',
  '권사',
  '피택 안수집사',
  '피택 권사',
  '서리집사',
  '평신도',
  '기타'
]
export default defineComponent({
  name: 'UserRegisterComponent',
  components: { },
  setup () {
    // 변수 정의
    const users = ref<QueryDocumentSnapshot<UserList>[]>([])
    const oAuthUser = ref(firebaseUser)
    const userTitleOption = ref(stringOptions)
    const router = useRouter()

    const userName = ref('')
    const userTitle = ref('')
    const userNickname = ref(firebaseUser.value?.displayName)
    const userEmail = ref(firebaseUser.value?.email)
    const userPhoneNumber = ref(firebaseUser.value?.phoneNumber)

    useAuth()
    const provider = new GoogleAuthProvider()

    return {
      // 리턴 할 변수
      users,
      userName,
      userTitle,
      userNickname,
      userEmail,
      userPhoneNumber,
      isSigned,
      userTitleOption,
      auth,
      provider,
      signInWithRedirect,
      firebaseUser,
      nanoomUser,

      // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-unused-vars
      filterFn (val:string, update:Function, abort:Function) {
        update(() => {
          userTitleOption.value = stringOptions.filter(v => v.search(val) > -1)
          console.log(val)
        })
      },
      async getData () {
      // console.log('User Info', firebaseUser)

        if (oAuthUser.value !== null) {
          const querySnapshot = await getUser(oAuthUser.value.email || '')
          users.value = querySnapshot.docs
          console.log(querySnapshot, querySnapshot.docs)
        }
      },
      async addData () {
        addUser(new UserList(userName.value, userTitle.value, userNickname.value || '', userEmail.value || '', userPhoneNumber.value || ''))
        router.push('/bible/list')
      },

      async userCheck () {
        console.log('user Check')
      },

      ruleTitle (val: string) {
        if ((val && val.length > 0) || (val === '글자를 입력하세요')) {
          return true
        } else {
          return false
        }
      }

    }
  },
  watch: {
    firebaseUser: function (newVal) {
      if (newVal) {
        // this.userCheck() }
        this.userNickname = firebaseUser.value?.displayName
        this.userEmail = firebaseUser.value?.email
        this.userPhoneNumber = firebaseUser.value?.phoneNumber
      }
    }
  }
})
</script>
