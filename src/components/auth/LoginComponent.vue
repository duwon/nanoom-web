<template>
  <q-form
    v-if="!userInfo"
    class="full-width col"
    @submit="signIn"
  >
    <q-input
      v-model="formData.email"
      outlined
      class="q-mb-md"
      type="email"
      label="Email"
    />
    <q-input
      v-model="formData.password"
      outlined
      class="q-mb-md"
      type="password"
      label="Password"
    />
    <q-btn
      type="submit"
      color="primary"
      label="로그인"
      class="full-width q-pa-md"
    />
  </q-form>
  <div v-else>
    <div class="text-center q-ma-md">
      안녕하세요. {{ userInfo.displayName }}님
    </div>
    <q-btn
      color="primary"
      label="로그아웃"
      class="full-width q-pa-md"
      @click="signOut"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
import { apiUrl } from 'src/boot/fileserver'
import axios from 'axios'

export default defineComponent({
  name: 'LoginComponent',
  components: {

  },
  setup () {
    const $q = useQuasar()

    const formData = ref({ email: '', password: '' })
    const userInfo = ref('')

    const checkToken = () => {
      if ($q.cookies.has('x-access-token')) {
        axios.get(apiUrl + '/auth/check', {
          headers: {
            'x-access-token': $q.cookies.get('x-access-token')
          }
        })
          .then((response) => {
            // 응답 처리
            userInfo.value = response.data.results
            // console.log(userInfo.value)
          })
          .catch((error) => {
            // 예외 처리
            console.log(error)
          })
      }
    }

    return {
      formData,
      userInfo,
      checkToken,

      async signIn () {
        // console.log(formData.value.email, formData.value.password)

        const data = JSON.stringify({
          email: formData.value.email,
          password: formData.value.password
        })

        const config = {
          method: 'post',
          url: apiUrl + '/auth/login',
          headers: {
            'Content-Type': 'application/json'
          },
          data
        }

        axios(config)
          .then(function (response) {
            $q.cookies.set('x-access-token', response.data.token, { expires: '1d', path: '/', domain: 'nanoom.org' })
            checkToken()
          })
          .catch(function (error) {
            console.log(error)
            $q.cookies.remove('x-access-token')
          })
      },

      signOut () {
        formData.value.email = ''
        formData.value.password = ''
        userInfo.value = ''
        $q.cookies.remove('x-access-token')
      }
    }
  },
  created () {
    this.checkToken()
  },
  methods: {

  }
})

</script>

<style lang="sass" scoped>

</style>
