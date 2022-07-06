<template>
  <q-page class="flex q-pa-md">
    Welcome Home {{ user }} <br> {{ email }}
    <q-space />
    <div>
      <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md"
        size="md"
        label="Logout"
        color="primary"
        @click="logout"
      />
    </div>
  </q-page>
</template>

<script>
import { auth } from 'src/boot/firebase'
import {
  onAuthStateChanged,
  signOut
} from 'firebase/auth'

export default {
  name: 'AuthHome',
  data () {
    return {
      user: '',
      email: ''
    }
  },
  created () {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.user = user.displayName
        this.email = user.email
        console.log('page', user.email)
      } else {
        console.log('user name is null')
      }
    })
  },
  methods: {
    logout () {
      signOut(auth)
      this.$router.push('/test/')
        .then(() => {
          this.$q.notify({ message: 'Sign Out Success.' })
        })
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>

</style>
